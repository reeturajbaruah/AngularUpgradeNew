import { Component, Input, OnInit } from '@angular/core';
import { EventType, ICategories, IFaqCms } from 'FAQs/models';
import { FaqStateService } from 'FAQs/services';
import { IList } from 'common/ui/dropdown/models/dropdown.interface';
import { FaqSharedService } from 'FAQs/services/faq-shared/faq-shared.service';

@Component({
    selector: 'faq-search',
    templateUrl: './faq-search.component.html',
    styleUrls: ['faq-search.component.less']
})
export class FaqSearchComponent implements OnInit {
    constructor(
        private faqStateService: FaqStateService,
        private sharedService: FaqSharedService
    ) { }

    @Input() cmsContent: IFaqCms;
    @Input() cats: ICategories;
    list = {
        data: []
    } as IList;

    ngOnInit() {

        this.list.data = this.cats.categories.map(category => ({
            displayName: category.name,
            id: category.id
        }));

    }

    handleCategoryChange(event) {
        this.faqStateService.dispatch({
            type: EventType.Category,
            data: { categoryId: event.id }
        });

        this.sharedService.setTopResultAccordion(false);
    }
}
