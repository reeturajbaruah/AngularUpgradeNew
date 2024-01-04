import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, EventEmitter } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { SelectBillingAddressComponent } from './selectBillingAddress.component';
import { DialogService } from '../../services';
import { MatDialogRef } from '@angular/material/dialog';
import { IMailingInfo } from 'common/models';
import { NewBillingAddressModalComponent, NewBillingAddressInjectionValues } from '../modals/newBillingAddressModal/newBillingAddressModal.component';

export enum INewAddressFlag {
    Empty = 0,
    Updated = 1
}
export enum IAddressCheckBoxFlag {
    Default = 'Default',
    New = 'New'
}

describe('SelectBillingAddressComponent', () => {

    let fixture: ComponentFixture<SelectBillingAddressComponent>;
    let component: SelectBillingAddressComponent;
    let dialogService: DialogService;
    beforeEach(async () => {

        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    SelectBillingAddressComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule],
                providers: [
                    NgForm,
                    { provide: DialogService, useFactory: () => dialogService },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(SelectBillingAddressComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('FORM', () => {
        it('form shoud return parent form value FLASE', async () => {
            component.form = {
                value: {
                    name: 'Hello',
                    category: 'World'
                },
                submitted: false
            } as NgForm;
            //Act
            const result = component.submitted;

            //Assert
            expect(result).toEqual(false);
        });

        it('form shoud return parent form value TRUE', async () => {
            component.form = {
                value: {
                    name: 'Hello',
                    category: 'World'
                },
                submitted: true
            } as NgForm;;
            //Act
            const result = component.submitted;

            //Assert
            expect(result).toEqual(true);
        });
    });


    describe('defaultAddressUpdate', () => {
        it('checkBoxFlag changes to Default if it is New', async () => {
            component.checkBoxFlag = IAddressCheckBoxFlag.New;

            component.defaultAddressUpdate();

            expect(component.checkBoxFlag).toEqual(IAddressCheckBoxFlag.Default);
        });

        it('checkBoxFlag stays Default if it is Default', async () => {
            component.checkBoxFlag = IAddressCheckBoxFlag.Default;

            component.defaultAddressUpdate();

            expect(component.checkBoxFlag).toEqual(IAddressCheckBoxFlag.Default);
        });
    });

    describe('newAddressUpdate', () => {
        it('openBillingAddressModal is called if newAddressFlag is empty', async () => {
            //Assemble
            const mockNewAddress = {} as IMailingInfo;

            component.newAddressFlag = INewAddressFlag.Empty;
            const event = new EventEmitter<IMailingInfo>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());

            //Act
            component.newAddressUpdate();

            event.emit(mockNewAddress);
            event.complete();

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);
        });
    });

    describe('editNewAddress', () => {
        let mockNewAddress: IMailingInfo;

        let event;
        beforeEach(() => {
            mockNewAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: true,
                address1: 'test101',
                address2: null,
                city: 'houston',
                state: 'TX',
                zip: '77777',
                plus4: null,
                country: 'USA'
            } as IMailingInfo;
            component.newAddressFlag = INewAddressFlag.Empty;

            event = new EventEmitter<IMailingInfo>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());


        });
        it('not calling dialog service if newAddress is being process', async () => {
            //Assemble
            component.newAddressProcessing = true;

            //Act
            const promise = component.editNewAddress();

            event.emit(mockNewAddress);
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(0);
        });

        it('should call openSliderCentered', async () => {
            //Assemble
            const expectedData = {
                mailingInfo: component.newAddress,
                stateList: component.statesList,
                countryList: component.countriesList,
                isShowPersonalInfo: false,
                addressTitle: 'Billing Address'
            };
            component.newAddressProcessing = false;

            //Act
            const promise = component.editNewAddress();
            event.emit(mockNewAddress);
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);
            expect(dialogService.openSliderCentered).toHaveBeenCalledWith(NewBillingAddressModalComponent, expectedData, { title: 'Enter New Address' });
        });

        it('should set newAddressProcessing to true and back to false', async () => {
            component.newAddressProcessing = false;

            const promise = component.editNewAddress();
            expect(component.newAddressProcessing).toBeTruthy();
            event.emit(mockNewAddress);
            event.complete();
            await promise;

            expect(component.newAddressProcessing).toBeFalsy();
        });

        it('should set newAddress if result is defined', async () => {
            spyOn(component.newAddressChange, 'emit');
            component.newAddressProcessing = false;

            const promise = component.editNewAddress();
            event.emit({ mailingInfo: mockNewAddress } as NewBillingAddressInjectionValues);
            event.complete();
            await promise;

            expect(component.newAddress).toBe(mockNewAddress);
            expect(component.newAddressChange.emit).toHaveBeenCalledTimes(1);
        });

        it('should set newAddress if result is defined', async () => {
            spyOn(component.newAddressChange, 'emit');
            component.newAddressProcessing = false;
            component.newAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: true,
                address1: 'temptest',
                address2: null,
                city: 'houston',
                state: 'TX',
                zip: '88888',
                plus4: null,
                country: 'USA'
            } as IMailingInfo;

            const promise = component.editNewAddress();
            event.emit();
            event.complete();
            await promise;

            expect(component.newAddress).toEqual({
                firstName: null,
                lastName: null,
                internationalAddress: true,
                address1: 'temptest',
                address2: null,
                city: 'houston',
                state: 'TX',
                zip: '88888',
                plus4: null,
                country: 'USA'
            });
        });

    });


    describe('setNewAddress', () => {
        it('return empty object for new entry', async () => {
            //Assemble
            const mockNewAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: null,
                address2: null,
                city: null,
                state: 'TX',
                zip: null,
                plus4: null,
                country: 'USA'
            } as IMailingInfo;
            component.newAddressFlag = INewAddressFlag.Empty;

            const result = component.setNewAddress();

            expect(result).toEqual(mockNewAddress);
        });

        it('return newAddress object for editing entry', async () => {
            //Assemble
            component.newAddress  = {
                firstName: null,
                lastName: null,
                internationalAddress: true,
                address1: 'test101',
                address2: null,
                city: 'houston',
                state: 'TX',
                zip: '77777',
                plus4: null,
                country: 'USA'
            } as IMailingInfo;


            component.newAddressFlag = INewAddressFlag.Updated;

            const result = component.setNewAddress();

            //expect(result).not.toEqual(mockNewAddress);
            expect(result.internationalAddress).toEqual(component.newAddress.internationalAddress);
            expect(result.city).toEqual(component.newAddress.city);
            expect(result.state).toEqual(component.newAddress.state);
            expect(result.zip).toEqual(component.newAddress.zip);
            expect(result.country).toEqual(component.newAddress.country);

        });
    });
    
    describe('openBillingAddressModal', () => {
        let mockNewAddress: IMailingInfo;

        let event;
        beforeEach(() => {
            mockNewAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: true,
                address1: 'test101',
                address2: null,
                city: 'houston',
                state: 'TX',
                zip: '77777',
                plus4: null,
                country: 'USA'
            } as IMailingInfo;
            component.newAddressFlag = INewAddressFlag.Empty;


            event = new EventEmitter<IMailingInfo>();

            (dialogService.openSliderCentered as jasmine.Spy).and.returnValue(event.toPromise());
        });
        it('not calling dialog service if newAddress is being process', async () => {
            //Assemble
            component.newAddressProcessing = true;

            //Act
            const promise = component.openBillingAddressModal();

            event.emit(mockNewAddress);
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(0);
        });

        it('should call openSliderCentered', async () => {
            //Assemble
            component.newAddressFlag = INewAddressFlag.Empty;
            const mockNewAddressFromFunction = {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: null,
                address2: null,
                city: null,
                state: 'TX',
                zip: null,
                plus4: null,
                country: 'USA'
            };
            const expectedData = {
                mailingInfo: mockNewAddressFromFunction,
                stateList: component.statesList,
                countryList: component.countriesList,
                isShowPersonalInfo: false,
                addressTitle: 'Billing Address'
            };
            component.newAddressProcessing = false;

            //Act
            const promise = component.openBillingAddressModal();
            event.emit(mockNewAddress);
            event.complete();
            await promise;

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);
            expect(dialogService.openSliderCentered).toHaveBeenCalledWith(NewBillingAddressModalComponent, expectedData, { title: 'Enter New Address' });
        });

        it('should set newAddressProcessing to true and back to false', async () => {
            component.newAddressProcessing = false;

            const promise = component.openBillingAddressModal();
            expect(component.newAddressProcessing).toBeTruthy();
            event.emit(mockNewAddress);
            event.complete();
            await promise;

            expect(component.newAddressProcessing).toBeFalsy();
        });

        it('should set newAddress if result is defined', async () => {
            spyOn(component.newAddressChange, 'emit');
            component.newAddressProcessing = false;

            const promise = component.openBillingAddressModal();
            event.emit({ mailingInfo: mockNewAddress } as NewBillingAddressInjectionValues);
            event.complete();
            await promise;

            expect(component.newAddress).toBe(mockNewAddress);
            expect(component.newAddressChange.emit).toHaveBeenCalledTimes(1);
        });

        it('should set newAddress if result is defined', async () => {
            spyOn(component.newAddressChange, 'emit');
            component.newAddressProcessing = false;
            component.newAddress = {
                firstName: null,
                lastName: null,
                internationalAddress: true,
                address1: 'temptest',
                address2: null,
                city: 'houston',
                state: 'TX',
                zip: '88888',
                plus4: null,
                country: 'USA'
            } as IMailingInfo;

            const promise = component.openBillingAddressModal();
            event.emit();
            event.complete();
            await promise;

            expect(component.newAddress).toEqual({
                firstName: null,
                lastName: null,
                internationalAddress: true,
                address1: 'temptest',
                address2: null,
                city: 'houston',
                state: 'TX',
                zip: '88888',
                plus4: null,
                country: 'USA'
            });
        });

    });

});
