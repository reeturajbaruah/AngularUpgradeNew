import { Component, HostListener, OnInit, Inject, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { TransitionService } from '@uirouter/core';
import { Toast } from 'common/interfaces';
import { ToasterService } from 'common/services';
import { Observable, Subscription } from 'rxjs';
import { WindowRef } from 'common/providers';
import { StorefrontUtilityService } from '../../../storefront/services/storefrontUtility.service';

enum ViewType {
    Mobile = 'Mobile',
    Desktop = 'Desktop',
    Kiosk = 'Kiosk'
}

@Component({
    selector: 'app-toaster-container',
    templateUrl: './toaster-container.html',
    styleUrls: [`./toaster-container.less`]
})
export class ToasterContainerComponent implements OnInit, AfterViewInit, OnDestroy {

    private readonly toasterHeight = 40;
    private readonly toasterMobileTopOffset = 60;
    private readonly toasterDesktopTopOffset = 90;
    private readonly toasterKioskTopOffset = 70;

    private desktopUi: HTMLElement;
    private timer: any;
    private toastSubs = new Subscription();
    private topInitialOffset: number;
    private previousView: string;
    public toasts$: Observable<Toast[]>;

    private hasScrolled = false;

    showToasterCont: boolean;

    constructor(
        private toasterService: ToasterService,
        private transitionService: TransitionService,
        private mediaObserver: MediaObserver,
        private storefrontUtilityService: StorefrontUtilityService,
        private ref: ChangeDetectorRef,
        @Inject(WindowRef) private windowRef: Window
    ) {
        // Cleanup any remaining toasters that were created on the previous page
        this.transitionService.onStart({}, () => {
            this.toasterService.removeAll();
        });
        this.transitionService.onFinish({}, () => {
            this.toasterService.showDelayed();
        });
    }


    @HostListener('window:resize', ['$event'])
    public onResize() {
        const currentView = this.isKiosk() ? ViewType.Kiosk :
            this.mediaObserver.isActive('lt-md') ? ViewType.Mobile : ViewType.Desktop;

        if (currentView === ViewType.Kiosk && currentView !== this.previousView) {
            this.topInitialOffset = this.toasterKioskTopOffset;
            this.previousView = currentView;
        } else if (currentView === ViewType.Mobile && currentView !== this.previousView) {
            this.topInitialOffset = this.toasterMobileTopOffset;
            this.previousView = currentView;
        } else if (currentView === ViewType.Desktop && currentView !== this.previousView) {
            this.topInitialOffset = this.toasterDesktopTopOffset;
            this.previousView = currentView;
        }
    }

    ngOnInit() {
        this.toasts$ = this.toasterService.toasts$;

        this.onResize();

        this.toastSubscription();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.ref.detach();

            this.desktopUi = document.getElementById('d-ui');

            if (this.desktopUi) {
                this.showToasterCont = this.desktopUi.scrollTop === 0;

                this.ref.detectChanges();

                this.desktopUi.addEventListener('scroll', this.showToasterIfScrollHeight, { passive: true });

            } else {
                this.showToasterCont = this.windowRef.scrollY === 0;

                this.ref.detectChanges();

                this.windowRef.addEventListener('scroll', this.showToasterIfScrollHeight, { passive: true });
            }
        });
    }

    ngOnDestroy(): void {
        clearInterval(this.timer);
        this.removeEventListeners();
        this.toastSubs.unsubscribe();
    }

    public setTopOffset(index: number) {
        return {
            top: `${(index * (this.toasterHeight + 1)) + this.topInitialOffset}px`,
            left: this.isKiosk() ? '200px' : '0px',
            width: this.isKiosk() ? '1200px' : '100%'
        };
    }

    private isKiosk(): boolean {
        return this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData?.fullSiteMode;
    }

    private toastSubscription(): void {
        this.toastSubs = this.toasts$.subscribe(toasts => {
            setTimeout(() => {
                this.ref.detectChanges();
            });
        });
    }

    private showToasterIfScrollHeight = () => {
        this.showToasterCont = this.desktopUi ? this.desktopUi.scrollTop === 0 : this.windowRef.scrollY === 0;

        if (!this.hasScrolled) {
            this.timer = setInterval(() => {
                this.ref.detectChanges();
            }, 500);

            this.hasScrolled = true;
        }
    };

    private removeEventListeners(): void {
        if (this.desktopUi) {
            this.desktopUi.removeEventListener('scroll', this.showToasterIfScrollHeight, {});
        } else {
            this.windowRef.removeEventListener('scroll', this.showToasterIfScrollHeight, {});
        }
    }

}
