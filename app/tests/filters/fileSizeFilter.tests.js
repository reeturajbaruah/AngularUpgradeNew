(function () {
    'use strict';

    //describe() begins a unit testing fixture
    describe('fileSizeFilter', function () {

        //module() is registered on window and is a shortcut to angular.mock.module()
        //use it to mock the main app module
        //Note: DO NOT include the real app.js file on the testRunner HTML file. This will 
        // cause a cascade of dependencies that you will have a hard time catching-up to. testApp.js 
        // contains a simple module definition that isolates out the complexities. Unit test piece-by-piece
        beforeEach(angular.mock.module('HCTRAModule'));

        var filter;

        beforeEach(angular.mock.inject(function ($injector) {
            filter = $injector.get('$filter');
        }));

        it('should round and apply proper unit to file size given in bytes', function () {

            var filteredSize = filter('fileSize')("1"); // 1,024 bytes or 1 kB
            expect(filteredSize).toBeDefined();
            expect(filteredSize).toBe("1 B");
            expect(filteredSize).not.toBe("1");
            expect(filteredSize).not.toBe("0 KB");

            filteredSize = filter('fileSize')("1024"); // 1,024 bytes or 1 kB
            expect(filteredSize).toBeDefined();
            expect(filteredSize).toBe("1 KB");
            expect(filteredSize).not.toBe("1024");

            filteredSize = filter('fileSize')("1023"); // 1,023 bytes
            expect(filteredSize).toBeDefined();
            expect(filteredSize).toBe("1023 B");
            expect(filteredSize).not.toBe("1023");
            expect(filteredSize).not.toBe("1 KB");
            expect(filteredSize).not.toBe("0 KB");

            filteredSize = filter('fileSize')("1048576"); // 1,024 kilobytes or 1 MB
            expect(filteredSize).toBeDefined();
            expect(filteredSize).toBe("1 MB");
            expect(filteredSize).not.toBe("1048576");
            expect(filteredSize).not.toBe("1024 KB");

            filteredSize = filter('fileSize')("1048575"); // 1,023 kilobytes
            expect(filteredSize).toBeDefined();
            expect(filteredSize).toBe("1023 KB"); // just shy of 1 MB
            expect(filteredSize).not.toBe("1 MB");
            expect(filteredSize).not.toBe("1048575");
            expect(filteredSize).not.toBe("1024 KB");
            
            filteredSize = filter('fileSize')("1073741824"); // 1,024 megabytes or 1 GB
            expect(filteredSize).toBeDefined();
            expect(filteredSize).toBe("1 GB");
            expect(filteredSize).not.toBe("1073741824");
            expect(filteredSize).not.toBe("1024 MB");

            filteredSize = filter('fileSize')("1073741823"); // 1,023 megabytes
            expect(filteredSize).toBeDefined();
            expect(filteredSize).toBe("1023 MB"); // just shy of 1 GB
            expect(filteredSize).not.toBe("1 GB");
            expect(filteredSize).not.toBe("1073741823");
            expect(filteredSize).not.toBe("1024 MB");
        });

    });

}());