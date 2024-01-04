import { FileInfo } from 'common/ui';

export const FieldTypes = {
    Checkbox: 'Checkbox',
    Dropdown: 'Dropdown',
    FilesUpload: 'FilesUpload',
    Input: 'Input',
    PhoneNumber: 'PhoneNumber',
    TextArea: 'TextArea'
};

export const FieldKeys = {
    EZTagAccount: 'EZTagAccount'
};

export interface IAccountInfo {
    email: string;
    name: string;
    accountNumber: string;
}

export interface IEmailUsPayload {
    email: string;
    name: string;
    emailTopic: IEmailTopicData;
    fields: IFieldsData[];
    files: FileInfo[];
    userBorwserInfo: string;
    host: string;
}

export interface IFieldsData {
    name: string;
    label: string;
    value: string | boolean;
}

export interface IEmailTopicData {
    name: string;
    email: string;
    fromEmail: string;
}

export interface IEmailUsCms {
    Title: string;
    ShortDescription: string;
    Children: any[];
    formsCms: any;
    fieldsCms: any;
    EmailAddressHeader: string;
    EmailAddressPlaceholder: string;
    YourNameHeader: string;
    HowCanWeHelpTitle: string;
    SelectTopicHeader: string;
    SelectTopicPlaceholder: string;
    EmailRequiredText: string;
    EmailValidationText: string;
    AcceptButtonText: string;
    ThankYouNote: string;
    YourNameRequiredText: string;
}

export interface IFormFieldsCms {
    ItemName: string;
    Title: string;
    Required: boolean;
}

export interface IFieldCms {
    ItemName: string;
    Title: string;
    PlaceholderText: string;
    Type: string;
    ValidationRegex: string;
    ValidationErrorText: string;
    FileUploadMaxSlots: string;
    FileUploadSize: string;
    FileUploadExtensions: string;
    Dropdown: IFieldDropdownCms[];
}

export interface IFieldDropdownCms {
    ItemName: string;
    Title: string;
    Bold: boolean;
}

export interface IFormsCms {
    Title: string;
    MailboxEmail: string;
    ReplyEmail: string;
    Children: any[];
    FAQs?: any[];
    Fields: any[];
}
