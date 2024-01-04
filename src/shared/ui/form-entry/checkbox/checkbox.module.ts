import { NgModule } from '@angular/core';
import { PipesModule } from 'pipes/module';
import { CheckboxComponent } from './components/checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CheckboxComponent
    ],

    exports: [
        CheckboxComponent
    ],

    imports: [
        PipesModule,
        FormsModule
    ],

    providers: [
    ]
})

export class CheckboxModule {}
