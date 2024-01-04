import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IDocumentsCms } from 'helpAndSupport/models/documents.models';
import { HelpAndSupportManagerService } from 'helpAndSupport/services/manager/help-and-support-manager.service';
import { PipesModule } from 'pipes/module';
import { DocumentsComponent } from './documents.component';

const mockDocumentsCms = {
    Title: 'mock title'
} as IDocumentsCms;

describe('DocumentsComponent', () => {
	let component: DocumentsComponent;
	let fixture: ComponentFixture<DocumentsComponent>;

    let managerMock: jasmine.SpyObj<HelpAndSupportManagerService>;

	beforeEach(async () => {
        managerMock = jasmine.createSpyObj('HelpAndSupportManagerService', ['getDocumentsCms']);

		await TestBed.configureTestingModule({
            declarations: [DocumentsComponent],
            providers: [
                { provide: HelpAndSupportManagerService, useFactory: () => managerMock }
            ],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PipesModule]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DocumentsComponent);
        component = fixture.debugElement.componentInstance;
	});

	describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should load data from getDocumentsCms into documentsCms', () => {
            managerMock.getDocumentsCms.and.returnValue(mockDocumentsCms);

            component.ngOnInit();

            expect(component.documentsCms).toEqual(mockDocumentsCms);
        });
    });
});
