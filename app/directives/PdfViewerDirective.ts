module HCTRA.Directive {
    import IPdfDocument = Service.IPdfDocument;
    import IPdfPage = Service.IPdfPage;

    //structure to track a rendered pdf page and it's index in the overall pdf document
    interface ICanvasInfo {
        index: number;
        canvas: HTMLCanvasElement;
        raw: string;
    }

    //directive for rendering a pdf inline onto a webpage
    export class PdfViewerDirective implements angular.IDirective {
        restrict = "A";
        scope = {
            pdfData: "=", //raw IPdfRequest object
            pdfLoaded: "=", //event called when pdf has loaded
            pdfError: "=" //event called if pdf rendering failed
        };
        
        constructor(
            private pdfService: Service.IPdfService,
            private $window: angular.IWindowService,
            private $q: angular.IQService
        ) { }

        static factory(): ng.IDirectiveFactory {
            const directive = (pdfService, $window, $q) => new PdfViewerDirective(pdfService, $window, $q);
            directive.$inject = ["PdfService", "$window", "$q"];
            return directive;
        }

        link = (scope: angular.IScope | any, element: angular.IAugmentedJQuery) => {          
            //watch when pdfData changes
            scope.$watch("pdfData", (oldVal, newVal: Service.IPdfRequest, innerScope: angular.IScope | any) => {
                if (!newVal) {
                    return;
                }
                //clear any previous renderings
                element.empty();

                if (angular.isUndefined(newVal.worker)) {
                    newVal.worker = this.pdfService.createWorker();
                }

                //get document
                this.pdfService.getDocument(newVal)
                    //render into element
                    .then((doc: IPdfDocument) => this.renderPdfDocument(doc, element))
                    .then((canvases: ICanvasInfo[]) => {
                        //if successful rendering, signal it with the generated data
                        if (innerScope.pdfLoaded) {
                            innerScope.pdfLoaded(canvases.map(c => {
                                return {
                                    width: c.canvas.width,
                                    height: c.canvas.height,
                                    data: c.raw
                                };
                            }));
                        }
                    })
                    //if something went wrong..
                    .catch((e) => {
                        //..attempt to signal it
                        if (innerScope.pdfError) {
                            innerScope.pdfError(e);
                        }
                        return this.$q.resolve([]);
                    })
                    .finally(() => {
                        if (newVal && newVal.worker) {
                            newVal.worker.destroy();
                        }
                    });
            });
        }

        //calculate pixel density of screen
        private backingScale = (ctx) => {
            const dpr = this.$window.devicePixelRatio || 1;
            const bsr = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;
            return dpr / bsr;
        }

        private renderPdfDocument = (pdfDocument: IPdfDocument, element: angular.IAugmentedJQuery): angular.IPromise<any> => {
            const promises = [];
            const width = element.width();

            //for each page..
            for (let pageNum = 0; pageNum < pdfDocument.numPages; pageNum++) {
                const index = pageNum + 1;
                //..get page..
                promises.push(pdfDocument.getPage(index)
                    .then((page: IPdfPage) => {

                        //..then build a canvas element
                        const canvas = this.$window.document.createElement("canvas");
                        //element.append(canvas);
                        const context = canvas.getContext('2d');
                        //set the proper scaling
                        const ratio = 2;
                        const viewPort = page.getViewport({scale: ratio});

                        const elmRatio = viewPort.width ? width / viewPort.width : 0;

                        //set dimensions
                        canvas.width = Math.floor(viewPort.width * ratio);
                        canvas.height = Math.floor(viewPort.height * ratio);
                        canvas.style.width = `${Math.floor(viewPort.width * elmRatio)}px`;
                        canvas.style.height = `${Math.floor(viewPort.height * elmRatio)}px`;
                        context.setTransform(ratio, 0, 0, ratio, 0, 0);

                        //and render: once for the visable elements, the other a raw high res for printing
                        return (page.render({ canvasContext: context, viewport: viewPort }).promise
                            //when rendered return rendered canvas of original index of page
                            .then(() => ({ index: index, canvas: canvas, raw: canvas.toDataURL() } as ICanvasInfo)));
                    }));
            }

            //wrap up all promises
            return this.$q.all(promises)
                //when all have finished rendering
                .then((canvases: ICanvasInfo[]) => {
                    //when correctly order them
                    canvases.sort((a: ICanvasInfo, b: ICanvasInfo) => a.index - b.index);
                    //append rendered canvas
                    canvases.forEach((c: ICanvasInfo) => element.append(c.canvas));
                    return canvases;
                })
                .finally(() => {
                    pdfDocument.destroy();
                });
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').directive("pdfViewer", HCTRA.Directive.PdfViewerDirective.factory());
})();