import { NgModule } from '@angular/core';
import { GenericHeaderBodyComponent } from './components/genericHeaderBody.component';
import { PipesModule } from 'pipes/module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [GenericHeaderBodyComponent],
    imports: [
        CommonModule,
        PipesModule
    ],
    exports: [
        GenericHeaderBodyComponent
    ],
    providers: []
})

export class GenericHeaderBodyModule {

}
