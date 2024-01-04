import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { UpdateContactInfoCardComponent } from './updateContactInfoCard.component';
import { PhoneNumberPipe } from 'pipes/phoneNumber/phoneNumber.pipe';
import { GetContactInfoResponse } from 'common/services';

describe('component: UpdateContactInfoCard', () => {
    let component: UpdateContactInfoCardComponent;
    let fixture: ComponentFixture<UpdateContactInfoCardComponent>;
    let state: StateService;
    let phoneNumberPipe: jasmine.SpyObj<PhoneNumberPipe>;

    beforeEach(async () => {
        state = jasmine.createSpyObj('state', ['go']);
        phoneNumberPipe = jasmine.createSpyObj('phoneNumberPipe', ['transform']);

		await TestBed.configureTestingModule({
			declarations: [
                UpdateContactInfoCardComponent,
                PhoneNumberPipe
            ],
            schemas: [NO_ERRORS_SCHEMA ],
			providers: [
                { provide: StateService, useFactory: () => state },
                { provide: PhoneNumberPipe, useFactory: () => phoneNumberPipe }
            ]
		})
        .compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(UpdateContactInfoCardComponent);
        component = fixture.debugElement.componentInstance;
	});

    describe('canary', () => {
        it('should pass', async () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            component.contactInfo = {
                contactInfo: {
                    phoneNumber: '1234567890',
                    workPhoNbr: '0987654321',
                    mobilePhoNbr: '1122334455'
                }
            } as GetContactInfoResponse;
    
            phoneNumberPipe.transform.and.callFake((input) => `${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6)}`);
        });
    
        it('should format phone numbers correctly', () => {
            component.ngOnInit();
    
            expect(component.contactInfo.contactInfo.phoneNumber).toBe('123-456-7890');
            expect(component.contactInfo.contactInfo.workPhoNbr).toBe('098-765-4321');
            expect(component.contactInfo.contactInfo.mobilePhoNbr).toBe('112-233-4455');
    
            expect(phoneNumberPipe.transform).toHaveBeenCalledTimes(3);
            expect(phoneNumberPipe.transform).toHaveBeenCalledWith('1234567890');
            expect(phoneNumberPipe.transform).toHaveBeenCalledWith('0987654321');
            expect(phoneNumberPipe.transform).toHaveBeenCalledWith('1122334455');
        });
    });    

    describe('updateContactInfo', () => {
        it('should call state.go with profileStateNames.UpdateContactInformation', async () => {
            await component.updateContactInfo();

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith('updatePersonalInformation', Object({ personalInfo: Object({}) }));
        });
    });

    describe('trimEmail', () => {
        it('should return the same email if length is less than or equal to 35', () => {
            const email = 'cardComponent@example.com';
            const result = component.trimEmail(email);
            expect(result).toBe(email);
        });

        it('should return a trimmed email if length is more than 35', () => {
            const email = 'updateContactInfoCardComponent@example.com';
            const result = component.trimEmail(email);
            expect(result).toBe('updateContac...@example.com');
        });
    });
});
