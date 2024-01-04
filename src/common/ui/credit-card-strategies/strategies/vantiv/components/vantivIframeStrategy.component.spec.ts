import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CreditCardDetails } from 'common/models';
import { WindowRef } from 'common/providers';
import { CreditCardHelperService, CreditCardStateService } from 'common/ui/credit-card-strategies/services';
import { } from 'jasmine';
import { createFormWrap, TestingModule } from 'testing';
import { ValidationModule } from 'validation/module';
import { VantivIFrameService } from '../services/vantivIframe.service';
import { VantivIFrameStrategyComponent } from './vantivIframeStrategy.component';


describe('component: vantivIframe-strategy', () => {

    let fixture: ComponentFixture<VantivIFrameStrategyComponent>;
    let component: VantivIFrameStrategyComponent;
    let windowMock: jasmine.SpyObj<Window>;
    let iFrameService;
    let form: NgForm;
    let creditCardStateServiceSpy: jasmine.SpyObj<CreditCardStateService>;
    let creditCardHelperServiceSpy: jasmine.SpyObj<CreditCardHelperService>;

    beforeEach(async () => {

        iFrameService = jasmine.createSpyObj('iframeservice', ['getPaypageRegistrationId', 'isAllEmpty', 'loadIFrame']);
        windowMock = jasmine.createSpyObj('window', ['setInterval', 'clearInterval']);
        (windowMock as any).document = {};

        creditCardHelperServiceSpy = jasmine.createSpyObj('creditCardHelperService', ['maskNumber']);
        creditCardStateServiceSpy = jasmine.createSpyObj('creditCardStateService', ['getState', 'setState']);
      
        await TestBed
            .overrideComponent(VantivIFrameStrategyComponent, {
                set: {
                    providers: [
                        { provide: VantivIFrameService, useFactory: () => iFrameService },
                        NgForm
                    ]
                }
            });

        await TestBed
            .configureTestingModule({
                declarations: [
                    VantivIFrameStrategyComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, ValidationModule, TestingModule, MatFormFieldModule],
                providers: [
                    { provide: WindowRef, useFactory: () => windowMock },
                    { provide: CreditCardHelperService, useFactory: () => creditCardHelperServiceSpy },
                    { provide: CreditCardStateService, useFactory: () => creditCardStateServiceSpy },

                ]
            })
            .overrideModule(BrowserDynamicTestingModule, {
                set: {
                    entryComponents: [VantivIFrameStrategyComponent]
                }
            })
            .compileComponents();

        fixture = TestBed.createComponent(VantivIFrameStrategyComponent);
        component = fixture.debugElement.componentInstance;


    });

    describe('canary', () => {

        it('should pass', () => {

            expect(component).toBeDefined();
        });
    });



    describe('tearDown', () => {

        it('should call clear interval on emptyCreditCardCheck', async () => {

            component['emptyCreditCardCheck'] = 111 as any;

            component.tearDown();

            expect(windowMock.clearInterval).toHaveBeenCalledWith(111);
            expect(windowMock.clearInterval).toHaveBeenCalledTimes(1);
        });
    });

    describe('tokenize', () => {

        beforeEach(async () => {

            spyOn(component, 'setup').and.returnValue(null);
            iFrameService.getPaypageRegistrationId.and.returnValue({
                lastFour: 'fake last four',
                paypageRegistrationId: 'fake paypageRegistrationId',
                type: '#fake type'
            });
            creditCardStateServiceSpy.getState.and.returnValue({
                creditCard: {
                    cardNbr: 'fake last four',
                    paypageRegistrationId: 'fake paypageRegistrationId',
                    cardCode: '#',
                    isNewCard: true
                } as CreditCardDetails,
                nameSuffix: 'test',
                disableValidation: false
            });
            await component.ngOnInit();
        });

        it('should return true when using existingCard', async () => {

            component['useExistingCard'] = true;
            iFrameService.getPaypageRegistrationId.and.callFake(() => fail('getPaypageRegistrationId called'));

            expect(await component.tokenize()).toBe(true);

            expect(iFrameService.getPaypageRegistrationId).toHaveBeenCalledTimes(0);
        });

        it('should return true when getPaypageRegistrationId successful', async () => {

            component['useExistingCard'] = false;

            expect(await component.tokenize()).toBe(true);

            expect(iFrameService.getPaypageRegistrationId).toHaveBeenCalledTimes(1);
        });

        it('should set creditCardDetails', async () => {

            component['useExistingCard'] = false;

            expect(await component.tokenize()).toBe(true);

            expect(component.creditCard).toEqual({
                cardNbr: 'fake last four',
                paypageRegistrationId: 'fake paypageRegistrationId',
                cardCode: '#',
                isNewCard: true
            } as any);
        });

        it('should set parent.cardTypeDisplay to value returned by convertCodeToString', async () => {

            component['useExistingCard'] = false;

            expect(await component.tokenize()).toBe(true);

        });

        it('should call setup', async () => {

            component['useExistingCard'] = false;

            expect(await component.tokenize()).toBe(true);

            expect(component.setup).toHaveBeenCalledTimes(2);
        });

        it('should throw when getPaypageRegistrationId throws', async () => {

            component['useExistingCard'] = false;
            iFrameService.getPaypageRegistrationId.and.callFake(() => { throw new Error('something horrible happened'); });

            await expectAsync(component.tokenize()).toBeRejectedWith(new Error('something horrible happened'));
        });
    });

    describe('setup', () => {

        beforeEach(async () => {
            component.iframeContainer = {
                nativeElement: {
                    querySelector: () => { }
                }
            };
            spyOn(component, 'waitForSelectorToLoad').and.returnValue(Promise.resolve());
            spyOn(component, 'setupIframe').and.returnValue(Promise.resolve());
            creditCardStateServiceSpy.getState.and.returnValue({
                creditCard: {
                    cardNbr: 'fake last four',
                    paypageRegistrationId: 'fake paypageRegistrationId',
                    cardCode: '#',
                    isNewCard: true
                } as CreditCardDetails,
                nameSuffix: 'test',
                disableValidation: false
            });
            await component.ngOnInit();
        });

        it('should call clear interval on emptyCreditCardCheck', async () => {

            component['emptyCreditCardCheck'] = 222;

            await component.setup();

            expect(windowMock.clearInterval).toHaveBeenCalledWith(222);
            expect(windowMock.clearInterval).toHaveBeenCalledTimes(2);
        });

        it('should call iFrameService.loadIFrame with vantiviframerefresh', fakeAsync(async () => {

            await component.setup();
            tick();

            expect(iFrameService.loadIFrame).toHaveBeenCalledTimes(2);
        }));

    });

    describe('setupIframe', () => {

        beforeEach(() => {

            component.iframeContainer = {
                nativeElement: {
                    querySelector: () => { }
                }
            };
            spyOn(component, 'waitForSelectorToLoad').and.returnValue(Promise.resolve());
            windowMock.setInterval.and.returnValue('new fake check' as any);
        });

        it('should set emptyCreditCardCheck to value returned by window.setInterval', async () => {

            await component.setupIframe();

            expect(component['emptyCreditCardCheck']).toBe('new fake check' as any);
        });

        it('should call window.setInterval', async () => {

            await component.setupIframe();

            expect(windowMock.setInterval).toHaveBeenCalledWith(component['canExistingCardBeUsed'], 100);
            expect(windowMock.setInterval).toHaveBeenCalledTimes(1);
        });

    });

});
