export interface FileErrors {
    fileSize?: boolean;
    fileType?: boolean;
    fileRead?: boolean;
}

export interface FileInfo {
    name: string;
    extension: string;
    data: string;
    contentType: string;
    size: number;
    errors: FileErrors;
}

export interface IFileUploadCms {
    FileUploadLabel: string;
    AttachButton: string;
    PlaceholderText: string;
    AddAdditionalFile: string;
    FileTypeError: string;
    FileSizeError: string;
    FileReadError: string;
    FileRequiredError: string;
}
