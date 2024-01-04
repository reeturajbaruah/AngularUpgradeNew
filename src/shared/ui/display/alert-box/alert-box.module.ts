import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AlertBoxComponent } from './components/alert-box.component';
import { PipesModule } from 'pipes/module';

@NgModule({
    declarations: [
        AlertBoxComponent
    ],

    exports: [
        AlertBoxComponent
    ],

    imports: [
        CommonModule,
        MatIconModule,
        PipesModule
    ],

    providers: [
    ]
})

export class AlertBoxModule {}
