import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqResultsComponent } from './faq-results.component';

describe('FAQ results component', () => {

    let fixture: ComponentFixture<FaqResultsComponent>;
    let component: FaqResultsComponent;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    FaqResultsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FaqResultsComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should define component', () => {
        expect(component).toBeDefined();
    });

});
