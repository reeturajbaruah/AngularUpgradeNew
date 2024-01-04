import { Injectable } from '@angular/core';
import { IEmailUsCms, IFieldCms, IFieldDropdownCms } from '../../models/email-us.models';

@Injectable()
export class EmailUsFieldsService {

    getCmsData(emailUsCms: IEmailUsCms): any {
        const fieldsCms = emailUsCms.Children.find(child => child.ItemName === 'Fields');
        return this.formatFieldsData(fieldsCms.Children);
    }

    private formatFieldsData(fields: any) {
        return fields.reduce((result, field) => {
            result[this.formatString(field.ItemName)] = this.createFieldsObject(field);
            return result;
        }, {});
    }

    private createFieldsObject(field: any): IFieldCms {
        return {
            ItemName: this.formatString(field.ItemName),
            Title: field.Title,
            PlaceholderText: field.PlaceholderText,
            Type: field.Type,
            ValidationRegex: field.ValidationRegex,
            ValidationErrorText: field.ValidationErrorText,
            FileUploadMaxSlots: field.FileUploadMaxSlots,
            FileUploadSize: field.FileUploadSize,
            FileUploadExtensions: field.FileUploadExtensions,
            Dropdown: this.formatFieldDropdown(field.Children)
        };
    }

    private formatFieldDropdown(children: any): IFieldDropdownCms[] {
        return children.map(child => ({
            ItemName: this.formatString(child.ItemName),
            Title: child.Name,
            Bold: !!child.Bold
        }));
    }

    private formatString(itemName: string): string {
        return itemName.replace(/\s+/g, '');
    }
    
}
