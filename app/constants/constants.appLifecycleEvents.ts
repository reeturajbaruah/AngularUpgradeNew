module HCTRA.Constant {
    "use strict";

    export interface AppLifecycleEvents {
        restoredUserState: string;
        setNavBarLogin: string;
        newAccountNameEntered: string;
        currentUserHeaderInfomation: string;
    }

    export class AppLifecycleEventsConst {
        static get Default(): AppLifecycleEvents {
            return {
                restoredUserState: "restored-user-state", // occurs after a page refresh
                setNavBarLogin: "set-nav-bar-login",
                newAccountNameEntered: "new-account-name-entered",
                currentUserHeaderInfomation: "current-user-header-infomation"
            }
        }
    }
}

(function () {
    "use strict";
    angular.module("HCTRAModule").constant("APP_LIFECYCLE_EVENTS", HCTRA.Constant.AppLifecycleEventsConst.Default);
}());