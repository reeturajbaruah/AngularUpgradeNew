import { Injectable } from '@angular/core';
import { IState } from 'FAQs/models';
import { FaqApiService } from './api/faq-api.service';


@Injectable()
export class FaqFacadeService {

    private defaultCatId = '110AD977-DD4B-4D36-95F5-8F2A30B22239';
    private defaultTopId = 'B33C00E9-F680-4509-8FF1-87E71AB96FDC';
    private defaultTopFields = 'title,shortdescription,longdescription,category,image,__publish,ItemID&includeStandardTemplatefields=true';

    constructor(private api: FaqApiService) {

    }

    async loadArchivePage(state: IState) {
        const req = this.mapRequest(state);
        return await this.api.loadArchivePage(req);
    }

    private mapRequest(state) {

        return {
            categoryId: this.defaultCatId,
            categoryPagingInformation: state,
            searchSpecificCategory: true,
            topId: this.defaultTopId,
            topFields: this.defaultTopFields,
            requests: [
                {
                    fields: 'Title',
                    itemId: '800C26FD-7198-44A5-937B-BB1A38FEA42B'
                },
                {
                    fields: 'Title,QueryId,DisplayName,ItemPath,ItemName',
                    itemId: '48E23507-F432-4F16-97D2-BE3CAA8024D8'
                }
            ]
        };

    }

    async executeCmsPaging(req) {
        return await this.api.executeCmsPaging(req);

    }
}

