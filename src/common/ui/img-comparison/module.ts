import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComparisonComponent } from './img-comparison.component';

@NgModule({
    declarations: [ImgComparisonComponent],
    imports: [CommonModule],
    exports: [ImgComparisonComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  
  export class ImgComparisonComponentModule { }
