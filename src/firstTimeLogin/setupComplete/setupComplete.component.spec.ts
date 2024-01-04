import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { FirstTimeLoginSetupCompleteComponent } from './setupComplete.component';
import { FirstTimeLoginFrameComponent } from '../frame/frame.component';

describe('FirstTimeLoginSetupCompleteComponent', () => {

    let fixture: ComponentFixture<FirstTimeLoginSetupCompleteComponent>;
    let component: FirstTimeLoginSetupCompleteComponent;
    let state: StateService;
    let parent: FirstTimeLoginFrameComponent;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    FirstTimeLoginSetupCompleteComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FirstTimeLoginSetupCompleteComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

});
