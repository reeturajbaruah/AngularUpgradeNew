module HCTRA.Service {
    'use strict';

    export interface IFileDownloadService {
        downloadFile: (url: string, queryDict: { [k: string]: any }) => void;
        getUrl: (url: string, queryDict: { [k: string]: any }) => string;
        downloadPdf: (data: ArrayBuffer, fileName: string) => void;
        downloadExcel: (data: ArrayBuffer, fileName: string) => void;
        getFileNameFromHeader: (headers: ng.IHttpHeadersGetter) => string;
    }

    //Migrated to angular already common\services\downloadService
    //Use new DownloadService when considering migration
    export class FileDownloadService implements IFileDownloadService {

        static readonly $inject = ['$window', '$state', 'serverConstants', 'CurrentUser', '$document', '$timeout'];

        constructor(private $window: ng.IWindowService, private $state: ng.ui.IStateService, private serverConstants, private CurrentUser: HCTRA.Service.ICurrentUser, private $document: angular.IDocumentService, private $timeout: angular.ITimeoutService) {

        }

        public downloadFile = (url: string, queryDict: { [k: string]: any }) => {

            const apiUrl = this.getUrl(url, queryDict);

            if (this.CurrentUser.currentUserIsInSyncAcrossTabs()) {

                this.$window.open(apiUrl, '_blank');
            }
            else {

                location.reload();
            }
        }

        public getUrl = (url: string, queryDict: { [k: string]: any }) =>{
            const queryDictIsObject = angular.isObject(queryDict);

            const mandatoryQueries = {
                angularState: this.$state.current.name,
                clientVersion: this.serverConstants.currentlyDownloadedWebUiVersion
            };

            const fullQueryDict = queryDictIsObject ? angular.extend(queryDict, mandatoryQueries) as any : mandatoryQueries;

            const queryString: string = this.queryDictToString(fullQueryDict);

            return (url + '?' + queryString);
        }

        public downloadPdf = (data: ArrayBuffer, fileName: string) => {
            //pdf specification required for proper iOS download
            const file = new Blob([data], { type: 'application/pdf' });
            this.downloadBlob(file, fileName);
        };

        public downloadExcel = (data: ArrayBuffer, fileName: string) => {
            const file = new Blob([data], { type: 'application' });
            this.downloadBlob(file, fileName);
        }
        
        private downloadBlob = (file: Blob, fileName: string) => {
            if (navigator['msSaveOrOpenBlob']) {
                navigator['msSaveOrOpenBlob'](file, fileName);
            }
            else {
                const body = angular.element(this.$document[0].getElementsByTagName('body'));
                const fileURL = URL.createObjectURL(file);
                this.$timeout(() => {
                    const a = angular.element("<a></a>")[0] as HTMLAnchorElement;
                    a.href = fileURL;
                    a.download = fileName;
                    body.append(a);
                    a.click();
                    a.remove();
                }, 0);
            }
            
        };

        private queryDictToString = (queryDict: { [k: string]: object }): string => {

            const queryArray = [];

            for (const key in queryDict) {

                if (queryDict.hasOwnProperty(key)) {

                    let addString = key;
                    if (angular.isDefined(queryDict[key]) && queryDict[key] !== null) {

                        addString += "=" + queryDict[key].toString();
                    }

                    queryArray.push(addString);
                }
            }

            return queryArray.join('&');
        }

        public getFileNameFromHeader = (headers: ng.IHttpHeadersGetter) => {
            let fileName = "";
            const disposition = headers('Content-Disposition');
            if (disposition && disposition.indexOf('attachment') !== -1) {
                const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                const matches = filenameRegex.exec(disposition);
                if (matches != null && matches[1]) {
                    fileName = matches[1].replace(/['"]/g, '');
                }
            }
            return fileName;
        }
    } 
}

(function () {
    "use strict";
    angular.module("HCTRAModule").service("fileDownloadService", HCTRA.Service.FileDownloadService);
}());