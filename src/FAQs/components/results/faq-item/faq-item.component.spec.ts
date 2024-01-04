import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqItemComponent } from './faq-item.component';

describe('FAQ item component', () => {

    let fixture: ComponentFixture<FaqItemComponent>;
    let component: FaqItemComponent;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    FaqItemComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FaqItemComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should define component', () => {
        expect(component).toBeDefined();
    });

});
