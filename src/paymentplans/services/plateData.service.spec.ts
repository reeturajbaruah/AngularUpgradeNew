import { } from 'jasmine';

import { PlateDataService, BillingMethod } from '../services/plateData.service';
import { WebStorageConst } from 'constants/module';

import { PaymentPlansStateNames } from '../constants';
import { StateService as UiStateService } from '@uirouter/angular';
import { PaymentResponse, PaymentRequest } from '../interfaces';
import { StateNames } from 'constants/module';

describe('paymentPlanDataService', () => {

    let service: PlateDataService;
    let webStorage;
    let webStorageConst: WebStorageConst;
	let	operatingSystemSnifferServiceMock;

    const response = {
        plates: [
            {
                licPlateNumber: 'CF3L957',
                licPlateState: 'TX',
                activePaymentPlans: [
                    {
                        paymentPlanId: 493722,
                        settlementAmount: 43.15,
                        discountAmount: 0,
                        paidAmount: 5.21,
                        balanceAmount: 37.94,
                        status: 'Open',
                        agency: 'HCTRA',
                        mobileAgency: 'h',
                        nextInstallmentAmount: 9.17,
                        nextInstallmentDate: '2018 - 04 - 23T00: 00: 00',
                        nextUpcomingInstallmentDate: '2018 - 05 - 23T00: 00: 00',
                        eftPaymentMethod: null,
                        creditCardPaymentMethod: null
                    }
                ],
                inactivePaymentPlans: []
            }
        ],
        errors: [],
        alerts: [],
        exception: null,
        sessionTimedOut: false,
        accountStatus: null,
        webVersion: '1.0.0.7262.26772'
    };
    
    beforeEach(() => {
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);
        webStorageConst = new WebStorageConst();
		operatingSystemSnifferServiceMock = jasmine.createSpyObj('operatingSystemSnifferService', ['isDesktopOs']);
        service = new PlateDataService(
            webStorage,
            webStorageConst,
			operatingSystemSnifferServiceMock
        );
    });

    it('can create a service', () => {
        expect(service).toBeDefined();
    });

    describe('setPaymentPlans', () => {
        it('set all plan for violations', () => {
            service.setPaymentPlans(response, false);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(2);
        });

        it('set all plan for ez tag', () => {
            const responseUpdated = {
                plates: [
                    {
                        licPlateNumber: 'CF3L957',
                        licPlateState: 'TX',
                        activePaymentPlans: [],
                        inactivePaymentPlans: [
                            {
                                paymentPlanId: 493722,
                                settlementAmount: 43.15,
                                discountAmount: 0,
                                paidAmount: 5.21,
                                balanceAmount: 37.94,
                                status: 'Open',
                                agency: 'HCTRA',
                                mobileAgency: 'h',
                                nextInstallmentAmount: 9.17,
                                nextInstallmentDate: '2018 - 04 - 23T00: 00: 00',
                                nextUpcomingInstallmentDate: '2018 - 05 - 23T00: 00: 00',
                                eftPaymentMethod: null,
                                creditCardPaymentMethod: null
                            }
                        ]
                    }
                ],
                errors: [],
                alerts: [],
                exception: null,
                sessionTimedOut: false,
                accountStatus: null,
                webVersion: '1.0.0.7262.26772'
            };
            service.setPaymentPlans(responseUpdated, true);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(2);
        });
    });

    describe('getPlans', () => {
        beforeEach(() => {
        });

        it('get active plan for violations', () => {
            service.getActive(false);
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConst.activePlatesViolation);
        });

        it('get active plan for ez tag', () => {
            service.getActive(true);
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConst.activePlatesAccountOverView);
        });

        it('get inactive plan for violations', () => {
            service.getInactive(false);
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConst.inactivePlatesViolation);
        });

        it('get inactive plan for ez tag', () => {
            service.getInactive(true);
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConst.inactivePlatesAccountOverView);
        });
    });

    describe('setBillingMethod', () => {
        it('set billing method for EZ TAG', () => {
            const billingMethod: BillingMethod = {
                eftPaymentMethod: null,
                creditCardPaymentMethod: null,
                address: null
            };
            const paymentAmount = 100;
            const isEzTagFlow = true;
            service.setBillingMethod(billingMethod, paymentAmount, isEzTagFlow);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(2);
        });
    });

    describe('setBillingMethod', () => {
        it('set billing method for Violation', () => {
            const billingMethod: BillingMethod = {
                eftPaymentMethod: null,
                creditCardPaymentMethod: null,
                address: null
            };
            const paymentAmount = 100;
            const isEzTagFlow = false;
            service.setBillingMethod(billingMethod, paymentAmount, isEzTagFlow);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(2);
        });
    });

    describe('selectPaymentPlan ', () => {
        it('return selected plate from Array desktop view', () => {
            const planList = [
                {
                    paymentPlanId: 123456,
                    isSelected: false
                },
                {
                    paymentPlanId: 999999,
                    isSelected: false
                }
            ];

            (operatingSystemSnifferServiceMock.isDesktopOs as jasmine.Spy).and.returnValue(true);

            const resultPlan = service.selectPaymentPlan(123456, planList);
            expect(resultPlan.paymentPlanId).toEqual(123456);
            expect(resultPlan.isSelected).toEqual(true);

            const resultPlan2ndTime = service.selectPaymentPlan(123456, planList);
            expect(resultPlan2ndTime.paymentPlanId).toEqual(123456);
            expect(resultPlan2ndTime.isSelected).toEqual(true);
        });


        it('return selected plate from Array mobile view', () => {
            const planList = [
                {
                    paymentPlanId: 123456,
                    isSelected: false
                },
                {
                    paymentPlanId: 999999,
                    isSelected: false
                }
            ];

            (operatingSystemSnifferServiceMock.isDesktopOs as jasmine.Spy).and.returnValue(false);

            const resultPlan = service.selectPaymentPlan(123456, planList);
            expect(resultPlan.paymentPlanId).toEqual(123456);
            expect(resultPlan.isSelected).toEqual(true);

            const resultPlan2ndTime = service.selectPaymentPlan(123456, planList);
            expect(resultPlan2ndTime).toEqual(null);
        });
    });

    describe('storePlan  ', () => {
        it('setKeyValue to webStorage ezTag Flow', () => {
            const plan = {
                paymentPlanId: 123456,
                settlementAmount: 20,
                discountAmount: 5,
                paidAmount: 3,
                balanceAmount: 21,
                status: '',
                agency: null,
                mobileAgency: null,
                nextInstallmentAmount: 0,
                nextInstallmentDate: '',
                nextUpcomingInstallmentDate: '',
                billingMethod: {
                    eftPaymentMethod: {
                        accountType: null,
                        name: null,
                        routingNumber: null,
                        accountNumber: null,
                        address1: null,
                        city: null,
                        country: null,
                    },
                    creditCardPaymentMethod: {
                        cardCode: null,
                        cardNbr: null,
                        expMonth: null,
                        expYear: null,
                        nameOnCard: null,
                        address1: null,
                        city: null,
                        country: null,
                    },
                    address: {
                        address1: null,
                        city: null,
                        country: null,
                    }
                }
            };

            (webStorage.setKeyValue as jasmine.Spy).and.returnValue({});

            service.storePlan(plan, true);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
        });

        it('setKeyValue to webStorage NOT ezTag Flow', () => {
            const plan = {
                paymentPlanId: 123456,
                settlementAmount: 20,
                discountAmount: 5,
                paidAmount: 3,
                balanceAmount: 21,
                status: '',
                agency: null,
                mobileAgency: null,
                nextInstallmentAmount: 0,
                nextInstallmentDate: '',
                nextUpcomingInstallmentDate: '',
                billingMethod: {
                    eftPaymentMethod: {
                        accountType: null,
                        name: null,
                        routingNumber: null,
                        accountNumber: null,
                        address1: null,
                        city: null,
                        country: null,
                    },
                    creditCardPaymentMethod: {
                        cardCode: null,
                        cardNbr: null,
                        expMonth: null,
                        expYear: null,
                        nameOnCard: null,
                        address1: null,
                        city: null,
                        country: null,
                    },
                    address: {
                        address1: null,
                        city: null,
                        country: null,
                    }
                }
            };

            (webStorage.setKeyValue as jasmine.Spy).and.returnValue({});

            service.storePlan(plan, false);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
        });
    });

    describe('toggleCurrentPlan ', () => {
        it('return the select Plan', () => {
            const activePlate = [
                {
                    paymentPlans: [
                        {
                            isSelected: false,
                            paymentPlanId: 123456,
                            settlementAmount: 20,
                            discountAmount: 5,
                            paidAmount: 3,
                            balanceAmount: 21,
                            status: '',
                            agency: null,
                            mobileAgency: null,
                            nextInstallmentAmount: 0,
                            nextInstallmentDate: '',
                            nextUpcomingInstallmentDate: '',
                            billingMethod: {
                                eftPaymentMethod: {
                                    accountType: null,
                                    name: null,
                                    routingNumber: null,
                                    accountNumber: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                creditCardPaymentMethod: {
                                    cardCode: null,
                                    cardNbr: null,
                                    expMonth: null,
                                    expYear: null,
                                    nameOnCard: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                address: {
                                    address1: null,
                                    city: null,
                                    country: null,
                                }
                            }
                        }
                    ],
                    licPlateNumber: '',
                    licPlateState: '',
                    isActive: true
                }
            ];

            const inactivePlate = [
                {
                    paymentPlans: [
                        {
                            isSelected: false,
                            paymentPlanId: 99999,
                            settlementAmount: 20,
                            discountAmount: 5,
                            paidAmount: 3,
                            balanceAmount: 21,
                            status: '',
                            agency: null,
                            mobileAgency: null,
                            nextInstallmentAmount: 0,
                            nextInstallmentDate: '',
                            nextUpcomingInstallmentDate: '',
                            billingMethod: {
                                eftPaymentMethod: {
                                    accountType: null,
                                    name: null,
                                    routingNumber: null,
                                    accountNumber: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                creditCardPaymentMethod: {
                                    cardCode: null,
                                    cardNbr: null,
                                    expMonth: null,
                                    expYear: null,
                                    nameOnCard: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                address: {
                                    address1: null,
                                    city: null,
                                    country: null,
                                }
                            }
                        }
                    ],
                    licPlateNumber: '',
                    licPlateState: '',
                    isActive: true
                }
            ];
            const result1 = service.toggleCurrentPlan(123456, activePlate, inactivePlate, true);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
            expect(result1.paymentPlanId).toEqual(123456);
            const result2 = service.toggleCurrentPlan(99999, activePlate, inactivePlate, false);
            expect(result2.paymentPlanId).toEqual(99999);
        });
    });

    describe('resetSelectedPlan', () => {
        it('set 1st active Plan', () => {
            const activePlate = [
                {
                    paymentPlans: [
                        {
                            isSelected: false,
                            paymentPlanId: 123456,
                            settlementAmount: 20,
                            discountAmount: 5,
                            paidAmount: 3,
                            balanceAmount: 21,
                            status: '',
                            agency: null,
                            mobileAgency: null,
                            nextInstallmentAmount: 0,
                            nextInstallmentDate: '',
                            nextUpcomingInstallmentDate: '',
                            billingMethod: {
                                eftPaymentMethod: {
                                    accountType: null,
                                    name: null,
                                    routingNumber: null,
                                    accountNumber: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                creditCardPaymentMethod: {
                                    cardCode: null,
                                    cardNbr: null,
                                    expMonth: null,
                                    expYear: null,
                                    nameOnCard: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                address: {
                                    address1: null,
                                    city: null,
                                    country: null,
                                }
                            }
                        }
                    ],
                    licPlateNumber: '',
                    licPlateState: '',
                    isActive: true
                }
            ];

            const inactivePlate = [
                {
                    paymentPlans: [
                        {
                            isSelected: false,
                            paymentPlanId: 99999,
                            settlementAmount: 20,
                            discountAmount: 5,
                            paidAmount: 3,
                            balanceAmount: 21,
                            status: '',
                            agency: null,
                            mobileAgency: null,
                            nextInstallmentAmount: 0,
                            nextInstallmentDate: '',
                            nextUpcomingInstallmentDate: '',
                            billingMethod: {
                                eftPaymentMethod: {
                                    accountType: null,
                                    name: null,
                                    routingNumber: null,
                                    accountNumber: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                creditCardPaymentMethod: {
                                    cardCode: null,
                                    cardNbr: null,
                                    expMonth: null,
                                    expYear: null,
                                    nameOnCard: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                address: {
                                    address1: null,
                                    city: null,
                                    country: null,
                                }
                            }
                        }
                    ],
                    licPlateNumber: '',
                    licPlateState: '',
                    isActive: true
                }
            ];

            const result = service.resetSelectedPlan(activePlate, inactivePlate, true);
            expect(result.paymentPlanId).toEqual(123456);
        });

        it('set 1st inactive Plan if no active plan is present', () => {
            const activePlate = [];
            const inactivePlate = [
                {
                    paymentPlans: [
                        {
                            isSelected: false,
                            paymentPlanId: 99999,
                            settlementAmount: 20,
                            discountAmount: 5,
                            paidAmount: 3,
                            balanceAmount: 21,
                            status: '',
                            agency: null,
                            mobileAgency: null,
                            nextInstallmentAmount: 0,
                            nextInstallmentDate: '',
                            nextUpcomingInstallmentDate: '',
                            billingMethod: {
                                eftPaymentMethod: {
                                    accountType: null,
                                    name: null,
                                    routingNumber: null,
                                    accountNumber: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                creditCardPaymentMethod: {
                                    cardCode: null,
                                    cardNbr: null,
                                    expMonth: null,
                                    expYear: null,
                                    nameOnCard: null,
                                    address1: null,
                                    city: null,
                                    country: null,
                                },
                                address: {
                                    address1: null,
                                    city: null,
                                    country: null,
                                }
                            }
                        }
                    ],
                    licPlateNumber: '',
                    licPlateState: '',
                    isActive: true
                }
            ];

            const result = service.resetSelectedPlan(activePlate, inactivePlate, false);
            expect(result.paymentPlanId).toEqual(99999);
        });
    });

    describe('setPlanDataInfo', () => {
        it('storing data to all webStorage ezTagFlow', () => {
            const planData = {
                billingMethod: {
                    eftPaymentMethod: null,
                    creditCardPaymentMethod: null,
                    address: null
                } as BillingMethod,
                selectedPaymentPlan: {
                    paymentPlanId: null,
                    settlementAmount: null,
                    discountAmount: null,
                    paidAmount: null,
                    balanceAmount: null,
                    status: null,
                    agency: null,
                    mobileAgency: null,
                    nextInstallmentAmount: null,
                    isSelected: null,

                    nextInstallmentDate: null,
                    nextUpcomingInstallmentDate: null,

                    billingMethod: {
                        eftPaymentMethod: null,
                        creditCardPaymentMethod: null,
                        address: null
                    } as BillingMethod
                },
                paymentAmount: null,
                addAccountFunds: null,
                addAccountFundsAmount: null,
            };
            service.setPlanDataInfo(planData, true);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(4);
        });

        it('storing data to all webStorage NOT ezTagFlow', () => {
            const planData = {
                billingMethod: {
                    eftPaymentMethod: null,
                    creditCardPaymentMethod: null,
                    address: null
                } as BillingMethod,
                selectedPaymentPlan: {
                    paymentPlanId: null,
                    settlementAmount: null,
                    discountAmount: null,
                    paidAmount: null,
                    balanceAmount: null,
                    status: null,
                    agency: null,
                    mobileAgency: null,
                    nextInstallmentAmount: null,
                    isSelected: null,

                    nextInstallmentDate: null,
                    nextUpcomingInstallmentDate: null,

                    billingMethod: {
                        eftPaymentMethod: null,
                        creditCardPaymentMethod: null,
                        address: null
                    } as BillingMethod
                },
                paymentAmount: null,
                addAccountFunds: null,
                addAccountFundsAmount: null,
            };
            service.setPlanDataInfo(planData, false);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(2);
        });
    });

    describe('setPlanDataInfo', () => {
        it('reset data to all webStorage ezTagFlow', () => {
            service.resetPlanDataInfo(true);
            expect(webStorage.removeEntry).toHaveBeenCalledTimes(5);
        });


        it('reset data to all webStorage NOT ezTagFlow', () => {
            service.resetPlanDataInfo(false);
            expect(webStorage.removeEntry).toHaveBeenCalledTimes(3);
        });
    });

    describe('getPlanDataInfo ', () => {
        it('call data from all webStorage ezTagFlow', () => {
            service.getPlanDataInfo(true);
            expect(webStorage.getValue).toHaveBeenCalledTimes(5);
        });


        it('call data from all webStorage NOT ezTagFlow', () => {
            service.getPlanDataInfo(false);
            expect(webStorage.getValue).toHaveBeenCalledTimes(5);
        });
    });

    describe('getPaymentResponse', () => {
        it('call get data from all webStorage ezTagFlow', () => {
            service.getPaymentResponse(true);
            expect(webStorage.getValue).toHaveBeenCalledTimes(1);
        });


        it('call get data from all webStorage NOT ezTagFlow', () => {
            service.getPaymentResponse(false);
            expect(webStorage.getValue).toHaveBeenCalledTimes(1);
        });
    });

    describe('setPaymentResponse ', () => {
        it('call set webStorage ezTagFlow', () => {
            const res = {
                originalRequest: {
                    eftPaymentMethod: {
                        accountType: null,
                        name: null,
                        routingNumber: null,
                        accountNumber: null,
                        address1: null,
                        city: null,
                        country: null,
                    },
                    creditCardPaymentMethod: {
                        cardCode: null,
                        cardNbr: null,
                        expMonth: null,
                        expYear: null,
                        nameOnCard: null,
                        address1: null,
                        city: null,
                        country: null,
                    },
                    creditCard: null,
                    amount: null,
                    email: null
                } as PaymentRequest
            } as PaymentResponse;

            service.setPaymentResponse(res, true);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
        });


        it('call set to all webStorage NOT ezTagFlow', () => {
            const res = {
                originalRequest: {
                    eftPaymentMethod: {
                        accountType: null,
                        name: null,
                        routingNumber: null,
                        accountNumber: null,
                        address1: null,
                        city: null,
                        country: null,
                    },
                    creditCardPaymentMethod: {
                        cardCode: null,
                        cardNbr: null,
                        expMonth: null,
                        expYear: null,
                        nameOnCard: null,
                        address1: null,
                        city: null,
                        country: null,
                    },
                    creditCard: null,
                    amount: null,
                    email: null
                } as PaymentRequest
            } as PaymentResponse;

            service.setPaymentResponse(res, false);
            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
        });
    });
});
