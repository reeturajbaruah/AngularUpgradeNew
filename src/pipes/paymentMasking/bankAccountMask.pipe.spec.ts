import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { BankAccountMaskPipe } from './bankAccountMask.pipe';

@Component({
    template: '{{ bankAccountNumber | maskBankAccount }}'
})
class BankAccountMaskPipeHostComponent {
    bankAccountNumber: string;
}

describe('BankAccountMaskPipe', () => {

    let pipe: BankAccountMaskPipe;
    let component: BankAccountMaskPipeHostComponent;
    let fixture: ComponentFixture<BankAccountMaskPipeHostComponent>;

    beforeEach((() => {
        pipe = new BankAccountMaskPipe();

        TestBed
            .configureTestingModule({
                declarations: [BankAccountMaskPipe, BankAccountMaskPipeHostComponent],
                providers: [
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(BankAccountMaskPipeHostComponent);
        component = fixture.componentInstance;

    }));

    it('canary', () => {
        expect(pipe).toBeDefined();
    });

    it('should display mask', () => {

        component.bankAccountNumber = '123456789';
        fixture.detectChanges();

        const host = fixture.debugElement.nativeElement as HTMLElement;

        const acountNumber = host.textContent.trim();

        expect(acountNumber).toBe('**** 6789');
    });

});
