module HCTRA.Model {

    export interface IHctraFile {
        data: string | ArrayBuffer;
        extension: string;
        id: string;
    }
}