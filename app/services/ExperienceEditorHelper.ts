module HCTRA.Service {

    type TemplateLoadStruct = { templateUrl: string, deferred: ng.IDeferred<any> };

    export interface IExperienceEditorHelper {

        isExperienceEditor: boolean;
    }

    export class ExperienceEditorHelper implements IExperienceEditorHelper {

        static readonly $inject: string[] = ['$rootScope', '$window'];
        private templateLoadStructs: TemplateLoadStruct[] = [];

        constructor(private $rootScope: ng.IRootScopeService, private $window: ng.IWindowService) {

        }

        public get isExperienceEditor(): boolean {

            return !!(<any>this.$window).Sitecore; // if the Sitecore global object exists, we're in Experience Editor
        }

        public onStateChangeStart = () => {

            if (this.isExperienceEditor) {

                let editingBoxElem: any = angular.element('#scWebEditRibbon').contents().find('span[data-sc-command=EnableEditing] > input');
                if (editingBoxElem) editingBoxElem = editingBoxElem[0];

                if (editingBoxElem && editingBoxElem.checked) {

                    editingBoxElem.click();
                }
            }
        }

        public signalResolution = (templateUrl: string) => {

            if (this.isExperienceEditor) {

                let foundIndex: number = (<any>this.templateLoadStructs).findIndex((u: TemplateLoadStruct) => u.templateUrl === templateUrl);

                if ((<any>Number).isInteger(foundIndex) && foundIndex !== -1) {

                    let templateLoadStruct = this.templateLoadStructs.splice(foundIndex, 1)[0];
                    templateLoadStruct.deferred.resolve();
                }
            }
        }

        public anchorTagInterceptor = () => {

            if (this.isExperienceEditor) {

                const anchorEvents = 'click dblclick keydown keypress keyup mousedown tap touchstart touchend'.replace(/(\S+)/g, "$1" + '.ExperienceEditor');

                angular.element(this.$window.document).on(<any>anchorEvents, 'a[href]', (ev) => {

                    const elem = angular.element(ev.target);
                    const href = elem.attr('href');

                    if (angular.isDefined(href) && !this.isExternalLink(href) && href.indexOf('#!') === -1) {

                        let superThing = this.$window.location.origin + this.$window.location.search + '#!' + href;
                        elem.attr('href', superThing);
                    }
                });
            }
        }

        //determine if url is outside orgin
        private isExternalLink(url) {
            //TODO: this needs to update to include api services once they are hosted outside of web project
            if (/^(http|https):\/\/.*/i.test(url)) {
                return !url.startsWith(this.$window.location.origin);
            } else {
                return false;
            }
        }
    }
}

(function () {

    "use strict";

    angular.module("HCTRAModule").service("experienceEditorHelper", HCTRA.Service.ExperienceEditorHelper);
}());