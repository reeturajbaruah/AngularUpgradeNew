import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CmsResolverService } from 'cms/services';
import { ValidationModule } from 'validation/module';
import { FileInfo, IFileUploadCms } from '../models/file-upload.models';
import { SharedFileUploadComponent } from './file-upload.component';

const mockFileUploadCms = {
    FileUploadLabel: 'FILE UPLOAD'
} as IFileUploadCms;

describe('PhoneNumberComponent', () => {
	let component: SharedFileUploadComponent;
	let fixture: ComponentFixture<SharedFileUploadComponent>;
    
	let form: jasmine.SpyObj<NgForm>;
	let cmsResolverService: jasmine.SpyObj<CmsResolverService>;

	beforeEach(async () => {
		form = jasmine.createSpyObj('NgForm', ['submitted'], { submitted: false });
		cmsResolverService = jasmine.createSpyObj('CmsResolverService', ['resolve']);

		cmsResolverService.resolve.and.returnValue(Promise.resolve(mockFileUploadCms));

		await TestBed.configureTestingModule({
			declarations: [ SharedFileUploadComponent ],
			schemas: [ NO_ERRORS_SCHEMA ],
			providers: [
                { provide: NgForm, useFactory: () => form },
                { provide: CmsResolverService, useFactory: () => cmsResolverService }
            ],
			imports: [ CommonModule, FormsModule, MatDialogModule, ValidationModule ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SharedFileUploadComponent);
        component = fixture.debugElement.componentInstance;
	});

	describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should initialize component properties', async () => {
            cmsResolverService.resolve.and.returnValue(Promise.resolve(mockFileUploadCms));

            await component.ngOnInit();

            expect(component.fileUploadCms).toEqual(mockFileUploadCms);
            expect(component.label).toEqual(mockFileUploadCms.FileUploadLabel);
        });
    });

    describe('hasFileErrors', () => {
        it('should return true if the file has errors', () => {
            component.files = [{ errors: { fileSize: true } } as FileInfo];
            expect(component.hasFileErrors(0)).toBeTrue();
        });
    
        it('should return undefined if the file has no errors', () => {
            component.files = [{ errors: {} } as FileInfo];
            expect(component.hasFileErrors(0)).toBeUndefined();
        });
    });

    describe('hasValidationErrors', () => {
        it('should return true if the file has validation errors', () => {
            component.form = { submitted: true } as NgForm;
            component.required = true;
            const invalidFile = { name: '' } as FileInfo;
            expect(component.hasValidationErrors(invalidFile)).toBeTrue();
        });
    
        it('should return false if the file has no validation errors', () => {
            component.form = { submitted: true } as NgForm;
            component.required = true;
            const validFile = { name: 'example.jpg' } as FileInfo;
            expect(component.hasValidationErrors(validFile)).toBeFalse();
        });
    });
    
    describe('isValid', () => {
        it('should return true for a valid file', () => {
            const validFile = { name: 'example.jpg' } as FileInfo;
            expect(component.isValid(validFile)).toBeTrue();
        });
    
        it('should return false for an invalid file', () => {
            const invalidFile = { name: '' } as FileInfo;
            expect(component.isValid(invalidFile)).toBeFalse();
        });
    });
    
    describe('hasEmptyUploadSlot', () => {
        it('should return true if there is an empty upload slot', () => {
            component.files = [{ data: '' } as FileInfo, { data: 'data:image/png;base64,...' } as FileInfo];
            expect(component.hasEmptyUploadSlot()).toBeTrue();
        });
    
        it('should return false if there is no empty upload slot', () => {
            component.files = [{ data: 'data:image/png;base64,...' } as FileInfo];
            expect(component.hasEmptyUploadSlot()).toBeFalse();
        });
    });
    
    describe('addAdditionalFile', () => {
        beforeEach(() => {
            component.files = [];
        });
    
        it('should add an empty file if the number of files is less than maxUploadSlots', () => {
            component.maxUploadSlots = 3;
            
            component.addAdditionalFile();
    
            expect(component.files.length).toBe(1);
            expect(component.files[0]).toEqual({ name: '', extension: '', data: '', contentType: '', size: 0, errors: {} });
        });
    
        it('should not add an empty file if the number of files reaches maxUploadSlots', () => {
            component.maxUploadSlots = 1;
            component.files = [{} as FileInfo];
    
            component.addAdditionalFile();
    
            expect(component.files.length).toBe(1);
        });
    });

    describe('removeFile', () => {
        beforeEach(() => {
            component.files = [
                { name: 'file1', data: 'data1' } as FileInfo,
                { name: 'file2', data: 'data2' } as FileInfo,
                { name: 'file3', data: 'data3' } as FileInfo
            ];
        });
    
        it('should remove the file at the specified index', () => {
            const removeIndex = 1;
    
            component.removeFile(removeIndex);
    
            expect(component.files.length).toBe(2);
            expect(component.files[removeIndex].name).not.toEqual('file2');
        });
    
        it('should add an empty file slot if all files are removed', () => {
            component.files.forEach(() => component.removeFile(0));
    
            expect(component.files.length).toBe(1);
        });
        
        it('should emit valid files after a file is removed', () => {
            spyOn<any>(component, 'emitValidFiles');
    
            component.removeFile(0);
    
            expect(component['emitValidFiles']).toHaveBeenCalled();
        });
    });
    
    describe('onAttachFile', () => {
        let mockFile: File;
        let mockFileReader: jasmine.SpyObj<FileReader>;
        let readAsDataURLSpy: jasmine.Spy;
        let mockEvent: any;
        let mockErrorEvent: any;
    
        beforeEach(() => {
            mockFile = new File(['content'], 'test.jpg', { type: 'image/jpeg' });
    
            mockFileReader = jasmine.createSpyObj('FileReader', ['readAsDataURL', 'onload', 'onerror']);
            readAsDataURLSpy = mockFileReader.readAsDataURL.and.callFake(() => {
                mockFileReader.onload(mockEvent);
            });
    
            spyOn(window, 'FileReader').and.returnValue(mockFileReader);
    
            component.files = [];
    
            mockEvent = {
                target: { result: 'data:image/jpeg;base64,...' }
            };
            mockErrorEvent = new ProgressEvent('error');
        });
    
        it('should process and attach a file', () => {
            const index = 0;
            component.onAttachFile(mockFile, index);
    
            expect(readAsDataURLSpy).toHaveBeenCalled();
            expect(component.files[index]).toEqual(jasmine.objectContaining({
                name: 'test',
                extension: '.jpg',
                data: 'data:image/jpeg;base64,...',
                contentType: 'image/jpeg',
                size: jasmine.any(Number),
                errors: jasmine.any(Object)
            }));
    
            mockFileReader.onload(mockEvent);
        });
    
        it('should set error if file reading fails', () => {
            const index = 0;
            component.onAttachFile(mockFile, index);
    
            mockFileReader.onerror(mockErrorEvent);
    
            expect(component.files[index].errors.fileRead).toBeTrue();
        });
    });
});
