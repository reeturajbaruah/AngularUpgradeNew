module HCTRA.Model {

    export interface IBasicCustomStateService extends ng.ui.IStateService {
        current: IBasicCustomState;
    }
    interface IBasicCustomState extends ng.ui.IState {
        cms: {
            itemId?: string;
			path?: string;
            fields?: string;
        };
    }


    export interface IHelpAndSupportCustomStateService extends ng.ui.IStateService {
        current: IHelpAndSupportCustomState;
    }
    interface IHelpAndSupportCustomState extends ng.ui.IState {
        cms: {
			helpSupportTitlePath?: string;
			helpSupportTitleId?: string;
            helpSupportTitleFields: string;
			categoriesPath?: string;
			categoriesId?: string;
            categoriesFields: string;
            test: string;
        };
    }


    export interface IArchiveCustomStateService extends ng.ui.IStateService {
        current: IArchiveCustomState;
    }
    interface IArchiveCustomState extends ng.ui.IState {
        cms: {
            pageTitleId: string;
            pageTitleFields: string;
            allSearchQueryId: string;
            archive: string;
			archiveName: string;
			categoriesPath?: string;
            categoriesId?: string;
            categoriesFields: string;
            titleType: string;
            topSearch: string;
            topFields: string;
        };
    }

}