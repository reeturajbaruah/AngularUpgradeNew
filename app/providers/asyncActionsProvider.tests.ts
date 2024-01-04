
(function () {
    "use strict";

    describe("asyncActionsProvider", () => {
        
        beforeEach(angular.mock.module("HCTRAModule"));

        let asyncActionsProvider;
        
        beforeEach(() => {                      
            asyncActionsProvider = new HCTRA.Service.AsyncActionsProvider();
        });

        describe('tests', () => {
            it('has $q as first dep in $get', () => {
                expect(asyncActionsProvider.$get[0]).toBe('$q');
            });

            it('registers new provider dep', () => {
                asyncActionsProvider.register('test');
                expect(asyncActionsProvider.$get.length).toBe(3);
                expect(asyncActionsProvider.$get[0]).toBe('$q');
                expect(asyncActionsProvider.$get[1]).toBe('test');
            });

            it('always has factory method at end of resolution array', () => {
                expect(asyncActionsProvider.$get.length).toBe(2);
                expect(typeof asyncActionsProvider.$get[asyncActionsProvider.$get.length - 1]).toBe('function');
                asyncActionsProvider.register('test1');
                expect(asyncActionsProvider.$get.length).toBe(3);
                expect(typeof asyncActionsProvider.$get[asyncActionsProvider.$get.length - 1]).toBe('function');
                asyncActionsProvider.register('test2');
                expect(asyncActionsProvider.$get.length).toBe(4);
                expect(typeof asyncActionsProvider.$get[asyncActionsProvider.$get.length - 1]).toBe('function');
            });

            it('factory method calles $q.all for all arguments', () => {
                const $q = jasmine.createSpyObj('$q', ['all']);  
                const factoryMethodRaw = asyncActionsProvider.$get[1];
                
                const a = { then: () => { } };
                const b = { then: () => { } };
                const c = { then: () => { } };
                const r = { then: () => { } };

                $q.all.and.returnValue(r);

                const result = factoryMethodRaw($q, a, b, c);
                expect(result).toBe(r);
                expect($q.all).toHaveBeenCalled();
                const args = $q.all.calls.argsFor(0);
                expect(args).toEqual([[a, b, c]]);
            });
        });

        
    });
})();