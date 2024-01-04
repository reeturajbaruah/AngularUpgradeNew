import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from './components/accordion.component';
import { MatDividerModule } from '@angular/material/divider';
import { PipesModule } from 'pipes/module';
import { AccordionService } from './services/accordion.service';

@NgModule({
    declarations: [
        AccordionComponent
    ],

    exports: [
        AccordionComponent
    ],

    imports: [
        CommonModule,
        MatIconModule,
        MatDividerModule,
        PipesModule
    ],

    providers: [
        AccordionService
    ]
})

export class AccordionModule {}
