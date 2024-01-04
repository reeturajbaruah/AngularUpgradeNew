import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
    DefaultHctraMatCalendarRangeStrategy,
    HctraMatCalendarBodyComponent,
    HctraMatCalendarComponent,
    HctraMatCalendarHeaderComponent,
    HctraMatDatetimeContentComponent,
    HctraMatDatetimeInputDirective,
    HctraMatDatetimePickerComponent,
    HctraMatMonthViewComponent,
    HctraMatMultiYearViewComponent,
    HctraMatYearViewComponent,
    HCTRA_MAT_DATE_RANGE_SELECTION_STRATEGY
} from '../';
import { HctraMatTimepickerModule } from './timepicker.module';


@NgModule({
    imports: [
        CommonModule,
        MatDatepickerModule,
        MatDialogModule,
        PortalModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        HctraMatTimepickerModule
    ],
    exports: [
        HctraMatDatetimePickerComponent,
        HctraMatDatetimeInputDirective,
        HctraMatCalendarComponent,
        HctraMatMonthViewComponent,
        HctraMatCalendarBodyComponent,
        HctraMatYearViewComponent,
        HctraMatMultiYearViewComponent,
        HctraMatCalendarHeaderComponent
    ],
    declarations: [
        HctraMatDatetimePickerComponent,
        HctraMatDatetimeContentComponent,
        HctraMatDatetimeInputDirective,
        HctraMatCalendarComponent,
        HctraMatMonthViewComponent,
        HctraMatCalendarBodyComponent,
        HctraMatYearViewComponent,
        HctraMatMultiYearViewComponent,
        HctraMatCalendarHeaderComponent
    ],
    providers: [
        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
        { provide: HCTRA_MAT_DATE_RANGE_SELECTION_STRATEGY, useClass: DefaultHctraMatCalendarRangeStrategy }
    ]
})
export class HctraMatDatetimePickerModule { }
