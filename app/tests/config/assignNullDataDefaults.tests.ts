declare var hctraMocks: any;

(() => {
    'use strict';

    describe('assignNullDataDefaults', () => {

        let service

        beforeEach(angular.mock.module('HCTRAModule'));

        beforeEach(angular.mock.inject(($injector: angular.auto.IInjectorService) => {

            service = $injector.get('assignNullDataDefaults');
        }));


        describe("canary", () => {

            it("should pass", () => {

                expect(true).toBe(true);
            })

        });

        describe("service", () => {

            [1 , "a", true].forEach(response => {

                it("should return response unchanged when response not object", () => {

                    var expectedResponse = angular.copy(response);

                    expect(service(response)).toEqual(expectedResponse);
                });
            });

            [{ data: 1 }, { data: "a" }, { data: true, other: {} }].forEach(response => {

                it("should return response unchanged when response.data truthy and not an object", () => {

                    var expectedResponse = angular.copy(response);

                    expect(service(response)).toEqual(expectedResponse);
                });
            });

            [
                [
                    { other: 1 },
                    { data: { errors: [], alerts: [] }, other: 1 }
                ],
                [
                    { data: null, stuff: {} },
                    { data: { errors: [], alerts: [] }, stuff: {} }
                ],
                [
                    { data: 0, cool: true },
                    { data: { errors: [], alerts: [] }, cool: true }
                ],
                [
                    { data: false, status: "great" },
                    { data: { errors: [], alerts: [] }, status: "great" }
                ]
            ].forEach(([response, expectedResponse]) => {

                it("should return response with empty data.errors and data.alerts when response.data falsy", () => {                                       

                    expect(service(response)).toEqual(expectedResponse);
                });
                });

            [
                [
                    { other: 1 },
                    { data: { errors: [], alerts: [] }, other: 1 }
                ],
                [
                    { data: null, stuff: {} },
                    { data: { errors: [], alerts: [] }, stuff: {} }
                ],
                [
                    { data: 0, cool: true },
                    { data: { errors: [], alerts: [] }, cool: true }
                ],
                [
                    { data: false, status: "great" },
                    { data: { errors: [], alerts: [] }, status: "great" }
                ],
                [
                    { data: "", temperature: "cold" },
                    { data: { errors: [], alerts: [] }, temperature: "cold" }
                ]
            ].forEach(([response, expectedResponse]) => {

                it("should return response with empty data.errors and data.alerts when response.data falsy", () => {

                    expect(service(response)).toEqual(expectedResponse);
                });
            });


            [
                [

                    { data: { alerts: [ 1] }, other: 1 },
                    { data: { errors: [], alerts: [ 1] }, other: 1 }
                ],
                [
                    { data: { errors: 0, alerts: [] }, stuff: {} },
                    { data: { errors: [], alerts: [] }, stuff: {} }
                ],
                [

                    { data: { errors: "", alerts: [ "asd", "dds"] }, cool: true },
                    { data: { errors: [], alerts: [ "asd", "dds"] }, cool: true }
                ],
                [
                    { data: { errors: false, alerts: [{}, {}, {}] }, status: "great" },
                    { data: { errors: [], alerts: [{}, {}, {}] }, status: "great" }
                ],
                [
                    { data: { errors: null, alerts: [{}, {}, {}] }, temperature: "cold" },
                    { data: { errors: [], alerts: [{}, {}, {}] }, temperature: "cold" }
                ]
            ].forEach(([response, expectedResponse]) => {

                it("should return response with empty data.errors response.data.errors falsy", () => {

                    expect(service(response)).toEqual(expectedResponse);
                });
            });

            [
                [

                    { data: { errors: [1] }, other: 1 },
                    { data: { alerts: [], errors: [1] }, other: 1 }
                ],
                [
                    { data: { alerts: 0, errors: [] }, stuff: {} },
                    { data: { alerts: [], errors: [] }, stuff: {} }
                ],
                [

                    { data: { alerts: "", errors: ["asd", "dds"] }, cool: true },
                    { data: { alerts: [], errors: ["asd", "dds"] }, cool: true }
                ],
                [
                    { data: { alerts: false, errors: [{}, {}, {}] }, status: "great" },
                    { data: { alerts: [], errors: [{}, {}, {}] }, status: "great" }
                ],
                [
                    { data: { alerts: null, errors: [{}, {}, {}] }, temperature: "cold" },
                    { data: { alerts: [], errors: [{}, {}, {}] }, temperature: "cold" }
                ]
            ].forEach(([response, expectedResponse]) => {

                it("should return response with empty data.alerts response.data.alerts falsy", () => {

                    expect(service(response)).toEqual(expectedResponse);
                });
            });
        });

    });
})();