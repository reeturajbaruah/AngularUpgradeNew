import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopResultsComponent } from './top-results.component';
import { AccordionService } from 'shared/ui/display/accordion/services/accordion.service';
import { FaqSharedService } from 'FAQs/services/faq-shared/faq-shared.service';
import { of } from 'rxjs';

describe('FAQ Top results component', () => {

    let fixture: ComponentFixture<TopResultsComponent>;
    let component: TopResultsComponent;
    
    let accordionServiceSpy: jasmine.SpyObj<AccordionService>;
    let sharedService: jasmine.SpyObj<FaqSharedService>;

    beforeEach(async () => {
        accordionServiceSpy = jasmine.createSpyObj('accordionService', ['createAccordionItems']);
        sharedService = jasmine.createSpyObj('FaqSharedService', ['isTopResultAccordionOpen$']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    TopResultsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: AccordionService, useFactory: () => accordionServiceSpy },
                    { provide: FaqSharedService, useFactory: () => sharedService }
                ]
            })
            .compileComponents();
            (sharedService as any).isTopResultAccordionOpen$ = of(false);

        fixture = TestBed.createComponent(TopResultsComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should define component', () => {
        expect(component).toBeDefined();
    });

    it('should call accordion service on load', () => {
        component.ngOnInit();
        expect(accordionServiceSpy.createAccordionItems).toHaveBeenCalled();
    });

});
