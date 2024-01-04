import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VehicleCartRowComponent } from './vehicleCartRow.component';
import { CmsReplacementService } from 'cms/services';
import { DialogService } from 'common/services';
import { IEZTag } from 'vehicles/interfaces';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { SiteCoreItem } from 'cms/cms.module';
import { VehiclesManagerService } from 'vehicles/shared';
import { EditPlateComponent } from 'vehicles/ezplate/edit/editPlate.component';

describe('VehicleCartRowComponent', () => {

    let fixture: ComponentFixture<VehicleCartRowComponent>;
    let component: VehicleCartRowComponent;
    let dialogService: DialogService;
    let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;

    beforeEach(async () => {

        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        cmsReplacementService = jasmine.createSpyObj('cmsTextInsertionService', ['transformTemplate']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    VehicleCartRowComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(VehicleCartRowComponent);
        component = fixture.debugElement.componentInstance;

        component.deleteModalCms = {
            Title: 'Title',
            LongDescription: 'So long'
        } as SiteCoreItem;

        component.editModalCms = {
            Title: 'Title',
            LongDescription: 'So long',
            AltTitle: 'Edit Vehicle Information'
        } as SiteCoreItem;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('remove', () => {
        it('should call remove modal', async () => {
            //Assemble
            component.ezTag = {
                licPlate: 'ABC123',
                licState: 'TX'
            } as IEZTag;
            cmsReplacementService.transformTemplate.and.returnValue('Returned Value');
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo({});

            //Act
            await component.remove();

            //Assert
            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(GenericCmsModalComponent, {
                cmsContent: {
                    Title: 'Title',
                    PrimaryContent: 'Returned Value',
                    AcceptBtn: 'DELETE TAG',
                    CancelBtn: 'Cancel',
                }
            }  as GenericCmsModalInjectionValues);
        });

        it('should not emit removeVehicle event if modal is cancelled', async () => {
            // Assemble
            component.ezTag = {
                licPlate: 'ABC123',
                licState: 'TX'
            } as IEZTag;
            cmsReplacementService.transformTemplate.and.returnValue('Returned Value');
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo(null);
            spyOn(component.removeVehicle, 'emit');
    
            // Act
            await component.remove();
    
            // Assert
            expect(component.removeVehicle.emit).not.toHaveBeenCalled();
        });
    });

    describe('edit', () => {
        it('should call edit modal', () => {
            //Assemble
            component.ezTag = {
                licPlate: 'ABC123',
                licState: 'TX'
            } as IEZTag;
            cmsReplacementService.transformTemplate.and.returnValue('Returned Value');
            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo({});

            //Act
            component.edit();

            //Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);
        });

        it('should open EditPlateComponent', () => {
            //Assemble
            component.isPlate = true;
            component.ezTag = {
                licPlate: 'ABC123',
                licState: 'TX'
            } as IEZTag;

            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo({});

            //Act
            component.edit();

            //Assert
            const data: any = {
                plate: component.ezTag,
                cmsContent: component.editModalCms,            
                statesList: component.stateList,
                showStatus: false,
                savePlate: false,
                header: component.editModalCms.Title,
                status: {} as any
            };

            expect(dialogService.openSliderCentered).toHaveBeenCalledWith(EditPlateComponent, data, { title: 'Edit Vehicle Information' } as any);
        });

        it('should open EditPlateComponent and return null', () => {
            //Assemble
            component.isPlate = true;
            component.ezTag = {
                licPlate: 'ABC123',
                licState: 'TX'
            } as IEZTag;

            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(null);

            //Act
            component.edit();

            //Assert
            const data: any = {
                plate: component.ezTag,
                cmsContent: component.editModalCms,            
                statesList: component.stateList,
                showStatus: false,
                savePlate: false,
                header: component.editModalCms.Title,
                status: {} as any
            };

            expect(dialogService.openSliderCentered).toHaveBeenCalledWith(EditPlateComponent, data, { title: 'Edit Vehicle Information' } as any);
        });
    });

    describe('ngOnInit', () => {
        it('should calculate days between pbpStartDate and pbpEndDate when isPlate is true', () => {
            //Assemble
            component.isPlate = true;
            component.ezTag = {
                pbpStartDate: '2022-04-05T14:48:00.000Z',
                pbpEndDate: '2022-04-06T15:48:00.000Z'
            } as IEZTag;
    
            //Act
            component.ngOnInit();
    
            //Assert
            expect(component.numberOfDays).toBe(1);
        });
    
        it('should not calculate days when isPlate is false', () => {
            //Assemble
            component.isPlate = false;
    
            //Act
            component.ngOnInit();
    
            //Assert
            expect(component.numberOfDays).toBeFalsy();
        });
    });    
});
