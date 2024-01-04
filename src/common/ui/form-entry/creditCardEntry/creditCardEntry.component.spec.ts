import { ChangeDetectorRef, Component, Type, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ExpirationDateService } from 'common/billing';
import { CreditCardDetails } from 'common/models';
import { ToasterService } from 'common/services';
import { CreditCardStateService, FactoryResolverService, KioskResolverService, LitelStrategyComponent, TriPosStrategyComponent, VantivIFrameStrategyComponent } from 'common/ui/credit-card-strategies';
import { } from 'jasmine';
import { TestingModule } from 'testing';
import { ValidationModule } from 'validation/module';
import { CreditCardEntryComponent } from './creditCardEntry.component';


describe('component: credit-card-entry', () => {

    let component: CreditCardEntryComponent;
    let fixture: ComponentFixture<CreditCardEntryComponent>;
    let expirationDateService: jasmine.SpyObj<ExpirationDateService>;
    let momentService;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let creditCard: CreditCardDetails;
    let factoryResolverServiceSpy: jasmine.SpyObj<FactoryResolverService>;
    let creditCardStateServicespy: jasmine.SpyObj<CreditCardStateService>;
    let changeDetectorRefSpy: jasmine.SpyObj<ChangeDetectorRef>;

    beforeEach(async () => {

        creditCard = {
            cardCode: null,
            cardNbr: null,
            expYear: null,
            expMonth: null,
            nameOnCard: null
        };

        expirationDateService = jasmine.createSpyObj('expirationDateService', ['getExpirationYearList', 'isMonthValid', 'isYearValid']);
        expirationDateService.getExpirationYearList.and.returnValue(['fake year'] as any);
        toasterService = jasmine.createSpyObj('toasterService', ['show', 'removeAll']);
        momentService = {
            moment: {
                format: () => { },
                months: () => ['month1']
            }
        };
        spyOn(momentService.moment, 'format');

        factoryResolverServiceSpy = jasmine.createSpyObj('strategyFatoryResolverService', ['resolve']);
        creditCardStateServicespy = jasmine.createSpyObj('creditCardStateService', ['setState', 'getState']);
        changeDetectorRefSpy = jasmine.createSpyObj('cdr', ['detectChanges']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    CreditCardEntryComponent
                ],
                imports: [FormsModule, ValidationModule, TestingModule, FlexLayoutModule, MatFormFieldModule, MatSelectModule],
            })
            .overrideComponent(CreditCardEntryComponent, {
                set: {
                    providers: [
                        { provide: ExpirationDateService, useFactory: () => expirationDateService },
                        { provide: ToasterService, useFactory: () => toasterService },
                        { provide: FactoryResolverService, useFactory: () => factoryResolverServiceSpy },
                        { provide: CreditCardStateService, useFactory: () => creditCardStateServicespy },
                        NgForm,
                        { provide: ChangeDetectorRef, useFactory: () => changeDetectorRefSpy },

                    ]
                }
            })
            .compileComponents();

        fixture = TestBed.createComponent(CreditCardEntryComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('defines the component', async () => {
        expect(component).toBeDefined();
    });

    it('initializes the component', async () => {

        await component.ngOnInit();
        expect(creditCardStateServicespy.setState).toHaveBeenCalled();
    });

    it('initializes the vantiv strategy', async () => {

        spyOn<any>(component, 'createComponent');

        factoryResolverServiceSpy.resolve.and.resolveTo({
            type: VantivIFrameStrategyComponent,
            data: null
        });
      
        await component.ngAfterViewInit();
        expect(component.dynamicStrategy).toEqual(VantivIFrameStrategyComponent);
    });

    it('initializes the tripos strategy', async () => {

        spyOn<any>(component, 'createComponent');

        factoryResolverServiceSpy.resolve.and.resolveTo({
            type: TriPosStrategyComponent,
            data: null
        });
       
        await component.ngAfterViewInit();
        expect(component.dynamicStrategy).toEqual(TriPosStrategyComponent);
    });

    it('initializes the litel strategy', async () => {

        spyOn<any>(component, 'createComponent');

        factoryResolverServiceSpy.resolve.and.resolveTo({
            type: LitelStrategyComponent,
            data: null
        });
      
        await component.ngAfterViewInit();
        expect(component.dynamicStrategy).toEqual(LitelStrategyComponent);
    });

    it('submits the strategies', async () => {
    });




});
