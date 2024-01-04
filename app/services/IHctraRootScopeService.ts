module HCTRA.Service {

    export interface IHctraRootScopeService extends angular.IRootScopeService {
        latestWebUiVersion: string;
        currentBalance: number;
    }

}