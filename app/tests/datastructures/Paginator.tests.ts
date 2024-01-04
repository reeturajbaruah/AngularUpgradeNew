declare var hctraMocks: any;

(function () {
    "use strict";

    describe("Paginator datastructure", function () {

        beforeEach(angular.mock.module("HCTRAModule"));

        let initArray: string[];

        beforeEach(function () {

            initArray = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
        });

        it('should have accurate metadata', function () {

            let paginator: HCTRA.Datastructure.IPaginator<string> = new HCTRA.Datastructure.Paginator(initArray, 6);
            
            expect(paginator.itemCount).toBe(12);
            expect(paginator.pageCount).toBe(2);
            expect(paginator.pageSize).toBe(6);

            let paginator2: HCTRA.Datastructure.IPaginator<string> = new HCTRA.Datastructure.Paginator(initArray, 11);

            expect(paginator2.itemCount).toBe(12);
            expect(paginator2.pageCount).toBe(2);
            expect(paginator2.pageSize).toBe(11);

            let paginator3: HCTRA.Datastructure.IPaginator<string> = new HCTRA.Datastructure.Paginator(initArray, 12);

            expect(paginator3.itemCount).toBe(12);
            expect(paginator3.pageCount).toBe(1);
            expect(paginator3.pageSize).toBe(12);
        });

        it('should return page items in correct order', function () {

            let paginator: HCTRA.Datastructure.IPaginator<string> = new HCTRA.Datastructure.Paginator(initArray, 4);

            expect(paginator.getPage(1)[0]).toBe('first');
            expect(paginator.getPage(1)[1]).toBe('second');
            expect(paginator.getPage(1)[2]).toBe('third');
            expect(paginator.getPage(1)[3]).toBe('fourth');

            expect(paginator.getPage(3)[0]).toBe('ninth');
            expect(paginator.getPage(3)[1]).toBe('tenth');
            expect(paginator.getPage(3)[2]).toBe('eleventh');
            expect(paginator.getPage(3)[3]).toBe('twelfth');

        });

        it('should account for uneven division properly', function () {

            let paginator: HCTRA.Datastructure.IPaginator<string> = new HCTRA.Datastructure.Paginator(initArray, 11);

            expect(paginator.getPage(1)[10]).toBe('eleventh');
            expect(paginator.getPage(1)[11]).toBeUndefined();
            expect(paginator.getPage(2)[0]).toBe('twelfth');
            expect(paginator.getPage(2)[1]).toBeUndefined();

            let paginator2: HCTRA.Datastructure.IPaginator<string> = new HCTRA.Datastructure.Paginator(initArray, 13);

            expect(paginator2.getPage(1)[10]).toBe('eleventh');
            expect(paginator2.getPage(1)[11]).toBe('twelfth');
            expect(paginator2.getPage(1)[12]).toBeUndefined();
        });
    });
}());