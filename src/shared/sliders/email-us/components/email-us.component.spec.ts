import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { CmsResolverService } from 'cms/services';
import { DialogRef, DialogService, HttpService, ResponseErrorService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { IEmailUsCms, IFieldsData, IFormsCms } from '../models/email-us.models';
import { EmailUsFacadeService } from '../services/facade/emailUs-facade.service';
import { EmailUsFieldsService } from '../services/fields/fields.service';
import { EmailUsFormsService } from '../services/forms/forms.service';
import { EmailUsComponent } from './email-us.component';

const mockFormsCms = {
    ItemName: 'Forms',
    Children: []
} as any;

const mockFieldsCms = {
    ItemName: 'Fields',
    Children: []
} as any;

const mockEmailUsCms = {
    Children: [
        mockFormsCms,
        mockFieldsCms
    ]
} as IEmailUsCms;

describe('EmailUsComponent', () => {
	let component: EmailUsComponent;
	let fixture: ComponentFixture<EmailUsComponent>;

    let dialogRef: jasmine.SpyObj<DialogRef<IEmailUsCms>>;
    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;
    let formsService: jasmine.SpyObj<EmailUsFormsService>;
    let fieldsService: jasmine.SpyObj<EmailUsFieldsService>;
    let dialogService: jasmine.SpyObj<DialogService>;
    let facade: jasmine.SpyObj<EmailUsFacadeService>;
    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let authService: jasmine.SpyObj<AuthenticationService>;

	beforeEach(async () => {
        dialogRef = jasmine.createSpyObj('DialogRef', ['close'], ['data']);
        cmsResolverService = jasmine.createSpyObj('CmsResolverService', ['resolve']);
        formsService = jasmine.createSpyObj('EmailUsFormsService', ['getCmsData']);
        fieldsService = jasmine.createSpyObj('EmailUsFieldsService', ['getCmsData']);
        dialogService = jasmine.createSpyObj('DialogService', ['openGenericModal']);
        facade = jasmine.createSpyObj('EmailUsFacadeService', ['sendHelpAndSupportEmail']);
        authService = jasmine.createSpyObj('AuthenticationService', ['isAuthenticated']);

        responseErrorService = jasmine.createSpyObj('ResponseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

		await TestBed.configureTestingModule({
            declarations: [EmailUsComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PipesModule, HttpClientTestingModule, FormsModule],
            providers: [
                { provide: DialogRef, useFactory: () => dialogRef },
                { provide: CmsResolverService, useFactory: () => cmsResolverService },
                { provide: EmailUsFormsService, useFactory: () => formsService },
                { provide: EmailUsFieldsService, useFactory: () => fieldsService },
                { provide: DialogService, useFactory: () => dialogService },
                { provide: EmailUsFacadeService, useFactory: () => facade },
                { provide: AuthenticationService, useFactory: () => authService },

                { provide: HttpService, useFactory: () => httpService },
                { provide: ResponseErrorService, useFactory: () => responseErrorService }
            ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EmailUsComponent);
        component = fixture.debugElement.componentInstance;
        component.emailUsCms = mockEmailUsCms;
	});

	describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should call getCmsData and initInputFields', async () => {
            spyOn<any>(component, 'getCmsData');
            spyOn<any>(component, 'initInputFields');
      
            await component.ngOnInit();

            expect(component['getCmsData']).toHaveBeenCalled();
            expect(component['initInputFields']).toHaveBeenCalled();
        });
    });

    it('getCmsData', async () => {
        cmsResolverService.resolve.and.returnValue(Promise.resolve(mockEmailUsCms));

        await component['getCmsData']();
      
        expect(component.emailUsCms).toEqual(mockEmailUsCms);
    });

    describe('submit', () => {
        let form: jasmine.SpyObj<NgForm>;
        const errorObj = { errors: [{ key: 'test', message: 'mesg' }] };
        httpService = jasmine.createSpyObj('HttpService', ['get', 'post']);
        httpService.get.and.resolveTo({ errors: [] });

        it('should not proceed if form is not valid', async () => {
            form = jasmine.createSpyObj('NgForm', [], { valid: false });
            spyOn<any>(component, 'initEmailUsPayload');
           
            await component.submit(form);

            expect(component['initEmailUsPayload']).not.toHaveBeenCalled();
        });

        it('should open ConfirmationModal if sendHelpAndSupportEmail api response is true', async () => {
            form = jasmine.createSpyObj('NgForm', [], { valid: true });
            responseErrorService.isErrorFree.and.returnValue(true);
            httpService.post.and.resolveTo({ errors: [] });
            facade.sendHelpAndSupportEmail.and.resolveTo(Promise.resolve(true));

            spyOn<any>(component, 'initEmailUsPayload');
            spyOn<any>(component, 'openConfirmationModal');

            await component.submit(form);

            expect(component['initEmailUsPayload']).toHaveBeenCalled();
            expect(component['openConfirmationModal']).toHaveBeenCalled();
        });

        it('should not open ConfirmationModal if sendHelpAndSupportEmail api response is false', async () => {
            form = jasmine.createSpyObj('NgForm', [], { valid: true });
            responseErrorService.isErrorFree.and.returnValue(false);
            httpService.post.and.resolveTo(errorObj);
            facade.sendHelpAndSupportEmail.and.resolveTo(Promise.resolve(false));

            spyOn<any>(component, 'initEmailUsPayload');
            spyOn<any>(component, 'openConfirmationModal');

            await component.submit(form);

            expect(component['initEmailUsPayload']).toHaveBeenCalled();
            expect(component['openConfirmationModal']).not.toHaveBeenCalled();
        });

    });

    it('exitModal', async () => {
        await component.exitModal(false);
        expect(dialogRef.close).toHaveBeenCalled();
    });

    it('should call updatePhoneNumber to format phone number', async () => {
        const fieldsData = {
            name: 'PhoneNumber',
            label: 'Phone Number',
            value: '8326782345'
        } as IFieldsData;
        const itemName = 'PhoneNumber';
        component.fields = { ['PhoneNumber']: fieldsData } ;

        await component.updatePhoneNumber(itemName);

        expect(component.fields[itemName].value).toEqual('832-678-2345');
    });
});
