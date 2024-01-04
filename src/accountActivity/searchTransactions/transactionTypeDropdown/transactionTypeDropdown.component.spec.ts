import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItems } from 'accountActivity/interfaces';
import { } from 'jasmine';
import { TransactionTypeDropdownComponent } from './transactionTypeDropdown.component';

describe('component: TransactionTypeDropdownComponent', () => {

    let fixture: ComponentFixture<TransactionTypeDropdownComponent>;
    let component: TransactionTypeDropdownComponent;

    beforeEach(async () => {
        
        await TestBed
            .configureTestingModule({
                declarations: [
                    TransactionTypeDropdownComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: []
            })
            .compileComponents();
        fixture = TestBed.createComponent(TransactionTypeDropdownComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });


    ['a'].forEach(event => {

        it(`should emit choiceSelectedsChange`, () => {

            //Assemble
            component.selectedTransaction = event as any;
            spyOn(component.searchTransitionChange, 'emit').and.returnValue(null);

            //Act
            component.updateValue();

            //Assert
            expect(component.searchTransitionChange.emit).toHaveBeenCalledTimes(1);
        });
    });


    describe('ngOnChanges', () => {

        it('should set default selection value', async () => {
            const listItem1 = { hierarchy: 0, text: 'fake1', value: 'fake11' } as ListItems;
            const listItem2 = { hierarchy: 1, text: 'fake2', value: 'fake22' } as ListItems;
            component.searchTransactionData = [listItem2, listItem1];

            //act
            component.ngOnChanges();

            //assert
            expect(component.selectedTransaction).toEqual(listItem2);
   
        });

    });


}); 
