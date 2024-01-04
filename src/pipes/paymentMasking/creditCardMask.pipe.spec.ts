import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { } from 'jasmine';
import { CreditCardMaskPipe } from './creditCardMask.pipe';

@Component({
    template: '{{ cardNbr | maskCreditCard:cardCode }}'
})
class CreditCardMaskPipeHostComponent {
    cardNbr: string;
    cardCode: string;
}

describe('CreditCardMaskPipe', () => {

    let pipe: CreditCardMaskPipe;
    let component: CreditCardMaskPipeHostComponent;
    let fixture: ComponentFixture<CreditCardMaskPipeHostComponent>;

    beforeEach((() => {
        pipe = new CreditCardMaskPipe();

        TestBed
            .configureTestingModule({
                declarations: [CreditCardMaskPipe, CreditCardMaskPipeHostComponent],
                providers: [
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(CreditCardMaskPipeHostComponent);
        component = fixture.componentInstance;

    }));

    it('canary', () => {
        expect(pipe).toBeDefined();
    });

    [
        { cardNbr: '1234567890123456', cardType: 'M', mask: '**** 3456' },
        { cardNbr: '1234567890123456', cardType: 'V', mask: '**** 3456' },
        { cardNbr: '1234567890123456', cardType: 'D', mask: '**** 3456' },
        { cardNbr: '1234567890123456', cardType: 'A', mask: '**** 3456' },
        { cardNbr: '1234567890123456', cardType: null, mask: '' },
    ].forEach(({ cardNbr, cardType, mask }) => {

        it('should display mask', () => {

            component.cardNbr = cardNbr;
            component.cardCode = cardType;

            fixture.detectChanges();

            const host = fixture.debugElement.nativeElement as HTMLElement;

            const result = host.textContent.trim();

            expect(result).toBe(mask);
        });

    });

    

});
