import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { changesStable } from 'testing/utilities';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyComponent } from './currency.component';

describe('address-display component', () => {

    let fixture: ComponentFixture<CurrencyComponent>;
    let component: CurrencyComponent;

    beforeEach((() => {

        TestBed
            .configureTestingModule({
                declarations: [CurrencyComponent],
                imports: [FormsModule, CommonModule]
            })
            .compileComponents();

        fixture = TestBed.createComponent(CurrencyComponent);
        component = fixture.debugElement.componentInstance;

        fixture.detectChanges();
    }));

    describe('canary', () => {
        it('can create instance', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {
        it('adds translate-skip to host element', () => {
            const hostElement = fixture.debugElement.nativeElement as HTMLElement;

            expect(hostElement.getAttribute('translation-skip')).toBeDefined();
        });
    });

    describe('value', () => {
        it('can display the $$ monies $$', async () => {

            component.value = 1234.56;

            await changesStable(fixture);

            const hostElement = fixture.debugElement.nativeElement as HTMLElement;

            const actual = (hostElement.innerText || '').trim();

            expect(actual).toBe('$1,234.56');
        });
    });
});
