module HCTRA.Model {

    export class IUpDownEnterInterceptorActions {
        upAction: () => void;
        downAction: () => void;
        enterAction: (event: any) => void;
    }

    export interface IUpDownEnterInterceptorDirectiveScope extends angular.IScope {
        actions: IUpDownEnterInterceptorActions
    }
}