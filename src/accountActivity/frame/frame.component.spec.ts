import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { FrameComponent } from './frame.component';

describe('component: FrameComponent', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;

    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });
});
