import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AETComponent } from './aet.component';
import { AetFacadeService } from './services/facade/aet-facade.service';
import { PipesModule } from 'pipes/module';
import { of } from 'rxjs';

describe('AetHeaderComponent', () => {
    let component: AETComponent;
    let fixture: ComponentFixture<AETComponent>;

    let aetFacade: jasmine.SpyObj<AetFacadeService>;

    beforeEach(async () => {

        aetFacade = jasmine.createSpyObj('aetFacade', ['getData']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AETComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: AetFacadeService, useFactory: () => aetFacade }

                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(AETComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should check date are initialized', fakeAsync(() => {
            component.faqSectionOverview= {Children:[{Query:{Results:[]}}]} as any;
            component.faqSectionChanges= {Children:[{Query:{Results:[]}}]} as any;
            component.faqSectionBenefits= {Children:[{Query:{Results:[]}}]} as any;
            const mockResponse = {
                header: 'header',
                signage: 'signage',
                tollPolicyRoadWay: 'tollPolicyRoadWay',
                faq: 'faq'
            } as any;
            aetFacade.getData.and.returnValue(of(mockResponse));

            component.ngOnInit();

            tick();
            expect(aetFacade.getData).toHaveBeenCalled();
            expect(component.data).toEqual(mockResponse);
            expect(component.header).toEqual(mockResponse.header);
            expect(component.signage).toEqual(mockResponse.signage);
            expect(component.faq).toEqual(mockResponse.faq);
            expect(component.faqOverviewItems).toEqual([]);
            expect(component.faqChangesItems).toEqual([]);
            expect(component.faqBenefitsItems).toEqual([]);
        }));
    });

});
