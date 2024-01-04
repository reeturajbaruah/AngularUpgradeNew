(function () {
    'use strict';

    describe('marketingImageService', function () {

        beforeEach(angular.mock.module('HCTRAModule'));

        var service,
            marketingImages = [],
            imageObj = {};

        beforeEach(angular.mock.module(function () {
            marketingImages = [];
            imageObj = {
                articles: 0,
                startIndex: 0,
                maxArticles: 1,
                maxSmall: 1,
                logIn: {
                    small: [],
                    large: []
                },
                logOut: {
                    small: [],
                    large: []
                },
                defaultObj: {
                    small: [],
                    large: []
                }
            };
        }));

        beforeEach(angular.mock.module(function ($provide) {
            $provide.value('cmsUtilService', hctraMocks.cmsUtilService());
        }));

        beforeEach(angular.mock.inject(function (_marketingImageService_) {
            service = _marketingImageService_;
        }));

        describe('getObj', function () {
            it('should not contain anything', function () {
                marketingImages.push({ ShowInHomePage: 1 });
                marketingImages.push({ ShowInHomePage: 0, UserLoggedIn: 1, isLargeImage: 1 });
                marketingImages.push({ ShowInHomePage: 0, UserLoggedIn: 1, isLargeImage: 0 });
                marketingImages.push({ ShowInHomePage: 0, UserLoggedIn: 0, isLargeImage: 1 });
                marketingImages.push({ ShowInHomePage: 0, UserLoggedIn: 0, isLargeImage: 0 });
                var obj = service.getObj(true, marketingImages);

                expect(obj.small).toBeDefined();
                expect(obj.large).toBeDefined();
                expect(obj.small).toEqual([]);
                expect(obj.large).toEqual([]);
            });

            it('should contain logged in and large', function () {
                marketingImages.push({ ShowInHomePage: 1, UserLoggedIn: 1, isLargeImage: 1 });
                var obj = service.getObj(true, marketingImages);
                expect(obj.large).toBeDefined();
                expect(obj.large).toEqual([{ ShowInHomePage: 1, UserLoggedIn: 1, isLargeImage: 1 }]);
            });

            it('should contain logged in and small', function () {
                marketingImages.push({ ShowInHomePage: 1, UserLoggedIn: 1, isLargeImage: 0 });
                var obj = service.getObj(true, marketingImages);
                expect(obj.small).toBeDefined();
                expect(obj.small).toEqual([{ ShowInHomePage: 1, UserLoggedIn: 1, isLargeImage: 0 }]);
            });

            it('should contain logged out and large', function () {
                marketingImages.push({ ShowInHomePage: 1, UserLoggedIn: 0, isLargeImage: 1 });
                var obj = service.getObj(false, marketingImages);
                expect(obj.large).toBeDefined();
                expect(obj.large).toEqual([{ ShowInHomePage: 1, UserLoggedIn: 0, isLargeImage: 1 }]);
            });

            it('should contain logged out and small', function () {
                marketingImages.push({ ShowInHomePage: 1, UserLoggedIn: 0, isLargeImage: 0 });
                var obj = service.getObj(false, marketingImages);
                expect(obj.small).toBeDefined();
                expect(obj.small).toEqual([{ ShowInHomePage: 1, UserLoggedIn: 0, isLargeImage: 0 }]);
            });
        });

        describe('defaultObj', function () {
            it('should not contain anything', function () {
                marketingImages.push({});
                var obj = service.getDefaultObj(marketingImages);
                expect(obj.large).toBeDefined();
                expect(obj.small).toBeDefined();
                expect(obj.large).toEqual([]);
                expect(obj.small).toEqual([]);
            });

            it('should contain large image', function () {
                marketingImages.push({ isLargeImage: 1 });
                var obj = service.getDefaultObj(marketingImages);
                expect(obj.large).toBeDefined();
                expect(obj.small).toBeDefined();
                expect(obj.large).toEqual([{ isLargeImage: 1 }]);
                expect(obj.small).toEqual([]);
            });

            it('should contain small image', function () {
                marketingImages.push({ isLargeImage: 0 });
                var obj = service.getDefaultObj(marketingImages);
                expect(obj.large).toBeDefined();
                expect(obj.small).toBeDefined();
                expect(obj.large).toEqual([]);
                expect(obj.small).toEqual([{ isLargeImage: 0 }]);
            });

            it('should contain large and small image', function () {
                marketingImages.push({ isLargeImage: 1 });
                marketingImages.push({ isLargeImage: 0 });
                var obj = service.getDefaultObj(marketingImages);
                expect(obj.large).toBeDefined();
                expect(obj.small).toBeDefined();
                expect(obj.large).toEqual([{ isLargeImage: 1 }]);
                expect(obj.small).toEqual([{ isLargeImage: 0 }]);
            });
        });
        describe('setImages', function () {
            it('should not contain anything', function () {
                var array = service.setImages('logIn', imageObj);
                expect(array).toBeDefined();
                expect(array).toEqual([]);
            });

            it('should not display image if two articles', function () {
                imageObj.articles = 2;
                imageObj.logIn.large.push('test1');
                imageObj.logIn.large.push('test2');
                imageObj.defaultObj.large.push('test1');
                imageObj.defaultObj.large.push('test2');
                var array = service.setImages('logIn', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(0);
                expect(array).toEqual([]);
            });
            //---------------------------------------------------------------------------
            it('should contain logged in large image if zero articles', function () {
                imageObj.logIn.large.push('test');
                var array = service.setImages('logIn', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(1);
                expect(array).toEqual(['test']);
            });

            it('should contain logged in small image if zero articles', function () {
                imageObj.logIn.small.push('test');
                var array = service.setImages('logIn', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(1);
                expect(array).toEqual(['test']);
            });

            it('should contain logged in small image x2 if zero articles', function () {
                imageObj.maxSmall = 2;
                imageObj.logIn.small.push('test1');
                imageObj.logIn.small.push('test2');
                var array = service.setImages('logIn', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(2);
                expect(array).toEqual(['test1', 'test2']);
            });

            it('should contain logged in small image if one articles', function () {
                imageObj.articles = 1;
                imageObj.logIn.small.push('test');
                var array = service.setImages('logIn', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(1);
                expect(array).toEqual(['test']);
            });
            //---------------------------------------------------------------------------
            it('should contain logged out large image if zero articles', function () {
                imageObj.logOut.large.push('test');
                var array = service.setImages('logOut', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(1);
                expect(array).toEqual(['test']);
            });

            it('should contain logged out small image if zero articles', function () {
                imageObj.logOut.small.push('test');
                var array = service.setImages('logOut', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(1);
                expect(array).toEqual(['test']);
            });

            it('should contain logged out small image x2 if zero articles', function () {
                imageObj.maxSmall = 2;
                imageObj.logOut.small.push('test1');
                imageObj.logOut.small.push('test2');
                var array = service.setImages('logOut', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(2);
                expect(array).toEqual(['test1', 'test2']);
            });

            it('should contain logged out small image if one articles', function () {
                imageObj.articles = 1;
                imageObj.logOut.small.push('test');
                var array = service.setImages('logOut', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(1);
                expect(array).toEqual(['test']);
            });
            //--------------------------------------------------------------------------
            it('should contain default large image if zero articles', function () {
                imageObj.defaultObj.large.push('test');
                var array = service.setImages('logIn', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(1);
                expect(array).toEqual(['test']);
            });

            it('should contain default small image if zero articles', function () {
                imageObj.defaultObj.small.push('test');
                var array = service.setImages('logIn', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(1);
                expect(array).toEqual(['test']);
            });

            it('should contain default small image if one articles', function () {
                imageObj.defaultObj.small.push('test');
                var array = service.setImages('logIn', imageObj);
                expect(array).toBeDefined();
                expect(array.length).toEqual(1);
                expect(array).toEqual(['test']);
            });
        });
    });
}());