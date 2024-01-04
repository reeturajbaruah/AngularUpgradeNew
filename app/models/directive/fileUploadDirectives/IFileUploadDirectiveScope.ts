module HCTRA.Model {

    export interface IDeleteFuncParamter {
        id: string;
    }

    export interface IFileUploadDirectiveScope extends angular.IScope {
        file: IHctraFile;
        validations: IHctraFileValidations;
        form: angular.IFormController;
        shouldShowDelete: boolean;
        id: string;
        showTypeValidationMessage: boolean;
        showSizeValidationMessage: boolean;
        showDeleteButton: boolean;
        fileName: string;
        validation: any; 

        updateFunc: () => void;
        deleteFunc: (id: string) => void;
        submitFile: (File: any) => void;
        onDelete: () => void;
    }
}