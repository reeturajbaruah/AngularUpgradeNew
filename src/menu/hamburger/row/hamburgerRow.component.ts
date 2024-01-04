import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatIconAvailabilityService } from 'common/services';
import { CmsMenuLink } from 'menu/services';


export interface InjectionValues {
    cmsContent: Observable<CmsMenuLink[]>;
}

@Component({
    selector: 'hamburger-row',
    templateUrl: './hamburgerRow.html',
    styleUrls: ['./hamburgerRow.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburgerRowComponent implements OnInit {

    constructor(private matIcon: MatIconAvailabilityService) { }

    @Input() external: boolean;
    @Input() url: string;
    @Input() label: string;
    @Input() hasChildren: boolean;
    @Input() borderTop: boolean;
    @Input() isCallToAction: boolean;

    showRightArrow$: Observable<boolean>;

    ngOnInit(): void {
        this.showRightArrow$ = this.matIcon.whenAvailable('right-arrow').pipe(map(() => true));
    }

}
