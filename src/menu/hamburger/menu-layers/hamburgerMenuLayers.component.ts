import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MatIconAvailabilityService } from 'common/services';
import { CmsMenuLink } from 'menu/services';

import { LinkInfo } from 'menu/services';
import { collapseTrigger } from 'animations/collapse';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MenuLinkHelper } from '../../services/menuLinkHelper';

export interface InjectionValues {
    cmsContent: Observable<CmsMenuLink[]>;
}

@Component({
    selector: 'hamburger-menu-layers',
    templateUrl: './hamburgerMenuLayers.html',
    styleUrls: ['./hamburgerMenuLayers.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        collapseTrigger,
        trigger('rotatedState', [
            state('default', style({ transform: 'rotate(180deg)' })),
            state('rotated', style({ transform: 'rotate(0deg)' })),
            transition('rotated => default', animate('400ms ease-out')),
            transition('default => rotated', animate('400ms ease-in'))
        ])
    ]
})
export class HamburgerMenuLayersComponent implements OnInit {

    constructor(private matIcon: MatIconAvailabilityService,
        private menuLinkHelper: MenuLinkHelper) { }

    @Input() external: boolean;
    @Input() url: string;
    @Input() label: string;
    @Input() hasChildren: boolean;
    @Input() borderTop: boolean;
    @Input() isCallToAction: boolean;

    showRightArrow$: Observable<boolean>;
    @Input() links: LinkInfo[];
    @Output() handleClick$ = new EventEmitter();

    ngOnInit(): void {

        this.menuLinkHelper.listentoMenuEvent();
        this.enrichLinks(this.links);
    }

    enrichLinks(links: LinkInfo[]) {
        for (const link of links) {
            link.collapse = true;

            if (link.hasChildren) {
                this.enrichLinks(link.authorizedChildren);
            }
        }
    }

    handleMenuClick(link: LinkInfo, event: MouseEvent) {
        link.collapse = !link.collapse;
        if (!link.hasChildren) {
            this.menuLinkHelper.goToEvent().next([link, link.label, event]);
        }
    }

    getHeight(link: LinkInfo) {
        switch (link.level) {
            case 1:
                return '47px';
            case 2:
                return '40px';
            case 3:
                return '38px';

            default:
                return '47px';

        }
    }

    getFontSize(link: LinkInfo) {
        switch (link.level) {
            case 1:
                return '20px';
            case 2:
                return '18px';
            case 3:
                return '16px';

            default:
                return '20px';

        }
    }

}
