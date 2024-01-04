(function () {

    'use strict';

    angular.module('HCTRAModule').factory('stateStackMemoryService', [

		function () {

		    var MAXIMUM_STATES_ON_STACK = 10;

		    var newStateObject = function (stateName, type) {
		        var o = {};
		        o.name = stateName;
		        o.type = type;
		        o.time = new Date();
		        return o;
		    };

		    // closure to keep track of the state stack and restrict its size
		    var stateStack = (function () {
		        var stack = [];

		        return {
		            maxStates: MAXIMUM_STATES_ON_STACK,
		            addState: function (st) {
		                stack.push(st);
		                if (stack.length > this.maxStates) {
		                    //remove the oldest state
		                    stack = stack.slice(1);
		                }
		            },
		            getStates: function () {
		                return stack;
		            },
		            getLastState: function () {
		                return stack[stack.length - 1];
		            },
		            popState: function () {
		                return stack.pop();
		            }
		        };
		    }());
            
		    var serviceFactory = {};

		    serviceFactory.addStateToStackMemory = function (inState, type) {
		        stateStack.addState(newStateObject(inState, type));
		        //using session storage directly to prevent a circular reference in angularLogger
		        sessionStorage.setItem && sessionStorage.setItem('stateStack', angular.toJson(stateStack.getStates()));
		    };

		    serviceFactory.getStateStack = function () {
		        var stack1 = stateStack.getStates();
		        if (sessionStorage) {
		            var stack2 = angular.fromJson(sessionStorage.getItem('stateStack'));
		            if (angular.isString(stack2)) {
		                stack2 = angular.fromJson(stack2);
		            }
		            if (angular.isArray(stack2) && (stack2.length > stack1.length)) {
		                stack1 = stack2;
		            }
		        }
		        return stack1;
		    };

		    serviceFactory.getLastState = function () {
		        return stateStack.getLastState() || { name: "" };
		    };

		    serviceFactory.printStack = function () {
		        var str = '';
		        var stack = this.getStateStack();
		        if (stack !== null) {
		            for (var x = 0; x < stack.length; x++) {
		                str += '(' + stack[x].name + ' :: ';
		                if (angular.isString(stack[x].time)) {
		                    str += stack[x].time + ') ';
		                } else {
		                    str += (stack[x].time.getMonth() + 1) +
                            '/' + stack[x].time.getDate() + '/' + stack[x].time.getFullYear() +
                            "  " + stack[x].time.getHours() + ':' + stack[x].time.getMinutes() +
                            ':' + stack[x].time.getSeconds() + ') ';
		                }
		            }
		        }
		        return str;
		    };

		    serviceFactory.popState = function () {
		        return stateStack.popState();
		    };
            
		    return serviceFactory;

		}]);
}());