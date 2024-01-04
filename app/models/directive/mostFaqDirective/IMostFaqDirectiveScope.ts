module HCTRA.Model {

    export interface IMostFaqDirectiveScope extends angular.IScope {

        mostFaq: any[]
        searchMostFaq: ( article: { ItemID: string }) => void;
    }
}