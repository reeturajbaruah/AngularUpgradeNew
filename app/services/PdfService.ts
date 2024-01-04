module HCTRA.Service {

    //contract for sending the resource information to the pdf service
    export interface IPdfRequest {
        //64bit encoded stream of data for a pdf
        data?: any;
        //location for getting pdf content
        url?: string;

        worker?: IPdfWorker;
    }

    export interface IPdfWorker {
        destroy(): void;
    }

    //contract for defining a viewport for rendering a pdf
    export interface IPdfViewPort {
        //pixel count for rendering height
        height: number;
        //pixel count for rendering width
        width: number;
    }

    //contract for defining a rendering context for a pdf
    export interface IPdfRenderContext {
        //rendering viewport
        viewport: IPdfViewPort;
        //html 2d canvas rendering context
        canvasContext: any;
    }

    //contract for interfacing with a pdf
    export interface IPdfDocument {
        //number of available pages
        numPages: number;

        //request a specific page
        getPage(num: number): angular.IPromise<IPdfPage>;


        destroy(): void;
    }

    //contract for interfacing with a specific page of a pdf
    export interface IPdfPage {
        //gets a viewport defined by the single page
        getViewport(obj: { scale: number }): IPdfViewPort;
        //render pdf page into the given context
        render(context: IPdfRenderContext): {promise: angular.IPromise<any>};
    }

    //define contract for interfacing with the pdf service
    export interface IPdfService {
        //request a document that can be rendered
        getDocument(params: IPdfRequest): angular.IPromise<IPdfDocument>;

        createWorker(): IPdfWorker;
    }

    //concrete class that wraps the globally defined PDFJS object
    export class PdfService implements IPdfService {
        static $inject = ["$window"];

        //internal refence to pdfjs
        pdfJs: any;

        constructor(private $window: angular.IWindowService) {
            if ('pdfjsLib' in $window) {
                this.pdfJs = $window["pdfjsLib"];
            } else if ('PDFJS' in $window) {
                this.pdfJs = $window["PDFJS"];
            }
        }

        getDocument = (params: IPdfRequest): angular.IPromise<IPdfDocument> => {
            return this.pdfJs.getDocument(params.url || params).promise;
        }

        createWorker() {
            return new this.pdfJs.PDFWorker('pdfWorker');
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .service("PdfService", HCTRA.Service.PdfService);
})();