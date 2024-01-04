module HCTRA.Storefront.Service {

    export interface ICheckStateResult {
        isExternal: boolean;
    }

    export interface ICheckStateError {
        hasWorkItemRedirect: boolean;
        restrictedAbort: boolean;
        restrictedStateName?: string;
        workItemRedirect?: Model.SelectedOptions;
    }

    //define contract with storefront
    export interface IStorefrontService {

        //collection of available workitems
        readonly workItems: ReadonlyArray<Model.WorkItem>;

        readonly stateChangingRestricted: { all: boolean };

        //resolves when service is fully loaded
        readonly onInitialized: angular.IPromise<any>;

        readonly isShellAccountInitialized: boolean;

        readonly machineName: string;

        //flag for full site mode. True put storefront into full site mode
        fullSiteMode: boolean;

        //flags if storefront is enabled
        isEnabled(): boolean;

        //reset internal state of storefront
        reset(logOffType?: Model.StorefrontLogOffType): angular.IPromise<any>;

        hardReset(): angular.IPromise<any>;

        softReset(): angular.IPromise<any>;

        //attempts to skip current workitem. successful on resolve: returns next state. failure to skip rejects: returns current item again
        skip(workItemId?: number, markCompleted?: boolean, markUnsaved?: boolean): angular.IPromise<string>;

        //signals service that current workitem is complete and move to the next one
        completeWorkItem(): angular.IPromise<string>;

        abortWorkflow();

        //starts workitems in order defined by storefront
        startWorkItems(): angular.IPromise<string>;

        //include a previously unselected workitem into the workflow
        insertWorkItem(workItemId: number): Model.WorkItem;

        isQueued(workItemId: number): boolean;

        //removes a workflow
        removeWorkItem(workItemId: number): Model.WorkItem;

        getWorkItemById(workItemId: number): Model.WorkItem;

        //true is storefront is actively working workitems
        isWorkflowActive(): boolean;

        //request storefront to determine next action/state
        checkState(toState: angular.ui.IState): angular.IPromise<ICheckStateResult | ICheckStateError>;

        //gets the current workitem
        currentWorkItem(useShadowIndex?: boolean): Model.WorkItem;

        //checks for incomplete work items
        hasIncompleteWorkItems(): boolean;

        //set current workitem, different from skip. skip includes logic for what should happen if a user tries to skip,
        //setcurrentoworkitem actually sets the new workitem
        setCurrentWorkItem(workItem: Model.WorkItem): boolean;

        //request for storefront related cms data
        getCmsMediaItem(itemId: string): angular.IPromise<any>;

        getCmsItemById(itemId: string): angular.IPromise<Model.SitecoreItem>;

        //true if currently logged in a kiosk session
        isActiveSession(): boolean;

        //saves the form data for the survey
        saveSurveyResponse(experience: number, comments: string): angular.IPromise<any>;

        //get's the starting state name for the given workitem. This may not nessecarilly be the first or any
        //of the defined states int the workitem.
        getWorkItemInitState(workItem: Model.WorkItem): string;

        getStorefrontLogo(): Model.ISitecoreMediaItem;

        getBackArrowImg(): Model.ISitecoreMediaItem;

        getCloseModalImg(): Model.ISitecoreMediaItem;

        getMaintenanceImg(): Model.ISitecoreMediaItem;

        getTaskCompleteIcon(): Model.ISitecoreMediaItem;

        getTaskNotCompleteIcon(): Model.ISitecoreMediaItem;


        //gets the current physical store location of this instance
        getLocation(): Model.StoreLocations;

        //registers event handlers to respond to storefront events
        registerEventHandlers(eventHandlers: IStorefrontEventsHandler): void;

        //pre-caches conent fromt the provided urls
        prefetchContent(urls: string[]): angular.IPromise<any>;

        //cancels any state changing that is not a selected initial states of remaining tasks
        lockStateChanging(action: () => angular.IPromise<any>): angular.IPromise<any>;

        showMenu(state: angular.ui.IState): boolean;

        startNewSession(): angular.IPromise<any>;

        isCmsContent(state: angular.ui.IState): boolean; //todo: refactor this into an existing cms service or create one if it doesn't exist

        isInMaintenanceMode(): angular.IPromise<any>;

        isAuthenticated(): boolean;

        //authenticates the kiosk AD account
        authenticateShellAccount(): angular.IPromise<any>;

        //clears data in session storage
        clearSession(): void;
    }

    //defines the concrete implementation of the store front service. Manages workflow of selected work items, cms related data, and
    //other storefront related activities. Please review the IStorefrontService for information concerning member usage.
    export class StorefrontService implements IStorefrontService {
        //all available workitems
        public get workItems(): ReadonlyArray<Model.WorkItem> {
            return this.internalWorkItems;
        }

        private internalWorkItems: ReadonlyArray<Model.WorkItem>;

        //index of currently executing work item
        private workFlowIndex: number = null;

        //index that current shadow item is standing in for
        private shadowItemIndex: number = null;

        private storefrontLogo: Model.ISitecoreMediaItem;

        private backArrowImg: Model.ISitecoreMediaItem;

        private closeModalImg: Model.ISitecoreMediaItem;

        private maintenanceImg: Model.ISitecoreMediaItem;

        private taskCompleteIcon: Model.ISitecoreMediaItem;

        private taskNotCompleteIcon: Model.ISitecoreMediaItem;

        private kioskToken: string;

        //stores current session id
        private sessionId: number;

        //promise that resolves when service has fully initialized
        private serviceInitialized: angular.IPromise<any>;

        //flag to track if kiosk shell user was initialized
        private shellUserInitialized: boolean;

        //flag for full site mode. True put storefront into full site mode
        private isFullSiteMode: boolean;

        //registered event handlers the service will invoke
        private eventHandlers: IStorefrontEventsHandler;

        //regex to parse guid
        private guidRegex: RegExp = /[0-9A-F]{8}[-]?(?:[0-9A-F]{4}[-]?){3}[0-9A-F]{12}/ig;

        private workItemStateNames: any;

        //factory method for instanciating service
        static factory() {
            const service = (
                $http, $rootScope, stateNames, missedATollStates, $q,
                genericRepo, routes, cmsUtilService, authService, webStorage,
                storefrontUtilityService, stringUtilsService, suspendedAccountService, angularEnvironment,
                environmentConfig, addMissingInformationService, violationsStateNames, violatorStateNames,
                loginStates, makePaymentStates, profileStates, cavveStates, vehiclesStates, suspendedAccountWithoutViolationStateNames
                , $window) =>
                new StorefrontService($http, $rootScope, stateNames, missedATollStates,
                    $q, genericRepo, routes, cmsUtilService, authService, webStorage,
                    storefrontUtilityService, stringUtilsService, suspendedAccountService, angularEnvironment,
                    environmentConfig, addMissingInformationService, violationsStateNames, violatorStateNames,
                    loginStates, makePaymentStates, profileStates, cavveStates, vehiclesStates, suspendedAccountWithoutViolationStateNames
                    , $window);
            service.$inject = [
                "$http", "$rootScope", "stateNames", "missedATollStates", "$q", "genericRepo",
                "routes", "cmsUtilService", "AuthService", "webStorage",
                "StorefrontUtilityService", "stringUtilsService", "suspendedAccountService", "angularEnvironment",
                "environmentConfig", "addMissingInformationService", "violationsStateNames", "violatorStateNames",
                "loginStates", "makePaymentStates", "profileStates", "cavveStates", "vehiclesStates", "suspendedAccountWithoutViolationStateNames"
                , "$window"];
            return service;
        }

        constructor(
            private $http: angular.IHttpService,
            private $rootScope: angular.IRootScopeService | any,
            private stateNames: Constant.IStateNames,
            private missedATollStates,
            private $q: angular.IQService,
            private genericRepo: HCTRA.Service.IGenericRepo,
            private routes: Constant.IRoutes,
            private cmsUtilService: any,
            private authService: any,
            private webStorage: HCTRA.Service.IWebStorageService,
            private storefrontUtilityService: Service.IStorefrontUtilityService,
            private stringUtilsService,
            private suspendedAccountService: HCTRA.Service.ISuspendedAccountService,
            private angularEnvironment,
            private environmentConfig: Constant.IEnvironmentConfig,
            private addMissingInformationService,
            private violationsStateNames: any,
            private violatorStateNames,
            private loginStates,
            private makePaymentStates,
            private profileStates,
            private cavveStates,
            private vehiclesStates,
            private suspendedAccountWithoutViolationStateNames: string[],
            private $window
        ) {
            this.isFullSiteMode = false;
            this.workItemStateNames = {
                [Model.SelectedOptions.MTOLL]: [
                    this.missedATollStates.Landing,
                    this.missedATollStates.Grid,
                    this.missedATollStates.Billing,
                    this.missedATollStates.Confirm,
                    this.missedATollStates.Receipt
                ],
                [Model.SelectedOptions.GINV]: [
                    this.violationsStateNames.Landing,
                    this.violationsStateNames.Grid,
                    this.violationsStateNames.MakePayment,
                    this.violationsStateNames.Confirm,
                    this.violationsStateNames.Receipt,
                    this.cavveStates.Offer,
                    this.cavveStates.Root,
                    this.cavveStates.Billing,
                    this.cavveStates.Personal,
                    this.cavveStates.Receipt,
                    this.cavveStates.Confirm,


                    this.violationsStateNames.Grid,
                    this.violationsStateNames.MakePayment,
                    this.violationsStateNames.Confirm,
                    this.violationsStateNames.Receipt
                ],
                [Model.SelectedOptions.OACC]: this.createAccountStates(),

                [Model.SelectedOptions.UBI]: [
                    this.stateNames.managePayment,
                    this.stateNames.updateBillingInformation,
                    this.stateNames.addSecondaryCreditCard,
                    this.stateNames.updateSecondaryCreditCard,
                    this.stateNames.saveBillingInformation,
                    this.profileStates.UpdateBillingInformation,
                    this.stateNames.editCreditCardInformation,
                    this.stateNames.editBankAccountInformation,
                    this.stateNames.editCreditCardAddress,
                    this.stateNames.addCreditCardInformation,
                    this.stateNames.addBankAccountInformation,
                    this.stateNames.makePaymentMethodPrimary
                ],
                [Model.SelectedOptions.UCI]: [
                    this.profileStates.UpdateContactInformation
                ],
                [Model.SelectedOptions.UAC]: [
                    this.profileStates.UpdateAuthorizedContacts
                ],
                [Model.SelectedOptions.URAMT]: [
                    this.profileStates.UpdateReplenishmentAmount,
                    this.profileStates.UpdateFlexpayBillingInformation
                ],

                [Model.SelectedOptions.ARTAG]: [
                    this.vehiclesStates.Root,
                    this.vehiclesStates.AddTag,
                    this.vehiclesStates.AddEzPlate,
                    this.vehiclesStates.PlateVehicleInformation,
                    this.vehiclesStates.PlateReviewOrder,
                    this.vehiclesStates.PlateReceipt,
                    this.vehiclesStates.TagVehicleInformation,
                    this.vehiclesStates.TagCart,
                    this.vehiclesStates.TagDeliveryMethod,
                    this.vehiclesStates.TagReviewOrder,
                    this.vehiclesStates.TagReceipt,
                    this.vehiclesStates.Replacement,
                    this.vehiclesStates.ReplacementDeliveryMethod,
                    this.vehiclesStates.ReplacementReviewOrder,
                    this.vehiclesStates.ReplacementReceipt,
                    this.stateNames.activateEzTag,
                    this.stateNames.activateEzTagConfirm,
                    this.stateNames.activateEzTagCompletion
                ],
                [Model.SelectedOptions.MKPAY]: [
                    this.makePaymentStates.Landing,
                    this.makePaymentStates.Root,
                    this.makePaymentStates.Checkout,
                    this.makePaymentStates.Receipt
                ],
                [Model.SelectedOptions.EO]: [
                    this.violatorStateNames.Landing,
                    this.violatorStateNames.Grid,
                    this.violatorStateNames.MakePayment,
                    this.violatorStateNames.Confirm,
                    this.violatorStateNames.Receipt,
                    this.cavveStates.Offer,
                    this.cavveStates.Root,
                    this.cavveStates.Billing,
                    this.cavveStates.Personal,
                    this.cavveStates.Receipt,
                    this.cavveStates.Confirm
                ],
            };


            if (this.storefrontUtilityService.isRunningAsKiosk) {
                this.serviceInitialized = this
                    .clearNamedCaches()
                    .then(() => this.getCmsItemsAndBuildWorkItems());
            } else {
                this.serviceInitialized = this.$q.resolve();
            }
        }

        createAccountStates() {
            if (this.environmentConfig.createAccountRefresh) {
                return [
                    //  this.stateNames.NewAccount,
                    this.stateNames.Login,
                    this.stateNames.VehicleInfo,
                    this.stateNames.Cart,
                    this.stateNames.PaymentInfo,
                    this.stateNames.DeliveryMethod,
                    this.stateNames.Review,
                    this.stateNames.Receipt
                ];
            } else {
                return [
                    this.stateNames.createAccount,
                    this.stateNames.newAccount,
                    this.stateNames.createAccountDetails,
                    this.stateNames.addEZTag,
                    this.stateNames.vehicleInformation,
                    this.stateNames.addAdditionalVehicle,
                    this.stateNames.paymentMaster,
                    this.stateNames.choosePaymentMethod,
                    this.stateNames.enterBankAccount,
                    this.stateNames.creditCardEntry,
                    this.stateNames.createAccountSummary,
                    this.stateNames.checkout,
                    this.stateNames.createAccountReceipt,
                ];
            }
        }
        public clearNamedCaches(): Promise<any> {
            return this.$window.caches
                .keys()
                .then(names => Promise.all(names.map(name => this.$window.caches.delete(name))));
        }

        public registerEventHandlers(eventHandlers: IStorefrontEventsHandler): void {
            this.eventHandlers = eventHandlers;
        }

        public getStorefrontLogo(): Model.ISitecoreMediaItem {
            return this.storefrontLogo;
        }

        public getBackArrowImg(): Model.ISitecoreMediaItem {
            return this.backArrowImg;
        }

        public getCloseModalImg(): Model.ISitecoreMediaItem {
            return this.closeModalImg;
        }

        public getMaintenanceImg(): Model.ISitecoreMediaItem {
            return this.maintenanceImg;
        }

        public getTaskCompleteIcon(): Model.ISitecoreMediaItem {
            return this.taskCompleteIcon;
        }

        public getTaskNotCompleteIcon(): Model.ISitecoreMediaItem {
            return this.taskNotCompleteIcon;
        }

        public getLocation(): Model.StoreLocations {
            return this.storefrontUtilityService.storefrontLocation;
        }

        public get fullSiteMode(): boolean {
            return this.isFullSiteMode;
        }

        public set fullSiteMode(val: boolean) {
            this.isFullSiteMode = val;
            this.saveToStorage();
        }

        public get isShellAccountInitialized(): boolean {
            return this.shellUserInitialized;
        }

        public get machineName(): string {
            return this.storefrontUtilityService.machineName;
        }

        public isAuthenticated(): boolean { return this.authService.isAuthenticated(); }

        public isInMaintenanceMode(): angular.IPromise<any> {

            return this.genericRepo.dataFactory
                .getMaintenanceDetails()
                .then((response: Model.MaintenanceResponse) => {

                    const flags = response.featureStates.reduce((acc, v) => {
                        acc[v.feature] = v.inMaintenance
                        return acc;
                    }, {});

                    const kioskShouldBeInMaintenanceMode =
                        flags[Model.MaintenanceFeature.Account] ||
                        flags[Model.MaintenanceFeature.Violations];

                    return kioskShouldBeInMaintenanceMode ? this.$q.resolve() : this.$q.reject();
                });
        }

        public isActiveSession(): boolean {
            // session is active if session id is truthy
            return !!this.sessionId;
        }

        public currentWorkItem(useShadowIndex: boolean = false): Model.WorkItem {
            if (this.workFlowIndex === null) {
                return null;
            }

            return this.internalWorkItems[useShadowIndex && this.shadowItemIndex ? this.shadowItemIndex : this.workFlowIndex];
        }

        public getCmsMediaItem(itemId: string): angular.IPromise<any> {
            return this.genericRepo.dataFactory.getCmsPageById({
                ItemId: itemId,
                Fields: ""
            })
                .then((res) => {
                    const obj = angular.fromJson(res.cmsResponse);
                    if (!obj.Url) {
                        obj.Url = obj.ItemMedialUrl;
                    }
                    return obj;
                });
        }

        getCmsItemById(itemId: string): angular.IPromise<Model.SitecoreItem> {
            return this.genericRepo.dataFactory
                .getCmsPageById({
                    ItemId: itemId,
                    Fields: ""
                })
                .then((res: Model.IBaseCmsResponse) => {
                    const item = angular.fromJson(res.cmsResponse) as Model.SitecoreItem;
                    if (item.Image) {
                        item.ImageItem = this.convertToMediaItem(item.Image);
                    }
                    item.maxCommentCharacters = (item.maxCommentCharacters) ? Number(item.maxCommentCharacters) : null;
                    item.badRatingIconSelected = (item.badRatingIconSelected) ? this.convertToMediaItem(item.badRatingIconSelected) : null;
                    item.badRatingIconUnselected = (item.badRatingIconUnselected) ? this.convertToMediaItem(item.badRatingIconUnselected) : null;
                    item.neutralRatingIconSelected = (item.neutralRatingIconSelected) ? this.convertToMediaItem(item.neutralRatingIconSelected) : null;
                    item.neutralRatingIconUnselected = (item.neutralRatingIconUnselected) ? this.convertToMediaItem(item.neutralRatingIconUnselected) : null;
                    item.goodRatingIconSelected = (item.goodRatingIconSelected) ? this.convertToMediaItem(item.goodRatingIconSelected) : null;
                    item.goodRatingIconUnselected = (item.goodRatingIconUnselected) ? this.convertToMediaItem(item.goodRatingIconUnselected) : null;
                    item.buttons = (item.buttons) ? this.stringUtilsService.getParameterObject(item.buttons as string) : null;
                    return item;
                });
        }

        private convertToMediaItem(imageString): Model.ISitecoreMediaItem {
            return this.cmsUtilService.parseAllImageAttributes(imageString as Model.ISitecoreMediaItem) as Model.ISitecoreMediaItem;
        }

        public isEnabled(): boolean {
            return this.storefrontUtilityService.isRunningAsKiosk;
        }

        public getWorkItemInitState(workItem: Model.WorkItem): string {
            if (workItem.isShadowItem && (!workItem.states || workItem.states.length < 1)) {
                return null;
            }
            return workItem.states[0];
        }

        private isInitStateOfSelectedWorkItem(stateName: string): boolean {
            return this.internalWorkItems
                .filter(item => item.isSelected && !item.isCompleted)
                .map(this.getWorkItemInitState)
                .filter(state => state)
                .indexOf(stateName) >= 0;
        }

        private isInternalStorefrontState(stateName: string): boolean {
            return stateName === this.stateNames.storefrontHome ||
                stateName === this.stateNames.storefrontSelection ||
                stateName === this.stateNames.storefrontSurvey ||
                stateName === this.stateNames.storefrontSuppression;
        }

        public checkState(toState: angular.ui.IState): angular.IPromise<ICheckStateResult | ICheckStateError> {

            const toStateName = toState.name;

            if (this.stateChangingRestricted && (!this.isInternalStorefrontState(toStateName) || this.stateChangingRestricted.all)) {
                return this.$q.reject({
                    hasWorkItemRedirect: false,
                    restrictedAbort: true,
                    restrictedStateName: toStateName,
                    workItemRedirect: null
                } as ICheckStateError);
            }

            if (this.fullSiteMode || !this.isWorkflowActive() || this.isInternalStorefrontState(toStateName) || this.isCmsContent(toState)) {
                return this.$q.resolve({
                    isExternal: false
                } as ICheckStateResult);
            }

            const current = this.currentWorkItem();

            const toWorkItem = this.isWorkitemState(current, toStateName);
            const currentUser = this.$rootScope.currentUser;
            const isSuspendedAccount = this.authService.isAuthenticated() && currentUser.acctActivity === "S";
            const isMissingInformation = this.authService.isAuthenticated() && (this.addMissingInformationService.isMissingInfo(currentUser.passwordNeedsReset, currentUser.emailIsMissing, currentUser.securityQuestionIsMissing));

            const isNotFinishedWithSetup =
                this.authService.isAuthenticated() &&
                currentUser.newAccountStep &&
                !currentUser.newAccountStep.accountComplete &&
                current.id !== Model.SelectedOptions.OACC;

            const requiresAuthentication = current.isShadowItem
                ? this.currentWorkItem(true).requiresAuthentication && !this.authService.isAuthenticated()
                : current.requiresAuthentication && !this.authService.isAuthenticated();

            const callback = (isSuspendedWithViolations: boolean) => {
                const redirections: { condition: boolean, id: Model.SelectedOptions }[] = [
                    { condition: requiresAuthentication, id: Model.SelectedOptions.LOGIN },
                    { condition: isSuspendedWithViolations, id: Model.SelectedOptions.SUSVIOL },
                    { condition: isMissingInformation, id: Model.SelectedOptions.MISSINFO },
                    { condition: isSuspendedAccount, id: Model.SelectedOptions.SUSACCT },
                    { condition: isNotFinishedWithSetup, id: Model.SelectedOptions.FINISHSETUP }
                ];

                for (const check of redirections) {
                    if (check.condition) {
                        if (current.id === check.id) {
                            break;
                        }
                        return this.$q.reject({
                            hasWorkItemRedirect: true,
                            restrictedAbort: false,
                            workItemRedirect: check.id
                        } as ICheckStateError);
                    }
                }

                return this.$q.resolve({
                    isExternal: !toWorkItem
                } as ICheckStateResult);
            };

            if (this.authService.isAuthenticated()) {
                return this.suspendedAccountService
                    .getSuspendedAccountTypeInformation()
                    .then((response) => callback(response.violationFlag));
            } else {
                return callback(false);
            }
        }

        public isWorkflowActive(): boolean {
            if (!this.isEnabled() || this.workFlowIndex === null) {
                return false;
            }
            return this.hasIncompleteWorkItems();
        }

        public startWorkItems(): angular.IPromise<string> {
            if (!this.isEnabled()) {
                return this.$q.reject(null);
            }
            //get next workitem..
            return this.next()
                .then((workItem: Model.WorkItem) => {
                    //if null, there are no more left, done
                    if (workItem === null) {
                        return null as string;
                    }
                    return this.startNewSession()
                        .then(() => this.getWorkItemInitState(workItem));
                });
        }

        public startNewSession(endExistingSession = false): angular.IPromise<any> {
            //otherwise start a db session
            let selectedOptions = this.getSelectedWorkitems().map(x => Model.SelectedOptions[x.id]);

            if (this.fullSiteMode) {
                selectedOptions = [Model.SelectedOptions[Model.SelectedOptions.WEBST]];
            }

            if (endExistingSession) {
                const endSessionRequest: Model.EndStorefrontSessionRequest = {
                    logOffType: Model.StorefrontLogOffType.Forced.toString(),
                    storefrontSessionID: this.sessionId
                };

                this.genericRepo.dataFactory.EndStorefrontDBSession(endSessionRequest);
            }

            const startSessionRequest: Model.StartStorefrontSessionRequest = {
                location: Model.StoreLocations[this.storefrontUtilityService.storefrontLocation].toString(),
                selectedOptions: (selectedOptions.length > 0 ? selectedOptions : [Model.SelectedOptions[Model.SelectedOptions.Unknown]]).join(',')
            };

            return this.genericRepo.dataFactory.StartStorefrontDBSession(startSessionRequest)
                .then((response: any) => {
                    this.sessionId = response.dbResponse;
                    this.saveToStorage();
                });
        }

        public insertWorkItem(workItemId: number): Model.WorkItem {
            // check if not already a workitem
            const workItem = this.internalWorkItems.filter((w: Model.WorkItem) => w.id === workItemId && !w.isSelected && !w.isUnavailable)[0];
            if (workItem) {
                workItem.isSelected = true;
            }
            return workItem;
        }

        public isQueued(workItemId: number): boolean {
            return this.internalWorkItems.some((w: Model.WorkItem) => w.id === workItemId && w.isSelected);
        }

        public getWorkItemById(workItemId: number): Model.WorkItem {
            return this.internalWorkItems.filter(x => x.id === workItemId)[0];
        }

        public removeWorkItem(workItemId: number): Model.WorkItem {
            const workItem = this.internalWorkItems.filter((w: Model.WorkItem) => w.id === workItemId && w.isSelected)[0];
            if (workItem) {
                workItem.isSelected = false;
            }

            return workItem;
        }

        //flag indicating that any state changes should be denied
        public get stateChangingRestricted() {
            return this.storefrontUtilityService.stateChangingRestricted;
        }

        public lockStateChanging(action: () => angular.IPromise<any>): angular.IPromise<any> {
            return this.storefrontUtilityService.lockStateChanging(action);
        }

        public reset(logOffType = Model.StorefrontLogOffType.Manual): angular.IPromise<any> {

            const endSessionRequest: Model.EndStorefrontSessionRequest = {
                logOffType: Model.StorefrontLogOffType[logOffType].toString(),
                storefrontSessionID: this.sessionId
            };

            //reset internals 
            this.fullSiteMode = false;
            this.sessionId = null;
            this.workFlowIndex = null;
            this.shadowItemIndex = null;

            for (const item of this.internalWorkItems) {
                item.isSelected = false;
                item.isUnavailable = false;
                item.isCompleted = false;
                item.isUnsaved = false;
            }
            this.saveToStorage();
            this.addMissingInformationService.destroyMissingInformationFlags();
            return this.lockStateChanging(() =>
                this.eventHandlers.onResetting()
                    .then(() => this.clearUserSession(endSessionRequest))
                    .then(() => this.eventHandlers.onResetComplete(logOffType === Model.StorefrontLogOffType.Forced))
            );
        }

        private clearUserSession(endSessionRequest): angular.IPromise<any> {
            return this.$q
                .when(endSessionRequest.storefrontSessionID > 0 &&
                    this.genericRepo.dataFactory.EndStorefrontDBSession(endSessionRequest))
                .catch(() => { })
                .then(() => this.authService.isAuthenticated() && this.authService.logout())
                .catch(() => { })
                .then(() => this.clearSession());
        }

        public hardReset(): angular.IPromise<any> {
            return this.reset(Model.StorefrontLogOffType.Forced);
        }

        public softReset(): angular.IPromise<any> {
            for (const item of this.internalWorkItems) {
                item.isSelected = false;
                item.isUnavailable = false;
                item.isCompleted = false;
                item.isUnsaved = false;
            }

            this.workFlowIndex = null;

            this.saveToStorage();
            if (this.authService.isAuthenticated()) {
                //force update to user profile
                return this.authService.profile({});
            }
            return this.$q.resolve();
        }

        public get onInitialized(): angular.IPromise<any> {
            return this.serviceInitialized;
        }

        public skip(workItemId?: number, markCompleted: boolean = false, markUnsaved: boolean = true): angular.IPromise<string> {
            const currentItem = this.currentWorkItem();

            //if skipping to a specific workitem...
            if (angular.isNumber(workItemId)) {

                //you can't skip to the current work item
                if (currentItem && workItemId === currentItem.id) {
                    return this.$q.reject(currentItem);
                }

                //determine if you can go there
                const destinationWorkItem = this.getWorkitemById(workItemId);
                if (!destinationWorkItem || destinationWorkItem.isCompleted || !destinationWorkItem.isSelected) {
                    return this.$q.reject(currentItem);
                }

                //is it even real
                const index = this.internalWorkItems.indexOf(destinationWorkItem);
                if (index < 0) {
                    return this.$q.reject(currentItem);
                }
                //only can skipp if skippable or destination item is a shadow item
                if (currentItem && !currentItem.isSkippable && !destinationWorkItem.isShadowItem) {
                    return this.$q.reject(currentItem);
                }

                //set to current and return init state
                if (currentItem) {
                    currentItem.isUnsaved = markUnsaved;
                    currentItem.isCompleted = markCompleted;

                    if (!currentItem.isShadowItem && destinationWorkItem.isShadowItem) {
                        this.shadowItemIndex = this.workFlowIndex;
                    } else if (currentItem.isShadowItem && !destinationWorkItem.isShadowItem) {
                        this.shadowItemIndex = null;
                    }
                }

                this.workFlowIndex = index;
                this.saveToStorage();

                const initState = this.getWorkItemInitState(destinationWorkItem);
                if (initState) {
                    return this.$q.resolve(initState);
                } else {
                    return this.next(true).then((nextItem) => this.getWorkItemInitState(nextItem));
                }
            } else {
                //only skippable workitems can skip
                if (currentItem && !currentItem.isSkippable) {
                    return this.$q.reject(currentItem);
                }
                //..otherwise go to the next work item and return the initial state
                return this.next(markCompleted, markUnsaved).then((nextItem: Model.WorkItem) => nextItem && this.getWorkItemInitState(nextItem));
            }
        }



        public completeWorkItem(): angular.IPromise<string> {
            const currentItem = this.currentWorkItem();
            //resolve with null if no more workitem are left
            if (!currentItem) {
                return this.$q.resolve(null);
            }
            //otherwise go to the next one and return it's init state
            return this.next(true).then((nextItem: Model.WorkItem) => nextItem && this.getWorkItemInitState(nextItem));
        }

        public saveSurveyResponse(experience: number, comments: string): angular.IPromise<any> {
            const request = new Model.StorefrontSurveyRequest();
            request.storefrontSessionID = this.sessionId;
            request.experienceValue = experience;
            request.comments = comments;

            return this.genericRepo.dataFactory.SaveSurveyToStorefrontDB(request);
        }

        public prefetchContent(urls: string[]): angular.IPromise<any> {
            //perform a get on all urls and resolve when all are complete.
            return this.$q.all(urls.map((url) => this.$http.get(url)));
        }

        //determines based on state if the menu is visible
        public showMenu(state: angular.ui.IState): boolean {
            //only show the menu when not home, survey or selection screen
            switch (state.name) {
                case this.stateNames.storefrontHome:
                case this.stateNames.storefrontSelection:
                case this.stateNames.storefrontSurvey:
                    return false;
                default:
                    return true;
            }
        }

        //determine if there are incompleted workitems remaining
        public hasIncompleteWorkItems(): boolean {
            const remaining = this.internalWorkItems.filter((item) => item.isSelected && !item.isCompleted);
            return remaining.length > 0;
        }

        public isCmsContent(state: angular.ui.IState): boolean {
            const toController = state.controller;
            return toController === "GenericNonSectionalCmsController" ||
                toController === "GenericSectionalCmsController";
        }

        //determine if a given state is valid state for the given work item
        private isWorkitemState(item: Model.WorkItem, state: string): boolean {
            for (const s of item.states) {
                if (s === state) {
                    return true;
                }
            }
            return false;
        }

        private getSuspendedStates(): string[] {
            return this.suspendedAccountWithoutViolationStateNames;
        }

        //find workitem by it's id
        private getWorkitemById(id: number): Model.WorkItem {
            const query = this.internalWorkItems.filter((item) => item.id === id);
            return query.length > 0 ? query[0] : null;
        }

        //gets all selected workitems
        private getSelectedWorkitems(): Model.WorkItem[] {
            return this.internalWorkItems.filter(x => x.isSelected && !x.isShadowItem);
        }

        public clearSession(): void {
            this.webStorage.removeEntry("StorefrontService");
        }

        //save service data to web storage
        private saveToStorage(): void {
            const workItem = this.currentWorkItem(true);
            const data: IStorefrontWebStorage = {
                sessionId: this.sessionId,
                currentItemName: workItem ? workItem.storefrontDisplayName : null,
                currentItemId: workItem ? workItem.id : null,
                selectedItemIds: this.getSelectedWorkitems().map((item: Model.WorkItem) => item.id),
                fullSiteMode: this.isFullSiteMode,
                completedItemIds: this.getSelectedWorkitems().filter((item: Model.WorkItem) => item.isCompleted).map((item: Model.WorkItem) => item.id),
                shellUserInitialized: this.shellUserInitialized,
                kioskToken: this.kioskToken
            };

            this.webStorage.setKeyValue("StorefrontService", data);
        }

        //restore service data from web storage
        private restoreFromStorage(): void {
            const data: IStorefrontWebStorage = this.webStorage.getValue("StorefrontService");

            if (data) {
                this.sessionId = data.sessionId;
                this.internalWorkItems
                    .filter((item: Model.WorkItem) => data.selectedItemIds.reduce((found, id) => found || (item.id === id), false))
                    .forEach((item: Model.WorkItem) => item.isSelected = true);

                this.internalWorkItems
                    .filter((item: Model.WorkItem) => data.completedItemIds.reduce((found, id) => found || (item.id === id), false))
                    .forEach((item: Model.WorkItem) => item.isCompleted = true);

                this.workFlowIndex =
                    angular.isNumber(data.currentItemId) && data.currentItemId >= 0
                        ? this.internalWorkItems.map((item: Model.WorkItem) => item.id).indexOf(data.currentItemId)
                        : null;

                this.shadowItemIndex = null;
                this.kioskToken = data.kioskToken;

                this.isFullSiteMode = data.fullSiteMode;
                this.shellUserInitialized = data.shellUserInitialized;
            }
        }

        public abortWorkflow() {
            const currentItem = this.currentWorkItem();
            if (currentItem) {
                this.internalWorkItems.filter(item => item.isSelected && item.id !== currentItem.id).forEach(item => item.isCompleted = true);
            }

        }

        //increments the workflow to the next required work item.
        //markAsCompleted lets the service know if the task it's leaving was completed or not
        private next(markAsCompleted: boolean = true, markUnsaved: boolean = false): angular.IPromise<Model.WorkItem> {

            var previousItem: Model.WorkItem;

            if (!this.isWorkflowActive()) {
                this.workFlowIndex = 0;
                previousItem = null;
            } else {
                previousItem = this.currentWorkItem();
                previousItem.isCompleted = markAsCompleted;
                previousItem.isUnsaved = markUnsaved;
                this.workFlowIndex++;
            }

            //mark it complete or unsaved
            var item: Model.WorkItem = null;

            //find the next selected workitem available
            while (this.workFlowIndex < this.internalWorkItems.length) {
                item = this.internalWorkItems[this.workFlowIndex];

                if (item && item.isSelected && !item.isCompleted) {
                    break;
                } else {
                    this.workFlowIndex++;
                    item = null;
                }
            }

            this.saveToStorage();
            //if at the end of the flow but there's incomplete tasks..
            if (!item && this.hasIncompleteWorkItems()) {

                //oops! there should always be a registered handler
                if (!this.eventHandlers || !this.eventHandlers.onIncompleteWorkItem) {
                    return this.$q.reject("incomplete workitem event not handled.");
                }

                //go to the top of the list, the first one incompleted
                for (const workItem of this.internalWorkItems) {
                    //only consider selected items that are not complete that actually have states to go through
                    if (workItem && workItem.isSelected && !workItem.isCompleted && workItem.states && workItem.states.length > 0) {
                        item = workItem;
                        break;
                    }
                }

                //let listener handle event
                return this.eventHandlers.onIncompleteWorkItem(item);
            } else {
                //you are done, signal it
                if (!previousItem && !item) {
                    return this.$q.resolve(null);
                }
                if (previousItem && item) {
                    if (!previousItem.isShadowItem && item.isShadowItem) {
                        this.shadowItemIndex = this.workFlowIndex;
                    } else if (previousItem.isShadowItem && !item.isShadowItem) {
                        this.shadowItemIndex = null;
                    }
                }

                return this.eventHandlers
                    //invoke with complete item and next one inline
                    .onCompletedWorkItem(previousItem, item || null)
                    .then(() => {
                        if (item && item.isAbortItem) {
                            this.abortWorkflow();
                        }

                        if (item && (!item.states || item.states.length < 1 || item.isSelected === false)) {
                            //no states to go to, then mark it complete and go to next
                            return this.next(true);

                        } else {
                            return item || null;
                        }
                    });
            }
        }

        private getFirstAvailableId(): Model.SelectedOptions {
            for (const workItem of this.internalWorkItems) {
                if (workItem && workItem.isSelected && !workItem.isCompleted && !workItem.isShadowItem) {
                    return workItem.id;
                }
            }
            return null;
        }

        public setCurrentWorkItem(workItem: Model.WorkItem) {
            if (this.isEnabled() && this.isWorkflowActive() && workItem && workItem.isSelected && !workItem.isCompleted) {
                const index = this.internalWorkItems.indexOf(workItem);
                if (index >= 0) {
                    this.workFlowIndex = index;
                    this.saveToStorage();
                    return true;
                }
            }
            return false;
        }

        public authenticateShellAccount(): angular.IPromise<any> {
            //preflight check: is the machine a default config?
            const machineName = this.storefrontUtilityService.machineName;
            const defaultMachineName = this.storefrontUtilityService.defaultMachineName;

            if (machineName === defaultMachineName) {
                this.shellUserInitialized = true;
                this.saveToStorage();
                return this.$q.resolve();
            } else {
                return this.genericRepo.dataFactory
                    .StorefrontInitialize()
                    .then((res: any) => {
                        this.kioskToken = res.token;
                        this.shellUserInitialized = true;
                        this.saveToStorage();
                    });
            }
        }


        //get ids for workitems in cms
        private getCmsDbIds(): angular.IPromise<any> {
            return this.genericRepo.dataFactory
                .getCmsPageById({
                    ItemId: this.routes.storefrontDBIdsId,
                    Fields: ""
                })
                .then((res: Model.IBaseCmsResponse) => angular.fromJson(res.cmsResponse).Children as Model.CmsDbId[]);
        }

        //get work item definitions in cms
        private getCmsWorkItems(): angular.IPromise<any> {
            return this.genericRepo.dataFactory
                .getCmsPageById({
                    ItemId: this.routes.storefrontWorkItemSelectionParentId,
                    Fields: ""
                })
                .then((res: Model.IBaseCmsResponse) => angular.fromJson(res.cmsResponse).Children as Model.WorkItem[]);
        }

        private getStorefrontLogoItem(): angular.IPromise<any> {
            return this.getCmsMediaItem(this.routes.storefrontHCTRALogoId)
                .then((response: Model.ISitecoreMediaItem) => {
                    this.storefrontLogo = response;
                });
        }

        private getStorefrontBackArrowImg(): angular.IPromise<any> {
            return this.getCmsMediaItem(this.routes.storefrontBackArrowImgId)
                .then((response: Model.ISitecoreMediaItem) => {
                    this.backArrowImg = response;
                });
        }

        private getStorefrontCloseModalButtonImg(): angular.IPromise<any> {
            return this.getCmsMediaItem(this.routes.storefrontCloseModalImgId)
                .then((response: Model.ISitecoreMediaItem) => {
                    this.closeModalImg = response;
                });
        }

        private getStorefrontMaintenanceImg(): angular.IPromise<any> {
            return this.getCmsMediaItem(this.routes.storefrontMaintenanceImgId)
                .then((response) => {
                    this.maintenanceImg = {
                        alt: response.Alt || response.alt,
                        image: response.image || response.Url || response.ItemMediaUrl
                    };
                });
        }

        private getStorefrontTaskNotCompleteIcon(): angular.IPromise<any> {
            return this.getCmsMediaItem(this.routes.storefrontTaskNotCompleteIconId)
                .then((response: Model.ISitecoreMediaItem) => {
                    this.taskNotCompleteIcon = response;
                });
        }

        private getStorefrontTaskCompleteIcon(): angular.IPromise<any> {
            return this.getCmsMediaItem(this.routes.storefrontTaskCompleteIconId)
                .then((response: Model.ISitecoreMediaItem) => {
                    this.taskCompleteIcon = response;
                });
        }

        //builds the work item definitions
        private getCmsItemsAndBuildWorkItems(): angular.IPromise<any> {
            const promises = [
                this.getCmsDbIds(), this.getCmsWorkItems(),

                this.getStorefrontLogoItem(), this.getStorefrontBackArrowImg(),
                this.getStorefrontCloseModalButtonImg(), this.getStorefrontMaintenanceImg(),
                this.getStorefrontTaskNotCompleteIcon(), this.getStorefrontTaskCompleteIcon()
            ];

            return this.$q.all(promises).then((results: any[]) => {
                const dbIds: Model.CmsDbId[] = results[0] || [];
                const cmsWorkItems: Model.WorkItem[] = results[1] || [];

                //construct workitem definitions
                cmsWorkItems.forEach((item) => {

                    item.id = Model.SelectedOptions[item.dbId];
                    const definedStates = this.workItemStateNames[item.id];
                    //setting acceptable states with some corner cases

                    switch (Model.SelectedOptions[item.dbId as string]) {
                        case Model.SelectedOptions.UBI:
                            item.states = definedStates.filter(state => {
                                const manageBillingInformationState = state.startsWith(this.profileStates.UpdateBillingInformation);
                                return this.environmentConfig.billingInformation.UseUpdatedPage
                                    ? manageBillingInformationState
                                    : !manageBillingInformationState;
                            });
                            break;
                        case Model.SelectedOptions.MTOLL:
                        case Model.SelectedOptions.GINV:
                            item.states = this.environmentConfig.isMergeMATandVioOn ? this.workItemStateNames[Model.SelectedOptions.EO] : definedStates;
                            break;
                        default:
                            item.states = definedStates;
                            break;
                    }


                    item.unavailableWhenSelected =
                        this.getListFromCmsMultilist(item.cmsUnavailableWhenSelected,
                            Model.SelectedOptions,
                            dbIds) as number[];
                    item.uiOrder = item.uiOrder as number;
                    item.isSkippable = item.isSkippable.toString() === "1";
                    item.requiresAuthentication = item.requiresAuthentication.toString() === "1";

                    item.unselectedIcon = this.cmsUtilService.parseAllImageAttributes(item.cmsUnselectedIcon) as Model.ISitecoreMediaItem;
                    item.selectedIcon = this.cmsUtilService.parseAllImageAttributes(item.cmsSelectedIcon) as Model.ISitecoreMediaItem;

                    item.completionModal = item.completionModal ? Model.StorefrontModalTemplatesEnum[item.completionModal] : null;
                    item.isShadowItem = false;
                });

                this.addShadowItems(cmsWorkItems);
                this.internalWorkItems = cmsWorkItems.sort((w1, w2) => w1.uiOrder - w2.uiOrder);
                this.restoreFromStorage();
            });
        }

        private addShadowItems(existingItems: Model.WorkItem[]) {
            existingItems.push(this.createShadowWorkItem("Suspended Account",
                Model.SelectedOptions.SUSACCT,
                this.getSuspendedStates(),
                true,
                Model.StorefrontModalTemplatesEnum.None,
                false));

            existingItems.push(this.createShadowWorkItem("Suspended Account with Violations",
                Model.SelectedOptions.SUSVIOL,
                [],
                true,
                Model.StorefrontModalTemplatesEnum.VehicalViolationSuspendedAccountMessage,
                true));

            existingItems.push(this.createShadowWorkItem("Add Missing Information",
                Model.SelectedOptions.MISSINFO,
                [this.loginStates.AddMissingInformation],
                true,
                Model.StorefrontModalTemplatesEnum.None,
                false));

            existingItems.push(this.createShadowWorkItem("Login",
                Model.SelectedOptions.LOGIN,
                [this.loginStates.Login],
                false,
                Model.StorefrontModalTemplatesEnum.None,
                false));

            existingItems.push(this.createShadowWorkItem("Not Finished With Account Setup",
                Model.SelectedOptions.FINISHSETUP,
                [],
                true,
                Model.StorefrontModalTemplatesEnum.FinishSetup,
                false));
        }

        private createShadowWorkItem(name: string, id: Model.SelectedOptions, states: string[], requiresAuthentication: boolean, completionModel: Model.StorefrontModalTemplatesEnum, abortWhenComplete: boolean): Model.WorkItem {
            return {
                id: id,
                states: states,
                unavailableWhenSelected: [],
                uiOrder: 0,
                isSkippable: false,
                requiresAuthentication: requiresAuthentication,
                isShadowItem: true,
                isSelected: false,
                isUnavailable: false,
                cmsUnavailableWhenSelected: "",
                isCompleted: false,
                isUnsaved: false,
                storefrontDisplayName: name,
                cmsStates: "",
                dbId: "",
                completionModal: completionModel,
                isAbortItem: abortWhenComplete
            };
        }

        //extract values from string
        private getListFromCmsMultilist(multiListString: string, listToSearch, enumToUse): any[] {

            //build lookup dictionary from array
            // ReSharper disable once InconsistentNaming
            const dict = enumToUse.reduce((acc, r: { ItemID: string, name: string }) => {
                acc[r.ItemID.toLocaleUpperCase()] = r.name;
                return acc;
            }, {});

            //extract guids..
            return ((multiListString || "").match(this.guidRegex) || [])
                //translate from lookup table
                .map((val) => listToSearch[dict[val.toLocaleUpperCase()]])
                //filter out undefined values
                .filter((obj) => angular.isDefined(obj));
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .factory("StorefrontService", HCTRA.Storefront.Service.StorefrontService.factory());
})();
