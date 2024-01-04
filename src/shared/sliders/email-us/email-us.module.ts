import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from 'validation/module';
import { EmailUsComponent } from './components/email-us.component';
import { FileUploadModule } from 'shared/ui/form-entry/file-upload/file-upload.module';
import { CheckboxModule } from 'shared/ui/form-entry/checkbox/checkbox.module';
import { AccordionModule } from 'shared/ui/display/accordion/accordion.module';
import { CommonModule as HctraCommonModule } from 'common/module';
import { EmailUsFormsService } from './services/forms/forms.service';
import { EmailUsFieldsService } from './services/fields/fields.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [
        EmailUsComponent
    ],

    exports: [
        EmailUsComponent
    ],

    imports: [
        HctraCommonModule,
        CommonModule,
        MatIconModule,
        PipesModule,
        FormsModule,
        ValidationModule,
        AccordionModule,
        FileUploadModule,
        CheckboxModule,
        MatFormFieldModule
    ],

    providers: [
        EmailUsFormsService,
        EmailUsFieldsService
    ]
})

export class EmailUsModule {}
