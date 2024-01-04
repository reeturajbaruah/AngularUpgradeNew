hctraMocks = {
    stringUtilsService: function () {
        return {
            getUrlParameter: () => '',
            getParameterArray: (queryString) => []
        }
    },
    broadcastSubmissionService: function () {
        return {
            broadcast: function () {
                return {
                    then: function (cb) {
                        cb();
                        return {
                            catch: function () { }
                        }
                    }
                };
            }
        };
    },
    dollarq: function () {
        return {
            defer: function () {
                return {
                    promise: "promise"
                };
            },
        };
    },
    rxjsService: function () {
        return {
            Rx: {
                Subject: function () { }
            }
        }
    },
    eprotectIframeClientService: function () {
        return {
            EprotectIframeClient: function (config) { }
        }
    },
    siteVerbiage: function () {
        return {
            genericErrorMsg: "generic error message"
        };
    },
    stateStackMemoryService: function () {
        return '';
    },
    $rootScope: function (previousState) {
        return {
            previousState: previousState
        }
    },
    fake$location: function (inLocation) {
        return inLocation;
    },
    $location: function (setUrl) {
        setUrl = setUrl || { value: "http://localhost" };
        return {
            protocol: function() {
                return "http";
            },
            port: function() {
                return 80;
            },
            url: function (inUrl) {
                setUrl.value = inUrl;
                if (setUrl.testUrl)
                    return setUrl.testUrl;
            },
            absUrl: function () {
                return "https://wdev-m.hctra.pri/Home";
            },
            search: function (parameter, value) {
                if (parameter) {
                    if (value === "") {
                        setUrl.deleteSuccess = true;
                    }
                }
                return {
                    id: "45DSGFTG7876GHH456HDWRS2",
                    categoryPath: setUrl.categoryPath,
                    articlePath: setUrl.articlePath,
                    token: setUrl.token
                };
            },
            host: function () {
                return "localhost";
            },
            hash: function () {
                if (setUrl.fromRates) {
                    return "Hardy Toll Road";
                }
                return "hashValue";
            },
            path: function () {
                if (setUrl.testPath)
                    return setUrl.testPath;
            },
            replace: function () {
                return '';
            },
            state: function() {

            }
        };
    },
    objectUtilService: function () {
        return {
            areEqual: function () {
                return;
            },
            deepCompare: function () {
                return;
            },
            clearShallowObject: function () {
                return;
            },
            toLowerCaseKeys: function (objIn) {
                return objIn;
            },
            toCapitalizedCaseKeys: function (objIn) {
                return objIn;
            },
            hasAnyOfKeysInList: function () {
                return;
            }
        };
    },
    javaObjectUtilService: function () {
        return {
            isEmpty: function () {
                return false;
            }
        };
    },
    fake$state: function (inState) {
        var state = inState;

        return state;
    },
    $state: function (inState) {
        var state = {
            go: function (toState, urlParams) {
                inState.value = toState;
                inState.params = urlParams;
            },
            is: function (currentState) {
                return true;
            },
            get: function (toState) {
                return [
                    {
					    url: '/Home',
					    name: 'Home',
					}, {
					    url: '/AccountSummary',
					    name: 'AccountSummary',
					}, {
					    url: '/ManageVehicles',
					    name: 'ManageVehicles',
					}, {
					    url: '/TagReceipt',
					    name: 'TagReceipt',
					}, {
					    url: '/Agreement',
					    name: 'CloseAccount.Agreement',
					}, {
					    url: '/Refund',
					    name: 'CloseAccount.Refund',
					}, {
					    url: '/CloseAccount/CheckInformation',
					    name: 'AccountInformationParent.CloseAccountCheck',
					}, {
					    url: '/CloseAccount/CreditInformation',
					    name: 'AccountInformationParent.CloseAccountCredit',
					}, {
					    url: '/CloseAccount/SaveBillingInformation',
					    name: 'AccountInformationParent.CloseAccountSaveBillingInformation',
					}, {
					    url: '/Review',
					    name: 'CloseAccount.PendingReview',
					},
                ];
            },
            $current: {
                name: "",
                settings: {}
            },
            current: {
                cms: {
                    path: '',
                    fields: '',
                    helpSupportTitlePath: '/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage'
                },
                name: inState ? inState.name : ""
            }
            //var stateList = [];
            //var mockStateNames = hctraMocks.stateNames();
            //var mockUrls = hctraMocks.routes();
            //angular.forEach(mockUrls, function (mu) {
            //	angular.forEach(mockStateNames, function (msn) {
            //		if (mu == msn) {
            //			var state = {};
            //			state.name = msn;
            //			state.url = mu;
            //			stateList.push(state);
            //		};
            //	});
            //});
            //return stateList;			
        };

        if (inState.statePath === 'ratesController') {
            state.current.cms.path = '/sitecore/content/HCTRA/TravelTools/RatesPage/TollRoadsSection';
        }

        return state;
    },
    countryConversionService: function () {
        return {
            countryNameToCode: function () {
                return;
            },
            countryCodeToName: function () {
                return;
            }
        }
    },
    authChannel: function (loginTouched) {
        return {
            logIn: function (response) {
                loginTouched.value = true;
                loginTouched.response = response;
            },
            onLogIn: function () { },
            logOut: function () {
                loginTouched.logout = true;
            },
            onlogOut: function () { }
        };
    },
//    stateChangeStartChannel: function () {
//        return {
//            onStateChangeStart: function () { }
//        };
//    },
    operatingSystemSnifferService: function (osSnifferConfig) {
        return {
            getOs: function () { },
            getOS: function () { },
            isDesktopOs: function () { if (osSnifferConfig) { return osSnifferConfig.isDesktop; } else { return true; } },
            getOsFull: function () { return osSnifferConfig.osName },
            getDeviceFull: function () { return osSnifferConfig.deviceName }
        }
    },
    missedATollService: function () {
        return {
            destroyViolationInformation: function () {
                return;
            },
            saveStep: function (b) {
                return b;
            },
            saveViolationInformation: function (b) {
                return b;
            }
        };
    },
    stringCheckService: function () {
        return {
            isFloat: function (numberString) {
                if (numberString && !isNaN(parseFloat(numberString)) && isFinite(numberString)) {
                    return true;
                } else {
                    return false;
                }
            }
        };
    },
    stringUtilsService: function () {
        return {
            getUrlParameter: () => '',
            getParameterObject: function (queryString) {
                //spyon
                return;
            },
            getParameterArray: (queryString) => []
        };
    },
    linkLookupService: function (linkLookupServiceObject) {
        return {
            cmsIdDictionary: linkLookupServiceObject,
            articleLookup: function (article) {
                linkLookupServiceObject.article = article;
                return linkLookupServiceObject.url;
            },
            articleLookupById: function () {
                if (linkLookupServiceObject) {
                    return linkLookupServiceObject.id;
                }
            }
        };
    },
    CurrentUser: function () {
        var user = { acctId: 0 };
        var fakeWebStorage = {};
        return {
            setCurrentUser: function () { angular.copy(fakeWebStorage, user); },
            getCurrentUser: function () { return angular.copy(fakeWebStorage); },
            updateCurrentUser: function (response) {
                if (response) {
                    angular.copy(response, fakeWebStorage);
                    angular.copy(fakeWebStorage, user);
                }
            },
            destroyCurrentUser: function () {
                user = { acctId: 0 };
                fakeWebStorage = { acctId: 0 };
            }
        };
    },
    cmsUtilService: function () {
        return {
            addDisplayDates: function () {
                return;
            },
            parseMediaId: function () {
                return;
            },
            generateFileSrc: function (b) {
                return b;
            },
            processItemId: function () {
                return;
            },
            getFileSrcPromise: function () {
                return;
            },
            generateFileSrcFromPromiseResponse: function () {
                return;
            },
            parseAltText: function (b) {
                return b;
            },
            parseCmsDate: function (b) {
                return new Date(Date.UTC(2016, 7, 10));
            },
            convertStartEndDates: function (b) {
                return b;
            },
            formatDisplayDates: function (b) {
                return "formatted string";
            },
            processArticleArray: function (b) {
                return b;
            }
        }
    },
    suspendedAccountService: function (inObject) {
        return {
            getFirstSuspendedAccountState: function () {
                return {
                    then: function (cb) {
                        cb("suspendedState");
                    }
                }
            },
            getBillingAmount: function () {
                return inObject.totalPayment;
            },
            saveStep: function () {
                return;
            },
            isEmpty: function () {
                return false;
            },
            destroySuspendedWizardInformation: function () { },
            saveBillingAmount: function () { },
            onPaymentCancel: function () { },
            onFirstFormEdit: function (scope, cb) {
                cb();
            },
            destroyPciInfo: function () { },
            setPciInfo: function () { }
        }
    },
    vehicleWizardDirectorService: function () {
        return {
            saveStepAndContinueToNextStep: function (currentState, action) {
                if (action === "DeleteCurrentVehicleWithNoVehiclesRemaining") {
                    return "DeleteCurrentVehicleWithNoVehiclesRemaining";
                } else if (action === "DeleteCurrentVehicleWithVehiclesRemaining") {
                    return "DeleteCurrentVehicleWithVehiclesRemaining";
                } else if ("DeleteVehicleWithNoVehiclesRemaining") {
                    return ("DeleteVehicleWithNoVehiclesRemaining");
                } else {
                    return ("");
                }
            },
            destroyVehicleWizardInformation: function () {
                return;
            },
            redirectToCorrectState: function (currentState) {
                return false;
            }
        };
    },
    responsiveService: function (setMobile) {
        return {
            isMobile: function () {
                return setMobile;
            },
            isDesktop: function () {
                return !setMobile;
            }
        };
    },
    environmentConfig: function () {
        return {
            accountActivityMaxDaysInSearch: 365,
            accountActivityTransactonsDefaultVehicleValue: "L",
            arcGisMapLink: 'http://google.com',
            rssConfig: {
                news: {
                    Path: "/content/HCTRA/Home/HomePage/NewsSection/NewsFeed",
                    Locations: ["inHomeNews", "inLatestNews"]
                },
                closures: {
                    Path: "/content/HCTRA/Home/HomePage/MajorClosuresSection/ClosuresFeed",
                    NeedsDate: true,
                    Locations: ["inHomeClosures"]
                },
                customClosures: {
                    Path: "/content/HCTRA/Home/HomePage/MajorClosuresSection/ClosuresFeed",
                    NeedsDate: true,
                    Locations: ["inMajorClosures"]
                }
            },
            vantivConfig: {
                PayPageID: 'payPageId',
                ReportGroup: 'reportGroup',
                TimeoutMilliSeconds: 'timeoutMilliSeconds',
                IFrameUrl: 'iframeUrl',
                IframeEnabled: true
            }
        };
    },
    loggingService: function () {
        return {
            logMessage: function (errorMessage, stackTrace, cause) {
                return {
                    errorMessage: errorMessage,
                    stackTrace: stackTrace,
                    cause: cause
                };
            }
        }
    },
    errorInterceptorService: function (errorMessageDictionary) {
        var _loggingEnabled = true;
        if (errorMessageDictionary == null) {
            errorMessageDictionary = {};
        }

        return {
            toggleFeature: function (messagesToSilence, loggingEnabled) {
                _loggingEnabled = loggingEnabled;
                messagesToSilence.forEach(function (element) { errorMessageDictionary[element] = false; });
                return errorMessageDictionary;
            },
            shouldMessageTriggerLogging: function (message) {
                return errorMessageDictionary[message] ? true : false;
            },
            shouldLoggingBeEnabled: function () {
                return _loggingEnabled ? true : false;
            }
        }
    },
    perfToggle: function () {
        return {};
    },
    serverConstants: function () {
        return {
            maintenanceKey: "",
        currentlyDownloadedWebUiVersion: "",
        appNameHeaderKey: "",
        appNameWebsiteMobileHeaderValue: "",
        appNameWebsiteDesktopHeaderValue: "",
        appNameWebsiteStorefrontHeaderValue: "",
        versionHeaderKey: "",
        latestWebUiVersionHeaderKey: ""
        };
    },
    hctraGlobalFromIndexCshtml: function () {
        return {
            //omnitureEnv: omnitureEnv
        };
    },
    $stateParams: function () {
        return {
            secq: 'What is your favorite color?'
        };
    },
    $timeout: function (inTimer) {
        return function (func, length) {
            inTimer.func = func;
            //console.log(typeof (length));
            if (typeof (length) === 'undefined') {
                inTimer.value = 0;
            } else {
                inTimer.value = length;
            }
            func();
        };
    },
    $anchorScroll: function (scrollTo) {
        return function (inScroll) {
            scrollTo.value = inScroll;
        }
    },
    $sce: function (inSce) {
        return {
            trustAsHtml: function (trustedHtml) {
                inSce.value = trustedHtml;
            }
        }
    },
    genericRepo: function (inData) {
        return {
            dataFactory: {
                eftValidateRouting: function () { },
                saveBillingInformation: function () {
                    return {
                        then: function (cb) {
                            cb(inData.value);
                        }
                    }
                },
                LogVantivRequest: function () { },
                LogVantivResponse: function () { },
                StartStorefrontDBSession: function () {
                    return {
                        then: function (cb) {
                            cb({
                                dbResponse: 12,
                                errors: [],
                            });
                        }
                    }
                },
                EndStorefrontDBSession: function () {
                    return {
                        then: function (cb) {
                            cb({
                                dbResponse: 12,
                                errors: [],
                            });
                        }
                    }
                },
                confirmAddTags: function () {
                    return {
                        then: function (cb) {
                            cb({ errors: [], alerts: [] });
                        }
                    }
                },
                getLandingData: function () {
                    return {
                        then: function (cb) {
                            cb({
                                errors: [],
                                alerts: [],
                                states: [],
                                cmsResponse: '{"Title":"test","Children":[{"Title":"test","LongDescription":"test"},{"Title":"test","LongDescription":"test","Image":"test"}]}'
                            });
                        }
                    }
                },
                submitAccount: function () {
                    return {
                        then: function (cb) {
                            cb({
                                securityQuestionID: 4,
                                dbSessionId: "DFNHSETH356SRHSDRH",
                                loginId: "hellome",
                                securityQuestion: "What is life?",
                                acctId: 51651681,
                                emailAddress: "j@j.com",
                                errors: []
                            });
                        }
                    }
                },
                executeCmsPaging: function () {
                    return {
                        then: function (cb) {
                            cb({
                                numberOfPages: 5,
                                numberOfArticles: 500,
                                articles: [1, 2, 3, 6, 5, 4, 7],
                                errors: []
                            });
                        }
                    }
                },
                saveInformation: function (data) {
                    return {
                        then: function (cb) {
                            cb({
                                accountId: '12324',
                                accountActivity: 'A',
                                newAccountStep: {
                                    accountComplete: true
                                },
                                errors: [],
                                alerts: []
                            });
                        }
                    }
                },
                loadArchivePage: function () {
                    return {
                        then: function (cb) {
                            cb(inData.loadArchivePageData);
                        }
                    }
                },
                setupInvoicePage: function () {
                    return {
                        then: function (cb) {
                            cb({ invoiceDates: ["September 2015", "October 2015", "January 2016"], errors: [], alerts: [] });
                        }
                    }
                },
                checkMatEligibility: function () {
                    return {
                        then: function (cb) {
                            cb({
                                isUserEligible: true, listOfViolations: [
                                    {
                                        agency: "TEST",
                                        violationId: 123456,
                                        eventDateTime: new Date(),
                                        balance: 258,
                                        eventLocation: "test",
                                    }
                                ], serviceFee: 12.3, errors: [], alerts: [], lastMatPerformed: "10/10/2000"
                            });
                        }
                    }
                },
                getCmsPageById: function () {
                    return {
                        then: function (cb) {
                            cb({ cmsResponse: '{"test":"value","LongDescription":"test","ShortDescription":"ouch", "Children": "[1,2,3]", "Parameters": ""}', errors: [], alerts: [] });

                            return {
                                then: function (cb) { },
                                finally: function (cb) { cb }
                            };
                        }
                    };
                },

                getCmsPagesByIds: function (req) {
                    return {
                        then: function (cb) {
                            cb({responses: req.requests.map(x => ({ cmsResponse: '{"test":"value","LongDescription":"test","ShortDescription":"ouch", "Children": "[1,2,3]", "Parameters": ""}'})), errors: [], alerts: [] });

                            return {
                                then: function (cb) { },
                                finally: function (cb) { cb }
                            };
                        }
                    };
                },
                getCmsPages: function (request) {

                    return {
                        then: function (cb) {
                            cb({ cmsResponse: '{"test":"value"}', errors: [], alerts: [] });
                        }
                    }
                },
                getMonthlyInvoice: function () {
                    return {
                        then: function (cb) {
                            cb({
                                records: [],
                                errors: []
                            });
                        }
                    }
                },
                getInvoice: function (inData) {
                    return {
                        then: function (cb) {
                            cb({
                                invoiceNumber: "2344928",
                                outstandingInvoices: [{ description: "Beginning Balance", amount: 34.78 }],
                                balSumBalanceRequirement: 344.21,
                                balSumCurrentBalance: 19.42,
                                balSumReplenishmentAmt: 476.47,
                                invoiceSummary: [],
                                address: {
                                    name: "Marc Harris"
                                },
                                phoneNumber: {
                                    homePhoneNumber: "423-336-7701"
                                },
                                errors: [],
                                alerts: []
                            });
                        }
                    }
                },
                oneTimePaymentGetBillingInfo: function () {
                    return {
                        then: function (cb) {
                            cb({
                                errors: [],
                                balanceAmt: -125.36,
                                rebillAmt: 0.00
                            });
                        }
                    }
                },
                getSuspendedAccountData:
					function () {
					    return {
					        then: function (cb) {
					            cb({
					                errors: [],
					                balanceAmt: -125.00,
					                rebillAmt: 20.00,
					                acctActivity: "S",
					                suspensionFlag: true,
					                violationFlag: false
					            });
					        }
					    }
					},
                setupReceipts:
					function () {
					    return {
					        then: function (cb) {
					            cb({
					                errors: [],
					                receiptHeaders: [
                                        { date: "2015" },
                                        { date: "2016" },
                                        { date: "2017" }
					                ]
					            });
					        }
					    }
					},
                getAccountFromEzTag:
					function () {
					    return {
					        then: function (cb) {
					            cb({
					                acctId: 80051,
					                currentBalance: 50.50
					            });
					        }
					    }
					},
                calculateActivationFee:
					function () {
					    return {
					        then: function (cb) {
					            cb({
					                tagAmount: 20
					            });
					        }
					    }
					},
                submitEmail: function (data) {
                    data = JSON.parse(data);
                    if (data.test === "correct") {
                        return {
                            then: function (cb) {
                                cb({ emailAddress: 'somebody@gmasil.com', errors: [] });
                            }
                        };
                    } else {
                        return {
                            then: function (cb) {
                                cb({ emailAddress: '', errors: ['Some error'] });
                            }
                        };
                    }
                },
                resetPassword: function (rpKey) {
                    if (rpKey === 'acctActivity') {
                        return {
                            then: function (cb) {
                                cb({ acctId: 999999, acctActivity: 'P', newAccountStep: { currentStep: 2 }, errors: [] });
                            }
                        };
                    } else {
                        if (inData) {
                            inData.requestData = rpKey;
                        }
                        return {
                            then: function (cb) {
                                cb({ acctId: 999999, acctActivity: 'P', newAccountStep: { currentStep: 2 }, errors: [] });
                            }
                        };
                    }
                },
                getStates: function () {
                    return {
                        then: function (cb) {
                            cb({ states: ["TX", "OK", "LA"], errors: [] });
                        }
                    };
                },
                getTagAuthorities: function () {
                    return {
                        then: function (cb) {
                            cb({ authorities: ["HCTRA", "TEX"], errors: [] });
                        }
                    };
                },
                setupFpAccount: function () {
                    return {
                        then: function (cb) {
                            cb({ authorities: ["HCTRA", "TEX"], states: ["TX", "OK", "LA"], errors: [] });
                        }
                    };
                },
                getSecurityQuestions: function () {
                    return {
                        then: function (cb) {
                            cb({
                                securityQuestions: [{ securityQuestion: "What is your favorite color?", securityQuestionID: 1 },
									{ securityQuestion: "What is your mother's middle name?", securityQuestionID: 2 },
									{ securityQuestion: "Who is your doctor?", securityQuestionID: 3 }],
                                errors: []
                            });
                        }
                    };
                },
                submitSecurityAnswer: function (data) {
                    data = JSON.parse(data);
                    if (data.answer === "black") {
                        return {
                            then: function (cb) {
                                cb({ userId: 'TTC123', securityAnswer: 'whatupdude', errors: [] });
                            }
                        };
                    } else {
                        return {
                            then: function (cb) {
                                cb({ userId: '', errors: ['Some error'] });
                            }
                        };
                    }
                },
                emailSecurityQuestion: function (inId) {
                    inId = JSON.parse(inId);
                    return {
                        then: function (cb) {
                            inData.value = inId.sentId;
                            cb({ securityQuestion: "What is your favorite color", acctId: 999999, securityQuestionId: 4, dbSessionId: '68168ARHARFHB64684', emailAddress: 'j@j.com', loginId: 'tset03', errors: [] });
                        }
                    };
                },
                submitAnswer: function (data) {
                    data = JSON.parse(data);
                    if (data.answer === "black") {
                        return {
                            then: function (cb) {
                                cb({ userId: 'TTC123', errors: [] });
                            }
                        };
                    } else {
                        return {
                            then: function (cb) {
                                cb({ userId: '', errors: ['Some error'] });
                            }
                        };
                    }
                },

                getAccountInformation: function () {
                    return {
                        then: function (cb) {
                            cb({
                                billingInfo: {
                                    address: null,
                                    billingInfoExists: true,
                                    billingType: 0,
                                    billingTypeCode: "C",
                                    billingTypeDisplay: "CREDIT",
                                    cards: [{
                                        address1: "1208 Oak Creek",
                                        address2: null,
                                        cardCode: "V",
                                        cardExpires: "01/2017",
                                        cardExpiresDate: "2017-01-01T13:09:13.369-06:00",
                                        cardNbr: "************-0013",
                                        cardType: 0,
                                        city: "CONROE",
                                        country: "USA",
                                        name: "AnotherTest",
                                        nameOnCard: "AnotherTest",
                                        paymentAmount: 0,
                                        paymentType: 0,
                                        plus4: "2124",
                                        state: "TX",
                                        zip: "77301",
                                        zipCode: "77301"
                                    }],
                                    creditCard: true,
                                    eft: null
                                },
                                personalInfo: {},
                                errors: []
                            });
                        }
                    };
                },

                getManagePaymentInformation: function () {
                    return {
                        then: function (cb) {
                            cb({
                                billingInfo: {
                                    address: null,
                                    billingInfoExists: true,
                                    billingType: 0,
                                    billingTypeCode: "C",
                                    billingTypeDisplay: "CREDIT",
                                    cards: [{
                                        address1: "1208 Oak Creek",
                                        address2: null,
                                        cardCode: "V",
                                        cardExpires: "01/2017",
                                        cardExpiresDate: "2017-01-01T13:09:13.369-06:00",
                                        cardNbr: "************-0013",
                                        cardType: 0,
                                        city: "CONROE",
                                        country: "USA",
                                        name: "AnotherTest",
                                        nameOnCard: "AnotherTest",
                                        paymentAmount: 0,
                                        paymentType: 0,
                                        plus4: "2124",
                                        state: "TX",
                                        zip: "77301",
                                        zipCode: "77301"
                                    }],
                                    creditCard: true,
                                    eft: null,
                                }
								, errors: []
                            });
                        }
                    };
                },

                getCreateAccountSummary: function () {
                    return {
                        then: function (cb) {
                            cb({
                                billingInfo: {
                                    address: null,
                                    billingInfoExists: true,
                                    billingType: 0,
                                    billingTypeCode: "C",
                                    billingTypeDisplay: "credit card",
                                    cards: [{
                                        address1: "1208 Oak Creek",
                                        address2: null,
                                        cardCode: "V",
                                        cardExpires: "01/2017",
                                        cardExpiresDate: "2017-01-01T13:09:13.369-06:00",
                                        cardNbr: "************-0013",
                                        cardType: 0,
                                        city: "CONROE",
                                        country: "USA",
                                        name: "AnotherTest",
                                        nameOnCard: "AnotherTest",
                                        paymentAmount: 0,
                                        paymentType: 0,
                                        plus4: "2124",
                                        state: "TX",
                                        zip: "77301",
                                        zipCode: "77301"
                                    }],
                                    creditCard: true,
                                    eft: null
                                }, personalInfo: {
                                    personalInfoExists: true,
                                    firstName: "FirstName"
                                }, accountTags: {
                                    vehicleListExists: true
                                },
                                errors: []
                            });
                        }
                    };
                },
                getBillingInfo: function () {
                    return {
                        then: function (cb) {
                            cb({
                                address: null,
                                billingInfoExists: true,
                                billingType: 0,
                                billingTypeCode: "C",
                                billingTypeDisplay: "credit card",
                                cards: [{
                                    address1: "1208 Oak Creek",
                                    address2: null,
                                    cardCode: "V",
                                    cardExpires: "01/2017",
                                    cardExpiresDate: "2017-01-01T13:09:13.369-06:00",
                                    cardNbr: "************-0013",
                                    cardType: 0,
                                    city: "CONROE",
                                    country: "USA",
                                    name: "AnotherTest",
                                    nameOnCard: "AnotherTest",
                                    paymentAmount: 0,
                                    paymentType: 0,
                                    plus4: "2124",
                                    state: "TX",
                                    zip: "77301",
                                    zipCode: "77301"
                                }],
                                creditCard: true,
                                eft: null
                            });
                        }
                    };
                },
                getPersonalInfo: function () {
                    return {
                        then: function (cb) {
                            cb({
                                personalInfoExists: true,
                                accountInfoExists: true,
                                firstName: "FirstName",
                                mailingAddress: {},
                                errors: [],
                                authorizedContactList: [],
                            });
                        }
                    };
                },
                updatePersonalInfo: function () {
                    return {
                        then: function (cb) {
                            cb({
                                errors: [],
                            });
                        }
                    };
                },
                getAccountTags: function () {
                    return {
                        then: function (cb) {
                            cb({ accountTags: { vehicleListExists: true } });
                        }
                    };
                },

                getAccountActivityVM: function () {
                    return {
                        then: function (cb) {
                            var tranactionListItem = { key: 0, value: "All Transactions" };
                            var transactionListItems = [tranactionListItem];
                            var vehicleNickNameItem = 'test';
                            var vehicleNickName = [vehicleNickNameItem];
                            cb({
                                currentBalance: 100,
                                vehicleNickName: 'Bernie',
                                transactionListItems: transactionListItems,
                                vehicleNickName: vehicleNickName,
                                errors: []
                            });
                        }
                    };
                },

                searchAccountActivity: function () {
                    return {
                        then: function (cb) {
                            cb({
                                totalRecordsCount: 30,
                                recordsShownCount: 10,
                                endOfRecords: true,
                                records: [
                                {
                                    amount: -0.9,
                                    licensePlate: "GFH2407",
                                    licenseState: "TX",
                                    licenseStateAndPlate: "TX-GFH2407",
                                    locationName: "SAM HOUSTON TOLL ROAD-SAM HOUSTON SOUTH PLAZA-SHT-BELR-61 SOUTH",
                                    postedDate: "2018-05-25T12:52:43-05:00",
                                    transType: "AVI Transaction",
                                    trxnDate: "2018-04-29T16:53:38-05:00",
                                    vehicleClassCode: "2",
                                    vehicleNickName: "TX-GFH2407"
                                },
                                    {
                                        amount: -1.5,
                                        licensePlate: "GFH2407",
                                        licenseState: "TX",
                                        licenseStateAndPlate: "TX-GFH2407",
                                        locationName: "SAM HOUSTON TOLL ROAD-SAM HOUSTON CENTRAL PLAZA-SHT-SAMC-12 NORTH",
                                        postedDate: "2018-05-24T23:42:19-05:00",
                                        transType: "AVI Transaction",
                                        trxnDate: "2018-04-27T09:38:06-05:00",
                                        vehicleClassCode: "2",
                                        vehicleNickName: "TX-GFH2407"
                                    }
                                ],
                                errors: [],
                                hasTollWaivers: true
                            });
                        }
                    };
                },
                getPdfReport: function () {
                    return {
                        then: function (cb) {
                            cb('test');
                        }
                    };
                },
                getCreateAccountReceipt: function () {
                    return {
                        then: function (cb) {
                            cb({
                                billingInfo: { billingInfoExists: true },
                                personalInfo: { personalInfoExists: true },
                                accountTags: { accountTagsExists: true },
                                orderShippingTime: "5-10 business days",
                                errors: [],
                                alerts: []
                            })
                        }
                    }
                },
                checkoutPayment: function (transactionObj) {
                    return {
                        then: function (cb) {
                            cb({
                                transactionId: transactionObj.transactionId,
                                ezTagTransaction: {
                                    tagSalesAmt: 30,
                                    depositAmt: 80,
                                    totalAmt: 80,
                                    tagCostExists: true,
                                    transactionId: transactionObj.transactionId
                                },
                                errors: []
                            })
                        }
                    }
                },
                setupStatementPage: function () {
                    return {
                        then: function (cb) {
                            cb({
                                dates: ["January, 2014", "March, 2014", "April, 2015"],
                                errors: [],
                                alerts: []
                            })
                        }
                    }
                },
                makePayment: function (payment) {
                    return {
                        then: function (cb) {
                            cb({
                                tagSalesAmt: payment.tagSalesAmt,
                                depositAmt: payment.depositAmt,
                                totalAmt: payment.totalAmt,
                                transactionId: payment.transactionId,
                                deliveryMethod: payment.deliveryMethod,
                                errors: []
                            })
                        }
                    }
                },
                addPaymentBankAccount: function (payment) {
                    return {
                        then: function (cb) {
                            cb({
                                tagSalesAmt: payment.tagSalesAmt,
                                depositAmt: payment.depositAmt,
                                totalAmt: payment.totalAmt,
                                transactionId: payment.transactionId,
                                deliveryMethod: payment.deliveryMethod,
                                errors: []
                            })
                        }
                    }
                },
                addPaymentCreditCard: function (payment) {
                    return {
                        then: function (cb) {
                            cb({
                                tagSalesAmt: payment.tagSalesAmt,
                                depositAmt: payment.depositAmt,
                                totalAmt: payment.totalAmt,
                                transactionId: payment.transactionId,
                                deliveryMethod: payment.deliveryMethod,
                                errors: []
                            })
                        }
                    }
                },
                creditCardType: function () {
                    return {
                        then: function (cb) {
                            cb({
                                creditCardTypes: [
									{ cardCode: "A", cardName: "American Express" },
									{ cardCode: "D", cardName: "Discover" },
									{ cardCode: "M", cardName: "MasterCard" },
									{ cardCode: "V", cardName: "Visa" },
                                ],
                                errors: []
                            })
                        }
                    }
                },
                getVehicleMakes: function () {
                    return {
                        then: function (cb) {
                            cb({
                                getVehicleMakes: [

                                ],
                                errors: []
                            })
                        }
                    }
                },
                deleteEZTag: function () {
                    return {
                        then: function (cb) {
                            cb({
                                transactionId: 1234567,
                                tagSalesAmt: 15,
                                depositAmt: 40,
                                totalAmt: 40,
                                errors: []
                            })
                        }
                    }
                },
                addEZTag: function () {
                    return {
                        then: function (cb) {
                            cb({
                                transactionId: 1234567,
                                tagSalesAmt: 15,
                                depositAmt: 40,
                                totalAmt: 40,
                                vehicleModel: "Ranger",
                                vehicleColor: "Green",
                                errors: []
                            })
                        }
                    }
                },
                updateEZTag: function () {
                    return {
                        then: function (cb) {
                            cb({
                                transactionId: 1234567,
                                tagSalesAmt: 15,
                                depositAmt: 40,
                                totalAmt: 40,
                                errors: []
                            })
                        }
                    }
                },
                getYearlySummary: function () {
                    return {
                        then: function (cb) {
                            cb({
                                summaryYear: [{ quantity: 3 }, { quantity: 2 }, { quantity: 1 }],
                                tagSummary: [{ quantity: 3 }, { quantity: 2 }, { quantity: 1 }],
                                acctSummary: [{ quantity: 3 }, { quantity: 2 }, { quantity: 1 }],
                                errors: []
                            })
                        }
                    }
                },
                setupYearlyPage: function () {
                    return {
                        then: function (cb) {
                            cb({
                                dates: ["2015", "2014", "2013"],
                                errors: []
                            })
                        }
                    }
                },
                setupAccountStep1: function () {
                    return {
                        then: function (cb) {
                            cb({
                                acctId: 123413412,
                                acctActivity: "P",
                                errors: []
                            })
                        }
                    }
                },
                submitSetupOnlineAccessAccount: function () {
                    return {
                        then: function (cb) {
                            cb({
                                errors: [],
                                acctId: '12345',
                                dbSessionId: 'test session id',
                                lastLoginIp: 'test login ip'
                            })
                        }
                    }
                },
                submitSetupOnlineAccessLoginInfo: function () {
                    return {
                        then: function (cb) {
                            cb({
                                errors: []
                            })
                        }
                    }
                },
                getEZTagInfo: function () {
                    return {
                        then: function (cb) {
                            cb({
                                accountStatus: null,
                                accountTags: [{
                                    acctTagSeq: 22,
                                    acctTagSeqSpecified: true,
                                    acctTagStatus: "A",
                                    fullTagId: "HCTR09000001",
                                    licPlate: "TST123",
                                    licState: "TX",
                                    motorcycle: false,
                                    nickname: "Motor 114",
                                    tagId: "09000001",
                                    tagStatusDesc: "Active",
                                    temporaryLicPlate: false,
                                    vehicleClassCode: "2",
                                    vehicleClassDesc: "Two Axle Vehicle",
                                    vehicleColor: "BLACK",
                                    vehicleMake: "COACHMAN",
                                    vehicleModel: "ABC",
                                    vehicleYear: "2001"
                                }],
                                pbpTags: [{
                                    acctTagSeq: 22,
                                    acctTagSeqSpecified: true,
                                    acctTagStatus: "A",
                                    fullTagId: "HCTR09000001",
                                    licPlate: "TST123",
                                    licState: "TX",
                                    motorcycle: false,
                                    nickname: "Motor 114",
                                    tagId: "09000001",
                                    tagStatusDesc: "Active",
                                    temporaryLicPlate: false,
                                    vehicleClassCode: "2",
                                    vehicleClassDesc: "Two Axle Vehicle",
                                    vehicleColor: "BLACK",
                                    vehicleMake: "COACHMAN",
                                    vehicleModel: "ABC",
                                    vehicleYear: "2001"
                                },
                                {
                                    acctTagSeq: 23,
                                    acctTagSeqSpecified: true,
                                    acctTagStatus: "A",
                                    fullTagId: "HCTR09000002",
                                    licPlate: "TST1232",
                                    licState: "TX",
                                    motorcycle: false,
                                    nickname: "Motor 1142",
                                    tagId: "09000002",
                                    tagStatusDesc: "Active",
                                    temporaryLicPlate: false,
                                    vehicleClassCode: "2",
                                    vehicleClassDesc: "Two Axle Vehicle",
                                    vehicleColor: "BLACK",
                                    vehicleMake: "COACHMAN",
                                    vehicleModel: "ABC",
                                    vehicleYear: "2001"
                                },
                                {
                                    acctTagSeq: 24,
                                    acctTagSeqSpecified: true,
                                    acctTagStatus: "A",
                                    fullTagId: "HCTR09000003",
                                    licPlate: "TST1233",
                                    licState: "TX",
                                    motorcycle: false,
                                    nickname: "Motor 1143",
                                    tagId: "09000003",
                                    tagStatusDesc: "Active",
                                    temporaryLicPlate: false,
                                    vehicleClassCode: "2",
                                    vehicleClassDesc: "Two Axle Vehicle",
                                    vehicleColor: "BLACK",
                                    vehicleMake: "COACHMAN",
                                    vehicleModel: "ABC",
                                    vehicleYear: "2001"
                                },
                                {
                                    acctTagSeq: 25,
                                    acctTagSeqSpecified: true,
                                    acctTagStatus: "A",
                                    fullTagId: "HCTR09000004",
                                    licPlate: "TST1234",
                                    licState: "TX",
                                    motorcycle: false,
                                    nickname: "Motor 1144",
                                    tagId: "09000004",
                                    tagStatusDesc: "Active",
                                    temporaryLicPlate: false,
                                    vehicleClassCode: "2",
                                    vehicleClassDesc: "Two Axle Vehicle",
                                    vehicleColor: "BLACK",
                                    vehicleMake: "COACHMAN",
                                    vehicleModel: "ABC",
                                    vehicleYear: "2001"
                                },
                                 {
                                     acctTagSeq: 26,
                                     acctTagSeqSpecified: true,
                                     acctTagStatus: "A",
                                     fullTagId: "HCTR09000005",
                                     licPlate: "TST12345",
                                     licState: "TX",
                                     motorcycle: false,
                                     nickname: "Motor 1145",
                                     tagId: "09000005",
                                     tagStatusDesc: "Active",
                                     temporaryLicPlate: false,
                                     vehicleClassCode: "2",
                                     vehicleClassDesc: "Two Axle Vehicle",
                                     vehicleColor: "BLACK",
                                     vehicleMake: "COACHMAN",
                                     vehicleModel: "ABC",
                                     vehicleYear: "2001"
                                 }
                                ],
                                acctId: 2398428,
                                currentBalance: 940,
                                maxEzPlatesAllowed: 5,
                                alerts: [],
                                errors: []
                            })
                        }
                    }
                },
                searchAccountTags: function () {
                    return {
                        then: function (cb) {
                            cb({
                                accountStatus: null,
                                accountTags: [{
                                    acctTagSeq: 22,
                                    acctTagSeqSpecified: true,
                                    acctTagStatus: "A",
                                    fullTagId: "HCTR09000001",
                                    licPlate: "TST123",
                                    licState: "TX",
                                    motorcycle: false,
                                    nickname: "Motor 114",
                                    tagId: "09000001",
                                    tagStatusDesc: "Active",
                                    temporaryLicPlate: false,
                                    vehicleClassCode: "2",
                                    vehicleClassDesc: "Two Axle Vehicle",
                                    vehicleColor: "BLACK",
                                    vehicleMake: "COACHMAN",
                                    vehicleModel: "ABC",
                                    vehicleYear: "2001"
                                }],
                                pbpTags: [{
                                    acctTagSeq: 22,
                                    acctTagSeqSpecified: true,
                                    acctTagStatus: "A",
                                    fullTagId: "HCTR09000001",
                                    licPlate: "TST123",
                                    licState: "TX",
                                    motorcycle: false,
                                    nickname: "Motor 114",
                                    tagId: "09000001",
                                    tagStatusDesc: "Active",
                                    temporaryLicPlate: false,
                                    vehicleClassCode: "2",
                                    vehicleClassDesc: "Two Axle Vehicle",
                                    vehicleColor: "WHITE",
                                    vehicleMake: "COACHMAN",
                                    vehicleModel: "ABC",
                                    vehicleYear: "2001"
                                }],
                                acctId: 2398428,
                                currentBalance: 940,
                                maxEzPlatesAllowed: 5,
                                alerts: [],
                                errors: []
                            })
                        }
                    }
                },
                addVehicleFromAccountInformation: function () {
                    return {
                        then: function (cb) {
                            cb({
                                acctTagSeq: 22,
                                acctTagSeqSpecified: true,
                                acctTagStatus: "A",
                                fullTagId: "HCTR09000001",
                                licPlate: "TST123",
                                licState: "TX",
                                motorcycle: false,
                                nickname: "Motor 114",
                                tagId: "09000001",
                                tagStatusDesc: "Active",
                                temporaryLicPlate: false,
                                vehicleClassCode: "2",
                                vehicleClassDesc: "Two Axle Vehicle",
                                vehicleColor: "BLACK",
                                vehicleMake: "COACHMAN",
                                vehicleModel: "ABC",
                                vehicleYear: "2001",
                                tagAmount: 123,
                                depositAmt: 100,
                                totalAmt: 150,
                                tagSalesAmt: 50,
                                transactionId: 522,
                                violationExist: false,
                                errors: [],
                                alerts: []
                            });
                        }
                    }
                },
                updateVehicleFromAccountInformation: function () {
                    return {
                        then: function (cb) {
                            cb({
                                acctTagSeq: 22,
                                acctTagSeqSpecified: true,
                                acctTagStatus: "A",
                                fullTagId: "HCTR09000001",
                                licPlate: "TST123",
                                licState: "TX",
                                motorcycle: false,
                                nickname: "Motor 114",
                                tagId: "09000001",
                                tagStatusDesc: "Active",
                                temporaryLicPlate: false,
                                vehicleClassCode: "2",
                                vehicleClassDesc: "Two Axle Vehicle",
                                vehicleColor: "BLACK",
                                vehicleMake: "COACHMAN",
                                vehicleModel: "ABC",
                                vehicleYear: "2001",
                                depositAmt: 100,
                                totalAmt: 150,
                                tagSalesAmt: 50,
                                transactionId: 522,
                                violationExist: false,
                                errors: [],
                                alerts: []
                            })
                        }
                    }
                },
                switchTagStatus: function () {
                    return {
                        then: function (cb) {
                            cb({
                                accountStatus: null,
                                accountTags: [{
                                    acctTagSeq: 22,
                                    acctTagSeqSpecified: true,
                                    acctTagStatus: "A",
                                    fullTagId: "HCTR09000001",
                                    licPlate: "TST123",
                                    licState: "TX",
                                    motorcycle: false,
                                    nickname: "Motor 114",
                                    tagId: "09000001",
                                    tagStatusDesc: "Active",
                                    temporaryLicPlate: false,
                                    vehicleClassCode: "2",
                                    vehicleClassDesc: "Two Axle Vehicle",
                                    vehicleColor: "BLACK",
                                    vehicleMake: "COACHMAN",
                                    vehicleModel: "ABC",
                                    vehicleYear: "2001"
                                }],
                                acctId: 2398428,
                                currentBalance: 940,
                                maxEzPlatesAllowed: 5,
                                alerts: [{
                                    alertId: 32,
                                    altertMsg: "Vehicle with EZ TAG# HCTR09000001 has been made 'Active'."
                                }],
                                errors: []
                            })
                        }
                    }
                },
                getHelpAndSupportInformation: function () {
                    return {
                        then: function (cb) {
                            cb({
                                name: 'Test User',
                                email: 'test@test.com',
                                accountNumber: '123456',
                                errors: []
                            })
                        }
                    }
                },
                sendHelpAndSupportEmail: function (helpAndSupportDetails) {
                    return {
                        then: function (cb) {
                            cb({
                                errors: []
                            })
                        }
                    }
                },
                updateRebillAmount: function (cb) {
                    return {
                        then: function (cb) {
                            cb({
                                errors: []
                            })
                        }
                    }
                },
                getAccountInformation: function () {
                    return {
                        then: function (cb) {
                            cb({
                                creditCardTypes: "test",
                                billingInfo: {
                                    billingTypeDisplay: "EFT",
                                    mailingAddress: "test",
                                    cards: [{
                                        test: "test"
                                    }]
                                },
                                depositAmtEFT: "10",
                                personalInfo: {},
                                errors: []
                            })
                        }
                    }
                },
                getEditEzTagData: function () {
                    return {
                        then: function (cb) {
                            cb({
                                states: ["AR", "TX"],
                                vehicleMakes: ["Ford"],
                                errors: []
                            })
                        }
                    }
                },
                updatePaymentBankAccount: function () {
                    return {
                        then: function (cb) {
                            cb({ errors: [] });
                        }
                    };
                },
                addPaymentBankAccount: function () {
                    return {
                        then: function (cb) {
                            cb({ transactionId: 42, errors: [] });
                        }
                    };
                },
                getCreditCardTypeAndState: function () {
                    return {
                        then: function (cb) {
                            cb({
                                creditCardTypes: [
									{ cardCode: "A", cardName: "American Express" },
									{ cardCode: "D", cardName: "Discover" },
									{ cardCode: "M", cardName: "MasterCard" },
									{ cardCode: "V", cardName: "Visa" },
                                ],
                                states: ["TX", "OK", "LA"],
                                errors: []
                            })
                        }
                    }
                },
                getAuthorizedContactsAndPreferences: function () {
                    return {
                        then: function (cb) {
                            cb({
                                authorizedContactList: [
								{ firstName: 'NAME1A', lastName: 'NAME1B', accessCode: 'access1', contactId: '1' },
								{ firstName: 'NAME2A', lastName: 'NAME2B', accessCode: 'access2', contactId: '2' },
								{ firstName: 'NAME3A', lastName: 'NAME3B', accessCode: 'access3', contactId: '3' }],
                                authContactLimit: 20,
                                errors: []
                            });
                        }
                    };
                },
                getAuthorizedContacts: function () {
                    return {
                        then: function (cb) {
                            cb({
                                authorizedContactList: [
								{ firstName: 'NAME1A', lastName: 'NAME1B', accessCode: 'access1', contactId: '1' },
								{ firstName: 'NAME2A', lastName: 'NAME2B', accessCode: 'access2', contactId: '2' },
								{ firstName: 'NAME3A', lastName: 'NAME3B', accessCode: 'access3', contactId: '3' }],
                                authContactLimit: 20,
                                errors: []
                            });
                        }
                    };
                },
                modifyAuthorizedContact: function (data) {
                    return {
                        then: function (cb) {
                            cb({ errors: [] });
                        }
                    };
                },
                getClosureAgreement: function () {
                    return {
                        then: function (cb) {
                            cb({
                                errors: [],
                                accountClosureAgreement: 'WS closure agreement<br>'
                            });
                        }
                    };
                },
                getRefundData: function () {
                    return {
                        then: function (cb) {
                            cb({
                                errors: [],
                                currentBalance: 40,
                                timeWithZone: 'January 1, 1970 at 12:00 am CST',
                                billingInfo: {
                                    address: null,
                                    billingInfoExists: true,
                                    billingType: 0,
                                    billingTypeCode: "C",
                                    billingTypeDisplay: "CREDIT",
                                    cards: [{
                                        address1: "1208 Oak Creek",
                                        address2: null,
                                        cardCode: "V",
                                        cardExpires: "01/2017",
                                        cardExpiresDate: "2017-01-01T13:09:13.369-06:00",
                                        cardNbr: "************-0013",
                                        cardType: 0,
                                        city: "CONROE",
                                        country: "USA",
                                        name: "AnotherTest",
                                        nameOnCard: "AnotherTest",
                                        paymentAmount: 0,
                                        paymentType: 0,
                                        plus4: "2124",
                                        state: "TX",
                                        zip: "77301",
                                        zipCode: "77301"
                                    }],
                                    creditCard: true,
                                    eft: null,
                                    mailingAddress: {
                                        country: 'USA',
                                        address1: 'address line 1',
                                        address2: 'address line 2',
                                        address3: 'address line 3',
                                        address4: 'address line 4',
                                        city: 'Houston',
                                        name: 'Test User',
                                        plus4: '1234',
                                        state: 'TX',
                                        zip: '12345',
                                        internationalAddress: false
                                    }
                                }
                            });
                        }
                    };
                },
                closeAccount: function (request) {
                    return {
                        then: function (cb) {
                            cb({
                                errors: []
                            });
                        }
                    };
                },

                menu: function () {
                    return {
                        then: function (cb) {
                            var rawObj = { "navBar": "[{\"itemID\": \"8827a45c-56fe-4901-9bc0-59d9b3501f82\", \"title\": \"EZ TAG Account\", \"totalMenuColumns\": 3, \"url\": \"\", \"menuColumns\": [{\"subMenus\": [{\"itemID\": \"5b571992-9164-40e4-bb57-be64b966beb9\", \"title\": \"Account Summary\", \"menuColumn\": 1, \"links\": [{\"title\": \"Account Status\", \"url\": \"/AccountSummary\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountSummary/ViewAccountSummary\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Make a Payment\", \"url\": \"/MakeOneTimePayment/EnterAmount\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountSummary/MakeOneTimePayment\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"MakeOneTimePayment\"}]}, {\"itemID\": \"0e5af3ad-4709-4076-9270-06241975ecb7\", \"title\": \"Account Activity\", \"menuColumn\": 1, \"links\": [{\"title\": \"Transactions\", \"url\": \"/AccountActivity\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountActivity/Transactions\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Receipts\", \"url\": \"/AccountActivityReceipts\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountActivity/Receipts\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Statements\", \"url\": \"/AccountActivityStatements\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountActivity/Statements\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Yearly Summary\", \"url\": \"/AccountActivityYearly\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountActivity/YearlySummary\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}]}, {\"subMenus\": [{\"itemID\": \"76ae5d89-3592-4c91-8405-a9cee1ec9e48\", \"title\": \"Account Information\", \"menuColumn\": 2, \"links\": [{\"title\": \"Account Details\", \"url\": \"/AccountInformation\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/ManageAccountInformation\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Change Username\", \"url\": \"/ChangeUsername\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/ChangeUserName\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Change Password\", \"url\": \"/ChangePassword\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/ChangePassword\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Update Security Question\", \"url\": \"/ChangeSecurityQuestion\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateSecurityQuestion\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Update Contact Information\", \"url\": \"/UpdatePersonalInformation\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateContactInformation\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Update Authorized Contacts\", \"url\": \"/UpdateAuthorizedContact\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateAuthorizedContact\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Update Billing Information\", \"url\": \"/ManagePayment\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateBillingInformation\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"UpdateBillingInformation\"}, {\"title\": \"Update Replenish Amount\", \"url\": \"/UpdateReplenishAmount\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateReplenishAmount\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Close Account\", \"url\": \"/CloseAccount/Agreement\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"b28b9626-c4d9-45dd-bd40-240a309a2fca\", \"title\": \"EZ TAG Account\", \"menuColumn\": 2, \"links\": [{\"title\": \"Benefits of EZ TAG\", \"url\": \"/NonSectional?path=/sitecore/content/HCTRA/EZTagAccount/Benefits of EZ TAG\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/Benefits of EZ TAG\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"First Time Login\", \"url\": \"/SetupOnlineAccess\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/SetupOnlineAccess\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Open EZ Tag Account\", \"url\": \"/NewAccount\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/EZTagAccount/OpenEZTagAccount\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"NewAccount\"}]}]}, {\"subMenus\": [{\"itemID\": \"3f5ad9e5-2bbb-49d9-9c06-d2dfeaee1cb2\", \"title\": \"Vehicles and EZ TAGs\", \"menuColumn\": 3, \"links\": [{\"title\": \"Update Existing Vehicles\", \"url\": \"/ManageVehicles\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/VehiclesandEZTags/ManageVehiclesEZTags\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Add EZ Plate\", \"url\": \"/AddEzPlate\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/VehiclesandEZTags/AddEZPlate\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Activate EZ TAG\", \"url\": \"/ActivateEzTag\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/ActivateEZTAG\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Add EZ TAG\", \"url\": \"/AddTag\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/VehiclesandEZTags/AddEZTAG\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}]}], \"tempSubMenu\": [{\"itemID\": \"5b571992-9164-40e4-bb57-be64b966beb9\", \"title\": \"Account Summary\", \"menuColumn\": 1, \"links\": [{\"title\": \"Account Status\", \"url\": \"/AccountSummary\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountSummary/ViewAccountSummary\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Make a Payment\", \"url\": \"/MakeOneTimePayment/EnterAmount\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountSummary/MakeOneTimePayment\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"MakeOneTimePayment\"}]}, {\"itemID\": \"0e5af3ad-4709-4076-9270-06241975ecb7\", \"title\": \"Account Activity\", \"menuColumn\": 1, \"links\": [{\"title\": \"Transactions\", \"url\": \"/AccountActivity\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountActivity/Transactions\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Receipts\", \"url\": \"/AccountActivityReceipts\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountActivity/Receipts\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Statements\", \"url\": \"/AccountActivityStatements\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountActivity/Statements\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Yearly Summary\", \"url\": \"/AccountActivityYearly\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountActivity/YearlySummary\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"76ae5d89-3592-4c91-8405-a9cee1ec9e48\", \"title\": \"Account Information\", \"menuColumn\": 2, \"links\": [{\"title\": \"Account Details\", \"url\": \"/AccountInformation\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/ManageAccountInformation\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Change Username\", \"url\": \"/ChangeUsername\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/ChangeUserName\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Change Password\", \"url\": \"/ChangePassword\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/ChangePassword\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Update Security Question\", \"url\": \"/ChangeSecurityQuestion\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateSecurityQuestion\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Update Contact Information\", \"url\": \"/UpdatePersonalInformation\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateContactInformation\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Update Authorized Contacts\", \"url\": \"/UpdateAuthorizedContact\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateAuthorizedContact\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Update Billing Information\", \"url\": \"/ManagePayment\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateBillingInformation\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"UpdateBillingInformation\"}, {\"title\": \"Update Replenish Amount\", \"url\": \"/UpdateReplenishAmount\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/AccountInformation/UpdateReplenishAmount\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Close Account\", \"url\": \"/CloseAccount/Agreement\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"b28b9626-c4d9-45dd-bd40-240a309a2fca\", \"title\": \"EZ TAG Account\", \"menuColumn\": 2, \"links\": [{\"title\": \"Benefits of EZ TAG\", \"url\": \"/NonSectional?path=/sitecore/content/HCTRA/EZTagAccount/Benefits of EZ TAG\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/Benefits of EZ TAG\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"First Time Login\", \"url\": \"/SetupOnlineAccess\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/SetupOnlineAccess\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Open EZ Tag Account\", \"url\": \"/NewAccount\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/EZTagAccount/OpenEZTagAccount\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"NewAccount\"}]}, {\"itemID\": \"3f5ad9e5-2bbb-49d9-9c06-d2dfeaee1cb2\", \"title\": \"Vehicles and EZ TAGs\", \"menuColumn\": 3, \"links\": [{\"title\": \"Update Existing Vehicles\", \"url\": \"/ManageVehicles\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/VehiclesandEZTags/ManageVehiclesEZTags\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Add EZ Plate\", \"url\": \"/AddEzPlate\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/VehiclesandEZTags/AddEZPlate\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Activate EZ TAG\", \"url\": \"/ActivateEzTag\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/ActivateEZTAG\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Add EZ TAG\", \"url\": \"/AddTag\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/EZTagAccount/VehiclesandEZTags/AddEZTAG\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}]}, {\"itemID\": \"c5fbf1aa-b038-43ed-bde3-999ef2bb0589\", \"title\": \"About HCTRA\", \"totalMenuColumns\": 3, \"url\": \"\", \"menuColumns\": [{\"subMenus\": [{\"itemID\": \"6c76e70a-3ac3-49b3-b569-85fc72aa7f40\", \"title\": \"Construction And Engineering\", \"menuColumn\": 1, \"links\": [{\"title\": \"Contracts & Bids\", \"url\": \"/Contracts\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/ContractsPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Major Projects\", \"url\": \"/MajorProjects\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/MajorProjectsPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"dd787d2b-8524-4343-96d3-50ba57f648f7\", \"title\": \"About HCTRA\", \"menuColumn\": 1, \"links\": [{\"title\": \"About Us\", \"url\": \"/Sectional?path=/sitecore/content/HCTRA/AboutHCTRA/AboutUsPage#OverviewSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/AboutUsPage\", \"sitecoreSectionName\": \"OverviewSection\", \"wizardStateName\": \"\"}, {\"title\": \"Policies\", \"url\": \"/NonSectional?path=/sitecore/content/HCTRA/AboutHCTRA/PoliciesPage\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/PoliciesPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}]}, {\"subMenus\": [{\"itemID\": \"e0f19b8a-c514-42b2-8cee-0fc0926e950f\", \"title\": \"HCTRA Employment\", \"menuColumn\": 2, \"links\": [{\"title\": \"Applications\", \"url\": \"/Employment#ApplicationsSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/EmploymentPage\", \"sitecoreSectionName\": \"ApplicationsSection\", \"wizardStateName\": \"\"}, {\"title\": \"Current Job Openings\", \"url\": \"/Employment#OpenningsSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/EmploymentPage\", \"sitecoreSectionName\": \"OpenningsSection\", \"wizardStateName\": \"\"}, {\"title\": \"How to Apply\", \"url\": \"/Employment#HowToApplySection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/EmploymentPage\", \"sitecoreSectionName\": \"HowToApplySection\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"adedf480-aeb6-4162-bdee-d2407d2c316c\", \"title\": \"Reports\", \"menuColumn\": 2, \"links\": [{\"title\": \"Financial Reports\", \"url\": \"/Sectional?path=/sitecore/content/HCTRA/AboutHCTRA/FinancialReportsPage\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/FinancialReportsPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}]}, {\"subMenus\": [{\"itemID\": \"bbf61d2d-e230-4734-8ba2-57110b7cc995\", \"title\": \"Links\", \"menuColumn\": 3, \"links\": [{\"title\": \"Hardy Toll Road\", \"url\": \"/HardyTollRoad\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/HardyTollRoad\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Katy Managed Lanes\", \"url\": \"/KatyManagedLanes\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/Katy Managed Lanes\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Sam Houston Tollway Northeast\", \"url\": \"/SamHoustonNortheast\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/Sam Houston Northeast\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Ship Channel Bridge\", \"url\": \"/ShipChannelBridge\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/Ship Channel Bridge\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Tomball Tollway\", \"url\": \"/Tomball\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/Tomball\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}]}], \"tempSubMenu\": [{\"itemID\": \"6c76e70a-3ac3-49b3-b569-85fc72aa7f40\", \"title\": \"Construction And Engineering\", \"menuColumn\": 1, \"links\": [{\"title\": \"Contracts & Bids\", \"url\": \"/Contracts\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/ContractsPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Major Projects\", \"url\": \"/MajorProjects\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/MajorProjectsPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"dd787d2b-8524-4343-96d3-50ba57f648f7\", \"title\": \"About HCTRA\", \"menuColumn\": 1, \"links\": [{\"title\": \"About Us\", \"url\": \"/Sectional?path=/sitecore/content/HCTRA/AboutHCTRA/AboutUsPage#OverviewSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/AboutUsPage\", \"sitecoreSectionName\": \"OverviewSection\", \"wizardStateName\": \"\"}, {\"title\": \"Policies\", \"url\": \"/NonSectional?path=/sitecore/content/HCTRA/AboutHCTRA/PoliciesPage\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/PoliciesPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"e0f19b8a-c514-42b2-8cee-0fc0926e950f\", \"title\": \"HCTRA Employment\", \"menuColumn\": 2, \"links\": [{\"title\": \"Applications\", \"url\": \"/Employment#ApplicationsSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/EmploymentPage\", \"sitecoreSectionName\": \"ApplicationsSection\", \"wizardStateName\": \"\"}, {\"title\": \"Current Job Openings\", \"url\": \"/Employment#OpenningsSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/EmploymentPage\", \"sitecoreSectionName\": \"OpenningsSection\", \"wizardStateName\": \"\"}, {\"title\": \"How to Apply\", \"url\": \"/Employment#HowToApplySection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/EmploymentPage\", \"sitecoreSectionName\": \"HowToApplySection\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"bbf61d2d-e230-4734-8ba2-57110b7cc995\", \"title\": \"Links\", \"menuColumn\": 3, \"links\": [{\"title\": \"Hardy Toll Road\", \"url\": \"/HardyTollRoad\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/HardyTollRoad\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Katy Managed Lanes\", \"url\": \"/KatyManagedLanes\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/Katy Managed Lanes\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Sam Houston Tollway Northeast\", \"url\": \"/SamHoustonNortheast\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/Sam Houston Northeast\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Ship Channel Bridge\", \"url\": \"/ShipChannelBridge\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/Ship Channel Bridge\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Tomball Tollway\", \"url\": \"/Tomball\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/Tomball\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"adedf480-aeb6-4162-bdee-d2407d2c316c\", \"title\": \"Reports\", \"menuColumn\": 2, \"links\": [{\"title\": \"Financial Reports\", \"url\": \"/Sectional?path=/sitecore/content/HCTRA/AboutHCTRA/FinancialReportsPage\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/AboutHCTRA/FinancialReportsPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}]}, {\"itemID\": \"d4e3d3cf-1365-4350-a57b-c779e45682f9\", \"title\": \"Travel Tools\", \"totalMenuColumns\": 3, \"url\": \"\", \"menuColumns\": [{\"subMenus\": [{\"itemID\": \"f5ab52fa-739e-4e7b-814d-0083df8eed9c\", \"title\": \"Toll Road Information\", \"menuColumn\": 1, \"links\": [{\"title\": \"Lane Types\", \"url\": \"/LaneTypes\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/LaneTypesPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Toll Road Information\", \"url\": \"/TollRoadInformation\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/TollRoadInformationPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"9cc824a9-ce47-43f7-90aa-11403ae26370\", \"title\": \"News\", \"menuColumn\": 1, \"links\": [{\"title\": \"Latest HCTRA News\", \"url\": \"/News\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/NewsPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"News Archive\", \"url\": \"/NewsArchive\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/NewsArchivePage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}]}, {\"subMenus\": [{\"itemID\": \"4893a1f2-2b11-4468-88bc-e8e7a26c6266\", \"title\": \"Closures\", \"menuColumn\": 2, \"links\": [{\"title\": \"Major Closures\", \"url\": \"/Closures\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/ClosuresPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Real Time Closures\", \"url\": \"http://traffic.houstontranstar.org/layers/#\", \"openNewTab\": 1, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": null, \"sitecoreSectionName\": null, \"wizardStateName\": null}, {\"title\": \"Closures Archive\", \"url\": \"/ClosuresArchive\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/ClosuresArchivePage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"5cabc844-948e-4a90-8bfb-832634063673\", \"title\": \"Maps\", \"menuColumn\": 2, \"links\": [{\"title\": \"Houston TranStar Traffic Map\", \"url\": \"http://www.houstontranstar.org/#\", \"openNewTab\": 1, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": null, \"sitecoreSectionName\": null, \"wizardStateName\": null}, {\"title\": \"Map\", \"url\": \"/TollRoadMap#OverviewSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/MapsPage\", \"sitecoreSectionName\": \"OverviewSection\", \"wizardStateName\": \"\"}]}]}, {\"subMenus\": [{\"itemID\": \"d4982387-6583-427a-ad98-afe9b78bdc2d\", \"title\": \"Rates\", \"menuColumn\": 3, \"links\": [{\"title\": \"Sam Houston Tollway\", \"url\": \"/TollRates#Sam Houston Tollway\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Sam Houston Tollway\", \"wizardStateName\": \"\"}, {\"title\": \"Hardy Toll Road\", \"url\": \"/TollRates#Hardy Toll Road\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Hardy Toll Road\", \"wizardStateName\": \"\"}, {\"title\": \"Westpark Tollway\", \"url\": \"/TollRates#Westpark Tollway\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Westpark Tollway\", \"wizardStateName\": \"\"}, {\"title\": \"Fort Bend Extension\", \"url\": \"/TollRates#Ft. Bend Extension\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Ft. Bend Extension\", \"wizardStateName\": \"\"}, {\"title\": \"Tomball Tollway\", \"url\": \"/TollRates#Tomball Tollway\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Tomball Tollway\", \"wizardStateName\": \"\"}, {\"title\": \"SH 242\", \"url\": \"/TollRates#SH 242\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"SH 242\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"6fa288e7-e789-4655-9b05-441a2b32ced2\", \"title\": \"Roadside Assistance\", \"menuColumn\": 3, \"links\": [{\"title\": \"Roadside Assistance\", \"url\": \"/RoadsideAssistance\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RoadsideAssistancePage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Contact Information\", \"url\": \"/RoadsideAssistance#ContactRoadsideAssistanceSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RoadsideAssistancePage\", \"sitecoreSectionName\": \"ContactRoadsideAssistanceSection\", \"wizardStateName\": \"\"}]}]}], \"tempSubMenu\": [{\"itemID\": \"f5ab52fa-739e-4e7b-814d-0083df8eed9c\", \"title\": \"Toll Road Information\", \"menuColumn\": 1, \"links\": [{\"title\": \"Lane Types\", \"url\": \"/LaneTypes\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/LaneTypesPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Toll Road Information\", \"url\": \"/TollRoadInformation\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/TollRoadInformationPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"4893a1f2-2b11-4468-88bc-e8e7a26c6266\", \"title\": \"Closures\", \"menuColumn\": 2, \"links\": [{\"title\": \"Major Closures\", \"url\": \"/Closures\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/ClosuresPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Real Time Closures\", \"url\": \"http://traffic.houstontranstar.org/layers/#\", \"openNewTab\": 1, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": null, \"sitecoreSectionName\": null, \"wizardStateName\": null}, {\"title\": \"Closures Archive\", \"url\": \"/ClosuresArchive\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/ClosuresArchivePage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"9cc824a9-ce47-43f7-90aa-11403ae26370\", \"title\": \"News\", \"menuColumn\": 1, \"links\": [{\"title\": \"Latest HCTRA News\", \"url\": \"/News\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/NewsPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"News Archive\", \"url\": \"/NewsArchive\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/NewsArchivePage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"5cabc844-948e-4a90-8bfb-832634063673\", \"title\": \"Maps\", \"menuColumn\": 2, \"links\": [{\"title\": \"Houston TranStar Traffic Map\", \"url\": \"http://www.houstontranstar.org/#\", \"openNewTab\": 1, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": null, \"sitecoreSectionName\": null, \"wizardStateName\": null}, {\"title\": \"Map\", \"url\": \"/TollRoadMap#OverviewSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/MapsPage\", \"sitecoreSectionName\": \"OverviewSection\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"d4982387-6583-427a-ad98-afe9b78bdc2d\", \"title\": \"Rates\", \"menuColumn\": 3, \"links\": [{\"title\": \"Sam Houston Tollway\", \"url\": \"/TollRates#Sam Houston Tollway\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Sam Houston Tollway\", \"wizardStateName\": \"\"}, {\"title\": \"Hardy Toll Road\", \"url\": \"/TollRates#Hardy Toll Road\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Hardy Toll Road\", \"wizardStateName\": \"\"}, {\"title\": \"Westpark Tollway\", \"url\": \"/TollRates#Westpark Tollway\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Westpark Tollway\", \"wizardStateName\": \"\"}, {\"title\": \"Fort Bend Extension\", \"url\": \"/TollRates#Ft. Bend Extension\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Ft. Bend Extension\", \"wizardStateName\": \"\"}, {\"title\": \"Tomball Tollway\", \"url\": \"/TollRates#Tomball Tollway\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"Tomball Tollway\", \"wizardStateName\": \"\"}, {\"title\": \"SH 242\", \"url\": \"/TollRates#SH 242\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RatesPage\", \"sitecoreSectionName\": \"SH 242\", \"wizardStateName\": \"\"}]}, {\"itemID\": \"6fa288e7-e789-4655-9b05-441a2b32ced2\", \"title\": \"Roadside Assistance\", \"menuColumn\": 3, \"links\": [{\"title\": \"Roadside Assistance\", \"url\": \"/RoadsideAssistance\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RoadsideAssistancePage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Contact Information\", \"url\": \"/RoadsideAssistance#ContactRoadsideAssistanceSection\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/TravelTools/RoadsideAssistancePage\", \"sitecoreSectionName\": \"ContactRoadsideAssistanceSection\", \"wizardStateName\": \"\"}]}]}, {\"itemID\": \"f035b7eb-0ee7-40b0-b3d0-c36087bfeb2c\", \"title\": \"Help & Support\", \"totalMenuColumns\": 1, \"url\": \"\", \"menuColumns\": [{\"subMenus\": [{\"itemID\": \"ed23b086-c7ad-4a8e-b1af-87278829369a\", \"title\": \"Help & Support\", \"menuColumn\": 1, \"links\": [{\"title\": \"Frequently Asked Questions\", \"url\": \"/FrequentlyAskedQuestions\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/FAQPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Customer Service Hours\", \"url\": \"/HelpAndSupport#customer-service\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"customer-service\", \"wizardStateName\": \"\"}, {\"title\": \"Documents\", \"url\": \"/HelpAndSupport#documents\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"documents\", \"wizardStateName\": \"\"}, {\"title\": \"EZ TAG Store Locations\", \"url\": \"/HelpAndSupport#ez-tag-store-locations\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"ez-tag-store-locations\", \"wizardStateName\": \"\"}, {\"title\": \"Email Us\", \"url\": \"/HelpAndSupport#email-us\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"email-us\", \"wizardStateName\": \"\"}, {\"title\": \"Call Us\", \"url\": \"/HelpAndSupport#contact-us\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"contact-us\", \"wizardStateName\": \"\"}]}]}], \"tempSubMenu\": [{\"itemID\": \"ed23b086-c7ad-4a8e-b1af-87278829369a\", \"title\": \"Help & Support\", \"menuColumn\": 1, \"links\": [{\"title\": \"Frequently Asked Questions\", \"url\": \"/FrequentlyAskedQuestions\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/FAQPage\", \"sitecoreSectionName\": \"\", \"wizardStateName\": \"\"}, {\"title\": \"Customer Service Hours\", \"url\": \"/HelpAndSupport#customer-service\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"customer-service\", \"wizardStateName\": \"\"}, {\"title\": \"Documents\", \"url\": \"/HelpAndSupport#documents\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"documents\", \"wizardStateName\": \"\"}, {\"title\": \"EZ TAG Store Locations\", \"url\": \"/HelpAndSupport#ez-tag-store-locations\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"ez-tag-store-locations\", \"wizardStateName\": \"\"}, {\"title\": \"Email Us\", \"url\": \"/HelpAndSupport#email-us\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"email-us\", \"wizardStateName\": \"\"}, {\"title\": \"Call Us\", \"url\": \"/HelpAndSupport#contact-us\", \"openNewTab\": null, \"alt\": null, \"showInMoibile\": null, \"sitecorePagePath\": \"/sitecore/content/HCTRA/HelpAndSupport/HelpAndSupportPage\", \"sitecoreSectionName\": \"contact-us\", \"wizardStateName\": \"\"}]}]}, {\"itemID\": \"7d9286d5-5f77-4fd8-b212-881efc1031c5\", \"title\": \"Missed a Toll?\", \"totalMenuColumns\": 0, \"url\": \"/MissedAToll\", \"menuColumns\": [], \"tempSubMenu\": []}, {\"itemID\": \"5d8b4373-a8f8-4599-adad-c3b98e8c599b\", \"title\": \"Got an Invoice?\", \"totalMenuColumns\": 0, \"url\": \"/Violations\", \"menuColumns\": [], \"tempSubMenu\": []}]", "errors": "[]", "alerts": "[]", "exception": null, "sessionTimedOut": false, "accountStatus": null };
                            rawObj.navBar = JSON.parse(rawObj.navBar);
                            rawObj.alerts = JSON.parse(rawObj.alerts);
                            rawObj.errors = JSON.parse(rawObj.errors);
                            cb(rawObj);
                        }
                    }
                },
                getLandingData: function () {
                    return {
                        then: function (cb) {
                            cb({
                                cmsResponse: '{"ItemID":"6a65b8a9-2f55-4f98-9e58-91b719c8b650","HasChildren":"True","LongDescription":"","Title":"Did You Miss a Toll?","Image":"<image mediaid=\\"{2328022B-68FE-4710-8E8B-1AA3FAC0A62B}\\" alt=\\"Save Money\\" height=\\"\\" width=\\"\\" hspace=\\"\\" vspace=\\"\\" />","ShortDescription":"","Children":[{"ItemID":"aeb9d0d9-c79a-4e53-bc08-b4d6e0eac0dc","HasChildren":"False","LongDescription":"<div class=\\"row\\"> \\n\\t<div class=\\"col-xs-12 col-md-7\\">\\n\\t\\t<!-- Add text content below here -->\\n\\t\\t<p>It may take several business days for recent violations and/or payments to be reflected on your balance.</p>\\n\\t\\t<p>More text here...</p>\\n\\t\\t<p>And even more text here too.</p>\\n\\t\\t<!-- Add text content above here -->\\n\\t</div>\\n\\t<div class=\\"col-xs-12 col-md-5\\">\\n\\t\\t<!-- Add image content below here -->\\n\\t\\t<img class=\\"desktopOnly\\" alt=\\"\\" height=\\"157\\" width=\\"299\\" src=\\"-/media/A93FF2BCE84640ABA8318D904453FC6C.ashx\\">\\n\\t\\t<!-- Add image content above here -->\\n\\t</div>\\n</div>","Title":"Missed A Toll Heading","Image":"","ShortDescription":""},{"ItemID":"54ac0791-89b6-4c3a-b6e7-04b21c680d28","HasChildren":"False","LongDescription":"<span style=\\"text-decoration: underline;\\">Note:</span> Tolls may take up to XX hours to be associated with a Vehicle\'s License Plate Number<p ng-if=\\"userNotLoggedIn()\\">Should not show when logged in.</p>","Title":"Search for Missed Tolls","Image":"<image mediaid=\\"{2328022B-68FE-4710-8E8B-1AA3FAC0A62B}\\" alt=\\"Save Money\\" height=\\"\\" width=\\"\\" hspace=\\"\\" vspace=\\"\\" />","ShortDescription":""}]}',
                                cmsResponse2: '{"ItemID":"dd086fe4-41a7-4b37-834a-6ee3daa85c60","HasChildren":"True","LongDescription":"","Title":"Missed A Toll","Image":"","ShortDescription":"","Children":[{"ItemID":"2609ccff-36e2-455b-9095-294f7ea08c7f","HasChildren":"False","LongDescription":"<div class=\\"row\\"> \\n     <div class=\\"col-xs-12 col-md-6\\">\\n            <p>It may take several business days for recent violations and/or payments to be reflected on your balance.</p>\\n            <p>More text here...</p>\\n            <p>And even more text here too.</p>\\n     </div>\\n     <div class=\\"col-xs-12 col-md-6\\">\\n            <img class=\\"desktopOnly\\" alt=\\"\\" height=\\"157\\" width=\\"299\\" src=\\"-/media/A93FF2BCE84640ABA8318D904453FC6C.ashx\\">\\n     </div>\\n</div>","Title":"Important Information","Image":"","ShortDescription":""}]}',
                                cmsResponse3: '{"ItemID":"5d60495a-8c38-4262-930f-1280d9376510","HasChildren":"False","LongDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue vulputate erat hendrerit tincidunt.","Title":"Pay Missed Toll","Image":"","ShortDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue vulputate erat hendrerit tincidunt."}',
                                errors: []
                            });
                        }
                    }
                },
                saveBillingInformationSuspended: function () {
                    return {
                        then: function (cb) {
                            cb({
                                errors: [],
                            });
                        }
                    }
                },
            }
        };
    },    
    isInvoicedService: function (inVal) {
        return {
            isAccountInvoiced: function () {
                return inVal.value;
            },
            setAccountInvoiced: function (inBool) {
                inVal.value = inBool;
            },
            removeAccountInvoiced: function () {
                inVal.value = false;
            }
        };
    },
    accountSummaryAlertFilterService: function () {
        return {
            filterAccountSummaryAlerts: function () { },
            filterEmailConfirmationAlert: function () { },
            removeAccountSummaryAlerts: function () { }
        };
    },
    hctraSessionLogin: function (inSessionVal) {
        return {
            login: function (acctId) {
                inSessionVal.value = acctId;
            }
        };
    },
    USER_ROLES: function () {
        return {
            anonymous: 'anonymous', // any user, logged in or not
            notAuthenticated: 'notAuthenticated', // only users who aren't logged in
            active: 'active',
            incomplete: 'incomplete',
            pendingClosure: 'pendingClosure',
            suspended: 'suspended',
            missingRequiredInformation: 'missingRequiredInformation',
        };
    },
    routes: function () {
        return {
            addMissingInformation: '/AddMissingInformation',
            makeOneTimePaymentPage: "133D03B5-3F06-4720-A177-9BFDA2CFC7B5",
            ezTagAccountTypes: "3045B316-D060-4173-9948-209CA74B70FE",
            nonSectionalCms: '/NonSectional',
            sectionalCms: '/Sectional',
            forgotPasswordEmailSent: '/ForgotPasswordEmailSent',
            forgotPasswordAccount: '/ForgotPasswordAccount',
            accountOverview: '/AccountOverview',
            forgotPasswordReset: '/ForgotPasswordReset',
            home: '/Home',
            login: '/Login',
            violationsInvoices: '/ViolationsInvoices',
            needHelp: '/NeedHelp',
            manageVehicles: '/ManageVehicles',
            tagReceipt: '/TagReceipt',
            openTabTarget: '_mhctra',
            selfTarget: '_selfTarger',
            confirmTagActivation: '/ConfirmTagActivation',
            tagActivationGratitude: '/TagActivationGratitude',
            closeAccount: '/CloseAccount',
            closeAccountAgreement: '/Agreement',
            closeAccountRefund: '/Refund',
            closeAccountCheckInformation: '/CloseAccount/CheckInformation',
            closeAccountCreditInformation: '/CloseAccount/CreditInformation',
            closeAccountSaveBillingInformation: '/CloseAccount/SaveBillingInformation',
            closeAccountPendingReview: '/Review',
            activateEzTag: 'https://tdeuat-olcsc.hctra.pri/eztagstore/mailedTagActivationDisplay.do',
            news: 'https://tdeuat-olcsc.hctra.pri/about_news?CSRT=18208781607148930682',
            katyLanes: 'https://tdeuat-olcsc.hctra.pri/katymanagedlanes/index.html?CSRT=18208781607148930682',
            travelTools: 'https://tdeuat-olcsc.hctra.pri/tollroads_map/?CSRT=18208781607148930682',
            internetSecurityPolicy: 'https://tdeuat-olcsc.hctra.pri/securitypolicy?CSRT=18208781607148930682',
            privacyPolicy: 'https://tdeuat-olcsc.hctra.pri/privacy/privacy_policy?CSRT=18208781607148930682',
            northAreaMapLink: 'https://goo.gl/maps/wMh9JNANHEp',
            northeastAreaMapLink: 'https://goo.gl/maps/PwGxCY5AnXU2',
            eastAreaMapLink: 'https://goo.gl/maps/LJrcm29GUQC2',
            southwestAreaMapLink: 'https://goo.gl/maps/vDFuoxvrmU22',
            westparkAreaMapLink: 'https://goo.gl/maps/LKMGjxJwJxx',
            westAreaMapLink: 'https://goo.gl/maps/HEoq2A1Zwet',
            whatIsEzPlateCms: '=%2Fsitecore%2Fcontent%2FHCTRA%2FEZTagAccount%2FEZPlatePage',
            contactUs: "/HelpAndSupport#email-us",
            updateReplenishAmount: '/updateReplenishAmount',
            accountActivityInvoices: '/accountActivityInvoices'
        };
    },
    stateNames: function () {
        return {
            oneTimeCheckout: "MakeOneTimePayment.OneTimeCheckout",
            addAdditionalVehicle: "NewAccount.AddEZTAG.AddAdditionalVehicle",
            login: 'theLoginState',
            faqChild: 'FrequentlyAskedQuestons.Child',
            
            choosePaymentMethod: 'NewAccount.PaymentMaster.ChooseMethod',
            enterBankAccount: "NewAccount.PaymentMaster.BankAccount",
            creditCardEntry: 'NewAccount.PaymentMaster.CreditCard',
            createAccountSummary: 'NewAccount.CreateAccountSummary',
            helpAndSupport: 'HelpAndSupport',
            helpAndSupportEmail: 'HelpAndSupport.Email',
            helpAndSupportConfirmation: 'HelpAndSupport.Confirmation',
            accountInformation: 'AccountInformationParent.AccountInformation',
            accountSummary: 'AccountSummary',
            newAccount: 'NewAccount',
            saveBillingInformation: 'ManagePaymentParent.SaveBillingInformation',
            setupOnlineAccessLoginInfo: 'SetupOnlineAccess.LoginInfo',
            setupOnlineAccessConfirmation: 'SetupOnlineAccess.Confirmation',
            manageVehicles: 'ManageVehicles',
            editEzTag: 'EditEzTag',
            addMoreVehicles: 'AddMoreVehicles',
            editUnfinalizedVehicle: 'EditUnfinalizedVehicle',
            vehicleSummary: 'VehicleSummary',
            tagCheckout: 'TagCheckout',
            tagReceipt: 'TagReceipt',
            addTag: 'AddTag',
            addEzPlate: 'AddEzPlate',
            editEzPlate: 'EditEzPlate',
            suspendedAccountWithViolations: 'SuspendedAccount.WithViolations',
            suspendedAccountWithoutViolationsPosBal: 'SuspendedAccount.WithoutViolationsPositiveBalance',
            suspendedAccountWithoutViolationsNegBal: 'SuspendedAccount.WithoutViolationsNegativeBalance',
            selectPaymentAmount: 'SuspendedAccount.SelectPaymentAmount',
            selectPaymentMethod: 'SuspendedAccount.SelectPaymentMethod',
            makePayment: 'SuspendedAccount.MakePayment',
            suspendedAccountPaymentReceipt: 'SuspendedAccount.SuspendedAccountPaymentReceipt',
            home: "Home",
            closeAccountParent: 'CloseAccount',
            closeAccountAgreement: 'CloseAccount.Agreement',
            closeAccountRefund: 'CloseAccount.Refund',
            closeAccountCheckInformation: 'AccountInformationParent.CloseAccountCheck',
            closeAccountCreditInformation: 'AccountInformationParent.CloseAccountCredit',
            closeAccountSaveBillingInformation: 'AccountInformationParent.CloseAccountSaveBillingInformation',
            closeAccountPendingReview: 'CloseAccount.PendingReview',
            personalAccount: 'NewAccount.CreateAccount.PersonalAccount',
            createAccount: 'NewAccount.CreateAccount',
            missedATollParent: 'MissedATollParent',
            missedATollLanding: 'MissedATollParent.MissedATollLanding',
            missedATollBillingInfo: 'MissedATollParent.MissedATollBillingInfo',
            missedATollViolationInformation: 'MissedATollParent.MissedATollViolationInformation',
            missedATollConfirmPayment: 'MissedATollParent.MissedATollConfirmPayment',
            faq: 'FrequentlyAskedQuestions',
            closuresArchive: 'ClosuresArchive',
            newsArchive: 'NewsArchive',
            newsFeed: 'NewsFeed',
            closures: 'Closures',
            forgotPassword: 'ForgotPassword',
            forgotPasswordAccount: 'ForgotPasswordParent.ForgotPasswordAccount',
            forgotPasswordValidateAccount: 'ForgotPasswordParent.ForgotPasswordValidateAccount',
            forgotPasswordEmail: 'ForgotPasswordParent.ForgotPasswordEmail',
            forgotPasswordEmailSent: 'ForgotPasswordParent.ForgotPasswordEmailSent',
            forgotPasswordValidateAccountEmail: 'ForgotPasswordParent.ForgotPasswordValidateAccountEmail',
            forgotPasswordReset: 'ForgotPasswordParent.ForgotPasswordReset',
            forgotPasswordParent: 'ForgotPasswordParent',
            closuresArchiveChild: 'ClosuresArchive.Child',
            faqChild: 'FrequentlyAskedQuestions.Child',
            newsArchiveChild: 'NewsArchive.Child'
        };
    },
    fakeWebStorage: function (inStorage) {
        return {
            setKeyValue: function (key, value) {
                inStorage[key] = value;
            },
            removeEntry: function (key) { delete inStorage[key]; },
            getValue: function (key) { return angular.copy(inStorage[key]); }
        };
    },
    webStorage: function (inStorage) {
        return {
            setKeyValue: function (key, value) {
                inStorage[key] = value;
            },
            validateOnValue: function (key, loc) {
                inStorage[key] = "true";
                return true;
            },
            removeEntry: function (key) {
                if (inStorage[key]) {
                    delete inStorage[key];
                }
            },
            getValue: function (key) {
                return angular.copy(inStorage[key]);
            }
        };
    },
    Session: function (inSession) {
        return {
            setAcctActivity: function (acctActivity) {
                inSession.acctActivity = acctActivity;
            },
            getAcctActivity: function () {
                return inSession.acctActivity;
            },
            getCurrentStep: function () {
                return 1;
            },
            setCurrentStep: function (step) {
                inSession.savedStep = step;
            },
            stepToStateName: function (currentStep) {
                switch (currentStep) {
                    case 1:
                        return 'PersonalAccount';
                        break;
                    case 3:
                        return 'VehicleInformation';
                        break;
                    case 4:
                        return 'ChoosePaymentMethod';
                        break;
                    case 5:
                        return 'CreateAccountSummary';
                        break;
                    default:
                        return 'PersonalAccount';
                        break;
                }
            },
            removeCurrentStep: function () { },
            create: function (acctId, userRole) { inSession.userRole = userRole; },
            userRole: ''
        };
    },
    responseErrorService: function (displayedMessage) {
        return {
            displayToast: function (msg, level) { displayedMessage.value = "Displayed a message"; },
            displayErrorsFromResponse: function (response, delayFlag) { displayedMessage.value = "Displayed a list of errors"; },
            displayAlertsFromResponse: function (response) { displayedMessage.value = "Displayed a list of alerts"; },
            formatErrorMessages: function (response) { return ["formatted message"]; },
            displayAlertsFromResponse: function (response) { displayedMessage.value = "Displayed a list of alerts"; },
            isErrorFree: function (response) { return true },
            clearToasts: function () {}
        };
    },
    responsiveService: function () {
        return {
            isMobile: function () { return true; },
            isDesktop: function () { return true; },
            isIPadPortrait: function () { return false; }
        };
    },
    addMissingInformationService: function () {
        var response = {};
        response.passwordNeedsReset = false;
        response.profileCallHasOccured = false;
        response.emailIsMissing = false;
        response.securityQuestionIsMissing = false;

        return {
            missingInformationIsAnIssue: function () {
                return response.passwordNeedsReset || response.emailIsMissing || response.securityQuestionIsMissing;
            },
            setMissingInformation: function (pw, email, question) {
                response.passwordNeedsReset = pw;
                response.emailIsMissing = email;
                response.securityQuestionIsMissing = question;
            },
            destroyMissingInformationFlags: function () {
                response.passwordNeedsReset = false;
                response.emailIsMissing = false;
                response.securityQuestionIsMissing = false;
                return response;
            },
            returnMissingInformation: function () {
                return {
                    passwordNeedsReset: response.passwordNeedsReset,
                    emailIsMissing: response.emailIsMissing,
                    securityQuestionIsMissing: response.securityQuestionIsMissing
                };
            },
            setProfileCallHasOccured: function (data) {
                response.profileCallHasOccured = data;
            },
            returnProfileCallHasOccured: function (data) {
                return response.profileCallHasOccured;
            },
            newEmailRequired: function (pw, email, question) {
                return email;
            },
            isMissingInfo: function (pw, email, question) {
                return pw || email || question;
            },
            showBlockUserNavModal: function() {
                
            }
        };
    },
    validationService: function () {
        return function (formObj) {
            return "Uses validationService";
        };
    },
    validatePrimaryEmailService: function () {
        var emailSent;
        return {
            destroyEmailSent: function () {
                emailSent = null;
            },
            getEmailSent: function () {
                return true;
            },
            getEmailValidationId: function () {
                return 1;
            }
        };
    },
    AuthService: function (authObj) {
        return {
            login: function (data) {
                if ((data.userName === "rightUser") && (data.password === "rightPw")) {
                    return {
                        then: function (cb) {
                            //mock return value for correct data
                            cb(authObj.goodLoginRes);
                        }
                    };
                } else if ((data.userName === "exceptionUser") && (data.password === "exceptionPassword")) {
                    return {
                        then: function (success, reject) {
                            reject(authObj.goodLoginRes);
                        }
                    };
                } else {
                    return {
                        then: function (cb) {
                            //mock return value for error data
                            cb(authObj.badLoginRes);
                        }
                    };
                }
            },
            isAuthenticated: function () {
                return authObj.isAuthenticated;
            },
            isAuthorized: function (data) {
                authObj.data = data;
                return authObj.isAuthorized;
            },
            logout: function () {
                return {
                    then: function (cb) {
                        cb({ errors: [] });
                    }
                };
            }
        };
    },
    AUTH_EVENTS: function () {
        return {
            loginSuccess: 'auth-login-success',
            logoutSuccess: 'auth-logout-success',
            sessionTimedOut: 'auth-session-timeout',
            restoredUserState: 'restored-user-state',
            setNavBarLogin: 'set-nav-bar-login'
        };
    },
    APP_LIFECYCLE_EVENTS: function () {
        return {
            restoredUserState: 'restored-user-state',
            setNavBarLogin: 'set-nav-bar-login',
            newAccountNameEntered: "new-account-name-entered"
        };
    },
    usSpinnerService: function () {
        return {
            spin: function (spinId) {

            },
            stop: function (spinId) {

            }
        };
    },
    dateService: function () {
        return {
            getDaysAgo: function (data) {
                return 90;
            },
            isBefore: function (dateFrom, dateTo) {
                return true;
            },
            isAfter: function (dateFrom, dateTo) {
                return true;
            },
            isDate: function (dateinStringFormat) {
                var potentialDate = new Date(dateinStringFormat);
                if (Object.prototype.toString.call(potentialDate) === "[object Date]") {
                    // it is a date
                    if (!isNaN(potentialDate.getTime())) {
                        return true;
                    }
                }
                return false;
            },
            isExpiredFilterForCms: function (obj) {
                return true;
            },
            getDateOptions: function () {
                return {};
            }
        };
    },
    mapperService: function () {
        return {
            mapToAccountActivityDTO: function (data) {

                var accountActivityDTO = {};
                accountActivityDTO.page = 1;
                accountActivityDTO.dateFrom = "too cool to handle";
                return accountActivityDTO;
            },
            mapToViolationsData: function (data) {
                return {};
            }
        };
    },
    closeAccountService: function () {
        return {
            displayCloseAccountModal: function () { }
        };
    },
    billingInfoStateManagerService: function () {
        return {
            registerParent: function () { },
            stateAdvancementRules: function () { },
            checkStateValidity: function () { return true; }
        };
    },
    creditCardFilter: function () {
        return function (arg1, arg2) {
            return '****-****-****-****';
        };
    },
    newAccountService: function (configObj) {
        return {
            getTransactionId: function () {
                return 91827364;
            },
            getDeliveryMethod: function () {
                return 'mail';
            },
            getPayment: function () {
                return {
                    tagSalesAmt: 15,
                    depositAmt: 40,
                    totalAmt: 40,
                    paymentExists: true
                };
            },
            paymentExists: function () {
                return configObj.paymentExists;
            },
            setTransactionId: function (transactionId) {
                configObj.transactionId = transactionId;
            },
            setPayment: function (payment) {
                configObj.payment = payment;
            },
            setDeliveryMethod: function (deliveryMethod) {
                configObj.deliveryMethod = deliveryMethod;
            },
            getAccountInfo: function () {
                return {
                    companyName: null,
                    firstName: "First",
                    lastName: "Last",
                    acctType: "personal"
                };
            },
            setAccountInfo: function (info) {
                configObj.companyName = (info.companyName);
                configObj.firstName = (info.firstName);
                configObj.lastName = (info.lastName);
                configObj.accountType = (info.accountType);
            },
            localDataExists: function () {
                return configObj.localDataExists;
            },
            getVehicleList: function () {
                return configObj.inVehicleList;
            },
            setVehicleList: function () {

            },
            clearVehicleList: function () {

            }
        };
    },
    removeDoubleCharService: function () {
        return {
            removeDoubleChar: function (val) {
                //once a field reaches past its max length, no val sent
                if (!val) {
                    return;
                }
                val = val.toString();

                val = val.replace(/@@/g, '@');
                val = val.replace(/\s+/g, ' ');
                val = val.replace(/\.+/g, '.');
                val = val.replace(/\-+/g, '-');
                val = val.replace(/\_+/g, '_');
                val = val.replace(/[\<\>\'\"]/g, '');

                return val;
            }
        };
    },
    modalService: function (inModal, modalOptions) {
        return {
            showModal: function (optionA, optionB) {
                inModal.value = "called";
                modalOptions.A = optionA;
                modalOptions.B = optionB;
                return {
                    then: function () { }
                };
            },
            showUpdateSuccessModal: function (titleString, topicString) {
                inModal.value = 'called';
                inModal.title = titleString;
                inModal.topic = topicString;
                return {
                    then: function () { }
                };
            },
            violationsThisInvoicePaidModal: function () {
                return {
                    then: function () { }
                };
            },
            violationsPaymentPlanModal: function () {
                return {
                    then: function () { }
                };
            },
            violationsBelowMinimumPaymentModal: function (minPayment) {
                return {
                    then: function () { }
                };
            },
            violationsPaymentWillLeaveLowBalanceModal: function (defaultAmount) {
                return {
                    then: function () { }
                };
            },
            violationsPaymentCouldLeaveLowBalanceModal: function (defaultAmount, minimumPayment, defaultMinusMinimum) {
                return {
                    then: function () { }
                };
            },
            violationsOverpaymentModal: function (defaultAmount) {
                return {
                    then: function () { }
                };
            },
            violationsCannotAddVehicleModal: function () {
                return {
                    then: function () { }
                };
            },
            violationsNoViolationFoundWithInvoice: function () {
                return {
                    then: function () { }
                }
            }
        };
    },
    fakeModalService: function (inModal, modalOptions) {
        return {
            showModal: function (optionA, optionB) {
                inModal.value = "called";
                modalOptions.A = optionA;
                modalOptions.B = optionB;
                return {
                    then: function (cb) {
                        cb({});
                    }
                };
            }
        };
    },
    changePaymentMethodService: function (changePaymentMessage) {
        return {
            displayEftToast: function (reqMinRebillAmtForEFT, reqMinRebillAmtForCC, reqLowBalLevelForCC) {
                changePaymentMessage.value = "Called displayEftToast from changePaymentMethodService";
            },
            displayCreditCardToast: function (reqMinRebillAmtForEFT, reqMinRebillAmtForCC, reqLowBalLevelForCC) {
                changePaymentMessage.value = "Called displayCreditCardToast from changePaymentMethodService";
            }
        };
    },
    tagList: function () {
        return {
            accountTags: [
				{ transactionId: 98743294 },
				{ transactionId: 19098453 }
            ],
            accountTagsExists: true
        };
    },
    tagListConfigurable: function (inObj) {
        return inObj;
    },
    localDataRepo: function () {

        return {
            getModelYears: function () {
                var yearsArray = [];

                var curDate = new Date();
                var curYear = curDate.getFullYear();

                for (var x = curYear + 1; x >= 1900; x--) {
                    yearsArray.push(x);
                }

                return yearsArray;
            },
            getClasses: function () {

                var classesArr = [
					{ value: 2, label: "2-Axles" },
					{ value: 3, label: "3-Axles" },
					{ value: 4, label: "4-Axles" },
					{ value: 5, label: "5-Axles" },
					{ value: 6, label: "6+-Axles" }
                ];

                return classesArr;
            }
        };
    },

    bowserService: function () {
        var isFunction = function (functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
        };

        return {
            bowser: function () {
                return bowser;
            },
            getUserBrowserInfo: function () {
                var browserSummary = '';
                for (var property in bowser) {
                    if (bowser.hasOwnProperty(property)) {
                        if (!isFunction(bowser[property])) {
                            browserSummary = browserSummary + property + '=' + bowser[property] + '; ';
                        }
                    }
                }
                return browserSummary;
            }
        };
    },
    momentService: function (dates) {
        return {
            moment: function () {
                return moment(dates.endDate);
            }
        };
    },
    spaceReplaceFilter: function () {
        return {

        };
    },
    megaMenuCache: function () {
        return {
            cacheMegaMenu: function () {
                return [];
            },
            getCachedMegaMenu: function () {
                return [];
            },
            defaultCachedMegaMenu: function () {
                return [];
            }
        };
    },
    mobileMenuRouteService: function () {
        return {
            getNavRoutes: function () {
                return true;
            }
        }
    },
    desktopMenuRouteService: function () {
        return {
            getMegaMenuNavRoutes: function () {
                return {
                    then: function (cb) {
                        var routes = [
                            {
                                menuColumns: [
                                {
                                    subMenus: [{
                                        links: [{
                                            url: "test url1"
                                        }]
                                    }]
                                },
                                {
                                    subMenus: [{
                                        links: [{
                                            url: "test url2"
                                        }]
                                    }]
                                },
                                {
                                    subMenus: [{
                                        links: [{
                                            url: "test url3"
                                        }]
                                    }]
                                }]
                            },
                            {
                                menuColumns: [
                                {
                                    subMenus: [{
                                        links: [{
                                            url: "test url4"
                                        }]
                                    }, {
                                        links: [{
                                            url: "test url6"
                                        }]
                                    }]
                                },
                                {
                                    subMenus: [{
                                        links: [{
                                            url: "test url5"
                                        }]
                                    }]
                                }]
                            }
                        ];
                        cb(routes);
                        return true;
                    }
                };
            }
        };
    },
    $document: function (inDoc) {
        return {
            querySelector: function (selector) {
                inDoc = document.querySelector(selector);
                return document.querySelector(selector);
            },
            find: function (selector) {
                inDoc = document.querySelector(selector);
                return [document.querySelector(selector)];
            }
        };
    },
    $window: function (setUrl) {
        return {
            open: function (path, target) {
                if (path == null) {
                    path = '';
                }
                if (target == null) {
                    target = '';
                }
                setUrl.value = path + target;
            },
            print: function () {
                setUrl.value = "Printed!";
            },
            location: {
                reload: function () {
                    return true;
                }
            }
        };
    },
    document: function (setUrl) {
        return {
            location: function (inUrl) {
                setUrl.value = inUrl;
            }
        };
    },
    monthListService: function () {
        return {
            getMonths: function () {
                return {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                };
            }
        };

    },
    ratesService: function () {

        var allAxles = 'All Axles';

        var createAxleDropdown = function (tollRoad) {
            if (tollRoad.Directions.length > 0) {
                var axleArray = angular.copy(tollRoad.Directions[0].TollSections[0].Rates);

                // Sort based on axle class
                axleArray = axleArray.sort(function (a, b) {
                    if (a.Label > b.Label) {
                        return 1;
                    }
                    if (a.Label < b.Label) {
                        return -1;
                    }
                    return 0;
                });

                // Add All Axles option
                axleArray.unshift({
                    Label: this.allAxles,
                    Value: this.allAxles
                });

                return axleArray;
            }
        };

        var mapTollRoads = function (tollRoadsArray) {

            var tollRoads = [
                {
                    Title: "Sam Houston Tollway",
                    Directions: [{
                        Direction: "Clockwise",
                        TollSections: [{
                            Bold: false,
                            DisplayName: "Wilson Road",
                            HasChildren: "False",
                            ItemID: "b6f8a79d-14ba-4851-9e92-10d6081fb3d1",
                            LocationType: "exit ramp ramp",
                            Position: "1",
                            Rates: [{
                                $$hashKey: "object:565",
                                Label: "2 Axles (Cash)",
                                Value: "Cash Not Accepted"
                            }],
                            ShortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue vulputate erat hendrerit tincidunt.",
                            Title: "Wilson Road",
                            TollingLocations: "Wilson Road"

                        }]
                    }],
                    LongDescription: ""
                }
            ];

            return tollRoads;
        };

        return {
            allAxles: allAxles,
            createAxleDropdown: createAxleDropdown,
            mapTollRoads: mapTollRoads
        };
    },
    helpAndSupportService: function () {
        var mapLocationTitle = function (title) {
            var mappedTitle = {};

            var openParen = title.indexOf('(');
            if (openParen !== -1) {
                mappedTitle.region = title.substring(0, openParen).trim();
                mappedTitle.subregion = title.substring(openParen, title.length);
            } else {
                mappedTitle.region = title;
            }
            return mappedTitle;
        };

        return {
            mapDocuments: function (documentsArray) {
                var documents = [];
                for (var i = 0; i < documentsArray.length; i++) {
                    var document = documentsArray[i];

                    var documentObj = {
                        Title: document.Title,
                        URL: document.URL
                    };
                    documents.push(documentObj);
                }
                return documents;
            },

            mapLocations: function (locationsArray) {
                var locations = [];
                for (var i = 0; i < locationsArray.length; i++) {
                    var location = locationsArray[i];

                    var mappedTitle = mapLocationTitle(location.Title);
                    var ariaText = location.ShortDescription;
                    var address = location.LongDescription.replace('&nbsp;', ' ').split(' ');
                    var addressStreet = address.slice(0, address.length - 3).join(' ').replace(',', '');
                    var addressCity = address.slice(address.length - 3, address.length).join(' ');

                    var locationObj = {
                        ariaAddressStreet: ariaText,
                        addressStreet: addressStreet,
                        addressCity: addressCity,
                        mapLink: location.MapURL,
                        region: mappedTitle.region,
                        subregion: mappedTitle.subregion,
                        imageSrc: location.Image
                    };

                    locations.push(locationObj);
                }

                return locations;
            },

            mapFields: function (fieldArray) {
                var fieldsObj = {};
                for (var i = 0; i < fieldArray.length; i++) {
                    var field = fieldArray[i];
                    fieldsObj[field.ItemName] = {};

                    if (field.Children && field.Type === 'Dropdown') {
                        var dropdownOptions = field.Children[0].Children;
                        fieldsObj[field.ItemName].Options = dropdownOptions;
                    }

                    if (field.Label) {
                        fieldsObj[field.ItemName].Label = field.Label;
                    }

                    if (field.Type) {
                        fieldsObj[field.ItemName].Type = field.Type;
                    }
                }
                return fieldsObj;
            },

            createFormMapping: function (formsArray) {
                var formMap = {};
                for (var i = 0; i < formsArray.length; i++) {
                    var form = formsArray[i];

                    formMap[form.ItemName] = {};
                    formMap[form.ItemName].LongDescription = form.LongDescription;
                    formMap[form.ItemName].Title = form.Title;

                    formMap[form.ItemName].Fields = [];
                    var fieldsArray = form.Children[0].Children;
                    for (var j = 0; j < fieldsArray.length; j++) {
                        var field = fieldsArray[j];
                        formMap[form.ItemName].Fields.push({
                            Field: field.Field,
                            IsRequired: field.IsRequired === '1' ? true : false
                        });
                    }
                }
                return formMap;
            },

            processDocumentsList: function (list) {
                var documentsList = list;
                var cmsRequests = {
                    requests: []
                };

                for (var i = 0; i < documentsList.length; i++) {
                    var request = {
                        path: documentsList[i].URL,
                        fields: 'ItemID,Size,Extension'
                    };
                    cmsRequests.requests.push(request);
                }
            }
        };
    },
    activateEzTagWizardDirectorService: function (inStorage) {
        return {
            saveStep: function (listOfVehicles, transactionId, currentScreen) {
                inStorage["transactionId"] = transactionId;
                var step = 0;
                switch (currentScreen) {
                    default:
                    case ("/ActivateEzTag"): step = 2; break;
                    case ("/ConfirmTagActivation"): step = 3; break;
                    case ("/TagActivationGratitude"): step = 1; break;
                }
                inStorage.step = step;
                inStorage.listOfVehicles = listOfVehicles;
            },
            redirectToCorrectScreen: function (step) {
                return false;
            },
            destroyActivateEzTagInformation: function () {
                inStorage.activateEzTagWizardInformation = {
                    transactionId: null,
                    step: null,
                    listOfVehicles: null,
                };
                return;
            }
        };
    },
    primaryAndSecondaryCreditCards: function () {
        return {
            billingType: "CREDIT",
            billingInfo: {
                address: null,
                billingInfoExists: true,
                billingType: 0,
                billingTypeCode: "C",
                billingTypeDisplay: "CREDIT",
                cards: [{
                    address1: "1208 Oak Creek",
                    address2: null,
                    cardCode: "V",
                    cardExpires: "01/2017",
                    cardExpiresDate: "2017-01-01T13:09:13.369-06:00",
                    cardNbr: "************-0013",
                    cardType: 0,
                    city: "CONROE",
                    country: "USA",
                    name: "AnotherTest",
                    nameOnCard: "AnotherTest",
                    paymentAmount: 0,
                    paymentType: 0,
                    plus4: "2124",
                    primary: true,
                    state: "TX",
                    zip: "77301",
                    zipCode: "77301"
                },
				{
				    address1: "234 Sample",
				    address2: null,
				    cardCode: "M",
				    cardExpires: "01/2034",
				    cardExpiresDate: "2034-01-01T13:09:13.369-06:00",
				    cardNbr: "************-1126",
				    cardType: 0,
				    city: "CONROE",
				    country: "USA",
				    name: "AnotherTest",
				    nameOnCard: "AnotherTest",
				    paymentAmount: 0,
				    paymentType: 0,
				    plus4: "2124",
				    primary: false,
				    state: "TX",
				    zip: "77301",
				    zipCode: "77301"
				}],
                creditCard: true,
                eft: null
            }
        };
    },
    router: function () {
        return [
			{
			    name: 'Home',
			    config: {
			        url: 'home',
			        templateUrl: '/app/templates/home/home.html',
			        controller: 'HomeController',
			        settings: {
			            navlevel: 0,
			            nav: 1,
			            content: "<img src='../Content/icons/menu/hm_home.png' alt='Click to go to home page'>   HOME"
			        },
			        data: {
			            authorizedRoles: ['anonymous']
			        },
			        quickLink: {}
			    }
			}, {
			    name: 'eZTagAccount',
			    config: {
			        settings: {
			            navlevel: 0,
			            nav: 2,
			            content: "<img src='../Content/icons/menu/hm_ez_tag_acct.png' alt='Click to see account options'>   EZ TAG ACCOUNT"
			        },
			        data: {
			            authorizedRoles: ['anonymous']
			        }
			    }
			}, {
			    name: 'accountSummary',
			    config: {
			        url: 'accountSummary',
			        templateUrl: '/app/templates/account/accountSummary.html',
			        controller: 'AccountSummaryController',
			        settings: {
			            parent: 'eZTagAccount',
			            navlevel: 1,
			            nav: 1,
			            content: 'ACCOUNT SUMMARY'
			        },
			        data: {
			            authorizedRoles: ['active', 'suspended', 'pendingClosure']
			        },
			        quickLink: {
			            nav: 2,
			            content: 'View EZ TAG Account Summary'
			        }
			    }
			}, {
			    name: 'AccountActivity',
			    config: {
			        url: 'accountActivity',
			        templateUrl: '/app/templates/accountActivity/accountActivity.html',
			        controller: 'AccountActivityController',
			        settings: {
			            parent: 'eZTagAccount',
			            navlevel: 1,
			            nav: 2,
			            content: 'ACCOUNT ACTIVITY'
			        },
			        data: {
			            authorizedRoles: ['active', 'suspended', 'pendingClosure']
			        },
			        quickLink: {
			            nav: 1,
			            content: 'View EZ TAG Account Activity'
			        }
			    }
			}
        ];
    },
    capitalizeFilter: function () {
        return function (input, all) {
            if (!!input) {
                return input.replace(/([^\W_]+[^\s-]*) */g,
					function (txt) {
					    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
					});
            } else {
                return '';
            }
        };
    },
    charReplaceFilter: function () {
        return function (input, charReplaced, charReplacer) {
            if (!input) { return ''; }
            return input.toString().trim().replace(charReplaced, charReplacer);
        };
    },
    creditCardCodeFilter: function () {
        return function (creditCardInput, creditCardCode) {
            if (!creditCardInput) { return ''; }

            var value = creditCardInput.toString().trim().replace(/\D/g, '');
            value = value.substring(value.length - 4, value.length);

            var maskedCard;
            switch (creditCardCode.toLowerCase()) {
                case 'v': // ****-****-****-####
                case 'm':
                case 'd':
                    maskedCard = '****-****-****-' + value;
                    break;

                case 'a': //****-******-*####
                    maskedCard = '****-******-*' + value;
                    break;

                default:
                    break;
            }

            return maskedCard;
        };
    },
    NamesToCurrentUserService: function () {
        return {
            setNamesToCurrentUser: function () { }
        };
    },
    helloUserService: function () {
        return {
            setHelloName: function () { }
        };
    },
    updatePersonalInformationService: function () {
        var init = function ($scope) {
            $scope.personalInfo = {};
            $scope.personalInfo.mailingAddress = {};
            $scope.validations = {};
            $scope.international = false;
            $scope.mailingAddressDescription = "test mailing address description";
        };

        var onSave = function ($scope, isValid, saveState) {
            if (isValid) {
                $scope.personalInfo.mailingAddress.countryList = {};
                $scope.personalInfo.mailingAddress.stateList = {};

                if (!$scope.international) {
                    $scope.personalInfo.mailingAddress.country = "";
                }

                return saveState;
            }
        };

        var onCancel = function ($scope, cancelState) {
            return cancelState;
        };

        return {
            init: init,
            onSave: onSave,
            onCancel: onCancel
        };
    },
    updateBillingInformationService: function () {
        var init = function ($scope) { return; };
        var setEFT = function ($scope) { return; };
        var setEFTValidation = function ($scope) { return; };
        var setCreditCardValidation = function ($scope) { return; };
        var changePaymentMethod = function () { return; };

        return {
            init: init,
            setEFT: setEFT,
            setEFTValidation: setEFTValidation,
            setCreditCardValidation: setCreditCardValidation,
            changePaymentMethod: changePaymentMethod
        };
    },
    omnitureService: function () {
        var sendTag = function (toState, suffix) {

        };

        return {
            sendTag: sendTag
        };
    },
    googleAnalyticsService: function () {
        var sendTag = function () {

        };

        return {
            sendTag: sendTag
        };
    },
    creditCardTypes: {
        visa: 'VISA',
        mastercard: 'MASTERCARD',
        amex: 'AMERICAN EXPRESS',
        discover: 'DISCOVER'
    },
    menuUtilService: function () {
        var getLogo = function () {
            return {
                then: function (cb) {
                    cb("here's a logo");
                }
            };
        };

        var isLoginPage = function () {
            return true;
        };

        var goToLogin = function () {
        };

        var goToHome = function () {
        };

        var setCurrentBalanceFromWebStorage = function () {
        };

        var routeIs = function (url, wizardStateName) {
            return true;
        };

        var logout = function () {
        };

        var createGlobalGoogle = function () {
        };

        var setGoogleHide = function () {
        };

        var globalGoogleAttributes = {
            test: "testAttribute"
        };

        return {
            getLogo: getLogo,
            isLoginPage: isLoginPage,
            goToLogin: goToLogin,
            goToHome: goToHome,
            setCurrentBalanceFromWebStorage: setCurrentBalanceFromWebStorage,
            routeIs: routeIs,
            createGlobalGoogle: createGlobalGoogle,
            setGoogleHide: setGoogleHide,
            logout: logout,
            globalGoogleAttributes: globalGoogleAttributes
        };
    },
    cmsTextInsertionService: function () {
        return {
            insertValues: function (valuesObject, stringToInsert) {
                return "insertValues called";
            },
            checkOptional: function (valuesObject, stringToInsert) {
                return "insertValues called";
            }
        };
    },   
    urlManagerService: function () {
        var metadataDictionary = null;
        var newRoutes = {};
        var megaMenuStructure = null;
        var footerCmsResponse = null;
        var getStartingRoutes = function () {

        };

        var getMegaMenu = function () {

        };

        var getMetadata = function () {
            var r = { metadata: "" };
            return r;
        };

        var getFooterdata = function () {

        };

        return {
            metadataDictionary: metadataDictionary,
            newRoutes: newRoutes,
            megaMenuStructure: megaMenuStructure,
            footerCmsResponse: footerCmsResponse,
            getStartingRoutes: getStartingRoutes,
            getMegaMenu: getMegaMenu,
            getMetadata: getMetadata,
            getFooterdata: getFooterdata
        };
    },
    documentLocationService: function (hrefUrl) {
        return {
            goToHref: function (url) {
                hrefUrl.value = url;
            }
        };
    },
    marketingImageService: function () {
        return {
            processImagesToObj: function (array) {
                return {};
            },

            getObj: function (loginObj, array) {
                return {};
            },

            getDefaultObj: function (array) {
                return {};
            },

            setImages: function (state, obj) {
                return [];
            }
        };
    },
    errorLogService: function () {
        return function log(exception, cause) { };
    },

    violationsCalcService: function () {
        return {
            calculateAllInvoicesSummary: function () {
                return "Invoices calculated";
            }
        };
    },
    violationsInvoicesService: function () {
        return {
            setupInvoices: function () {
                return;
            }
        };
    },
    violationsCmsService: function () {
        return {
            paymentPageSetup: function () {
                var paymentPageSetupOut = {};
                paymentPageSetupOut.insertionValues = "Test";
                paymentPageSetupOut.importantInfo = "Test";
                paymentPageSetupOut.violationsThankYou = "Test";
                paymentPageSetupOut.receiptPageSummary = "Test";
                return paymentPageSetupOut;
            },
            receiptPageSetup: function () {
                var receiptPageSetup = {};
                receiptPageSetup.thankYouData = "Test";
                receiptPageSetup.cmsData = "Test";
                return receiptPageSetup;
            }
        };
    },
    rssService: function (rssObj) {
        return {
            goToRssFeed: function (locationId) {
                rssObj.value = locationId;
            }
        };
    },
    accountBlockPopupService: function () {
        return {
            savePopupMessages: function (queryString) { },
            displayBlockPopup: function () { }
        };
    },
    browserExtensionHandlerService: function (inOmnitureTag) {
        return {
            sendTag: function (currentState, tagString) {
                inOmnitureTag.state = currentState;
                inOmnitureTag.tag = tagString;
            }
        }
    },
    pciInfoService: function () {
        return {
            registerCard: function (cardNum) {
                return {
                    then: function (cb) {
                        var fakeResponse = {
                            lastFour: '1234',
                            paypageRegistrationId: 'fakepaypageregistrationid'
                        };

                        if (Array.isArray(cardNum))
                            fakeResponse = [fakeResponse];

                        cb(fakeResponse);
                    }
                }
            }
        }
    },
    vantivPaymentService: function ($qFactory) {
        return {
            vantivPay: function (cardNum) {
                return null;
            }
        }
    },
    manageVehiclesGridRemote: function () {
        return {
            dataBindGrid: function () { },
            parseExtraPlateData: function () {
                return [{
                    desc: "tagless plate description",
                    licPlate: "tagless plate license plate",
                    state: "tagless plate state"
                }];
            },
            addTaglessPlateStatusRow: function (row, descDataList) { }
        };
    },
    manageVehiclesPrintPrev: function () {
        return {
            setupGridPrint: function (accountId, windowCount) { }
        };
    },
    maintenanceService: function () {
        return {
            resolveMaintenanceStatus: function (navFeatures) { return; },
            considerMaintenancePopup: function () { return; }
        }
    },
    billingInfoUtilitiesService: function (utilitiesObj) {
        return {
            isPrimaryCCAvailable: function (billingInfo) { return utilitiesObj.isPrimary },
            isInternationalAddress: function (objWithCountry) { return utilitiesObj.isInternational },
            hasMultipleCards: function (cardsArray) { return utilitiesObj.hasMultiple },
            hasNoBillingInfo: function (cardsArray) { return utilitiesObj.hasNoBillingInfo }
        }
    },
    saveBillingService: function () {
        return {
            createSaveRequest: function (scope) { return scope; },
            saveCreditCard: function (request, nextState) { },
            saveEFT: function (request, nextState) { }
        }
    },
    hctraSpinnerService: function () {
        return {
            startSpinner: function () { },
            stopSpinner: function () { }
        };
    },
    StorefrontService: function () {
        return {
            isEnabled: function () {
                return false;
            },
            cmsRequests:
             {
                 'hctraLogo': {
                     Path: '/sitecore/media library/Images/HCTRA/Header Footer/HCTRA_Logo',
                     Fields: 'ItemID,Alt,Width,Height'
                 },
                 'states': {
                     ItemId: "449337DB-4759-48A7-8982-DC56F92C1F27",
                     Fields: 'ItemId,Name,Children'
                 },
                 'dbIds': {
                     ItemId: "449337DB-4759-48A7-8982-DC56F92C1F27",
                     Fields: ''
                 },
                 'tasks': {
                     ItemId: "449337DB-4759-48A7-8982-DC56F92C1F27",
                     Fields: ''
                 }
             }
        }
    }
};