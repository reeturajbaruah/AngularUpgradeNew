import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { changesStable } from 'testing/utilities';

import { CommonModule } from '@angular/common';

import { FileUploadComponent, FileInfo, FileReadEvent } from './fileUpload.component';
import { ElementRef } from '@angular/core';

describe('file upload component', () => {

    let fixture: ComponentFixture<FileUploadComponent>;
    let component: FileUploadComponent;

    beforeEach((() => {

        TestBed
            .configureTestingModule({
                declarations: [FileUploadComponent],
                imports: [CommonModule]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FileUploadComponent);
        component = fixture.debugElement.componentInstance;

    }));

    describe('canary', () => {
        it('can create instance', () => {
            expect(component).toBeDefined();
        });
    });

    describe('maxCumulativeUploadInBytes', () => {

        it('calculates correct byes for a megabyte', () => {

            component.maxCumulativeUploadInMb = 1;

            expect(component.maxCumulativeUploadInBytes).toBe(1024 * 1024);

        });

    });

    describe('clearFileUpload', () => {

        let fakeFileUpload: ElementRef<HTMLInputElement>;

        beforeEach(async () => {
            await changesStable(fixture);

            fakeFileUpload = {
                nativeElement: {
                    value: ''
                }
            } as ElementRef<HTMLInputElement>;

            component.fileUpload = fakeFileUpload;
        });

        it('can clear file upload field', () => {

            component.fileUpload.nativeElement.value = 'test';

            component.clearFileUpload();

            expect(component.fileUpload.nativeElement.value).toBe('');

        });

    });

    describe('onFileSelected', () => {

        let fakeFileReader: FileReader;
        let fileReadhandlers: ((e) => void)[];
        let fileReadErrorhandlers: ((e) => void)[];

        let asError: boolean;

        let read: (e: FileReadEvent) => void;

        beforeEach(async () => {
            asError = false;
            read = jasmine.createSpy('read');

            fileReadhandlers = [];
            fileReadErrorhandlers = [];

            component.read.subscribe(read);

            component.acceptedFileExtensions = '.png,.jpeg';
            component.maxCumulativeUploadInMb = 10;
            component.maxUploads = 2;
            component.files = [];

            fakeFileReader = jasmine.createSpyObj('fileReader', ['addEventListener', 'readAsDataURL']);

            (fakeFileReader.addEventListener as jasmine.Spy).and.callFake((eventName, handler) => {
                if (eventName === 'load') {
                    fileReadhandlers.push(handler);
                } else if (eventName === 'error') {
                    fileReadErrorhandlers.push(handler);
                }                
            });

            (fakeFileReader.readAsDataURL as jasmine.Spy).and.callFake((file) => {
                if (asError) {
                    fileReadErrorhandlers.forEach(handler => handler(null));
                } else {
                    fileReadhandlers.forEach(handler => handler({ target: { result: file.test_read_data } }));
                }
                
            });

            spyOn(component, 'createFileReader').and.returnValue(fakeFileReader);
            spyOn(component, 'clearFileUpload');

            await changesStable(fixture);
        });

        it('adds no files if filelist is null', () => {

            component.onFileSelected(null);

            expect(read).not.toHaveBeenCalled();
            expect(component.createFileReader).not.toHaveBeenCalled();
            expect(component.clearFileUpload).not.toHaveBeenCalled();
            expect(fakeFileReader.addEventListener).not.toHaveBeenCalled();
            expect(fakeFileReader.readAsDataURL).not.toHaveBeenCalled();
        });

        it('adds no files if filelist is empty', () => {

            component.onFileSelected([] as any);

            expect(read).not.toHaveBeenCalled();
            expect(component.createFileReader).not.toHaveBeenCalled();
            expect(component.clearFileUpload).not.toHaveBeenCalled();
            expect(fakeFileReader.addEventListener).not.toHaveBeenCalled();
            expect(fakeFileReader.readAsDataURL).not.toHaveBeenCalled();
        });

        it('handles invalid filetype', () => {

            const file = {
                name: 'evil.zip',
                size: 1,
                type: 'application/zip'
            } as File;
                        
            component.onFileSelected([file] as any);

            expect(read).toHaveBeenCalledWith({
                errors: { fileType: true },
                status: 'error',
                file: {
                    contentType: file.type,
                    data: null,
                    extension: '.zip',
                    size: 1,
                    name: 'evil'
                }
            });

            expect(component.clearFileUpload).toHaveBeenCalled();

            expect(component.createFileReader).not.toHaveBeenCalled();            
            expect(fakeFileReader.addEventListener).not.toHaveBeenCalled();
            expect(fakeFileReader.readAsDataURL).not.toHaveBeenCalled();

        });

        it('handles attachment size overflow (single file)', () => {

            const file = {
                name: 'chungus.png',
                size: (component.maxCumulativeUploadInMb * 1024 * 1024) + 1,
                type: 'image/png'
            } as File;

            component.onFileSelected([file] as any);

            expect(read).toHaveBeenCalledWith({
                errors: { fileSize: true },
                status: 'error',
                file: {
                    contentType: file.type,
                    data: null,
                    extension: '.png',
                    size: file.size,
                    name: 'chungus'
                }
            });

            expect(component.clearFileUpload).toHaveBeenCalled();

            expect(component.createFileReader).not.toHaveBeenCalled();
            expect(fakeFileReader.addEventListener).not.toHaveBeenCalled();
            expect(fakeFileReader.readAsDataURL).not.toHaveBeenCalled();

        });

        it('handles attachment size overflow (push over)', () => {

            component.files.push({
                name: 'legit.jpeg',
                contentType: 'image/jpeg',
                extension: '.jpeg',
                size: component.maxCumulativeUploadInMb * 1024 * 1024,
                data: 'base64Encoded'
            });

            const file = {
                name: 'micro.png',
                size: 1,
                type: 'image/png'
            } as File;

            component.onFileSelected([file] as any);

            expect(read).toHaveBeenCalledWith({
                errors: { fileSize: true },
                status: 'error',
                file: {
                    contentType: file.type,
                    data: null,
                    extension: '.png',
                    size: file.size,
                    name: 'micro'
                }
            });

            expect(component.clearFileUpload).toHaveBeenCalled();

            expect(component.createFileReader).not.toHaveBeenCalled();
            expect(fakeFileReader.addEventListener).not.toHaveBeenCalled();
            expect(fakeFileReader.readAsDataURL).not.toHaveBeenCalled();

        });

        it('can attach file', () => {

            const file = {
                name: 'micro.png',
                size: 1,
                type: 'image/png',
                test_read_data: 'base64Encoded'
            };

            const expectedFileInfo = {
                name: 'micro',
                extension: '.png',
                contentType: 'image/png',
                size: 1,
                data: 'base64Encoded'
            } as FileInfo;

            expect(component.files.length).toBe(0);

            component.onFileSelected([file] as any);

            expect(read).toHaveBeenCalledWith({
                errors: { },
                status: 'reading',
                file: {
                    contentType: file.type,
                    data: null,
                    extension: '.png',
                    size: file.size,
                    name: 'micro'
                }
            });
            
            expect(component.createFileReader).toHaveBeenCalled();

            expect(fakeFileReader.addEventListener).toHaveBeenCalledWith('load', jasmine.anything(), false);
            expect(fakeFileReader.addEventListener).toHaveBeenCalledWith('error', jasmine.anything(), false);

            expect(fakeFileReader.readAsDataURL).toHaveBeenCalled();

            expect(read).toHaveBeenCalledWith({
                errors: {},
                status: 'complete',
                file: expectedFileInfo
            });

            expect(component.clearFileUpload).toHaveBeenCalled();


            expect(component.files.length).toBe(1);
            expect(component.files[0]).toEqual(expectedFileInfo);
        });

        it('can handle a file read error', () => {

            const file = {
                name: 'micro.png',
                size: 1,
                type: 'image/png',
                test_read_data: 'base64Encoded'
            };

            expect(component.files.length).toBe(0);

            asError = true;

            component.onFileSelected([file] as any);

            expect(read).toHaveBeenCalledWith({
                errors: { },
                status: 'reading',
                file: {
                    contentType: file.type,
                    data: null,
                    extension: '.png',
                    size: file.size,
                    name: 'micro'
                }
            });

            expect(component.createFileReader).toHaveBeenCalled();

            expect(fakeFileReader.addEventListener).toHaveBeenCalledWith('load', jasmine.anything(), false);
            expect(fakeFileReader.addEventListener).toHaveBeenCalledWith('error', jasmine.anything(), false);

            expect(fakeFileReader.readAsDataURL).toHaveBeenCalled();

            expect(read).toHaveBeenCalledWith({
                errors: { fileRead: true },
                status: 'error',
                file: {
                    contentType: file.type,
                    data: null,
                    extension: '.png',
                    size: file.size,
                    name: 'micro'
                }
            });

            expect(component.clearFileUpload).toHaveBeenCalled();

            expect(component.files.length).toBe(0);
        });

    });

    describe('deleteAttachment', () => {

        it('can delete file from collection', () => {

            const file1 = { name: 'a' } as FileInfo;
            const file2 = { name: 'b' } as FileInfo;
            const files = [file1, file2];

            component.files = files;

            component.deleteAttachment(file1);

            expect(component.files.length).toBe(1);
            expect(component.files[0]).toEqual(file2);

        });

        it('deletes nothing if file not found', () => {

            const file1 = { name: 'a'} as FileInfo;
            const file2 = { name: 'b'} as FileInfo;
            const file3 = { name: 'c'} as FileInfo;
            const files = [file1, file2];

            component.files = files;

            component.deleteAttachment(file3);

            expect(component.files.length).toBe(2);
            expect(component.files[0]).toEqual(file1);
            expect(component.files[1]).toEqual(file2);

        });

    });
});
