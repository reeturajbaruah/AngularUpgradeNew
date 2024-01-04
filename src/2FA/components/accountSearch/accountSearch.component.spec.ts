import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountSearchComponent } from './accountSearch.component';
import { AccountIdentificationOption, LoginResetOption } from '2FA/interfaces';
import { DataService } from 'common/services';

describe('Account Search Component Tests', () => {

    let fixture: ComponentFixture<AccountSearchComponent>;
    let component: AccountSearchComponent;   
    let form: NgForm;
    let dataService: DataService;

    beforeEach(async () => {

        form = {} as NgForm;
        dataService = jasmine.createSpyObj('dataService', ['getTagAuthorities']);

        (dataService.getTagAuthorities as jasmine.Spy).and.resolveTo(['HCTR', 'OTHER']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AccountSearchComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    FormsModule
                ],
                providers: [
                    { provide: NgForm, useFactory: () => form },
                    { provide: DataService, useFactory: () => dataService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AccountSearchComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsData = {
            Title: 'parent',
            Children: [
                { ItemName: 'More Info'}, 
                { ItemName: 'Help Locating Account'},
                { ItemName: 'Title Popup', LongDescription: 'TEST'}
            ]
        } as any;
        
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        it('can setup component', async () => {

            await component.ngOnInit();
            expect(component.data.selectedAgency).toBe('HCTR');
            expect(component.agencies).toEqual(['HCTR', 'OTHER']);
        });

    });

    describe('inputType', () => {

        it('can get input type', () => {
            component.data.loginResetOption = null;
            expect(component.inputType).toBe(null);
            component.data.loginResetOption = LoginResetOption.Email;
            expect(component.inputType).toBe('email');
            component.data.loginResetOption = LoginResetOption.Phone;
            expect(component.inputType).toBe('tel');
        });

    });

    describe('additionalInfoCmsData', () => {

        it('can get additional cms child data', async () => {
            await component.ngOnInit();
            expect(component.additionalInfoCmsData).toBe(component.cmsData.Children[0] as any);
        });

    });

    describe('helpLinkCmsData', () => {

        it('can get helplink cms child data', async () => {
            await component.ngOnInit();
            expect(component.helpLinkCmsData).toBe(component.cmsData.Children[1] as any);
        });

    });

    describe('forgotUserNameCms', () => {


        it('can get forgotUsername cms child data with add security', async () => {           
            await component.ngOnInit();
            expect(component.titlePopup).toBe(component.cmsData.Children[2].LongDescription);
        });

        it('can get forgotUsername cms child data with add security', async () => {
            component.cmsData.Children[2].LongDescription = null;
            await component.ngOnInit();
            expect(component.titlePopup).toBeFalsy();
        });

    });

    describe('showMoreInfoNeeded', () => {

        it('pulls from data if add security off', async () => {
            await component.ngOnInit();
            component.data.moreInfoNeeded = true;
            expect(component.showMoreInfoNeeded).toBeTrue();
            component.data.moreInfoNeeded = false;
            expect(component.showMoreInfoNeeded).toBeFalse();
            
        });

        it('pulls from data if add security off', async () => {
            component.forceRequireMoreInfo = true;
            await component.ngOnInit();
            component.data.moreInfoNeeded = true;
            expect(component.showMoreInfoNeeded).toBeTrue();
            component.data.moreInfoNeeded = false;
            expect(component.showMoreInfoNeeded).toBeTrue();
            
        });

    });

    describe('clearValidations', () => {

        it('can clear submitted state', () => {

            (form as any).submitted = true;

            component.clearValidations();

            expect(form.submitted).toBeFalsy();

        });

    });

    describe('reset', () => {

        it('resets excluding to', () => {

            component.data.moreInfoNeeded = true;
            component.data.accountIdentificationOption = AccountIdentificationOption.EzTagNumber;
            component.data.selectedAgency = 'bleh';
            component.data.ezTagNumber = 'number';
            component.data.accountNumber = 'acct';

            component.data.to = 'to';

            component.reset();

            expect(component.data.moreInfoNeeded).toBeFalse();
            expect(component.data.accountIdentificationOption).toBeNull();
            expect(component.data.selectedAgency).toBe(AccountSearchComponent.defaultAgency);
            expect(component.data.ezTagNumber).toBeNull();
            expect(component.data.accountNumber).toBeNull();
            expect(component.data.to).toBe('to');

        });

        it('resets including to', () => {

            component.data.moreInfoNeeded = true;
            component.data.accountIdentificationOption = AccountIdentificationOption.EzTagNumber;
            component.data.selectedAgency = 'bleh';
            component.data.ezTagNumber = 'number';
            component.data.accountNumber = 'acct';

            component.data.to = 'to';

            component.reset(true);

            expect(component.data.moreInfoNeeded).toBeFalse();
            expect(component.data.accountIdentificationOption).toBeNull();
            expect(component.data.selectedAgency).toBe(AccountSearchComponent.defaultAgency);
            expect(component.data.ezTagNumber).toBeNull();
            expect(component.data.accountNumber).toBeNull();
            expect(component.data.to).toBeNull();

        });

    });

});
