import { StateService } from '@uirouter/angular';
import { BillingType } from 'common/models';
import { } from 'jasmine';
import { cloneDeep, isEqual } from 'lodash';
import { webStorageConst } from '../../constants/module';
import { stateNames as missedATollStateNames } from '../constants';
import { FormattedViolationDataDTO, ViolationDataEntry } from '../interfaces';
import { MissedATollService } from './missedAToll.service';


describe('missedATollService', () => {

    let service: MissedATollService;
    let webStorage;
    let responseError;
    let state: StateService;

    let testStorage: {
        MISSED_A_TOLL_VIOLATION_INFORMATION_KEY: {
            formattedViolationData: {
                listOfViolations: {
                    invoices: {
                        fData: ViolationDataEntry[] | string;
                        mData: ViolationDataEntry[] | string;
                        hData: ViolationDataEntry[] | string;
                    };
                };
            };
        };
        MISSED_A_TOLL_VIOLATION_CURRENT_STEP: string;
    };


    beforeEach(() => {
        testStorage = {
            MISSED_A_TOLL_VIOLATION_INFORMATION_KEY: {
                formattedViolationData: {
                    listOfViolations: {
                        invoices: {
                            fData: [
                                { agencyCode: 'f', amountDue: 1 } as ViolationDataEntry,
                                { agencyCode: 'f', amountDue: 2 } as ViolationDataEntry,
                                { agencyCode: 'f', amountDue: 3 } as ViolationDataEntry,
                                { agencyCode: 'f', amountDue: 6 } as ViolationDataEntry
                            ],
                            mData: '[{"agencyCode": "m", "amountDue": 1}, ' +
                                '{"agencyCode": "m", "amountDue": 2}, ' +
                                '{"agencyCode": "m", "amountDue": 3}, ' +
                                '{"agencyCode": "m", "amountDue": 6}]',
                            hData: [
                                { agencyCode: 'h', amountDue: 1 } as ViolationDataEntry,
                                { agencyCode: 'h', amountDue: 2 } as ViolationDataEntry,
                                { agencyCode: 'h', amountDue: 3 } as ViolationDataEntry,
                                { agencyCode: 'h', amountDue: 6 } as ViolationDataEntry
                            ]
                        }
                    }
                }
            },
            MISSED_A_TOLL_VIOLATION_CURRENT_STEP: 'MissedAToll.Landing'
        };
    });

    beforeEach(() => {
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);
        responseError = jasmine.createSpyObj('responseError', ['displayAlertsFromResponse']);
        state = jasmine.createSpyObj('state', ['go']);
        (webStorage.getValue as jasmine.Spy).and.callFake((webStorageKey) => cloneDeep(testStorage[webStorageKey]));


        service = new MissedATollService(
            webStorage,
            responseError,
            state
        );
    });

    describe('getViolationInformation', () => {
        it('test that getting violation information from webstorage throws no errors due to known webstorage bug', () => {
            const data = {} as any;
            service['internalViolationInformatiion'] = data;
            const result = service.getViolationInformation();
            expect(result).toBe(data);
        });
    });
    describe('setViolationDataAndGenerateTotalAmountDue', () => {
        it('test parsing of data returned from MAT WS if cannot find invoice with agency code', () => {
            const listOfViolations = [
                {

                    agency: 'HCTRA',
                    violationId: 123456,
                    eventDateTime: new Date(),
                    balance: 258,
                    eventLocation: 'test',
                    mobileAgency: 'h'
                },
                {
                    agency: 'MCTRA',
                    violationId: 123456,
                    eventDateTime: new Date(),
                    balance: 321,
                    eventLocation: 'test',
                    mobileAgency: 'h'
                },
                {
                    agency: 'FBTRA',
                    violationId: 123456,
                    eventDateTime: new Date(),
                    balance: 741,
                    eventLocation: 'test',
                    mobileAgency: 'h'
                }
            ];
            const serviceFee = 8569.23;
            const parsedViolationInformation = service.setViolationDataAndGenerateTotalAmountDue(listOfViolations, serviceFee);

            expect(parsedViolationInformation.totalAmountDue)
                .toBe(listOfViolations[0].balance + listOfViolations[1].balance + listOfViolations[2].balance);
            expect(isEqual(parsedViolationInformation.listOfViolations.invoices[0].data, [{
                agencyCode: listOfViolations[0].agency,
                violationNumber: listOfViolations[0].violationId.toString(),
                violationDate: listOfViolations[0].eventDateTime,
                amountDue: listOfViolations[0].balance,
                location: listOfViolations[0].eventLocation,
                mobileAgency: listOfViolations[0].mobileAgency
            }])).toBeTruthy();
            expect(isEqual(parsedViolationInformation.listOfViolations.invoices[2].data, [{
                agencyCode: listOfViolations[2].agency,
                violationNumber: listOfViolations[2].violationId.toString(),
                violationDate: listOfViolations[2].eventDateTime,
                amountDue: listOfViolations[2].balance,
                location: listOfViolations[2].eventLocation,
                mobileAgency: listOfViolations[0].mobileAgency
            }])).toBeTruthy();
            expect(isEqual(parsedViolationInformation.listOfViolations.invoices[1].data, [{
                agencyCode: listOfViolations[1].agency,
                violationNumber: listOfViolations[1].violationId.toString(),
                violationDate: listOfViolations[1].eventDateTime,
                amountDue: listOfViolations[1].balance,
                location: listOfViolations[1].eventLocation,
                mobileAgency: listOfViolations[0].mobileAgency
            }])).toBeTruthy();
            expect(parsedViolationInformation.listOfViolations.invoices[0].total).toBe(258);
            expect(parsedViolationInformation.listOfViolations.invoices[1].total).toBe(321);
            expect(parsedViolationInformation.listOfViolations.invoices[2].total).toBe(741);
            expect(parsedViolationInformation.grandTotal)
                .toBe(parsedViolationInformation.listOfViolations.invoices[0].total +
                    parsedViolationInformation.listOfViolations.invoices[1].total +
                    parsedViolationInformation.listOfViolations.invoices[2].total + serviceFee);
        });
        it('test parsing of data returned from MAT WS if can find invoice with agency code', () => {
            const listOfViolations = [
                {

                    agency: 'HCTRA',
                    violationId: 123456,
                    eventDateTime: new Date(),
                    balance: 258,
                    eventLocation: 'test',
                    mobileAgency: 'h'
                },
                {
                    agency: 'HCTRA',
                    violationId: 123456,
                    eventDateTime: new Date(),
                    balance: 321,
                    eventLocation: 'test',
                    mobileAgency: 'h'
                },
                {
                    agency: 'FBTRA',
                    violationId: 123456,
                    eventDateTime: new Date(),
                    balance: 741,
                    eventLocation: 'test',
                    mobileAgency: 'h'
                }
            ];
            const serviceFee = 8569.23;
            const parsedViolationInformation = service.setViolationDataAndGenerateTotalAmountDue(listOfViolations, serviceFee);

            expect(parsedViolationInformation.totalAmountDue)
                .toBe(listOfViolations[0].balance + listOfViolations[1].balance + listOfViolations[2].balance);
            expect(isEqual(parsedViolationInformation.listOfViolations.invoices[0].data, [{
                agencyCode: listOfViolations[0].agency,
                violationNumber: listOfViolations[0].violationId.toString(),
                violationDate: listOfViolations[0].eventDateTime,
                amountDue: listOfViolations[0].balance,
                location: listOfViolations[0].eventLocation,
                mobileAgency: listOfViolations[0].mobileAgency
            },
            {
                agencyCode: listOfViolations[1].agency,
                violationNumber: listOfViolations[1].violationId.toString(),
                violationDate: listOfViolations[1].eventDateTime,
                amountDue: listOfViolations[1].balance,
                location: listOfViolations[1].eventLocation,
                mobileAgency: listOfViolations[0].mobileAgency
            }])).toBeTruthy();
            expect(isEqual(parsedViolationInformation.listOfViolations.invoices[1].data, [{
                agencyCode: listOfViolations[2].agency,
                violationNumber: listOfViolations[2].violationId.toString(),
                violationDate: listOfViolations[2].eventDateTime,
                amountDue: listOfViolations[2].balance,
                location: listOfViolations[2].eventLocation,
                mobileAgency: listOfViolations[0].mobileAgency
            }])).toBeTruthy();
            expect(parsedViolationInformation.listOfViolations.invoices[0].total).toBe(579);
            expect(parsedViolationInformation.listOfViolations.invoices[1].total).toBe(741);
            expect(parsedViolationInformation.grandTotal)
                .toBe(parsedViolationInformation.listOfViolations.invoices[0].total +
                    parsedViolationInformation.listOfViolations.invoices[1].total + serviceFee);
        });
    });
    describe('constructMatPaymentRequest', () => {
        it('test parsing of data returned from MAT Payment Processing when billing is eft', () => {
            const billingType = BillingType.Eft;

            let billingInfo = {};
            billingInfo = {
                eft: {
                    state: 'TX',
                    country: '',
                    cardNbr: '0005',
                    nameOnCard: 'assas',
                    address1: '123 Testing',
                    city: 'Houston',
                    zip: '77777',
                    accountNumber: '',
                    accountType: '',
                    account2: '',
                    accountBillingMethodId: '',
                    accountTypeDisplay: '',
                    address2: '',
                    address3: '',
                    address4: '',
                    nameOnBankAccount: '',
                    name: '',
                    routingNumber: '',
                    displayCountry: '',
                    international: false,
                    plus4: '',
                    primary: ''
                }
            };

            const violationInfomation = {
                lastMatPerformed: '2020-09-09T13:53:51-05:00',
                serviceFee: 0,
                licensePlate: 'TEST123',
                state: 'TX',
                formattedViolationData: {
                    totalAmountDue: 3.5,
                    grandTotal: 3.5,
                    listOfViolations: {
                        totalInvoices: 2,
                        invoices: [
                            {
                                agencyName: 'HCTRA',
                                total: 3.5,
                                data: [
                                    {
                                        agencyCode: 'HCTRA',
                                        violationNumber: '123456789',
                                        violationDate: '2014-08-15T17:27:35-05:00',
                                        amountDue: 1.75,
                                        location: 'WPT-MLP2W-03'
                                    },
                                    {
                                        agencyCode: 'HCTRA',
                                        violationNumber: '1234567898',
                                        violationDate: '2017-04-18T20:28:06-05:00',
                                        amountDue: 1.75,
                                        location: 'HDY-HDYS-04'
                                    }
                                ]
                            }
                        ]
                    }
                }
            };
            const violationList = {
                totalInvoices: 2,
                invoices: [
                    {
                        agencyName: 'HCTRA',
                        total: 3.5,
                        data: [
                            {
                                agencyCode: 'HCTRA',
                                violationNumber: '123456789',
                                violationDate: '2014-08-15T17:27:35-05:00',
                                amountDue: 1.75,
                                location: 'WPT-MLP2W-03'
                            },
                            {
                                agencyCode: 'HCTRA',
                                violationNumber: '1234567898',
                                violationDate: '2017-04-18T20:28:06-05:00',
                                amountDue: 1.75,
                                location: 'HDY-HDYS-04'
                            }
                        ]
                    }
                ]
            };
            const emailAddress = 'test@org.org';

            let resultBillingInfo = {};

            resultBillingInfo = {
                state: 'TX',
                country: '',
                cardNbr: '0005',
                nameOnCard: 'assas',
                address1: '123 Testing',
                city: 'Houston',
                zip: '77777',
                accountNumber: '',
                accountType: '',
                account2: '',
                accountBillingMethodId: '',
                accountTypeDisplay: '',
                address2: '',
                address3: '',
                address4: '',
                nameOnBankAccount: '',
                name: '',
                routingNumber: '',
                displayCountry: '',
                international: false,
                plus4: '',
                primary: ''
            };

            const resultViolationInfo = {
                agencyId: null,
                licPlateNum: 'TEST123',
                jurisdiction: 'TX',
                serviceFee: 0,
                notes: null,
                violations: [
                    {
                        agency: 'HCTRA',
                        violationId: '123456789',
                        eventDateTime: '2014-08-15T17:27:35-05:00',
                        eventLocation: 'WPT-MLP2W-03',
                        balance: 1.75,
                        inPayment: true
                    },
                    {
                        agency: 'HCTRA',
                        violationId: '1234567898',
                        eventDateTime: '2017-04-18T20:28:06-05:00',
                        eventLocation: 'HDY-HDYS-04',
                        balance: 1.75,
                        inPayment: true
                    }
                ],
                agencyPayments: [
                    {
                        agency: 'HCTRA',
                        paymentAmount: 3.5
                    }
                ],
                paymentType: ''
            };
            return service.constructMatPaymentRequest(billingType, billingInfo, violationInfomation, violationList, emailAddress)
                .then(result => {
                    expect(result.eft).toEqual(resultBillingInfo);
                    expect(result.emailAddress).toEqual(emailAddress);
                    expect(result.violationInfo).toEqual(resultViolationInfo);
                });
        });
        it('test parsing of data returned from MAT Payment Processing when billing is credit', () => {
            const billingType = BillingType.Credit;

            let billingInfo = {};
            billingInfo = {
                credit: {
                    state: 'TX',
                    country: '',
                    cardNbr: '0005',
                    nameOnCard: 'assas',
                    address1: '123 Testing',
                    city: 'Houston',
                    zip: '77777',
                    expMonth: 3,
                    cardExpires: '3/2022',
                    expYear: 2022,
                    paypageRegistrationId: '123456789',
                    cardCode: 'A',
                    isNewCard: true,
                    cardTypeDisplay: 'AMERICAN EXPRESS',
                    orderDisplay: ''
                }
            };

            const violationInfomation = {
                lastMatPerformed: '2020-09-09T13:53:51-05:00',
                serviceFee: 0,
                licensePlate: 'TEST123',
                state: 'TX',
                formattedViolationData: {
                    totalAmountDue: 3.5,
                    grandTotal: 3.5,
                    listOfViolations: {
                        totalInvoices: 2,
                        invoices: [
                            {
                                agencyName: 'HCTRA',
                                total: 3.5,
                                data: [
                                    {
                                        agencyCode: 'HCTRA',
                                        violationNumber: '123456789',
                                        violationDate: '2014-08-15T17:27:35-05:00',
                                        amountDue: 1.75,
                                        location: 'WPT-MLP2W-03'
                                    },
                                    {
                                        agencyCode: 'HCTRA',
                                        violationNumber: '1234567898',
                                        violationDate: '2017-04-18T20:28:06-05:00',
                                        amountDue: 1.75,
                                        location: 'HDY-HDYS-04'
                                    }
                                ]
                            }
                        ]
                    }
                }
            };
            const violationList = {
                totalInvoices: 2,
                invoices: [
                    {
                        agencyName: 'HCTRA',
                        total: 3.5,
                        data: [
                            {
                                agencyCode: 'HCTRA',
                                violationNumber: '123456789',
                                violationDate: '2014-08-15T17:27:35-05:00',
                                amountDue: 1.75,
                                location: 'WPT-MLP2W-03'
                            },
                            {
                                agencyCode: 'HCTRA',
                                violationNumber: '1234567898',
                                violationDate: '2017-04-18T20:28:06-05:00',
                                amountDue: 1.75,
                                location: 'HDY-HDYS-04'
                            }
                        ]
                    }
                ]
            };
            const emailAddress = 'test@org.org';

            let resultBillingInfo = {};

            resultBillingInfo = {
                state: 'TX',
                country: '',
                cardNbr: '0005',
                nameOnCard: 'assas',
                address1: '123 Testing',
                city: 'Houston',
                zip: '77777',
                expMonth: 3,
                cardExpires: '3/2022',
                paypageRegistrationId: '123456789',
                cardCode: 'A',
                isNewCard: true,
                cardTypeDisplay: 'AMERICAN EXPRESS',
                orderDisplay: '',
                expYear: 2022,
                type: 'A',
                creditCardNumber: '0005'
            };

            const resultViolationInfo = {
                agencyId: null,
                licPlateNum: 'TEST123',
                jurisdiction: 'TX',
                serviceFee: 0,
                notes: null,
                violations: [
                    {
                        agency: 'HCTRA',
                        violationId: '123456789',
                        eventDateTime: '2014-08-15T17:27:35-05:00',
                        eventLocation: 'WPT-MLP2W-03',
                        balance: 1.75,
                        inPayment: true
                    },
                    {
                        agency: 'HCTRA',
                        violationId: '1234567898',
                        eventDateTime: '2017-04-18T20:28:06-05:00',
                        eventLocation: 'HDY-HDYS-04',
                        balance: 1.75,
                        inPayment: true
                    }
                ],
                agencyPayments: [
                    {
                        agency: 'HCTRA',
                        paymentAmount: 3.5
                    }
                ],
                paymentType: 'A'
            };
            return service.constructMatPaymentRequest(billingType, billingInfo, violationInfomation, violationList, emailAddress)
                .then(result => {
                    expect(result.card).toEqual(resultBillingInfo);
                    expect(result.emailAddress).toEqual(emailAddress);
                    expect(result.violationInfo).toEqual(resultViolationInfo);
                });
        });

    });
    describe('saveViolationInformation', () => {
        it('should temp store with correct parameters', () => {
            //assemble
            const data = {
                formattedViolationData: 'formatted data' as any,
                lastMatPerformed: new Date(2001, 1, 1),
                licensePlate: 'fake plate',
                serviceFee: 123,
                state: 'fake state'
            };

            //Act
            service.saveViolationInformation(data);

            //Assert
            expect(service['internalViolationInformatiion']).toBe(data);

        });

    });
    describe('destroyViolationInformation', () => {
        it('should call webStorage.removeEntry 2 times with correct parameters', () => {
            //Act
            service.destroyViolationInformation();

            //Assert
            expect(webStorage.removeEntry).toHaveBeenCalledTimes(1);
            expect(webStorage.removeEntry.calls.argsFor(0)).toEqual([webStorageConst.missedATollCurrentStep]);
        });

    });

    describe('processSuccessSearch', () => {
        it('should save information if user is eligible', async () => {
            const licensePlateNumber = 'abc1234';
            const licenseState = 'AB';
            const response = {
                isUserEligible: true,
                listOfViolations: [{
                    agency: '',
                    mobileAgency: '',
                    balance: 2,
                    eventDateTime: '',
                    eventLocation: '',
                    inPayment: true,
                    violationId: ''
                }],
                serviceFee: 123,
                lastMatPerformed: new Date()
            };
            const result = {
                totalAmountDue: 2,
                listOfViolations: {
                    totalInvoices: 1,
                    invoices: [{
                        agencyName: '',
                        total: 2,
                        data: [{
                            agencyCode: '',
                            violationNumber: '',
                            violationDate: '',
                            amountDue: 2,
                            location: '',
                            mobileAgency: ''
                        }]
                    }]
                },
                grandTotal: 125
            } as FormattedViolationDataDTO;


            spyOn(service, 'setViolationDataAndGenerateTotalAmountDue').and.callThrough();
            spyOn(service, 'saveViolationInformation').and.callThrough();

            service.processSuccessSearch(response, licensePlateNumber, licenseState, { name: 'fakeNextState' });


            expect(service.setViolationDataAndGenerateTotalAmountDue).toHaveBeenCalledWith([{
                agency: '',
                mobileAgency: '',
                balance: 2,
                eventDateTime: '',
                eventLocation: '',
                inPayment: true,
                violationId: ''
            }], 123);

            expect(service.saveViolationInformation).toHaveBeenCalledWith({
                lastMatPerformed: response.lastMatPerformed,
                serviceFee: 123,
                licensePlate: 'ABC1234',
                state: 'AB',
                formattedViolationData: result
            });
        });

        it('should display alerts if user is eligible', async () => {
            const response = {
                isUserEligible: true,
                listOfViolations: [{
                    agency: '',
                    mobileAgency: '',
                    balance: 2,
                    eventDateTime: '',
                    eventLocation: '',
                    inPayment: true,
                    violationId: ''
                }],
                serviceFee: 123,
                lastMatPerformed: new Date()
            };
            const licensePlateNumber = 'abc1234';
            const licenseState = 'AB';

            (responseError.displayAlertsFromResponse as jasmine.Spy).and.callThrough();
            service.processSuccessSearch(response, licensePlateNumber, licenseState, { name: 'fakeNextState' });

            expect(responseError.displayAlertsFromResponse).toHaveBeenCalledWith(response, true);
        });

        it('should go to next state if user is eligible with nextState provided', async () => {
            const response = {
                isUserEligible: true,
                listOfViolations: [{
                    agency: '',
                    mobileAgency: '',
                    balance: 2,
                    eventDateTime: '',
                    eventLocation: '',
                    inPayment: true,
                    violationId: ''
                }],
                serviceFee: 123,
                lastMatPerformed: new Date()
            };
            const licensePlateNumber = 'abc1234';
            const licenseState = 'AB';

            (state.go as jasmine.Spy).and.callThrough();
            service.processSuccessSearch(response, licensePlateNumber, licenseState, { name: 'fakeNextState' });

            expect(state.go).toHaveBeenCalledWith({ name: 'fakeNextState' }, {}, { custom: { isExplicitlyAllowedTransition: true } });
        });

        it('should go to next state if user is eligible with nextState NOT provided', async () => {
            const response = {
                isUserEligible: true,
                listOfViolations: [{
                    agency: '',
                    mobileAgency: '',
                    balance: 2,
                    eventDateTime: '',
                    eventLocation: '',
                    inPayment: true,
                    violationId: ''
                }],
                serviceFee: 123,
                lastMatPerformed: new Date()
            };
            const licensePlateNumber = 'abc1234';
            const licenseState = 'AB';

            (state.go as jasmine.Spy).and.callThrough();
            service.processSuccessSearch(response, licensePlateNumber, licenseState);

            expect(state.go).toHaveBeenCalledWith(missedATollStateNames.Grid, {}, { custom: { isExplicitlyAllowedTransition: true } });

        });
    });
});
