module HCTRA.Model {

    export interface IHctraFileValidations {
        FileExtensions: string[];
        FieldValidationMessage: string;
        FieldRequiredValidationMessage: string;
        FileUploadSize: number;
        FileMaxUploads: number;
    }
}