module HCTRA.Model {

    //defines the template 'keys' workitems can use for their completion templates
    export enum StorefrontModalTemplatesEnum {
        ThankYouViolationsPayment,
        ThankYouNewAccount,
        VehicalViolationSuspendedAccountMessage,
        None,
        FinishSetup
    }

    //defines static definition for a workitem defined in sitecore
    export class StorefrontCmsWorkItem {
        //the item's name in cms
        ItemName?: string;
        //human readable name for workitem
        storefrontDisplayName: string;//sitecore
                
        //state names that a work item is expected to transition to. The first must be the entry state
        cmsStates: string;
        
        //collection of work item ids that will be unavailable if this workitem is selected
        cmsUnavailableWhenSelected: string;//sitecore

        dbId: string;

        cmsUnselectedIcon?: string;

        cmsSelectedIcon?: string;

        //template to use when task has been completed.
        completionModal: string | StorefrontModalTemplatesEnum;//sitecore
        
        //robot readable name
        id: number;//sitecore and here

        //state names that a work item is expected to transition to. The first must be the entry state
        states: any[];

        isSkippable: boolean;

        //flags if work item requires user to login before continuing
        requiresAuthentication: boolean;//sitecore

        //collection of work item ids that will be unavailable if this workitem is selected
        unavailableWhenSelected: number[];

        //defines order options are displayed as
        uiOrder: number;//sitecore

        unselectedIcon?: HCTRA.Model.ISitecoreMediaItem;

        selectedIcon?: HCTRA.Model.ISitecoreMediaItem;

        isShadowItem?: boolean;

        isAbortItem?: boolean;
    }

    //defines properties of a workitem's active fields
    export class WorkItem extends StorefrontCmsWorkItem {

        //flags if workitem is selected
        isSelected: boolean;

        //flags if unavailable (from other work item)
        isUnavailable: boolean;

        //flag if completed
        isCompleted: boolean;

        //flag if workitem is unsaved
        isUnsaved: boolean;
    }
}