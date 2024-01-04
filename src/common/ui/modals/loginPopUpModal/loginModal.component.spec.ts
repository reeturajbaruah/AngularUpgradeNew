import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginModalComponent, LoginPopUpInjectionValues } from './loginModal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/angular';
import { StateNames as LoginStateNames } from 'login/constants';
import { CmsUtilService } from 'cms/services';
import { changesStable } from 'testing';

describe('LoginModalComponent tests', () => {

    let fixture: ComponentFixture<LoginModalComponent>;
    let component: LoginModalComponent;
    let dialogData: LoginPopUpInjectionValues;

    let dialog: jasmine.SpyObj<MatDialogRef<LoginModalComponent>>;
    let state: StateService;
    let loginStateNames: LoginStateNames;
    let cmsUtilService: CmsUtilService;

    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            cmsContent: { Title: '', PrimaryContent: '', AcceptButton: '', RejectButton: '' },
            closeImage: { Image: '/Content/icons/pdf.gif' }
        };

        //StateService Mock
        state = jasmine.createSpyObj('state', ['go']);

        loginStateNames = new LoginStateNames();

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValues({
            image: '/Content/icons/pdf.gif',
            alt: '',
            height: '',
            width: ''
        });

        await TestBed
            .configureTestingModule({
                declarations: [
                    LoginModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: StateService, useFactory: () => state },
                    { provide: LoginStateNames, useFactory: () => loginStateNames },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(LoginModalComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = { Title: '', PrimaryContent: '', AcceptButton: '', RejectButton: '' };
        component.closeImage = { Image: '/Content/icons/pdf.gif' };
        component.cmsImage = { image: '', alt: '', height: '', width: '' };

        await changesStable(fixture);
    });


    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', () => {
            expect(component.cmsContent).toEqual({ Title: '', PrimaryContent: '', AcceptButton: '', RejectButton: '' });
            expect(component.cmsImage).toEqual({ image: '/Content/icons/pdf.gif', alt: '', height: '', width: '' });
        });
    });

    describe('acceptButtonClick', () => {

        it('should call state.go and call dialog.close', async () => {

            await component.acceptButtonClick();
            expect(state.go).toHaveBeenCalledWith(loginStateNames.Login);
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });

    });

    describe('close', () => {

        it('should call matDialog.open() 1 times', () => {

            component['close']();
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });

    });

});
