import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CmsResolverService } from 'cms/services';
import { CmsIds } from '../constants';
import { FileInfo, IFileUploadCms } from '../models/file-upload.models';

@Component({
    selector: 'shared-file-upload',
    templateUrl: 'file-upload.component.html',
    styleUrls: ['file-upload.component.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})

export class SharedFileUploadComponent implements OnInit {
    @Input() label?: string;
    @Input() maxUploadSlots = 3 as number;
    @Input() maxfileSizeInMb = 10 as number;
    @Input() allowedExtensions = '*' as string;
    @Input() required = false as boolean;

    @Output() filesChanged = new EventEmitter<FileInfo[]>();

    fileUploadCms: IFileUploadCms;
    files = [] as FileInfo[];

    get maxFileSizeInInBytes(): number {
        return 1024 * 1024 * this.maxfileSizeInMb;
    }

    get submitted(): boolean {
        return this.form.submitted;
    }

    constructor(
        public form: NgForm,
        private cmsResolverService: CmsResolverService
    ) { }

    async ngOnInit() {
        this.fileUploadCms = await this.cmsResolverService.resolve({ ItemId: CmsIds.FileUpload });
        this.label = this.label || this.fileUploadCms.FileUploadLabel;
        this.addAdditionalFile();
    }

    hasFileErrors(index: number): boolean {
        const errors = this.files[index]?.errors;
        return (errors?.fileSize || errors?.fileType || errors?.fileRead);
    }

    hasValidationErrors(file: FileInfo): boolean {
        return (this.submitted && this.required && !this.isValid(file));
    }

    isValid(file: FileInfo): boolean {
        return !!(file?.name);
    }

    hasEmptyUploadSlot(): boolean {
        return this.files.some(file => !file?.data);
    }

    addAdditionalFile() {
        if (this.files.length < this.maxUploadSlots) {
            this.addEmptyFile();
        }
    }

    removeFile(index: number) {
        // Removes a file entry at the specified index, shifting the remaining files up
        this.files.splice(index, 1);
    
        // Ensures at least one file input is available
        if (this.files.length === 0) {
            this.addEmptyFile();
        }

        this.emitValidFiles();
    }

    private addEmptyFile() {
        this.files.push({ name: '', extension: '', data: '', contentType: '', size: 0, errors: {} });
    }

    onAttachFile(file: File, index: number) {
        const fileInfo = this.getFileInfo(file);

        this.validateFile(fileInfo, index);

        if (this.hasFileErrors(index)) {
            // Ensures the previous file is deleted in parent component when the user re-uploads a file with errors
            this.emitValidFiles();
        }
        else {
            this.readFileData(file, fileInfo, index);
        }
    }

    private getFileInfo(file: File): FileInfo {
        return {
            name: file.name.substring(0, file.name.lastIndexOf('.')),
            extension: '.' + file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase(),
            data: '',
            contentType: file.type,
            size: file.size,
            errors: {}
        };
    }

    private validateFile(fileInfo: FileInfo, index: number) {
        if (this.allowedExtensions !== '*') {
            fileInfo.errors.fileType = !this.allowedExtensions.toLowerCase().split(',').map(ext => ext.trim()).includes(fileInfo.extension);
        }
        
        fileInfo.errors.fileSize = (fileInfo.size > this.maxFileSizeInInBytes);

        this.files[index] = fileInfo;
    }

    private readFileData(file: File, fileInfo: FileInfo, index: number) {
        const reader = new FileReader();

        reader.onload = (e) => {
            fileInfo.data = e.target.result as string;
            this.files[index] = fileInfo;
            this.emitValidFiles();

            // Generate next slot if 'required' is false
            if(!this.required) {
                this.addAdditionalFile();
            }
        };

        reader.onerror = () => {
            fileInfo.errors.fileRead = true;
            this.files[index] = fileInfo;
            this.emitValidFiles();
        };

        reader.readAsDataURL(file);
    }

    private emitValidFiles() {
        this.filesChanged.emit(this.files.filter(file => file?.data));
    }
}
