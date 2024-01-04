module HCTRA.Model {
    export interface ModalSettings {
        backdrop: boolean | string;
        keyboard: boolean;
        modalFade: boolean;
        templateUrl?: string;
        template?: string;
        windowClass?: string;
        windowTopClass?: string;
        controller?: string | Function | Array<string | Function>;
        resolve?: any;
        scope?: angular.IScope;
        component?: string;
    }

    export interface ModalTextOptions {
        closeButtonText?: string;
        actionButtonText?: string;
        headerText?: string;
        bodyText: string;
        subText?: string;
    }
}