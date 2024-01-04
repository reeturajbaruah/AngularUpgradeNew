import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WizardComponent } from './wizard.component';
import { WizardStateResolverFactory } from './wizardStateResolver.factory';
import { IWizardStateResolverService } from 'common/interfaces';

describe('wizard ui component', () => {

    let fixture: ComponentFixture<WizardComponent>;
    let component: WizardComponent;
    let factory: jasmine.SpyObj<WizardStateResolverFactory>;
    let service: jasmine.SpyObj<IWizardStateResolverService>;

    beforeEach(async () => {
        service = jasmine.createSpyObj('fakeService', ['nextState', 'previousState', 'cancelState', 'getUiOrder']);
        
        factory = jasmine.createSpyObj('fakeFactory', ['getService']);
        factory.getService.and.returnValue(service);

        await TestBed
            .configureTestingModule({
                declarations: [WizardComponent],
                imports: [FlexLayoutModule],
                providers: [
                    { provide: WizardStateResolverFactory, useFactory: ()=> factory}
                ]
            })            
            .compileComponents();

        fixture = TestBed.createComponent(WizardComponent);
        component = fixture.debugElement.componentInstance; 
        component.input = null;       
        fixture.detectChanges();
    });

    describe('link + button presses', () => {

        it('calls state resolver for next btn', async () => {
            await component.gotoNextState();
            expect(service.nextState).toHaveBeenCalledWith(component.next, null);
        });

        it('calls state resolver for prev btn', async () => {
            await component.gotoPreviousState();
            expect(service.previousState).toHaveBeenCalledWith(component.previous, null);
        });

        it('calls state resolver for cancel btn', async () => {
            await component.gotoCancelState();
            expect(service.cancelState).toHaveBeenCalledWith(component.cancel, null);            
        });
    });

    describe('reverseOrderInternal', () => {

        it('passes reverse through if uiOrder not set', () => {

            (service.getUiOrder as jasmine.Spy).and.returnValue(null);

            component.reverseOrder = false;
            expect(component.reverseOrderInternal).toBeFalse();

            component.reverseOrder = true;
            expect(component.reverseOrderInternal).toBeTrue();
        });

        it('overrides reverse - normal', () => {

            (service.getUiOrder as jasmine.Spy).and.returnValue('normal');

            component.reverseOrder = false;
            expect(component.reverseOrderInternal).toBeFalse();

            component.reverseOrder = true;
            expect(component.reverseOrderInternal).toBeFalse();

        });

        it('overrides reverse - reverse', () => {


            (service.getUiOrder as jasmine.Spy).and.returnValue('reverse');

            component.reverseOrder = false;
            expect(component.reverseOrderInternal).toBeTrue();

            component.reverseOrder = true;
            expect(component.reverseOrderInternal).toBeTrue();

        });

    });
});
