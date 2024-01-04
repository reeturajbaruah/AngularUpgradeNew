import { ElementRef, NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralCmsItems } from 'common/models';
import { DialogService } from 'common/services';
import { IContactUsCms } from 'helpAndSupport/models/contact-us.models';
import { HelpAndSupportManagerService } from 'helpAndSupport/services/manager/help-and-support-manager.service';
import { PipesModule } from 'pipes/module';
import { EmailUsComponent } from 'shared/sliders/email-us/components/email-us.component';
import { ContactUsComponent } from './contact-us.component';

const mockContactUsCms = {
    Title: 'mock title',
    emailUsCms: {
        Title: 'mock title'
    } as GeneralCmsItems
} as IContactUsCms;

describe('ContactUsComponent', () => {
	let component: ContactUsComponent;
	let fixture: ComponentFixture<ContactUsComponent>;

    let managerMock: jasmine.SpyObj<HelpAndSupportManagerService>;
    let dialogServiceMock: jasmine.SpyObj<DialogService>;
    let elementRefMock: jasmine.SpyObj<ElementRef>;
    let renderer2Mock: jasmine.SpyObj<Renderer2>;

	beforeEach(async () => {
        managerMock = jasmine.createSpyObj('HelpAndSupportManagerService', ['getContactUsCms']);
        dialogServiceMock = jasmine.createSpyObj('DialogService', ['openSliderCentered']);

		await TestBed.configureTestingModule({
            declarations: [ContactUsComponent],
            providers: [
                { provide: HelpAndSupportManagerService, useFactory: () => managerMock },
                { provide: DialogService, useFactory: () => dialogServiceMock },
                { provide: ElementRef, useFactory: () => elementRefMock },
                { provide: Renderer2, useFactory: () => renderer2Mock },
            ],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PipesModule]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ContactUsComponent);
        component = fixture.debugElement.componentInstance;
	});

	describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should load data from getContactUsCms into contactUsCms', () => {
            managerMock.getContactUsCms.and.returnValue(mockContactUsCms);

            component.ngOnInit();

            expect(component.contactUsCms).toEqual(mockContactUsCms);
        });
    });

    describe('openEmailUsSlider', () => {
        it('should open EmailUsComponent slider with correct parameters', async () => {
            component.contactUsCms = mockContactUsCms;
            dialogServiceMock.openSliderCentered.and.returnValue(Promise.resolve());

            await component.openEmailUsSlider();

            expect(dialogServiceMock.openSliderCentered).toHaveBeenCalledWith(EmailUsComponent, '', { title: mockContactUsCms.emailUsCms.Title });
        });
    });
});
