(function() {
    "use strict";

    angular.module('HCTRAModule')
        .config(['$provide', function($provide) {
            //forces window.open to broadcast an open event, allowing the app to prevent default 'open' behaviour
                $provide.decorator('$window', ["$delegate", function $windowDecorator($delegate) {

                    //refence to old open
                    var oldOpen = $delegate.open;
                    //open window broadcase event name. although it needs to be unique, with exposing the 'listen' function
                    //through the open call, we do not need to expose this key
                    var windowOpenEventName = "APP_WINDOW_OPEN";

                    var newOpen = function (href, name, options, replace) {

                        //event arguments. reflect values to be used and possibly modified before window opens
                        var args = { href: href, name: name, options: options, replace: replace, onOpen: null };

                        var e = angular.element($delegate.document.body).scope().$root
                                .$broadcast(windowOpenEventName, args);

                        var win = null;
                        //if no one is blocking the opening..
                        if (!e.defaultPrevented) {
                            //.. call window.open with the possibly modified parameters
                            win = oldOpen.apply(this, arguments);
                        }
                        //if an onOpen callback was defined in the arguments, call it with the new window as a parameter, enabling
                        //consumers to manipulate window some more
                        return args.onOpen ? (args.onOpen(win) || win) : win;
                    };
                    
                    //create registration method for open
                    newOpen["listen"] = function(callback) {
                        return angular.element($delegate.document.body).scope().$root.$on(windowOpenEventName, callback);
                    };
                    
                    //replace open
                    $delegate.open = newOpen;

                    return $delegate;
                }]);

            //force documentLocationService to be cancelable
                $provide.decorator("documentLocationService", ["$delegate", "$rootScope", function ($delegate, $rootScope) {
                    //reference to old goToHref
                    var oldGoToHref = $delegate.goToHref;
                    //gotoHref broadcast event name. although it needs to be unique, with exposing the 'listen' function
                    //through the goToHref call, we do not need to expose this key
                    var locationHrefChangedEventName = "APP_LOCATION_HREF_CHANGE";
                    //new gotoHref call
                    var newGoToHref = function(url) {
                        var e = $rootScope.$broadcast(locationHrefChangedEventName, { url: url });
                        //if not blocked
                        if (!e.defaultPrevented) {
                            //make call like normal
                            return oldGoToHref.apply(this, Array.prototype.slice.call(arguments));
                        }
                    };
                    //create registration method
                    newGoToHref["listen"] = function (callback) {
                        var cleanup = $rootScope.$on(locationHrefChangedEventName, callback);
                        return cleanup;
                    };
                    //replace goToHref method
                    $delegate.goToHref = newGoToHref;

                    return $delegate;
                }]);
            }
        ]);
})();