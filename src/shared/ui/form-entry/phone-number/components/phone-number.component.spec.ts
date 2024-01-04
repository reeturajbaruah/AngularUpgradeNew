import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CmsResolverService } from 'cms/services';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { PhoneNumberCMSContent } from '../interfaces/phone-number.interface';
import { PhoneNumberComponent } from './phone-number.component';

const mockPhoneNumberCMSContent = {
	PhoneNumberDefaultHeader: 'PHONE NUMBER',
	PhoneExtensionDefaultHeader: 'EXT (OPTIONAL)',
	PhoneNumberValidationText: 'Phone Number Validation Text',
	PhoneExtensionValidationText: 'Phone Ext Validation Text'
} as PhoneNumberCMSContent;

describe('PhoneNumberComponent', () => {
	let component: PhoneNumberComponent;
	let fixture: ComponentFixture<PhoneNumberComponent>;
    
	let form: jasmine.SpyObj<NgForm>;
	let cmsResolverService: jasmine.SpyObj<CmsResolverService>;

	beforeEach(async () => {
		form = jasmine.createSpyObj('NgForm', ['submitted'], { submitted: false });
		cmsResolverService = jasmine.createSpyObj('CmsResolverService', ['resolve']);

		cmsResolverService.resolve.and.returnValue(Promise.resolve(mockPhoneNumberCMSContent));

		await TestBed.configureTestingModule({
			declarations: [ PhoneNumberComponent ],
			schemas: [ NO_ERRORS_SCHEMA ],
			providers: [
                { provide: NgForm, useFactory: () => form },
                { provide: CmsResolverService, useFactory: () => cmsResolverService }
            ],
			imports: [ CommonModule, PipesModule, FormsModule, MatDialogModule, ValidationModule ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PhoneNumberComponent);
        component = fixture.debugElement.componentInstance;
	});

	describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

	describe('ngOnInit', () => {
        it('should initialize cmsContent and headers correctly', async () => {
            // Act
            await component.ngOnInit();

            // Assert
            expect(component.cmsContent).toEqual(mockPhoneNumberCMSContent);
            expect(component.phoneNumberHeader).toBe(mockPhoneNumberCMSContent.PhoneNumberDefaultHeader);
            expect(component.phoneNumberExtHeader).toBe(mockPhoneNumberCMSContent.PhoneExtensionDefaultHeader);
        });

        it('should not override phoneNumberHeader and phoneNumberExtHeader if already set', async () => {
            // Arrange
            component.phoneNumberHeader = 'Custom Phone Header';
            component.phoneNumberExtHeader = 'Custom Ext Header';

            // Act
            await component.ngOnInit();

            // Assert
            expect(component.phoneNumberHeader).toBe('Custom Phone Header');
            expect(component.phoneNumberExtHeader).toBe('Custom Ext Header');
        });
    });

    describe('updatePhoneNumber', () => {
        it('should format and emit the phone number correctly', () => {
            // Arrange
            spyOn(component.phoneNumberChange, 'emit');
            component.phoneNumber = '1234567890';

            // Act
            component.updatePhoneNumber();

            // Assert
            expect(component.phoneNumberChange.emit).toHaveBeenCalledWith('123-456-7890');
        });
    });

    describe('updatePhoneNumberExt', () => {
        it('should emit the phone extension correctly', () => {
            // Arrange
            spyOn(component.phoneNumberExtChange, 'emit');
            component.phoneNumberExt = '123';

            // Act
            component.updatePhoneNumberExt();

            // Assert
            expect(component.phoneNumberExtChange.emit).toHaveBeenCalledWith('123');
        });
    });

    describe('deleteAltPhone', () => {
        it('should reset and emit phone number and extension correctly', () => {
            // Arrange
            spyOn(component.trashClicked, 'emit');

            // Act
            component.deleteAltPhone();

            // Assert
            expect(component.trashClicked.emit).toHaveBeenCalled();
        });
    });
});
