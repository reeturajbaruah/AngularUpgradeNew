import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

export interface FileInfo {
    name: string;
    extension: string;
    data: string;
    contentType: string;
    size: number;
}

type FileErrors = {
    fileSize?: boolean;
    fileType?: boolean;
    fileRead?: boolean;
};

export interface FileReadEvent {
    status: 'reading' | 'complete' | 'error';
    file: FileInfo;
    errors: FileErrors;
}

@Component({
    selector: 'file-upload',
    templateUrl: './fileUpload.html',
    styleUrls: ['./fileUpload.less']
})
export class FileUploadComponent {

    @Input() files: FileInfo[];
    @Input() maxUploads: number;
    @Input() maxCumulativeUploadInMb: number;
    @Input() acceptedFileExtensions: string;
    @Output() read = new EventEmitter <FileReadEvent>();
    @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef<HTMLInputElement>;

    get maxCumulativeUploadInBytes(): number {
        return 1024 * 1024 * this.maxCumulativeUploadInMb;
    }

    clearFileUpload() {
        if (this.fileUpload) {
            this.fileUpload.nativeElement.value = '';
        }
    }

    createFileReader(): FileReader {
        return new FileReader();
    }

    public onFileSelected(files: FileList) {
        const file = files && files[0];

        if (!file) {
            return;
        }

        const size = file.size;
        const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        const name = file.name.substring(0, file.name.lastIndexOf('.'));
        const cumulativeSize = this.files.reduce((acc, v) => acc + v.size, 0);
        const acceptedFileExtensionsCleaned = this.acceptedFileExtensions
            .split(',').map(x => x.toLowerCase().trim());

        const fileInfo = {
            name, extension, size,
            data: null,
            contentType: file.type
        };

        const errors = {} as FileErrors;

        if (!acceptedFileExtensionsCleaned.some(x => x === extension)) {
            errors.fileType = true;            
        }

        if (cumulativeSize + size > this.maxCumulativeUploadInBytes) {
            errors.fileSize = true;
        } 

        if (Object.keys(errors).length > 0) {
            this.clearFileUpload();
            this.read.emit({
                errors: { ...errors },
                file: { ...fileInfo },
                status: 'error'
            });            
            return;
        }

        this.files.push(fileInfo);
        const reader = this.createFileReader();

        reader.addEventListener('load', (e) => {                
            fileInfo.data = e.target.result as string;            
            this.clearFileUpload();

            this.read.emit({
                errors: { ...errors },
                file: fileInfo,
                status: 'complete'
            });
        }, false);

        reader.addEventListener('error', () => {
            errors.fileRead = true;
            this.deleteAttachment(fileInfo);
            this.clearFileUpload();

            this.read.emit({
                errors: { ...errors },
                file: { ...fileInfo },
                status: 'error'
            });
        }, false);

        this.read.emit({
            errors: { ...errors },
            file: { ...fileInfo },
            status: 'reading'
        });

        reader.readAsDataURL(file);                
    }

    public deleteAttachment(file: FileInfo) {
        const index = this.files.indexOf(file);
        if (index >= 0) {
            this.files.splice(index, 1);
        }
    }
}
