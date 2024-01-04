import {
    Component, Input, DoCheck, KeyValueDiffer, KeyValueDiffers
} from '@angular/core';

import { CmsReplacementService, TemplateTransformer } from 'cms/services';

interface CmsReplacementArgs {
    template: string;
    host: { [key: string]: any };
}

@Component({
    selector: 'cms-content',
    templateUrl: './cmsContent.html',
})
export class CmsContentComponent implements  DoCheck {
    constructor(
        private replacementService: CmsReplacementService,
        private differs: KeyValueDiffers
    ) {
        this.differ = differs.find({}).create();
    }

    @Input() data: { [key: string]: any };
    @Input() set template(val: string) {
        this.templateTransformer = this.replacementService.getTemplateTransformer(val);
        this.transformedTemplate = this.templateTransformer(this.data);
    }
    public transformedTemplate = '';
    private differ: KeyValueDiffer<any, any>;

    private templateTransformer: TemplateTransformer = () => '';
    
    ngDoCheck() {
        const changes = this.differ.diff(this.data);
        if (changes) {
            this.transformedTemplate = this.templateTransformer(this.data);
        }
    }
    
}
