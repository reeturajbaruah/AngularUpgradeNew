import { Component, OnInit, Input, AfterViewInit, ViewEncapsulation, Inject } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { PageChoices, SectionChoices } from '../constants';
import { WebApiMaintenanceToggles, MaintenanceToggle } from 'common/services';

import { ToasterService } from 'common/services';
import { ToastType } from 'common/models';
import { MediaObserver } from '@angular/flex-layout';
import { map, Observable } from 'rxjs';
import { PaymentPlansModalCmsContent, ViolationLoginPopUpModalCmsContent } from '../../common/ui';
import { ENVIRON_CONFIG } from 'common/upgrades';


interface ToasterContent {
    Type: string;
    Description: string;
}

type OrderedSiteCoreItem = SiteCoreItem & { order: number};
type SectionChild = { Section: string } & SiteCoreItem;


@Component({
    selector: 'home-page-frame-component',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less']
})

//TODO: CONVERT Maintainance Mode to Angular and add it to homepage
export class FrameComponent implements OnInit, AfterViewInit {
    constructor(
        private toaster: ToasterService,
        private maintenanceToggles: WebApiMaintenanceToggles,
        private mediaObserver: MediaObserver,
        @Inject(ENVIRON_CONFIG) public environmentConfig,
    ) { }

    @Input() homePageContent: SiteCoreItem;
    @Input() violationLoginModal: ViolationLoginPopUpModalCmsContent;
    @Input() paymentPlansModal: PaymentPlansModalCmsContent;
    public section: {[key: string]: OrderedSiteCoreItem };
    cmsInvoiceExample: SiteCoreItem;
    imageSliderArrow: any;
    cmsToasters: any;
    public sectionChoices = SectionChoices;
    public showDynamicDisplay = false;

    public isMobile$: Observable<boolean>;

    ngAfterViewInit() {

        const children: SiteCoreItem[] = this.homePageContent.Children;
        this.cmsToasters = children.filter(c => c.DisplayName === PageChoices.Toasters)[0];

        const toastersDisplay = (this.cmsToasters?.Children?.length > 0) ? this.cmsToasters.Children as ToasterContent[] : [];

        toastersDisplay.forEach(toast => {
            this.toaster.show(toast.Type as ToastType, toast.Description);
        });
    }

    async ngOnInit() {

        this.isMobile$ =        
            this.mediaObserver
                .asObservable()
                .pipe(map(() => this.mediaObserver.isActive('lt-md')));

        this.imageSliderArrow = 'mat-imageSliderArrow';
        const children = this.homePageContent.Children as SectionChild[];
        this.cmsInvoiceExample = children.filter(c => c.DisplayName === PageChoices.Invoice)[0];

        this.section = children
            .filter(x=> x.Section)
            .reduce((acc, sec, order)=> ({...acc, [sec.Section === SectionChoices.Carousel ? sec.Title : sec.Section]: {...sec, order }}), {});
            
        this.getMaintenanceStatus();
    }

    private async getMaintenanceStatus() {
        const result = await this.maintenanceToggles.GetViolationMaintenanceStatus({
            ToggleName: 'Violations',
            ToggleStatus: null,
            MaintenanceToggles: true
        } as MaintenanceToggle);
        this.showDynamicDisplay = !result.toggleStatus;
        return;
    }
}
