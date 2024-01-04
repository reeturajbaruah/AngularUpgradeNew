(function () {
    'use strict';

    describe('directive: storefront menu directive', function () {

        beforeEach(angular.mock.module("HCTRATemplates"));
        beforeEach(angular.mock.module('HCTRAModule'));

        var scope, el, compile, rootScope, workItemElements;
        var storefrontService, storefrontModalService, $state, $q;
        var workItems, currentItem, taskNotCompleteIcon, taskCompleteIcon;
        
        function returnResolved(value) {
            return $q.resolve(value);
        }

        function returnRejected(obj) {
            return $q.reject(obj);
        }
        
        beforeEach(angular.mock.module(function ($provide) {
            try {
                storefrontService = jasmine.createSpyObj("storefrontService",
                    ["currentWorkItem", "getTaskCompleteIcon", "getTaskNotCompleteIcon", "skip", "isWorkflowActive"]);

                storefrontService.isWorkflowActive.and.returnValue(true);

                storefrontService.currentWorkItem.and.callFake(function() {
                    return currentItem;
                });
                storefrontService.getTaskCompleteIcon.and.returnValue(taskCompleteIcon =
                    { Url: 'complete.ico', Alt: 'completeIcon' });
                storefrontService.getTaskNotCompleteIcon.and.returnValue(taskNotCompleteIcon =
                    { Url: 'notcomplete.ico', Alt: 'notCompleteIcon' });
                storefrontService.skip.and.callFake(function(id) {
                    currentItem = workItems.filter(function(w) { return w.id === id; })[0];
                    return currentItem ? returnResolved(currentItem.states[0]) : returnRejected(currentItem);
                });

                storefrontModalService = jasmine.createSpyObj("storefrontModalService", ["skipTaskMessage"]);

                $state = jasmine.createSpyObj("$state", ["go"]);
                
                $provide.value('StorefrontService', storefrontService);
                $provide.value('StorefrontModalService', storefrontModalService);
                $provide.value('$state', $state);
            } catch (e) {
                fail(e);
            }
        }));
        
        beforeEach(angular.mock.inject(function ($injector, $compile, $templateCache, $rootScope) {
            try {


                $q = $injector.get("$q");
                compile = $compile;
                rootScope = $rootScope;

                var templatePath = "app/directives/storefront/storefrontMenuTemplate.html";
                $templateCache.put("/" + templatePath, $templateCache.get(templatePath));
            } catch (e) {
                fail(e);
            }
        }));

        function buildDirective() {
            try {
                scope = rootScope.$new();

                el = angular.element("<div storefront-menu></div>");
                storefrontService.workItems = workItems;
                compile(el)(scope);
                scope.$digest();
                workItemElements = el.children();
            } catch (e) {
                fail(e);
            }
        }

        describe('basic functionality', function () {

            beforeEach(function () {
                currentItem = {
                    isSelected : true,
                    id : '1',
                    storefrontDisplayName: '1',
                    isSkippable: true,
                    selectedIcon : {
                        image: 'selected.ico',
                        alt: 'selected'
                    },
                    unselectedIcon : {
                        image: 'unselected.ico',
                        alt: 'unselected'
                    }
                };
                workItems = [currentItem, {
                    isSelected: false,
                    id : '2',
                    storefrontDisplayName: '2',
                    isSkippable: true,
                    selectedIcon: {
                        image: 'selected.ico',
                        alt: 'selected'
                    },
                    unselectedIcon: {
                        image: 'unselected.ico',
                        alt: 'unselected'
                    }
                }, {
                    isSelected: true,
                    id : '3',
                    storefrontDisplayName: '3',
                    isSkippable: true,
                    selectedIcon : {
                        image: 'selected.ico',
                        alt: 'selected'
                    },
                    unselectedIcon : {
                        image: 'unselected.ico',
                        alt: 'unselected'
                    },
                    states: ['state']
                }];
                buildDirective();
            });

            it('only shows selected workitems', function() {
                expect(workItemElements.length).toBe(3);
                var selected = workItemElements.filter(":not(.ng-hide)").find("label");
                expect(selected.length).toBe(2);
                var labels = selected.map(function(i, elm) { return angular.element(elm).text(); });
                expect(labels).toContain('1');
                expect(labels).toContain('3');
            });
            
            it('goes to item when clicked', function () {
                storefrontModalService.skipTaskMessage.and.returnValue(returnResolved(true));

                var elm = workItemElements.filter(":not(.ng-hide)").find("label:contains('3')").parent();
                elm.trigger('click');

                rootScope.$digest();
                expect(storefrontModalService.skipTaskMessage).toHaveBeenCalled();
                expect(storefrontService.skip).toHaveBeenCalledWith(workItems[2].id);
                rootScope.$digest();
                expect($state.go).toHaveBeenCalledWith(workItems[2].states[0]);
            });
            
            it('has active class when it is the current work item', function() {
                var text = currentItem.storefrontDisplayName;
                var elm = workItemElements.filter(":not(.ng-hide)").find("label:contains('" + text + "')").parent('.active');
                expect(elm.length).toBe(1);
            });

            it('shows correct icons when active or not active', function () {
                //active/inactive items use the existing selected/noselected icons, but reversed!!! this will ensure this is controlled
                var activeElms = workItemElements.filter(".active:not(.ng-hide)").find("img[src='unselected.ico'][alt='unselected']");
                var inactiveElms = workItemElements.filter(":not(.active):not(.ng-hide)").find("img[src='selected.ico'][alt='selected']");

                expect(activeElms.length).toBe(1);
                expect(inactiveElms.length).toBe(1);
            });

            
        });

        describe('work item statuses functionality', function () {

            beforeEach(function () {
                workItems = [{
                    isSelected: true,
                    id: '1',
                    storefrontDisplayName: '1',
                    isSkippable: true,
                    isCompleted: false,
                    isUnsaved: false
                }, {
                    isSelected: true,
                    id: '2',
                    storefrontDisplayName: '2',
                    isSkippable: true,
                    isCompleted: false,
                    isUnsaved: true
                }, {
                    isSelected: true,
                    id: '3',
                    storefrontDisplayName: '3',
                    isSkippable: true,
                    isCompleted: true,
                    isUnsaved: false
                }];
                buildDirective();
            });

            it('renders unsaved and completed with proper css and image data', function () {
                var allItems = workItemElements.filter(":not(.ng-hide)");
                var untouched = workItemElements.filter(":not(.ng-hide)").find("label:contains('1')").parent(":not(.complete)").find(".workItemSaveState");
                var notsaved = workItemElements.filter(":not(.ng-hide)").find("label:contains('2')").parent(":not(.complete)")
                    .find(".workItemSaveState > img[src='" + taskNotCompleteIcon.Url + "'][alt='" + taskNotCompleteIcon.Alt + "']");
                var complete = workItemElements.filter(":not(.ng-hide)").find("label:contains('3')").parent('.complete')
                    .find(".workItemSaveState > img[src='" + taskCompleteIcon.Url + "'][alt='" + taskCompleteIcon.Alt + "']");

                expect(allItems.length).toBe(3);
                expect(untouched.length).toBe(0);
                expect(notsaved.length).toBe(1);
                expect(complete.length).toBe(1);
            });

        });

    });

}());