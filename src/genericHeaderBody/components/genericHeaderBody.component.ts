import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CMSApiService } from 'cms/services/cmsApi/cms-api.service';

@Component({
    selector: 'generic-header-body',
    templateUrl: './genericHeaderBody.component.html',
    encapsulation: ViewEncapsulation.None, //no need to use ng::deep

})
export class GenericHeaderBodyComponent implements OnInit {

    @Input() itemId: string;
    title = '';
    longDescription = '';
    subItems = '';

    constructor(private cmsApiService: CMSApiService) {
    }

    async ngOnInit() {
        const result = await this.cmsApiService.getCmsPagesIds([{ itemId: this.itemId }]);
        if (result) {
            const parsedResult = JSON.parse(result.responses[0].cmsResponse);
            this.title = parsedResult.Title;
            this.longDescription = parsedResult.LongDescription;
            this.subItems = parsedResult.Children[0].Children[0].Children;
        }
    }
}



