import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { changesStable } from 'testing';
import { PipesModule } from 'pipes/module';
import { ViolationLoginPopUpModalComponent, ViolationLoginPopUpModalInjectionValues } from './violationLoginPopUpModal.component';
import { StateNames as LoginStateNames } from 'login/constants';
import { StateService } from '@uirouter/angular';
import { CmsUtilService } from 'cms/services';
import { IAcctSearchResponse } from 'violationsCommon/services/services.index';
import { WebStorageConst } from 'constants/webstorage.constants';
import { WebStorageService } from '../../../services/webStorageService/webStorage.service';

describe('ViolationLoginPopUpModal tests', () => {

    let fixture: ComponentFixture<ViolationLoginPopUpModalInjectionValues>;
    let component: ViolationLoginPopUpModalComponent;
    let dialogData: ViolationLoginPopUpModalInjectionValues;
    let state: StateService;
    let dialog: jasmine.SpyObj<MatDialogRef<ViolationLoginPopUpModalComponent>>;
    let cmsUtilService: CmsUtilService;
    let loginStateNames: LoginStateNames;
    let webStorage: jasmine.SpyObj<any>;
    let webStorageConst: WebStorageConst;
    
    const mockData = {
        plate: {
            licensePlate: 'Test123'
        },
        associatedPlates: [
            {
                plateDueBeforeDiscount: 153.5,
                licensePlate: 'DG3P124',
                licenseState: 'TX'
            },
            {
                plateDueBeforeDiscount: 153.5,
                licensePlate: 'DG3P123',
                licenseState: 'TX'
            },
        ]
    };
    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            cmsContent: {
                Title: '',
                ShortDescription: '',
                LongDescription: '',
                AcceptBtn: '',
                CancelBtn: '',
                extraPlatesText: '',
                extraPlatesDivider: '',
                PAY_PLAN_TOOLTIP_LINK: '',
                PAY_PLAN_TOOLTIP_TEXT: '',
                PAY_PLAN_TOOLTIP_KIOSK_TEXT: ''
            },
            data: mockData as IAcctSearchResponse
        };
        state = jasmine.createSpyObj('state', ['go']);
        loginStateNames = new LoginStateNames();
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue']);
        webStorageConst = new WebStorageConst();

        await TestBed
            .configureTestingModule({
                declarations: [
                    ViolationLoginPopUpModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: StateService, useFactory: () => state },
                    { provide: LoginStateNames, useFactory: () => loginStateNames },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: WebStorageConst, useValue: webStorageConst },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ViolationLoginPopUpModalComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = {
            Title: '',
            ShortDescription: '',
            LongDescription: '',
            AcceptBtn: '',
            CancelBtn: '',
            extraPlatesText: '',
            extraPlatesDivider: '',
            PAY_PLAN_TOOLTIP_LINK: '',
            PAY_PLAN_TOOLTIP_TEXT: '',
            PAY_PLAN_TOOLTIP_KIOSK_TEXT: ''
        };

        await changesStable(fixture);
    });


    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', () => {
            expect(component.cmsContent).toEqual({
                Title: '',
                ShortDescription: '',
                LongDescription: '',
                AcceptBtn: '',
                CancelBtn: '',
                extraPlatesText: '',
                extraPlatesDivider: '',
                PAY_PLAN_TOOLTIP_LINK: '',
                PAY_PLAN_TOOLTIP_TEXT: '',
                PAY_PLAN_TOOLTIP_KIOSK_TEXT: ''
            });
        });
    });

    describe('acceptButtonClick', () => {

        it('should call dialog.close', async () => {

            await component.acceptButtonClick();
            expect(state.go).toHaveBeenCalledWith(loginStateNames.Login);
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });
    });

    describe('cancelButtonClick', () => {

        it('should call dialog.close', async () => {

            await component.cancelButtonClick();
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });
    });

});
