import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WizardStateResolverFactory } from './wizardStateResolver.factory';
import { IWizardStateResolverService } from 'common/interfaces';
import { Component } from '@angular/core';

import { CommonModule } from 'common/module';
import { changesStable } from 'testing/utilities';
import { WizardComponent } from './wizard.component';

@Component({
    selector: 'WizardUiNextDirectiveTestComponent',
    template: `<span wizard-next>continue</span>`
})
class WizardUiNextDirectiveTestComponent {
}

describe('wizard ui next directive', () => {

    let fixture: ComponentFixture<WizardUiNextDirectiveTestComponent>;
    let factory: jasmine.SpyObj<WizardStateResolverFactory>;
    let service: jasmine.SpyObj<IWizardStateResolverService>;
    let component: WizardComponent;

    beforeEach(async () => {
        service = jasmine.createSpyObj('fakeService', ['handleNextState', 'handlePreviousState', 'handleCancelState', 'getNextStateTemplate', 'getUiOrder']);
        factory = jasmine.createSpyObj('fakeFactory', ['getService']);
        factory.getService.and.returnValue(service);

        component = { } as any;

        await TestBed
            .configureTestingModule({
                declarations: [WizardUiNextDirectiveTestComponent],
                imports: [FlexLayoutModule, CommonModule],
                providers: [
                    { provide: WizardStateResolverFactory, useFactory: () => factory },
                    { provide: WizardComponent, useFactory: () => component }

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(WizardUiNextDirectiveTestComponent);
    });

    describe('ngOninit', () => {

        it('does not override next template', async () => {

            await changesStable(fixture);

            const innerText = (fixture.debugElement.nativeElement as HTMLElement).innerText;

            expect(innerText).toBe('continue');
        });

        it('does override next template', async () => {

            (service.getNextStateTemplate as jasmine.Spy).and.returnValue('proceed');

            await changesStable(fixture);

            const innerText = (fixture.debugElement.nativeElement as HTMLElement).innerText;

            expect(innerText).toBe('proceed');

        });

    });

});
