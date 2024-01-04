import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { CardTypePipe } from './cardType.pipe';
import { CreditCardTypeService } from 'common/billing';

@Component({
    template: '<div>{{ cardCode | cardType }}</div>'
})
class CardTypePipeHostComponent {
    cardCode: string;
}
describe('CardTypePipe', () => {

    let pipe: CardTypePipe;

    const creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);
    creditCardTypeService.cardCodeToName.and.returnValue('Visa');

    beforeEach((() => {
        pipe = new CardTypePipe(creditCardTypeService);
    }));

    it('canary', () => {
        expect(true).toBe(true);
    });

    it('should display Visa when passed V', () => {

        TestBed
            .configureTestingModule({
                declarations: [CardTypePipe, CardTypePipeHostComponent],
                providers: [
                    { provide: CreditCardTypeService, useFactory: () => creditCardTypeService }
                ]
            })
            .compileComponents();

        const fixture = TestBed.createComponent(CardTypePipeHostComponent);
        const debugElement = fixture.debugElement;
        const component = fixture.componentInstance;

        component.cardCode = 'v';
        fixture.detectChanges();

        const div: HTMLDivElement = debugElement
            .query(By.css('div'))
            .nativeElement;

        const transformedDate = div.textContent.trim();

        expect(transformedDate).toBe('Visa');
        expect(creditCardTypeService.cardCodeToName).toHaveBeenCalledWith('v');
        expect(creditCardTypeService.cardCodeToName).toHaveBeenCalledTimes(1);

    });

});
