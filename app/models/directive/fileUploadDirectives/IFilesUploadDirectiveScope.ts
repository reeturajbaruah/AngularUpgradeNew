module HCTRA.Model {


    export interface IFilesUploadDirectiveScope extends angular.IScope {
        files: IHctraFile[];
        validations: IHctraFileValidations;
        form: angular.IFormController;
        internalFiles: IHctraFile[];

        updateFunc: () => void;
        processDelete: (id: string) => void;
    }
}