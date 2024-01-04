import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { EnterVerificationCodeComponent } from './enterVerificationCode.component';
import { PipesModule } from 'pipes/module';
import { FormsModule, NgForm } from '@angular/forms';
import { WebStorageConst } from '../../../constants/webstorage.constants';
import { WindowRef } from '../../../common/module';
import { TwoFAService } from '../../services/2FA.service';
import { ToasterService } from '../../../common/services';
import { TwoFactorAuthSendResponse, TwoFactorAuthVerifyResponse, VerifyCodeCMS } from '../../interfaces';

describe('EnterVerificationCodeComponent', () => {

    let fixture: ComponentFixture<EnterVerificationCodeComponent>;
    let component: EnterVerificationCodeComponent;
    let webStorage: WebStorageConst;
    let windowRef: jasmine.SpyObj<Window>;
    let twoFAService: jasmine.SpyObj<TwoFAService>;
    let toasterService: ToasterService;

    beforeEach(async () => {

        webStorage = new WebStorageConst();
        windowRef = jasmine.createSpyObj('window', ['localStorage']);
        twoFAService = jasmine.createSpyObj('twoFAService', ['sendVerificationCode', 'validateVerificationCode', 'saveDevice']);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    EnterVerificationCodeComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule],
                providers: [
                    { provide: WindowRef, useFactory: () => windowRef },
                    { provide: WebStorageConst, useFactory: () => webStorage },
                    { provide: TwoFAService, useFactory: () => twoFAService },
                    { provide: ToasterService, useFactory: () => toasterService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(EnterVerificationCodeComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsInfo = {
            LongDescription: 'Long',
            SUGGEST_EMAIL: 'email',
            SUGGEST_PHONE: 'phone'
        } as VerifyCodeCMS;
        component.disableWarning = false;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('resendCode', () => {
        it('should call sendVerificationCode', async () => {
            twoFAService.sendVerificationCode.and.returnValue(Promise.resolve({} as TwoFactorAuthSendResponse));

            await component.resendCode();

            expect(twoFAService.sendVerificationCode).toHaveBeenCalled();
        });
    });

    describe('tryAnotherWay', () => {
        it(`should emit for tryAnotherWay`, async () => {
            //Assemble
            spyOn(component.tryAnotherWayEmit, 'emit').and.returnValue(null);

            //Act
            component.tryAnotherWay();

            //Assert
            expect(component.tryAnotherWayEmit.emit).toHaveBeenCalled();
        });
    });

    describe('verify', () => {
        it('should call validateVerificationCode and emit on success', async () => {
            twoFAService.validateVerificationCode.and.returnValue(Promise.resolve({ isVerified: true } as TwoFactorAuthVerifyResponse));
            spyOn(component.verifyEmit, 'emit').and.returnValue(null);

            await component.verify();

            expect(twoFAService.validateVerificationCode).toHaveBeenCalled();
            expect(component.verifyEmit.emit).toHaveBeenCalled();
        });

        it('should call validateVerificationCode and not emit on failure', async () => {
            twoFAService.validateVerificationCode.and.returnValue(Promise.resolve(null));
            spyOn(component.verifyEmit, 'emit').and.returnValue(null);

            await component.verify();

            expect(twoFAService.validateVerificationCode).toHaveBeenCalled();
            expect(component.verifyEmit.emit).not.toHaveBeenCalled();
        });

        it('should call toasterService.show and not emit on failure', waitForAsync(() => {
            twoFAService.validateVerificationCode.and.returnValue(Promise.resolve(null));

            spyOn(component.verifyEmit, 'emit').and.returnValue(null);

            component.verify().then(() => {
                expect(toasterService.show).toHaveBeenCalled();
                expect(component.verifyEmit.emit).not.toHaveBeenCalled();
            });
        }));
    });
});
