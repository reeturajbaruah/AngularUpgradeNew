import { ListKeyManagerOption } from '@angular/cdk/a11y';
import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    TemplateRef,
    ViewChild
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeStyle } from '@angular/platform-browser';
import { MatCarouselSlide } from 'common/interfaces';
import { MatCarouselComponent } from '../carousel.component';


@Component({
    selector: 'mat-carousel-slide',
    templateUrl: './carousel-slide.component.html',
    styleUrls: ['./carousel-slide.component.less']
})
export class MatCarouselSlideComponent
    implements ListKeyManagerOption, MatCarouselSlide, OnInit {
    @Input() public image: SafeStyle;
    videoURL: SafeResourceUrl;
    @Input() public cmsData = {
        Title: 'Default',
        ButtonText: 'Default',
        ButtonURL: 'Default',
        Parameters: ''
    };
    @Input() public disabled = false; // implements ListKeyManagerOption
    @Input() public disableContent = false;
    @Input() public useLink = false;
    @Input() public overrideTemplateRef: TemplateRef<any>;
    @Input() public context: any;
    @ViewChild(TemplateRef) public templateRef: TemplateRef<any>;
    @Input() showDivider = true;
    @Output() goToInternalTab: EventEmitter<string> = new EventEmitter();

    constructor(public sanitizer: DomSanitizer,
        private parent: MatCarouselComponent) {
    }

    ngOnInit() {
        if (this.useLink && this.image['isVideo']) {
            this.videoURL = this.cleanURL(this.image['url']);
        }
    }

    public get parentHeight(): string {
        return this.parent.height;
    }

    public goToPage(): void {
        const isInternal = this.cmsData?.Parameters?.split('isInternal=');
        if (isInternal[1] === '1') {
            this.goToInternalTab.emit(this.cmsData.ButtonURL);
        } else {
            window.open(this.cmsData?.ButtonURL, '_blank');

        }
    }

    public cleanURL(oldURL: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
    }

}
