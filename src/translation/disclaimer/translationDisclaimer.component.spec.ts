import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TranslationDisclaimerComponent } from 'translation/disclaimer/TranslationDisclaimer.component';

describe('component: TranslationDisclaimer', () => {

    let fixture: ComponentFixture<TranslationDisclaimerComponent>;
    let component: TranslationDisclaimerComponent;


    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [
                    TranslationDisclaimerComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: []
            })
            .compileComponents();


        fixture = TestBed.createComponent(TranslationDisclaimerComponent);
        component = fixture.debugElement.componentInstance;
    });

    beforeEach(() => {
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

});
