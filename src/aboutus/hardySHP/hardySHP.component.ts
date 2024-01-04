import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HardySHPFacadeService } from './services/facade/hardySHP-facade.service';

@Component({
    selector: 'hardySHP-component',
    templateUrl: './hardySHP.component.html',
    styleUrls: ['./hardySHP.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class HardySHPComponent implements OnInit {

    hardySHPContent: string;
    constructor(private hardySHPFacade: HardySHPFacadeService) { }

    async ngOnInit() {
        this.hardySHPFacade.getData().subscribe(async data => {
            this.hardySHPContent = await data;
        });
    }

}
