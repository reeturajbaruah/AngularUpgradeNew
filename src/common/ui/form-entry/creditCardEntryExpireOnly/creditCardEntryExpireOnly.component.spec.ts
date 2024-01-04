

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CreditCardTypeService, ExpirationDateService } from 'common/billing';
import { CreditCardDetails } from 'common/models';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { changesStable, createFormWrap, TestingModule } from 'testing';
import { ValidationModule } from 'validation/module';
import { CreditCardEntryExpireOnlyComponent } from './creditCardEntryExpireOnly.component';

describe('component: credit-card-entry-expire-only', () => {

    let expirationDateService: jasmine.SpyObj<ExpirationDateService>;
    let momentService;
    let creditCard: CreditCardDetails;
    let creditCardTypeService: jasmine.SpyObj<any>;

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

        momentService = {
            moment: {
                format: () => { },
                months: () => ['month1']
            }
        };

        spyOn(momentService.moment, 'format');

        creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);
        creditCardTypeService.cardCodeToName.and.returnValue('CARDTYPE');

        await TestBed
            .configureTestingModule({
                declarations: [CreditCardEntryExpireOnlyComponent],
                imports: [FormsModule, ValidationModule, TestingModule, FlexLayoutModule,
                    MatFormFieldModule, MatSelectModule, PipesModule],
                providers: [
                    { provide: ExpirationDateService, useFactory: () => expirationDateService },
                    { provide: CreditCardTypeService, useFactory: () => creditCardTypeService }
                ]
            })
            .overrideModule(BrowserDynamicTestingModule, {
                set: {
                    entryComponents: [CreditCardEntryExpireOnlyComponent]
                }
            })
            .compileComponents();
    });

    it('should set the year list', async () => {

        const construct = await createFormWrap(CreditCardEntryExpireOnlyComponent, c => {
            c.creditCard = creditCard;
        });

        const fixture = construct.fixture;
        const component = construct.component;
        const form = construct.form;

        await changesStable(fixture);

        expect(component.yearList).toEqual(['fake year'] as any);
        expect(expirationDateService.getExpirationYearList).toHaveBeenCalledTimes(1);
        expect(expirationDateService.getExpirationYearList).toHaveBeenCalledWith(null, 20);
    });

});
