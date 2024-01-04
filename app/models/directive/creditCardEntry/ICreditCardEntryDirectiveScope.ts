module HCTRA.Model {
    
    export interface ICreditCardEntryDirectiveScope extends angular.IScope {

        nameSuffix: string;
        toasterVisible: boolean;
        months: Array<any>;
        yearList: Array<any>;

        visaImage: string;
        mastercardImage: string;
        amexImage: string;
        discoverImage: string;
        
        addSuffix: (cardItem: string) => string;

        creditCard: ICreditCardEntryData;

        update: () => void;
        autoUpdate: boolean;


        isVisa: boolean;
        isMastercard: boolean;
        isDiscover: boolean;
        isAmex: boolean;

        useExistingCard: boolean;

        [key: string]: any;
    }
}