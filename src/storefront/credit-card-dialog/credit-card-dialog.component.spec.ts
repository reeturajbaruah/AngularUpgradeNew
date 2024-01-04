import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { } from 'jasmine';
import { BehaviorSubject } from 'rxjs';
import { CmsUtilService } from '../../cms/services';
import { StorefrontService } from '../services/storefront.service';
import { CreditCardDialogComponent } from './credit-card-dialog.component';
import { CreditCardPromptEnum } from 'common/ui';
import { cmsIds } from '../constants';

describe('component: CreditCardDialog - storefront', () => {

    let fixture: ComponentFixture<CreditCardDialogComponent>;
    let component: CreditCardDialogComponent;
    let storefrontService: jasmine.SpyObj<StorefrontService>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let mockInjectedData: jasmine.SpyObj<any>;
    let dialogRef: jasmine.SpyObj<MatDialogRef<CreditCardDialogComponent>>;

    beforeEach(async () => {

        storefrontService = jasmine.createSpyObj('StorefrontService', ['delay']);
        cmsUtilService = jasmine.createSpyObj('CmsUtylService', ['parseAllImageAttributes']);
        mockInjectedData = jasmine.createSpyObj('injectedData', [], {
            closeDialog: new BehaviorSubject<boolean>(false),
            cmsData: null,
            isSnapPay: false,
            state: null
        });
        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    CreditCardDialogComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule
                ],
                providers: [
                    { provide: StorefrontService, useFactory: () => storefrontService },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: MAT_DIALOG_DATA, useValue: mockInjectedData },
                    { provide: MatDialogRef, useFactory: () => dialogRef }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CreditCardDialogComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });


    describe('ngOnInit', () => {
        it('shold call delay ', () => {
            spyOn(component, 'call');

            //Act 
            component.ngOnInit();

            //Assert
            expect(storefrontService.delay).toHaveBeenCalled();
            expect(component.call).not.toHaveBeenCalled();
        });

        it('shold call call(close)', () => {
            spyOn(component, 'call');

            //Act 
            component.ngOnInit();

            mockInjectedData.closeDialog.next(true);

            //Assert
            expect(storefrontService.delay).toHaveBeenCalled();
            expect(component.call).toHaveBeenCalledWith('close');
        });
    });

    describe('call', () => {
        it('should call close', async () => {
            storefrontService.delay.and.resolveTo();
            dialogRef.close.and.returnValue();

            await component.call('test');

            expect(storefrontService.delay).toHaveBeenCalled();
            expect(dialogRef.close).toHaveBeenCalledWith('test');
        });
    });

    describe('closeIcon', () => {
        it('should return obj as string', () => {
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'cmsData').get as jasmine.Spy).and.returnValue([{ ItemID: cmsIds.CloseModalImgId.toLowerCase() }]);

            const closeIcon = component.closeIcon;

            expect(closeIcon).toEqual({ ItemID: cmsIds.CloseModalImgId.toLowerCase() });
        });
    });

    describe('promptMessage', () => {
        it('should return string', () => {
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'cmsData').get as jasmine.Spy).and.returnValue([{ ItemID: cmsIds.swipePromptId.toLowerCase(), Message: 'test' }]);

            const promptMessage = component.promptMessage;

            expect(promptMessage).toEqual('test');
        });
    });

    describe('promptImage', () => {
        beforeEach(() => {
            cmsUtilService.parseAllImageAttributes.and.returnValue({} as any);
        });

        it('should return object', () => {
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'isSnapPay').get as jasmine.Spy).and.returnValue(true);
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'cmsData').get as jasmine.Spy).and.returnValue([{ ItemID: cmsIds.SnappayKioskSwipePromptAltId.toLowerCase(), Image: '' }]);

            const promptImage = component.promptImage;

            expect(promptImage).toEqual({});
        });

        it('should call parseAllImageAttributes', () => {
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'isSnapPay').get as jasmine.Spy).and.returnValue(false);
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'cmsData').get as jasmine.Spy).and.returnValue([{ ItemID: cmsIds.swipePromptAltId.toLowerCase(), Image: '' }]);

            const promptImage = component.promptImage;

            expect(cmsUtilService.parseAllImageAttributes).toHaveBeenCalled();
        });
    });

    describe('successText', () => {
        it('should return string', () => {
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'cmsData').get as jasmine.Spy).and.returnValue([{ ItemID: cmsIds.swipeSuccessId.toLowerCase(), Title: 'test' }]);

            const successText = component.successText;

            expect(successText).toEqual('test');
        });
    });

    describe('failureCms', () => {
        it('should return object', () => {
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'cmsData').get as jasmine.Spy).and.returnValue([{ ItemID: cmsIds.swipeFailureId.toLowerCase(), Title: 'test' }]);

            const failureCms = component.failureCms;

            expect(failureCms).toEqual({ ItemID: cmsIds.swipeFailureId.toLowerCase(), Title: 'test' });
        });
    });

    describe('state', () => {
        it('should return wait', () => {
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'state').get as jasmine.Spy).and.returnValue(CreditCardPromptEnum.Wait);

            const state = component.state;

            expect(state).toEqual('wait');
        });

        it('should return success', () => {
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'state').get as jasmine.Spy).and.returnValue(CreditCardPromptEnum.Success);

            const state = component.state;

            expect(state).toEqual('success');
        });

        it('should return failure', () => {
            (Object.getOwnPropertyDescriptor(mockInjectedData, 'state').get as jasmine.Spy).and.returnValue(CreditCardPromptEnum.Failure);

            const state = component.state;

            expect(state).toEqual('failure');
        });
    });
});
