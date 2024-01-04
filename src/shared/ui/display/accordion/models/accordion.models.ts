export interface IAccordionItem extends IAccordionKeys {
    isOpen: boolean;
}

export interface IAccordionKeys {
    Title: string;
    Category?: string;
    LastUpdate: string;
    ShortDescription: string;
}

export const DefaultAccordionKeys = {
    Title: 'Title',
    Category: 'Category',
    LastUpdate: 'LastUpdate',
    ShortDescription: 'ShortDescription',
} as IAccordionKeys;
