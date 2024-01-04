import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IFaqCms, ISearchResults } from 'FAQs/models';
import { IList } from 'common/ui/dropdown/models/dropdown.interface';
import { IAccordionItem } from 'shared/ui/display/accordion/models/accordion.models';
import { AccordionService } from 'shared/ui/display/accordion/services/accordion.service';

@Component({
    selector: 'search-faq-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['search-results.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {
    @Input() cmsContent: IFaqCms;
    searchContent: IAccordionItem[];

    isOpen: boolean;

    defaultSortOrder = 'Newest';

    sortList = {} as IList;

    private results: ISearchResults;

    @Input() set searchResults(value: ISearchResults) {
        this.results = value;
        this.sortResuts();
        this.mapResults();
    }

    get searchResults() {
        return this.results;
    }

    constructor(
        private accordionService: AccordionService
    ) { }

    ngOnInit() {
        this.mapResults();
        this.sortList.data = [
            {
                displayName: this.defaultSortOrder,
                id: this.defaultSortOrder
            },
            {
                displayName: 'Oldest',
                id: 'Oldest'
            }
        ];
    }

    private mapResults() {
        this.isOpen = false;
       
        const customAccordionKeys = ['title', 'categoryName', 'lastModifiedDate', 'shortDesc'];
        this.searchContent = this.accordionService.createAccordionItems(this.searchResults.results, customAccordionKeys);
    }

    private sortResuts() {

        switch (this.defaultSortOrder) {

            case 'Oldest':

                this.searchResults.results.sort((a, b) =>

                    a.lastModifiedDate < b.lastModifiedDate ? -1 :
                        (a.lastModifiedDate > b.lastModifiedDate ? 1 : 0)

                );

                break;

            case 'Newest':

                this.searchResults.results.sort((a, b) =>

                    a.lastModifiedDate > b.lastModifiedDate ? -1 :
                        (a.lastModifiedDate < b.lastModifiedDate ? 1 : 0)

                );

                break;

        }
    }

    sort(event) {
        this.defaultSortOrder = event.id;
        this.sortResuts();
        this.mapResults();

    }

}

