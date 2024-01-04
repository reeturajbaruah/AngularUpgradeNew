import { Injectable } from '@angular/core';
import { IAccordionItem } from 'shared/ui/display/accordion/models/accordion.models';
import { AccordionService } from '../../../../ui/display/accordion/services/accordion.service';
import { IEmailUsCms, IFormFieldsCms, IFormsCms } from '../../models/email-us.models';

@Injectable()
export class EmailUsFormsService {

    constructor(private accordionService: AccordionService) {
    }

    getCmsData(emailUsCms: IEmailUsCms): IFormsCms[] {
        const formsCms = emailUsCms.Children.find(child => child.ItemName === 'Forms');
        return this.formatFormsData(formsCms.Children);
    }

    private formatFormsData(forms: any[]) {
        return forms.map(form => ({
            Title: form.Title,
            MailboxEmail: form.MailboxEmail,
            ReplyEmail: form.ReplyEmail,
            ...this.formatFormsChildren(form.Children)
        }));
    }

    private formatFormsChildren(children: any[]): any {
        return children.reduce((result, child) => {
            result[child.ItemName] = (child.ItemName === 'FAQs')
                ? this.accordionService.createAccordionItems(child.Children.map(c => ({ ...c })))
            : this.formatFormsField(child.Children);
            return result;
        }, {});
    }

    private formatFormsField(children: any[]): IFormFieldsCms[] {
        return children.map(child => ({
            ItemName: this.formatString(child.Title),
            Title: child.Title,
            Required: !!child.Required
        }));
    }

    private formatString(itemName: string): string {
        return itemName.replace(/\s+/g, '');
    }
    
}
