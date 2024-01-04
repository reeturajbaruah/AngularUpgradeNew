module HCTRA.Service {
    "use strict";

    export interface IModalServiceModalNames {
        readonly UpdateSuccess: string;
        readonly Maintenance: string;
        readonly ViolationsInvoicePaid: string;
        readonly ViolationsPaymentPlan: string;
        readonly VioloationsBelowMinimumPayment: string;
        readonly ViolationsPaymentWillLeaveLowBalance: string;
        readonly ViolationsPaymentCouldLeaveLowBalance: string;
        readonly ViolationsOverpayment: string;
        readonly InvoicePayment: string;
        readonly ViolationsCannotAddVehicle: string;
        readonly ViolationsNoViolationFound: string;
        readonly ViolationsNoInviocesFound: string;
        readonly ViolationsNoViolationFoundWithInvoice: string;
        readonly AddEZPlate: string;
        readonly CreditCardPrompt: string;
        readonly GenericAlert: string;
        readonly ViolationsLandingLogin: string;
        readonly PaymentModal: string;
        readonly VehicleInfoSlidingPanel: string;
        readonly MailingAddressInfoSlidingPanel: string;
        readonly PhoneEmailInfoSlidingPanel: string;
        readonly CancelSlidingPanel: string;
        readonly EditBillingInfoSlidingPanel: string;
        readonly InvoiceListSlidingPanel: string;
        readonly CloseAccountUpdateInfo: string;
    }

    export interface IModalService {
        readonly modalNames: IModalServiceModalNames;
        /*storefront changes*/
        //remove all listening for modal openings
        clearListeners();
        //full reset to default modal settings
        resetSettings();
        //register new listeners
        onOpening(listener: (event: angular.IAngularEvent, modalName: string, settings: ng.ui.bootstrap.IModalSettings, textOptions: Model.ModalTextOptions) => ng.IPromise<any>): void;
        //returns true if modal by that name is open
        isModalOpen(name: string): boolean;
        //close all modals, passing true will dismiss (close and reject)
        closeAll(dismiss?: boolean);
        //close modal by name, passing true will dismiss (close and reject)
        closeByName(name: string, dismiss?: boolean);
        //shows a modal for when a vehicle cannot be added due to violations
        violationsCannotAddVehicleModal(): ng.IPromise<any>;

        newModalScope(initState: any): ng.IScope;

        showModal(customModalDefaults: Model.ModalSettings, customModalOptions: Model.ModalTextOptions, modalName?: string): angular.IPromise<any>;
        showSlidingModal(componentName: string, resolveObject: { [key: string]: any }, modalName?: string): angular.IPromise<any>;
        
        showUpdateSuccessModal(topic: string, updatedValue: string): void;
        showMaintenanceModal(): ng.IPromise<any>;
        violationsThisInvoicePaidModal(): ng.IPromise<any>;
        violationsPaymentPlanModal(): ng.IPromise<any>;
        violationsBelowMinimumPaymentModal(minPayment: string): ng.IPromise<any>;
        violationsPaymentWillLeaveLowBalanceModal(defaultAmount: string): ng.IPromise<any>;
        violationsPaymentCouldLeaveLowBalanceModal(defaultAmount: string, minimumPayment: string, defaultMinusMinimum: string): ng.IPromise<any>;
        violationsOverpaymentModal(defaultAmount: string): ng.IPromise<any>;
        violationsNoViolationFound(information: string): angular.IPromise<any>;
        violationsNoViolationFoundWithInvoice(information: string): angular.IPromise<any>;
        violationsNoInviocesFound(): angular.IPromise<any>;
        invoicePaymentModal(headerText: string, paymentPostDelayMsg: string): ng.IPromise<any>;        
        creditCardPromptModal(scopeExt: any): ng.IPromise<any>;
        closeAccountInfoUpdatePromptModal(title: string, body: string): ng.IPromise<any>;
    }


    export class ModalService implements IModalService {

        static $inject = ["$uibModal", "operatingSystemSnifferService", "$q", "$rootScope", "responsiveService", "ModalServiceModalNames", "errorDisplayService"];

        constructor(private $uibModal: angular.ui.bootstrap.IModalService,
            private osSniffer: any,
            private $q: angular.IQService,
            private $rootScope: angular.IRootScopeService,
            private responsiveService,
            private modalServiceModalNames: IModalServiceModalNames,
            private errorDisplayService) {
            this.resetSettings();
        }

        get modalNames() { return this.modalServiceModalNames; }

        //track all open modals
        modalServiceInstances: { [key: string]: ng.ui.bootstrap.IModalServiceInstance[] } = {};
        //track all destruction listener methods
        listeners: ((evt: angular.IAngularEvent, name: string, settings: ng.ui.bootstrap.IModalSettings, textOptions: Model.ModalTextOptions) => ng.IPromise<any>)[] = [];

        private modalDefaults: Model.ModalSettings = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: '/app/templates/common/modal.html'
        };

        private alertModalDefaults: Model.ModalSettings = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: '/app/templates/common/modalAlert.html'
        };

        private currentModalSettings: Model.ModalSettings = this.modalDefaults;
        private currentAlertModalSettings: Model.ModalSettings = this.alertModalDefaults;

        private maintenanceModalOptions: Model.ModalSettings = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: '/app/templates/common/modalMaintenance.html',
            windowClass: 'maintenance-modal-window'
        };

        private modalOptions: Model.ModalTextOptions = {
            closeButtonText: 'Close',
            actionButtonText: 'OK',
            headerText: 'Proceed?',
            bodyText: 'Perform this action?'
        };

        public newModalScope(initState: any): angular.IScope {
            return angular.extend(this.$rootScope.$new(), initState || {});
        }

        public clearListeners() {
            this.listeners = [];
        }

        public resetSettings() {
            this.clearListeners();
            //add a defult listener that will 'deny' a modal called 'ViolationsCannotAddVehicle' from opening
            this.listeners.push((evt: angular.IAngularEvent, name: string, modalSettings: angular.ui.bootstrap.IModalSettings, modalTextOptions: Model.ModalTextOptions): ng.IPromise<any> => {
                switch (name) {
                    //general supressed modals
                    case this.modalServiceModalNames.ViolationsCannotAddVehicle:
                        evt.preventDefault();
                        break;
                    //non-mobile supressed modals: only show these is the web is in mobile mode
                    case this.modalServiceModalNames.ViolationsInvoicePaid:
                    case this.modalServiceModalNames.ViolationsPaymentPlan:
                    case this.modalServiceModalNames.ViolationsNoInviocesFound:
                        if (!this.responsiveService.isMobile()) {
                            evt.preventDefault();
                        }
                        break;
                    case this.modalServiceModalNames.ViolationsNoViolationFoundWithInvoice:
                        if (!this.responsiveService.isMobile()) {
                            evt.preventDefault();
                            this.errorDisplayService.displayToasts([modalTextOptions.bodyText], "error");
                        }
                        break;
                    default:
                }
                return undefined;
            });
        }

        public onOpening(listener: (event: angular.IAngularEvent,
            modalName: string,
            settings: angular.ui.bootstrap.IModalSettings,
            textOptions: Model.ModalTextOptions) => ng.IPromise<any>) {
            this.listeners.push(listener);
        }

        public isModalOpen(name: string): boolean {
            return this.modalServiceInstances[name] && this.modalServiceInstances[name].length > 0;
        }

        public closeAll(dismiss?: boolean) {
            for (const name in this.modalServiceInstances) {
                if (this.modalServiceInstances.hasOwnProperty(name) && this.modalServiceInstances[name]) {
                    for (const m of this.modalServiceInstances[name]) {
                        if (dismiss) {
                            m.dismiss();
                        } else {
                            m.close();
                        }
                    }

                    delete this.modalServiceInstances[name];
                }
            }            
        }

        public closeByName(name: string, dismiss?: boolean) {
            if (this.modalServiceInstances[name]) {
                for (const m of this.modalServiceInstances[name]) {
                    if (dismiss) {
                        m.dismiss();
                    } else {
                        m.close();
                    }
                }
        
                delete this.modalServiceInstances[name];
            }
        }

        public showModal = (customModalDefaults: Model.ModalSettings, customModalOptions: Model.ModalTextOptions, modalName: string = null) => {
            if (!customModalDefaults) {
                customModalDefaults = {} as Model.ModalSettings;
            }
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions, angular.isDefined(modalName) && modalName !== null ? modalName : this.modalServiceModalNames.GenericAlert);
        }
        
        public showSlidingModal = (componentName: string, resolveObject: {[key: string]: any}, modalName: string = null) => {
            const modalDefaults: Model.ModalSettings = {
                backdrop: true,
                keyboard: true,
                modalFade: true,
                component: componentName,
                windowClass: "side-drawer",
                resolve: resolveObject
            };
            return this.showModal(modalDefaults, {} as any, modalName !== null ? modalName : componentName);
        }

        private show = (customModalDefaults: Model.ModalSettings, customModalOptions: Model.ModalTextOptions, modalName: string = null) => {
            
            modalName = modalName || customModalDefaults.templateUrl;
            //Create temp objects to work with since we're in a singleton service

            //Map angular-ui modal custom defaults to modal defaults defined in service
            var tempModalDefaults: ng.ui.bootstrap.IModalSettings = angular.extend({}, this.currentModalSettings) as ng.ui.bootstrap.IModalSettings;

            //Map modal.html $scope custom properties to defaults defined in service
            var tempModalOptions: Model.ModalTextOptions = angular.extend({}, this.modalOptions);

            tempModalDefaults = angular.extend({}, tempModalDefaults, customModalDefaults) as ng.ui.bootstrap.IModalSettings;
            tempModalOptions = angular.extend({}, tempModalOptions, customModalOptions);
            
            if (this.listeners) {
                //allow listeners to alter the modal's settings or cancel it altogether
                const event: angular.IAngularEvent = {
                    currentScope: this.$rootScope,
                    targetScope: this.$rootScope,
                    name: "ModalOpening",
                    stopPropagation: angular.noop,
                    preventDefault: null,
                    defaultPrevented: false
                };
                event.preventDefault = () => event.defaultPrevented = true;

                const listenerPromises = this.listeners
                    .map((listener) => listener(event, modalName, tempModalDefaults, tempModalOptions))
                    .filter(p => p);

                if (event.defaultPrevented) {
                    //race
                    let settled = false;
                    const winner = this.$q.defer();
                    listenerPromises.forEach(listenerPromise => listenerPromise
                        .then((v) => !settled && (settled = true) && winner.resolve(v)
                        , (e) => !settled && (settled = true) && winner.reject(e)));

                    if (listenerPromises.length === 0) {
                        winner.resolve();
                    }

                    return winner.promise;
                }
            }
            
            //add and allow additional resolves to be added for modal controller's constructor injection
            tempModalDefaults.resolve = angular.extend({}, this.currentModalSettings.resolve || {},
                {
                    "modalOptions": () => tempModalOptions,
                    "modalName": () => modalName
                }, tempModalDefaults.resolve || {});
            
            if (!tempModalDefaults.controller) {
                tempModalDefaults.controller = ["$scope", "$uibModalInstance", "modalOptions",
                    ($scope, $uibModalInstance: angular.ui.bootstrap.IModalInstanceService, modalOptions: Model.ModalTextOptions) => {
                        $scope.$uibModalInstance = $uibModalInstance;
                        $scope.modalOptions = modalOptions;
                        $scope.modalOptions.ok = (result) => {
                            $uibModalInstance.close(result);
                        };
                        $scope.modalOptions.close = () => {
                            $uibModalInstance.dismiss('cancel');
                        };
                    }
                ];
            }
            
            //track modal
            const modalServiceInstance = this.$uibModal.open(tempModalDefaults);
            if (!this.modalServiceInstances[modalName]) {
                this.modalServiceInstances[modalName] = [];
            }
            this.modalServiceInstances[modalName].push(modalServiceInstance);
            return modalServiceInstance.result
                .finally(() => {
                    //untrack modal when closed
                    if (this.modalServiceInstances[modalName]) {
                        const mIndex = this.modalServiceInstances[modalName].indexOf(modalServiceInstance);
                        if (mIndex >= 0) {
                            this.modalServiceInstances[modalName].splice(mIndex, 1);
                        }
                    }
                });
        }
        
        public showUpdateSuccessModal = (topic: string, updatedValue: string) => {
            this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Ok',
                headerText: topic + ' Confirmation',
                bodyText: 'Your ' + updatedValue + ' has been successfully updated.'
            }, this.modalServiceModalNames.UpdateSuccess);
        }

        public showMaintenanceModal = (): ng.IPromise<any> => {

            let imageSrc = "-/media/B820D13393F34580A738639AA0291EA5.ashx";
            let altText = "Website Mobile Maintenance Image";

            if (this.osSniffer.isDesktopOs()) {

                imageSrc = "-/media/4C541629D7D64FA6B8DA2DB8243ACC89.ashx";
                altText = "Website Desktop Maintenance Image";
            }

            return this.showModal(this.maintenanceModalOptions, {
                closeButtonText: 'Close',
                bodyText: `<img alt="${altText}" src="${imageSrc}" />`
            }, this.modalServiceModalNames.Maintenance);
        }

        public violationsThisInvoicePaidModal = (): ng.IPromise<any> => {

            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Close',
                headerText: 'Violation Invoice Already Paid',
                bodyText: 'Only violation invoices with an outstanding balance are displayed. Please use a desktop computer to view all violation invoices associated with this license plate.'
            }, this.modalServiceModalNames.ViolationsInvoicePaid);
        }

        public violationsPaymentPlanModal = (): ng.IPromise<any> => {

            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Close',
                headerText: 'Payment Plan',
                bodyText: 'A payment plan already exists for this license plate. Please contact <a target="_blank" href="/HelpAndSupport#email-us">Customer Service</a>.'
            }, this.modalServiceModalNames.ViolationsPaymentPlan);
        }

        public violationsBelowMinimumPaymentModal = (minPayment: string): ng.IPromise<any> => {

            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Close',
                headerText: 'Minimum Payment',
                bodyText: 'The amount entered is less than the minimum required amount. Please enter a value greater than or equal to ' + minPayment + '.'
            }, this.modalServiceModalNames.VioloationsBelowMinimumPayment);
        }

        public violationsPaymentWillLeaveLowBalanceModal = (defaultAmount: string): ng.IPromise<any> => {

            const popUpMessage = 'The amount entered will leave a remaining balance that is below the minimum payment required. Please enter the full amount of ' + defaultAmount + '.';

            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Close',
                headerText: 'Minimum Payment',
                bodyText: popUpMessage
            }, this.modalServiceModalNames.ViolationsPaymentWillLeaveLowBalance);
        }

        public violationsPaymentCouldLeaveLowBalanceModal = (defaultAmount: string, minimumPayment: string, defaultMinusMinimum: string): ng.IPromise<any> => {

            const popUpMessage = 'The amount entered will leave a remaining balance that is below the minimum payment required. Please enter an amount between ' + minimumPayment + ' and ' + defaultMinusMinimum + ' or the full amount of ' + defaultAmount;

            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Close',
                headerText: 'Minimum Payment',
                bodyText: popUpMessage
            }, this.modalServiceModalNames.ViolationsPaymentCouldLeaveLowBalance);
        }

        public violationsOverpaymentModal = (defaultAmount: string): ng.IPromise<any> => {

            const popUpMessage = 'The amount entered is greater than what is due. Please enter a value less than or equal to ' + defaultAmount + '.';

            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Close',
                headerText: 'Violation Overpayment',
                bodyText: popUpMessage
            }, this.modalServiceModalNames.ViolationsOverpayment);
        }

        public invoicePaymentModal = (headerText: string, paymentPostDelayMsg: string): ng.IPromise<any> => {
            return this.showModal(this.currentAlertModalSettings, {
                    closeButtonText: "Close",
                    headerText: headerText,
                    bodyText: paymentPostDelayMsg
            }, this.modalServiceModalNames.InvoicePayment);
        }

        public violationsCannotAddVehicleModal(): angular.IPromise<any> {
            const popUpMessage = '';

            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Close',
                headerText: 'Your vehicle has a violation and cannot be added at this time.',
                bodyText: popUpMessage
            }, this.modalServiceModalNames.ViolationsCannotAddVehicle);
        }


        public violationsNoViolationFound(information: string): angular.IPromise<any> {
            
            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Close',
                headerText: 'No violations found',
                bodyText: information
            }, this.modalServiceModalNames.ViolationsNoViolationFound);
        }

        public violationsNoInviocesFound(): angular.IPromise<any> {
            return this.showModal({
                backdrop: true,
                keyboard: true,
                modalFade: true,
                templateUrl: '/app/templates/common/modalAlert.html'
            }, {
                closeButtonText: 'Close',
                headerText: 'No Invoices Found',
                bodyText: 'No violation invoices with an outstanding balance were found.'
                }, this.modalServiceModalNames.ViolationsNoInviocesFound);
        }


        public violationsNoViolationFoundWithInvoice(information: string): angular.IPromise<any> {
            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: 'Close',
                headerText: 'No violations found with provided invoice',
                bodyText: information
            }, this.modalServiceModalNames.ViolationsNoViolationFoundWithInvoice);
        }
        
        public addEZPlateModal(modalOptions: Model.ModalTextOptions): angular.IPromise<any> {
          return this.showModal(
              this.currentAlertModalSettings,
            modalOptions,
              this.modalServiceModalNames.AddEZPlate);
        }

        public creditCardPromptModal(scope: any): angular.IPromise<any> {
            const settings = angular.extend({}, this.currentAlertModalSettings);

            settings.scope = scope;
            settings.templateUrl = "/app/templates/storefront/StorefrontCreditCardPromptTemplate.html";
            settings.backdrop = "static";

            return this.showModal(
                settings,
                {
                    closeButtonText: null,
                    headerText: null,
                    bodyText: null
                },
                this.modalServiceModalNames.CreditCardPrompt);
        }

        public closeAccountInfoUpdatePromptModal = (headerText: string, bodyText: string): ng.IPromise<any> => {
            return this.showModal(this.currentAlertModalSettings, {
                closeButtonText: "Edit",
                headerText: headerText,
                bodyText: bodyText
            }, this.modalServiceModalNames.CloseAccountUpdateInfo);
        }
    }
}


(() => {
    "use strict";
    angular.module("HCTRAModule")
        .service("modalService", HCTRA.Service.ModalService)
        .constant("ModalServiceModalNames",
            {
                "UpdateSuccess": "UpdateSuccess",
                "Maintenance": "Maintenance",
                "ViolationsInvoicePaid": "ViolationsInvoicePaid",
                "ViolationsPaymentPlan": "ViolationsPaymentPlan",
                "VioloationsBelowMinimumPayment": "VioloationsBelowMinimumPayment",
                "ViolationsPaymentWillLeaveLowBalance": "ViolationsPaymentWillLeaveLowBalance",
                "ViolationsPaymentCouldLeaveLowBalance": "ViolationsPaymentCouldLeaveLowBalance",
                "ViolationsOverpayment": "ViolationsOverpayment",
                "InvoicePayment": "InvoicePayment",
                "ViolationsCannotAddVehicle": "ViolationsCannotAddVehicle",
                "ViolationsNoViolationFound": "ViolationsNoViolationFound",
                "ViolationsNoInviocesFound": "ViolationsNoInviocesFound",
                "ViolationsNoViolationFoundWithInvoice": "ViolationsNoViolationFoundWithInvoice",
                "AddEZPlate": "AddEZPlate",
                "CreditCardPrompt": "CreditCardPrompt",
                "GenericAlert": "GenericAlert",
                "ViolationsLandingLogin": "ViolationsLandingLogin",
                "PaymentModal": "PaymentModal",
                "VehicleInfoSlidingPanel": "vehicleInfoSlidingPanel",
                "MailingAddressInfoSlidingPanel": "mailingAddressInfoSlidingPanel",
                "PhoneEmailInfoSlidingPanel": "phoneEmailInfoSlidingPanel",
                "CancelSlidingPanel": "cancelSlidingPanel",
                "EditBillingInfoSlidingPanel": "editBillingInfoSlidingPanel",
                "InvoiceListSlidingPanel": "invoiceListSlidingPanel",
                "CloseAccountUpdateInfo": "closeAccountUpdateInfo"
            });
})();