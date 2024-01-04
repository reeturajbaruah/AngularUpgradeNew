import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from 'validation/module';
import { SharedFileUploadComponent } from './components/file-upload.component';

@NgModule({
    declarations: [
        SharedFileUploadComponent
    ],

    exports: [
        SharedFileUploadComponent
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

export class FileUploadModule {}
