module HCTRA.Model {
    export interface IErrorList {
        headers?: ng.IHttpHeadersGetter;
        errors: ErrorMessage[];
    }
}