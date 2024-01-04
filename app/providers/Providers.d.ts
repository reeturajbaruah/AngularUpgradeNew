declare module HCTRA.Service {

    export interface RouterProviderStateService extends ng.ui.IStateService {
        current: Model.RouterProviderState;
        get(state: string, context?: string): Model.RouterProviderState;
        get(state: Model.RouterProviderState, context?: string): Model.RouterProviderState;
        get(state: string, context?: Model.RouterProviderState): Model.RouterProviderState;
        get(state: Model.RouterProviderState, context?: Model.RouterProviderState): Model.RouterProviderState;
        get(): Model.RouterProviderState[];
    }
}

declare module HCTRA.Model {
    export interface RouterProviderState extends ng.ui.IState {
        cms: {
            path?: string;
            fields: string;
            itemId?: string;
        }
    }
}