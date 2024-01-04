module HCTRA.Controller {
    //defines contoller for viewing a js rendered pdf file
    export class StorefrontPdfViewerController {
        static $inject = ["$window", "$scope","$timeout", "$uibModalInstance", "pdfHref"];

        readonly styleHeader = `
    @page {
        size: A4;   
        margin: 0cm;  

        @bottom-left {
            content: "";
            font-size: 0;
            margin: 0;
        }    

        @bottom-right {
            content: "";
            font-size: 0;
            margin: 0;
        }    

        @top-left {
            content: "";
            font-size: 0;
            margin: 0;
        }    

        @top-right {
            content: "";
            font-size: 0;
            margin: 0;
        }    
    }

    html, body, img {
        padding: 0;
    }

    img {
        display: block;
        page-break-before:avoid;
        page-break-after: avoid;
        page-break-inside:avoid; 
        margin: 0 auto;
    }
`;

        constructor(
            private $window: angular.IWindowService,
            private $scope: angular.IScope | any,
            private $timeout: angular.ITimeoutService,
            private $uibModalInstance: angular.ui.bootstrap.IModalInstanceService,
            private pdfHref: string
        ) {
            var maxAttempts = 15;
            var currentAttempt = 0;
            var pdfDataRaw: string = null;

            
            //placeholder loading message
            $scope.message = "Loading...";

            $scope.close = () => {
                $uibModalInstance.close();
            }

            //print pdf in new window
            $scope.print = () => {
                //only print if the raw pdf image data is loaded
                if (!pdfDataRaw) return;
                const header = this.styleHeader;
                var newWin = this.$window.open('', '');
                newWin.document.open();
                //insert raw image tags into new window to be printed
                const page = `
<!DOCTYPE html>
<html>
    <head>
        <meta http- equiv="X-UA-Compatible" content= "IE=Edge" />
        <style type="text/css" media= "print" > ${header} </style>
    </head>
    <body>${pdfDataRaw}</body>
</html>`;
                newWin.document.write(page);
                newWin.document.close();
                //wait a bit before trying to print, to ensure raw image tags have loaded
                const c = this;
                c.$timeout(500)
                    .then(() => newWin.print())
                    .then(() => c.$timeout(10000))
                    .then(() => {
                        if (!newWin.closed) {
                            newWin.close();
                        }
                    });
            }

            //passthrough errors from pdf renderer
            $scope.error = (e) => {
                if (angular.isDefined(e.status) && e.status >= 400 && currentAttempt < maxAttempts) {
                    //retry
                    currentAttempt++;
                    pdfDataRaw = null;
                    this.$timeout(() => $scope.pdfRequest = { url: pdfHref }, 1000);
                } else if (angular.isDefined(e.status) && e.status >= 400) {
                    $scope.message = "Could not load PDF document at this time.";
                }else {
                    $uibModalInstance.close(e);    
                }
            }

            //translate the raw rendered pdf pages into image tags and store into a string
            $scope.loaded = (pdfData: { width: number, height: number, data: string }[]) => {
                //width: 8.27 in;
                //max - height: 11.69 in;
                pdfDataRaw = pdfData.reduce((acc, d) => {
                    if (!d.width || !d.height) return acc + '';

                    let width, height;
                    let ratio = d.height / d.width;

                    if (ratio > Math.SQRT2) {// height is max
                        height = 1100;
                        width = 1100 / ratio;
                    } else if (ratio < Math.SQRT2 && ratio > Math.SQRT1_2) {
                        if (d.width > d.height) {
                            height = 850;
                            width = 850 * ratio;
                        } else {
                            width = 850;
                            height = 850 * ratio;
                        }
                    } else {// width is max
                        width = 1100;
                        height = 1100 / ratio;
                    }

                    width = (width | 0) / 100;
                    height = (height | 0) / 100;

                    return acc + `<img src="${d.data}" style="width:${width}in;height:${height}in;" />`;
                    
                }, "");
            }
            
            //variable to pass pdf location to pdf viewer directive
            $scope.pdfRequest = { url: pdfHref };
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontPdfViewerController", HCTRA.Controller.StorefrontPdfViewerController);
})();