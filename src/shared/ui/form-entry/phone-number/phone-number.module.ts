import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'pipes/module';
import { PhoneNumberComponent } from './components/phone-number.component';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from 'validation/module';

@NgModule({
    declarations: [
        PhoneNumberComponent
    ],

    exports: [
        PhoneNumberComponent
    ],

    imports: [
        CommonModule,
        MatIconModule,
        PipesModule,
        FormsModule,
        ValidationModule
    ],

    providers: [
    ]
})

export class PhoneNumberModule {}
