import { Component, EventEmitter, Input, Output, Predicate, TemplateRef } from '@angular/core';
import { IEZTag } from 'vehicles/interfaces';

@Component({
    selector: 'vehicles-grid',
    templateUrl: './grid.html',
    styleUrls: ['./grid.less']
})
export class GridComponent {

    @Input() headerTemplate: TemplateRef<any>;
    @Input() rowTemplate: TemplateRef<any>;
    @Input() emptyTemplate: TemplateRef<any>;

    @Input() vehicles: IEZTag[];
    @Output() arrowClick = new EventEmitter<IEZTag>();

    @Input() showArrowPredicate: Predicate<IEZTag>;
    @Input() editButtonText: string;

    public handleArrowClick(vehicle: IEZTag) {
        this.arrowClick.emit(vehicle);
    }

    public showArrow(vehicle: IEZTag): boolean {
        return this.showArrowPredicate ? this.showArrowPredicate(vehicle) : true;
    }

}
