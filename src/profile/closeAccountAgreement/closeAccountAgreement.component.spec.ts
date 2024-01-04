import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { CloseAccountAgreementComponent } from './closeAccountAgreement.component';
import { CloseAccountFrameComponent } from '../closeAccountFrame/frame.component';
import { StateService } from '@uirouter/core';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

describe('component: close-account-agreement', () => {

    let fixture: ComponentFixture<CloseAccountAgreementComponent>;
    let component: CloseAccountAgreementComponent;
    let parent: CloseAccountFrameComponent;
    let stateService: StateService;
    let webStorage: any;

    beforeEach(async () => {
        parent = jasmine.createSpyObj('parent', ['onCloseContinue']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        webStorage = jasmine.createSpyObj('webStorage', ['removeEntry', 'setKeyValue']);
        await TestBed
            .configureTestingModule({
                declarations: [
                    CloseAccountAgreementComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CloseAccountFrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: WebStorageService, useFactory: () => webStorage }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CloseAccountAgreementComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = {
            ShortDescription: 'test short description',
            TitleAgreement: 'test title agreement',
            accountClosureAgreement: 'test account closure agreement',
            BtnDecline: 'decline',
            BtnAccept: 'accept',
            TitlePretext: 'test title pretext'
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should call removeEntry', () => {
            component.ngOnInit();

            expect(webStorage.removeEntry).toHaveBeenCalledTimes(1);
            expect(webStorage.removeEntry).toHaveBeenCalledWith('closeAgreed');
        });

        it('should set accountClosureAgreement to ShortDescription', () => {
            component.ngOnInit();

            expect(component.cmsContent.accountClosureAgreement).toEqual(component.cmsContent.ShortDescription);
        });

        it('should set parent stepNum to 1', () => {
            component.ngOnInit();

            expect(parent.stepNum).toBe(1);
        });
    });

    describe('onAccept', () => {
        it('should setKeyValue', () => {
            parent.closeAccountRefund = { currentBalance: 0 } as any;
            component.onAccept({ name: 'test.state.name' });

            expect(webStorage.setKeyValue).toHaveBeenCalledTimes(1);
            expect(webStorage.setKeyValue).toHaveBeenCalledWith('closeAgreed', true);
        });

        it('should call onCloseContinue if currentBalance is 0', () => {
            parent.closeAccountRefund = { currentBalance: 0 } as any;
            component.onAccept({ name: 'test.state.name' });

            expect(parent.onCloseContinue).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledTimes(0);
        });

        it('should call state.go if currentBalance is not 0', () => {
            parent.closeAccountRefund = { currentBalance: 1 } as any;
            component.onAccept({ name: 'test.state.name' });

            expect(parent.onCloseContinue).toHaveBeenCalledTimes(0);
            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith('test.state.name');
        });
    });

    describe('onDecline', () => {
        it('should call stateService.go', () => {
            component.onDecline({ name: 'onDecline.state.name' });

            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith('onDecline.state.name');

        });
    });
});
