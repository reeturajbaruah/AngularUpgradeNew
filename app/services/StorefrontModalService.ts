module HCTRA.Service {

    interface IStorefrontModalNames {
        readonly StorefrontFinishAccountSetup: string;
        readonly StorefrontVehicalViolations: string;
        readonly StorefrontSuspendedWithVehicalViolations: string;
        readonly StorefrontINeedTo: string;
        readonly StorefrontDoSomethingElse: string;
        readonly StorefrontMaintenance: string;
        readonly StorefrontWorkitemComplete: string;
        readonly StorefrontAllWorkItemsComplete: string;
        readonly StorefrontWorkitemCompleteSignup: string;
        readonly StorefrontWorkitemCompleteGoToCsr: string;
        readonly StorefrontWorkitemCompleteCAVVE: string;
        readonly StorefrontInactivity: string;
        readonly StorefrontSeeCSR: string;
        readonly StorefrontPdfViewer: string;
        readonly StorefrontExternalTask: string;
        readonly StorefrontServiceInitFailed: string;
        readonly StorefrontSkippTaskMessage: string;
        readonly StorefrontIncompleteWorkitemsWhileSkipping: string;
        readonly StorefrontExitSession: string;
        readonly StorefrontCmsContent: string;
        readonly StorefrontNoViolationsFound: string;
        readonly StorefrontNoViolationsWithInvoiceFound: string;
    }

    interface IStorefrontModals {
        //show a 'i don't see what i need' modal
        iDontSeeWhatINeedMessage(goBackCallback: () => angular.IPromise<any>): angular.IPromise<any>;

        doMoreMessage(goBackCallback: () => angular.IPromise<any>): angular.IPromise<any>;

        //show the completion message for a given workitem
        showCompletionMessage(completedWorkItem: Model.WorkItem): angular.IPromise<Model.WorkItem>;

        //show a see csr type message modal
        showGotoCsr(): angular.IPromise<boolean>;

        //shows the pdf content
        showPdf(href: string): angular.IPromise<any>;

        //show current state as a modal
        showExternalTask(): angular.IPromise<any>;

        //show inactivity modal
        showInactivity(): angular.IPromise<any>;

        //shows a modal for application failed to init message
        failedToInitMessage(): angular.IPromise<any>;

        skipTaskMessage(): angular.IPromise<boolean>;

        skippedTasksMessage(workItem: Model.WorkItem): angular.IPromise<Model.WorkItem>;

        //shows a modal for exiting storefront
        exit(): angular.IPromise<any>;

        showVehicalViolationMessage(): angular.IPromise<any>;

        showVehicalViolationSuspendedAccountMessage(): angular.IPromise<any>;

        showCmsContent(state: angular.ui.IState, returnStateName: string);

        closeCmsContent();

        showStorefrontMaintenanceMode(): angular.IPromise<any>;

        finishAccountSetup(): angular.IPromise<any>;

        noViolationsFound(title: string, body: string): angular.IPromise<any>;
        noViolationsWithInvoiceFound(title: string, body: string): angular.IPromise<any>;
    }

    //defines contract of a modal builder object for chaining modal properties
    export interface IStorefrontModalBuilder {
        template(templateLocation: string): IStorefrontModalBuilder;
        controller(controllerDef: string | (() => any) | [string | (() => any)]): IStorefrontModalBuilder;
        inject(key: string, obj: any): IStorefrontModalBuilder;
        classNames(classNames: string[]): IStorefrontModalBuilder;
        actions(actions: { [key: string]: string } | angular.IPromise<{ [key: string]: string }>): IStorefrontModalBuilder;
        header(text: string | angular.IPromise<string>): IStorefrontModalBuilder;
        body(text: string | angular.IPromise<string>): IStorefrontModalBuilder;
        image(data: Model.ISitecoreMediaItem | angular.IPromise<Model.ISitecoreMediaItem>): IStorefrontModalBuilder;
        show<T>(isGeneric?: boolean): angular.IPromise<T>;
    }

    //defines contract for the storefront modal service
    export interface IStorefrontModalService extends IStorefrontModals {

        readonly modalNames: IStorefrontModalNames;

        isExternalTaskModalOpen(): boolean;
        closeExternalTaskModal();
        isMaintenanceModalOpen(): boolean;
        //close all open modals
        closeAll(dismiss?: boolean);

        closeByName(name: string, dismiss?: boolean);

        //sets all modal setting overrides for storefront
        setGlobalModalSettings();

        //restores all original settings before overrides were added for storefront
        restoreGlobalModalSettings();
    }

    //concrete service that implements the storefron modal service interface that wrapps the existing webisite modal service
    export class StorefrontModalService implements IStorefrontModalService, IStorefrontModals {

        //factor method of creating service
        static factory() {
            const service = (
                modalService: Service.IModalService,
                $q: angular.IQService,
                storefrontService: Storefront.Service.IStorefrontService,
                stateNames: Constant.IStateNames,
                $state: angular.ui.IStateService,
                $timeout: angular.ITimeoutService,
                routes: Constant.IRoutes,
                errorDisplayService: IErrorDisplayService,
                storefrontModalServiceModalNames: IStorefrontModalNames,
                storefrontMaterialDialogWrapper, 
                homeStates,
                cavveStates,
                vehiclesStates,
                addMissingInformationService
            ) =>
                new StorefrontModalService(
                    modalService,
                    $q,
                    storefrontService,
                    stateNames,
                    $state,
                    $timeout,
                    routes,
                    errorDisplayService,
                    storefrontModalServiceModalNames,
                    storefrontMaterialDialogWrapper,
                    homeStates,
                    cavveStates,
                    vehiclesStates,
                    addMissingInformationService
                );
            service.$inject =
                ["modalService", "$q", "StorefrontService", "stateNames",
                "$state", "$timeout", "routes", "errorDisplayService",
                "StorefrontModalServiceModalNames", "storefrontMaterialDialogWrapper", "homeStates", "cavveStates",
                "vehiclesStates",
                "addMissingInformationService"];
            return service;
        }

        constructor(
            private modalService: Service.IModalService,
            private $q: angular.IQService,
            private storefrontService: Storefront.Service.IStorefrontService,
            private stateNames: Constant.IStateNames,
            private $state: angular.ui.IStateService,
            private $timeout: angular.ITimeoutService,
            private routes: Constant.IRoutes,
            private errorDisplayService: Service.IErrorDisplayService,
            private storefrontModalServiceModalNames: IStorefrontModalNames,
            private storefrontMaterialDialogWrapper: { closeAll: () => void },
            private homeStates,
            private cavveStates,
            private vehiclesStates,
            private addMissingInformationService
        ) { }

        public get modalNames(): IStorefrontModalNames {
            return this.storefrontModalServiceModalNames;
        }

        public setGlobalModalSettings() {
            this.modalService.clearListeners();
            this.modalService.onOpening((evt, name, settings, textOptions) => this.onOpening(evt, name, settings, textOptions));
            this.modalService.onOpening(this.blockModalsInRestrictedState);
        }

        public restoreGlobalModalSettings() {
            this.modalService.resetSettings();
            this.modalService.onOpening(this.blockModalsInRestrictedState);
        }

        public create(name: string): IStorefrontModalBuilder {
            return new InternalStorefrontModalBuilder(name, this.modalService, this.$q);
        }

        private createWithGenericMediumModal(name: string): IStorefrontModalBuilder {
            return new InternalStorefrontModalBuilder(name, this.modalService, this.$q)
                .controller('StorefrontGenericPromptController')
                .classNames(['mediumModal', 'storefrontGenericPromptWindow']);
        }

        public isExternalTaskModalOpen(): boolean {
            return this.modalService.isModalOpen(this.modalNames.StorefrontExternalTask);
        }

        public closeExternalTaskModal() {
            this.modalService.closeByName(this.modalNames.StorefrontExternalTask);
        }

        public isMaintenanceModalOpen(): boolean {
            return this.modalService.isModalOpen(this.modalNames.StorefrontMaintenance);
        }

        public closeAll(dismiss?: boolean) {
            this.modalService.closeAll(dismiss);
            this.storefrontMaterialDialogWrapper.closeAll();
            this.errorDisplayService.clearToasts();
        }

        public closeByName(name: string, dismiss?: boolean) {
            this.modalService.closeByName(name, dismiss);
        }

        private getCmsContent(id: string): angular.IPromise<Model.SitecoreItem> {
            return this.storefrontService.getCmsItemById(id);
        }


        public finishAccountSetup(): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontfinishAccountSetupModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontFinishAccountSetup)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .actions({
                            "finish": response.buttons["FINISH"]
                        })
                        .header(response.Title)
                        .body(response.Message)
                        .show(true)
                        .then(() => {
                            const workItemId: number = Model.SelectedOptions.OACC;
                            return this.storefrontService.softReset()
                                .then(() => {
                                        this.storefrontService.insertWorkItem(workItemId);
                                        return this.storefrontService.startWorkItems();
                                    })
                                .then((state) => {
                                    return this.$state.go(state);
                                });
                        });
                });
        }


        public showVehicalViolationMessage(): angular.IPromise<any> {
            //remove any toasters that are opening or have just started...
            this.errorDisplayService.clearToasts();

            return this.storefrontService.getCmsItemById(this.routes.storefrontVehicleHasViolationModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontVehicalViolations)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                            "finish": response.buttons["FINISH"]
                        })
                        .header(response.Title)
                        .body(response.Message)
                        .show<string>(true)
                        .then(() => this.storefrontService.softReset())
                        .then(() => this.$state.go(this.stateNames.storefrontSurvey));
                });
        }

        public showVehicalViolationSuspendedAccountMessage(): angular.IPromise<any> {
            //remove any toasters that are opening or have just started...
            this.errorDisplayService.clearToasts();
            return this.storefrontService.getCmsItemById(this.routes.storefrontVehicleHasViolationSuspendedAccountModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontSuspendedWithVehicalViolations)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                            "finish": response.buttons["FINISH"],
                            "notFinished": response.buttons["NOTFINISHED"]
                        })
                        .header(response.Title)
                        .body(response.Message)
                        .show<string>(true)
                        .then((action: string) => {
                            if (action === "notFinished") {
                                return this.doMoreMessage(() => this.showVehicalViolationSuspendedAccountMessage());
                            }
                            return this.$state.go(this.stateNames.storefrontSurvey);
                        });
                });
        }

        public iDontSeeWhatINeedMessage(goBackCallback: () => angular.IPromise<any>): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontOtherOptionsModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontINeedTo)
                        .template("/app/templates/storefront/StorefrontINeedToTemplate.html")
                        .actions({
                            "talkToCsr": response.buttons["CSR"],
                            "fullSite": response.buttons["WEBSITE"],
                            "goback": response.buttons["TASKSELECTION"]
                        })
                        .header(response.Title)
                        .inject("showModalClose", true)
                        .inject("showGoBack", null)
                        .show<string>(true)
                        .then((action: string) => {
                            switch (action) {
                                case "talkToCsr":
                                    return this.showGotoCsr()
                                        .then((finished) => finished ? this.storefrontService.reset() : this.iDontSeeWhatINeedMessage(() => goBackCallback()));
                                case "fullSite":
                                    this.restoreGlobalModalSettings();
                                    this.storefrontService.fullSiteMode = true;
                                    return this.storefrontService
                                        .startNewSession()
                                        .then(() => this.$state.go(this.homeStates.Frame));
                                default:
                                    return goBackCallback ? goBackCallback() : this.$q.resolve();
                            }
                        });
                });
        }

        public doMoreMessage(goBackCallback: () => angular.IPromise<any>) {
            return this.storefrontService.getCmsItemById(this.routes.storefrontDoMoreModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontDoSomethingElse)
                        .template("/app/templates/storefront/StorefrontINeedToWithMoreTemplate.html")
                        .actions({
                            "anotherTask": response.buttons["ANOTHERTASK"],
                            "talkToCsr": response.buttons["CSR"],
                            "fullSite": response.buttons["FULLWEBSITE"],
                            "finish": response.buttons["FINISH"]
                        })
                        .header(response.Title)
                        .inject("showGoBack", response.buttons["BACK"])
                        .show<string>(true)
                        .then((action: string) => {
                            switch (action) {
                                case "anotherTask":
                                    this.modalService.closeAll();
                                    return this.storefrontService
                                        .softReset()
                                        .finally(() => this.$state.go(this.stateNames.storefrontSelection));
                                case "talkToCsr":
                                    return this.showGotoCsr()
                                        .then((finished) => {
                                            if (finished) {
                                                if (this.storefrontService.isActiveSession()) {
                                                    this.modalService.closeAll();
                                                    return this.$state.go(this.stateNames.storefrontSurvey);
                                                } else {
                                                    return this.storefrontService.reset();
                                                }
                                            } else {
                                                return this.doMoreMessage(() => goBackCallback());
                                            }

                                        });
                                case "fullSite":
                                    this.restoreGlobalModalSettings();
                                    this.storefrontService.fullSiteMode = true;
                                    this.modalService.closeAll();
                                    return this.$state.go(this.homeStates.Frame);
                                case "finish":
                                    if (this.storefrontService.isActiveSession()) {
                                        this.modalService.closeAll();
                                        return this.$state.go(this.stateNames.storefrontSurvey);
                                    } else {
                                        return this.storefrontService.reset();
                                    }
                                default:
                                    return goBackCallback ? goBackCallback() : this.$q.resolve();
                            }
                        });
                });
        }

        public showCompletionMessage(completedWorkItem: Model.WorkItem): angular.IPromise<Model.WorkItem> {
            const template = completedWorkItem && completedWorkItem.completionModal;
            let state: string = null;
            const completedItemInitState = this.storefrontService.getWorkItemInitState(completedWorkItem);
            if (this.storefrontService.hasIncompleteWorkItems()) {
                const item = this.storefrontService.currentWorkItem();
                state = this.storefrontService.getWorkItemInitState(item);
            }
            switch (template) {
                case Model.StorefrontModalTemplatesEnum.ThankYouViolationsPayment:
                    //if workitem got signal to complete and the state is actuall the init state
                    if (completedItemInitState === this.$state.current.name) {
                        //.. then the item was ended early but successful, in this case, no violations and no payments
                        return this.handleDefaultTaskComplete(state);
                    } else if (this.cavveStates.Receipt === this.$state.current.name) {
                        //if CAVVE flow then account is created at end of flow so show CAVVE signup modal
                        const removedWorkItem = this.storefrontService.removeWorkItem(Model.SelectedOptions.OACC); //This will remove the create account task if it exists
                        return (removedWorkItem) ? this.postCAVVESignup() : this.postSignup(); //if removedWorkItem is defined, that means it was removed from queue
                    } else {
                        return this.postPaymentUpsale();
                    }
                case Model.StorefrontModalTemplatesEnum.ThankYouNewAccount:
                    return this.postSignup();
                case Model.StorefrontModalTemplatesEnum.VehicalViolationSuspendedAccountMessage:
                    return this.showVehicalViolationSuspendedAccountMessage();
                case Model.StorefrontModalTemplatesEnum.None:
                    return state ? this.$state.go(state) : this.showAllTasksComplete();
                case Model.StorefrontModalTemplatesEnum.FinishSetup:
                    return this.finishAccountSetup();
                default:
                    return this.handleDefaultTaskComplete(state);
            }
        }

        private handleDefaultTaskComplete(stateName: string) {
            if (this.storefrontService.hasIncompleteWorkItems()) {
                return this.showTaskComplete()
                    .then(() => stateName ? this.$state.go(stateName) : this.showAllTasksComplete());
            } else {
                return this.showAllTasksComplete();
            }
        }

        public showStorefrontMaintenanceMode(): angular.IPromise<any> {
            return this.createWithGenericMediumModal(this.modalNames.StorefrontMaintenance)
                .template("/app/templates/storefront/StorefrontMaintenanceTemplate.html")
                .classNames(['largeModal', 'storefrontGenericPromptWindow'])
                .image(this.storefrontService.getMaintenanceImg())
                .show(true);
        }
        
        private showTaskComplete(): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontTaskCompleteModal)
                .then((response: Model.SitecoreItem) => {
                    return this.create(this.modalNames.StorefrontWorkitemComplete)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .controller('StorefrontTaskCompleteController')
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                            "next": response.buttons["NEXT"]
                        })
                        .classNames(["mediumModal", "storefrontGenericPromptWindow"])
                        .show();
                });
        }

        private showAllTasksComplete(): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontAllTasksCompleteModal)
                .then((response: Model.SitecoreItem) => {
                    return this.create(this.modalNames.StorefrontAllWorkItemsComplete)
                        .header(response.Title)
                        .actions({
                            "finish": response.buttons["FINISH"],
                            "notFinished": response.buttons["NOTFINISHED"]
                        })
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .controller('StorefrontAllTasksCompleteController')
                        .classNames(["mediumModal", "storefrontGenericPromptWindow"])
                        .show()
                        .then((action) => {
                            if (action === "finish") {
                                return this.forceGoToSurvey();
                            }
                            return this.doMoreMessage(() => this.showAllTasksComplete());
                        });
                });
        }

        private postPaymentUpsale(): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontPaymentViolationsModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontWorkitemCompleteSignup)
                        .template("/app/templates/storefront/StorefrontMissedATollPaymentModalTemplate.html")
                        .image(response.ImageItem)
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                            "signUp": response.buttons["SIGNUP"],
                            "finish": response.buttons["FINISH"]
                        })
                        .show(true)
                        .then((action) => {
                            if (action === "signUp") {
                                const workItemId: number = Model.SelectedOptions.OACC;
                                this.storefrontService.insertWorkItem(workItemId);
                                return this.storefrontService.skip(workItemId).then((funcState) => this.$state.go(funcState as string));
                            } else {
                                if (this.storefrontService.hasIncompleteWorkItems()) {
                                    const state = this.storefrontService.getWorkItemInitState(this.storefrontService.currentWorkItem());
                                    return state ? this.$state.go(state) : this.forceGoToSurvey();
                                } else {
                                    return this.forceGoToSurvey();
                                }
                            }
                        });
                });
        }

        private postSignup(): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontThankYouNewAccountModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontWorkitemCompleteGoToCsr)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                            "finish": response.buttons["FINISH"],
                            "notFinished": response.buttons["NOTFINISHED"]
                        })
                        .show(true)
                        .then((action) => {
                            if (action === "notFinished") {
                                return this.doMoreMessage(() => this.postSignup());
                            } else {
                                return this.forceGoToSurvey();
                            }
                        });
                });
        }

        private genericPostSignup(cmsItemId: string): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(cmsItemId)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontWorkitemCompleteGoToCsr)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                            "finish": response.buttons["FINISH"],
                            ...(response.buttons["NOTFINISHED"] ? { "notFinished": response.buttons["NOTFINISHED"] } : {})
                        })
                        .show(true)
                        .then((action) => {
                            if (action === "notFinished") {
                                return this.doMoreMessage(() => this.postSignup());
                            } else {
                                return this.forceGoToSurvey();
                            }
                        });
                });
        }

        private postCAVVESignup(): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontThankYouCAVVEModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontWorkitemCompleteCAVVE)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                            "finish": response.buttons["FINISH"],
                            "notFinished": response.buttons["NOTFINISHED"]
                        })
                        .show(true)
                        .then((action) => {
                            if (action === "notFinished") {
                                return this.doMoreMessage(() => this.postCAVVESignup());
                            } else {
                                return this.forceGoToSurvey();
                            }
                        });
                });
        }


        public showInactivity(): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontSessionTimeoutModal)
                .then((response: Model.SitecoreItem) => {
                    return this.create(this.modalNames.StorefrontInactivity)
                        .template("/app/templates/storefront/StorefrontInactivityTemplate.html")
                        .controller("StorefrontInactivityController")
                        .classNames(['mediumModal', 'storefrontGenericPromptWindow'])
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                            "ok": response.buttons["OK"]
                        })
                        .show();
                });
        }

        public showGotoCsr(): angular.IPromise<boolean> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontAdditionalHelpModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontSeeCSR)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .header(response.Title)
                        .actions({
                            "finish": response.buttons["FINISH"]
                        })
                        .inject("showGoBack", response.buttons["BACK"])
                        .show<string>(true)
                        .then((action) => action === "finish");
                });
        }


        //show a modal with a rendered pdf
        public showPdf(href: string): angular.IPromise<any> {
            return this.create(this.modalNames.StorefrontPdfViewer)
                .template('/app/templates/storefront/StorefrontPdfViewerTemplate.html')
                .controller('StorefrontPdfViewerController')
                .classNames(['largeModal', 'storefrontPdfWindow'])
                .inject("pdfHref", href)
                .show()
            //This catch is very important: when modals are 'closed', the promises are resolved,
            //however when modals are 'dismissed' they are rejected. If this method returns a rejected
            //promise, the callee assumes the pdf didn't load, not that the modal was dismissed, like when
            //the app is inactive. This catch allows the dismiss rejection to be ignored, allowing pdf modals
            //to be dismissed without resulting in a url redirection.
                .catch(() => {})
                .then((e: any) => {
                    if (e && e.name && e.name === "InvalidPDFException") {
                        throw e;
                    }
                });
        }

        //open modal for external task. promise resolves when closed, rejects when dismissed
        //return state is state to redirect to when closed/dismissed
        public showExternalTask(): angular.IPromise<any> {
            return this.create(this.modalNames.StorefrontExternalTask)
                .template('/app/templates/storefront/StorefrontExternalTaskModalTemplate.html')
                .controller('StorefrontExternalTaskModalController')
                .classNames(['largeModal', 'storefrontModalWindow'])
                .show();
        }


        //shows a modals saying init has failed
        public failedToInitMessage = (): angular.IPromise<any> => {
            return this.createWithGenericMediumModal(this.modalNames.StorefrontServiceInitFailed)
                .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                .actions({
                    "Reload": "Reload"
                })
                .header("Storefront failed to initialize.")
                .body("The storefront failed to initialize properly. View logs for more information.")
                .show<string>(true);
        }

        public skipTaskMessage = (): angular.IPromise<boolean> => {
            return this.storefrontService.getCmsItemById(this.routes.storefrontSkipTaskOrGoBackModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontSkippTaskMessage)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                            "stay": response.buttons["STAY"],
                            "leave": response.buttons["LEAVE"]
                        })
                        .header(response.Title)
                        .body(response.Message)
                        .inject("showModalClose", true)
                        .show<string>(true)
                        .then((action: string) => action === "leave");
                });
        }

        public skippedTasksMessage(workItem: Model.WorkItem): angular.IPromise<Model.WorkItem> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontSkippedTasksModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontIncompleteWorkitemsWhileSkipping)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                            "notFinished": response.buttons["NOTFINISHED"],
                            "finish": response.buttons["FINISH"]
                        })
                        .header(response.Title)
                        .body(response.Message)
                        .inject("showModalClose", true)
                        .show<string>(true)
                        .then((action: string) => {
                            if (action === "notFinished") {
                                this.storefrontService.setCurrentWorkItem(workItem);
                                return workItem;
                            } else {
                                return null;
                            }
                        });
                });
        }

        public exit(): angular.IPromise<any> {
            return this.storefrontService.getCmsItemById(this.routes.storefrontExitSessionModal)
                .then((response: Model.SitecoreItem) => {
                    return this.createWithGenericMediumModal(this.modalNames.StorefrontExitSession)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                            "exit": response.buttons["EXIT"],
                            "stay": response.buttons["STAY"]
                        })
                        .header(response.Title)
                        .body(response.Message)
                        .inject("showModalClose", true)
                        .show<string>(true)
                        .then((action: string) => {
                            if (action === "exit" && this.storefrontService.fullSiteMode) {
                                return this.$q
                                    .when(this.storefrontService.isActiveSession() ||
                                        this.storefrontService.startNewSession())
                                    .then(() => {
                                        this.storefrontService.fullSiteMode = false;
                                        return this.forceGoToSurvey();
                                    });
                            } if (action === "exit") {
                                if (this.storefrontService.isActiveSession()) {
                                    return this.forceGoToSurvey();
                                } else {
                                    return this.storefrontService.reset();
                                }
                            } else {
                                return this.$q.resolve();
                            }
                        });
                });

        }

        public showCmsContent(state: angular.ui.IState, returnStateName: string) {
            return this.create(this.modalNames.StorefrontCmsContent)
                .template('/app/templates/storefront/StorefrontCmsModalTemplate.html')
                .controller("StorefrontCmsModalController")
                .inject("controllerName", state.controller as string)
                .inject("template", state.templateUrl as string)
                .classNames(['largeModal', 'storefrontGenericPromptWindow'])
                .show()
                .then(() => this.$state.go(returnStateName));
        }

        public closeCmsContent() {
            this.modalService.closeByName(this.modalNames.StorefrontCmsContent, true);
        }

        public noViolationsFound(title: string, body: string): angular.IPromise<any> {
            return this.createWithGenericMediumModal(this.modalNames.StorefrontNoViolationsFound)
                .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                .actions({
                    "proceed": "Proceed",
                    "anotherPlate": "Try another plate"
                })
                .header(title)
                .body(body)
                .show<string>(true)
                .then((action: string) => {
                    if (action === "proceed") {
                        return this.storefrontService.completeWorkItem();
                    } else {
                        return this.$q.resolve(null);
                    }
                });
        }

        public noViolationsWithInvoiceFound(title: string, body: string): angular.IPromise<any> {
            return this.createWithGenericMediumModal(this.modalNames.StorefrontNoViolationsWithInvoiceFound)
                .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                .actions({
                    "proceed": "Proceed",
                    "tryagain": "Try another plate or invoice number"
                })
                .header(title)
                .body(body)
                .show<string>(true)
                .then((action: string) => {
                    if (action === "proceed") {
                        return this.storefrontService.completeWorkItem();
                    } else {
                        return this.$q.resolve(null);
                    }
                });
        }

        
        //overrides settings when opening modals
        private onOpening(angularEvent: angular.IAngularEvent,
            name: string,
            modalSettings: angular.ui.bootstrap.IModalSettings,
            modalTextOptions: Model.ModalTextOptions): ng.IPromise<any> {

            const leaveUnModified = {
                [this.modalService.modalNames.PaymentModal]: "paymentModal storefrontModalWindow",
                [this.modalService.modalNames.VehicleInfoSlidingPanel]: "side-drawer",
                [this.modalService.modalNames.CancelSlidingPanel]: "side-drawer",
                [this.modalService.modalNames.MailingAddressInfoSlidingPanel]: "side-drawer",
                [this.modalService.modalNames.InvoiceListSlidingPanel]: "side-drawer",
                [this.modalService.modalNames.PhoneEmailInfoSlidingPanel]: "side-drawer",
                [this.modalService.modalNames.EditBillingInfoSlidingPanel]: "side-drawer"
            };
            
            
            if ((!name || !this.modalNames[name]) && !leaveUnModified[name]) {
                const template = (modalSettings.templateUrl === "/app/templates/common/modalAlert.html")
                    ? "/app/templates/storefront/StorefrontModalAlertReplacementTemplate.html"
                    : "/app/templates/storefront/StorefrontModalReplacementTemplate.html";
                angular.extend(modalSettings,
                    {
                        backdrop: true,
                        keyboard: true,
                        modalFade: true,
                        templateUrl: template,
                        controller: 'StorefrontModalReplacementController',
                        windowClass: 'mediumModal storefrontModalWindow'
                    });
            }

            if (leaveUnModified[name]) {
                angular.extend(modalSettings,
                    {
                        backdrop: "static",
                        keyboard: true,
                        modalFade: true,
                        windowClass: leaveUnModified[name]
                    });

            }

            //add content overrides for specific modals by name
            switch (name) {
                case this.modalService.modalNames.ViolationsCannotAddVehicle:
                    angularEvent.preventDefault();
                    const currentScope: any = angularEvent.currentScope;
                    if (currentScope.currentUser.acctActivity === "S") {
                        return this.showVehicalViolationSuspendedAccountMessage();
                    } else {
                        return this.showVehicalViolationMessage();
                    }
                case this.modalService.modalNames.ViolationsNoViolationFound:
                    angularEvent.preventDefault();
                    return this.noViolationsFound(modalTextOptions.headerText, modalTextOptions.bodyText);
                case this.modalService.modalNames.ViolationsNoViolationFoundWithInvoice:
                    angularEvent.preventDefault();
                    return this.noViolationsWithInvoiceFound(modalTextOptions.headerText, modalTextOptions.bodyText);
                case this.modalService.modalNames.CreditCardPrompt:
                    modalSettings.templateUrl = "/app/templates/storefront/StorefrontCreditCardPromptTemplate.html";
                    modalSettings.backdrop = "static";
                    break;
           
                //disabled modals...
                case this.modalService.modalNames.Maintenance:
                case this.modalService.modalNames.UpdateSuccess:
                case this.modalService.modalNames.InvoicePayment:
                case this.modalService.modalNames.ViolationsLandingLogin:
                    angularEvent.preventDefault();
                    break;
                default:
                    break;
            }
        }

        public blockModalsInRestrictedState = (angularEvent: angular.IAngularEvent,
            name: string): ng.IPromise<any> => {
            if (!this.storefrontModalServiceModalNames[name] && this.storefrontService.stateChangingRestricted) {
                angularEvent.preventDefault();
            }
            return undefined;
        }

        public forceGoToSurvey(): angular.IPromise<any> {
            this.addMissingInformationService.destroyMissingInformationFlags();
            return this.storefrontService.lockStateChanging(() => this.$state.go(this.stateNames.storefrontSurvey));
        }
    }

    //internal class defining a modal build, no need to export
    class InternalStorefrontModalBuilder implements IStorefrontModalBuilder {
        private templateLocation: string;
        private controllerDef: string | (() => any) | [string | (() => any)];
        private classes: string;
        private additionalResolves: { [key: string]: (() => any) };
        private internalOptions: Model.ModalTextOptions;
        private openedCallback: (() => any);
        private headerPromise: angular.IPromise<string>;
        private bodyPromise: angular.IPromise<string>;
        private imagePromise: angular.IPromise<Model.ISitecoreMediaItem>;
        private injectedActions: angular.IPromise<{ [key: string]: string }>;

        constructor(
            private name: string,
            private modalService: Service.IModalService,
            private $q: angular.IQService) {
            this.additionalResolves = {};
        }

        actions(actions: { [key: string]: string } | angular.IPromise<{ [key: string]: string }>): IStorefrontModalBuilder {
            this.injectedActions = this.$q.when(actions);
            return this;
        }

        header(text: string | angular.IPromise<string>): IStorefrontModalBuilder {
            this.headerPromise = this.$q.when(text);
            return this;
        }

        body(text: string | angular.IPromise<string>): IStorefrontModalBuilder {
            this.bodyPromise = this.$q.when(text);
            return this;
        }

        image(data: Model.ISitecoreMediaItem | angular.IPromise<Model.ISitecoreMediaItem>): IStorefrontModalBuilder {
            this.imagePromise = this.$q.when(data);
            return this;
        }

        template(templateLocation: string): IStorefrontModalBuilder {
            this.templateLocation = templateLocation;
            return this;
        }

        controller(controllerDef: string | (() => any) | [string | (() => any)]): IStorefrontModalBuilder {
            this.controllerDef = controllerDef;
            return this;
        }

        classNames(classNames: string[]): IStorefrontModalBuilder {
            this.classes = (classNames || []).filter((c) => c).join(" ");
            return this;
        }

        inject(key: string, obj: any): IStorefrontModalBuilder {
            this.additionalResolves[key] = () => obj;
            return this;
        }

        show(isGeneric: boolean = false): angular.IPromise<any> {
            return this.$q.all([this.headerPromise, this.bodyPromise, this.imagePromise, this.injectedActions]).then((promises: any[]) => {

                const headerText: string = promises[0];
                const bodyText: string = promises[1];
                const image = promises[2];
                const actions = promises[3];

                this.additionalResolves["actions"] = () => actions; //TODO:investigate why having "actions after image and other additional resolves causes issues"
                this.additionalResolves["imageData"] = () => (image) ? image : null;

                if (isGeneric) {
                    this.additionalResolves["showModalClose"] = (this.additionalResolves["showModalClose"]) ? this.additionalResolves["showModalClose"] : null;
                    this.additionalResolves["showGoBack"] = (this.additionalResolves["showGoBack"]) ? this.additionalResolves["showGoBack"] : null;
                }


                return this.modalService.showModal({
                    backdrop: true,
                    keyboard: true,
                    modalFade: true,
                    templateUrl: this.templateLocation,
                    controller: this.controllerDef,
                    windowClass: this.classes,
                    //these will be passed to modal's contructor
                    resolve: this.additionalResolves
                } as Model.ModalSettings,
                    this.internalOptions ||
                    {
                        headerText: headerText,
                        actionButtonText: null,
                        bodyText: bodyText,
                        closeButtonText: null,
                        subText: null
                    }, this.name);
            });
        }
    }

}


(() => {
    'use strict';
    angular.module('HCTRAModule')
        .factory("StorefrontModalService", HCTRA.Service.StorefrontModalService.factory())
        .constant("StorefrontModalServiceModalNames",
            {
                "StorefrontFinishAccountSetup": "StorefrontFinishAccountSetup",
                "StorefrontVehicalViolations": "StorefrontVehicalViolations",
                "StorefrontSuspendedWithVehicalViolations": "StorefrontSuspendedWithVehicalViolations",
                "StorefrontINeedTo": "StorefrontINeedTo",
                "StorefrontDoSomethingElse": "StorefrontDoSomethingElse",
                "StorefrontMaintenance": "StorefrontMaintenance",
                "StorefrontWorkitemComplete": "StorefrontWorkitemComplete",
                "StorefrontAllWorkItemsComplete": "StorefrontAllWorkItemsComplete",
                "StorefrontWorkitemCompleteSignup": "StorefrontWorkitemCompleteSignup",
                "StorefrontWorkitemCompleteGoToCsr": "StorefrontWorkitemCompleteGoToCsr",
                "StorefrontWorkitemCompleteCAVVE": "StorefrontWorkitemCompleteCAVVE",
                "StorefrontInactivity": "StorefrontInactivity",
                "StorefrontSeeCSR": "StorefrontSeeCSR",
                "StorefrontPdfViewer": "StorefrontPdfViewer",
                "StorefrontExternalTask": "StorefrontExternalTask",
                "StorefrontServiceInitFailed": "StorefrontServiceInitFailed",
                "StorefrontSkippTaskMessage": "StorefrontSkippTaskMessage",
                "StorefrontIncompleteWorkitemsWhileSkipping": "StorefrontIncompleteWorkitemsWhileSkipping",
                "StorefrontExitSession": "StorefrontExitSession",
                "StorefrontCmsContent": "StorefrontCmsContent",
                "StorefrontNoViolationsFound": "StorefrontNoViolationsFound",
                "StorefrontNoViolationsWithInvoiceFound": "StorefrontNoViolationsWithInvoiceFound"
            });
})();