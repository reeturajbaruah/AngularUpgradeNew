import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/core';
import { ENVIRON_CONFIG } from '../../common/upgrades';
import { cmsIds } from '../constants';
import { StorefrontService } from '../services/storefront.service';
import { GenericDialogComponent, IGenericDialogInjectedValues } from './generic-dialog.component';

describe('component: GenericDialogComponent - storefront', () => {

    let fixture: ComponentFixture<GenericDialogComponent>;
    let component: GenericDialogComponent;
    let storefrontService: jasmine.SpyObj<StorefrontService>;
    let mockInjectedData: IGenericDialogInjectedValues;
    let dialogRef: jasmine.SpyObj<MatDialogRef<GenericDialogComponent>>;
    let environConfigMock: any;
    let stateService: jasmine.SpyObj<StateService>;

    beforeEach(async () => {

        storefrontService = jasmine.createSpyObj('StorefrontService', ['getCmsItem', 'delay', 'isMaintenanceMode', 'restart']);
        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
        mockInjectedData = {
            class: '',
            header: '',
            body: '',
            image: '',
            actions: undefined 
        };
        environConfigMock = {
            storefrontConfigs: {
                StorefrontInactivityWarning: 100
            }
        };
        stateService = jasmine.createSpyObj('StateService', ['go']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    GenericDialogComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule
                ],
                providers: [
                    { provide: StorefrontService, useValue: storefrontService },
                    { provide: MAT_DIALOG_DATA, useValue: mockInjectedData },
                    { provide: MatDialogRef, useFactory: () => dialogRef },
                    { provide: ENVIRON_CONFIG, useValue: environConfigMock },
                    { provide: StateService, useValue: stateService }
                ]
            })
            .compileComponents();

        dialogRef.close.and.callFake(() => {});

        fixture = TestBed.createComponent(GenericDialogComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        it('should call handleInactivity', async () => {
            //Arrange
            mockInjectedData.class = 'inactivity';
            spyOn(component, 'handleInactivity');

            //Act
            await component.ngOnInit();

            //Assert
            expect(component.handleInactivity).toHaveBeenCalled();
        });

        it('should set backArrow', async () => {
            //Arrange
            mockInjectedData.class = 'other-options-complete';

            //Act
            await component.ngOnInit();

            //Assert
            expect(storefrontService.getCmsItem).toHaveBeenCalledWith(cmsIds.BackArrowImgId);
        });

        it('should set closeIcon', async () => {
            //Arrange
            mockInjectedData.class = 'exit-session';

            //Act
            await component.ngOnInit();

            //Assert
            expect(storefrontService.getCmsItem).toHaveBeenCalledWith(cmsIds.CloseModalImgId);
        });

        it('should call isMaintenanceMode', fakeAsync(() => {
            //Arrange
            storefrontService.isMaintenanceMode.and.resolveTo(false);
            storefrontService.restart.and.resolveTo({ startStateName: 'test' } as any);
            storefrontService.delay.and.callThrough();
            mockInjectedData.class = 'maintenance-mode';

            //Act
            component.ngOnInit();
            tick(300);
            expect(storefrontService.isMaintenanceMode).toHaveBeenCalled();
        }));

        it('should get fields', waitForAsync(() => {
            //Arrange
            mockInjectedData.class = 'class-test';
            mockInjectedData.header = 'header-test';
            mockInjectedData.body = 'body-test';
            mockInjectedData.image = 'img-test';
            mockInjectedData.actions = [];

            //Act
            component.ngOnInit().then(() => {
                //Assert
                expect(component.class).toEqual(mockInjectedData.class);
                expect(component.header).toEqual(mockInjectedData.header);
                expect(component.body).toEqual(mockInjectedData.body);
                expect(component.image).toEqual(mockInjectedData.image);
                expect(component.actions).toEqual(mockInjectedData.actions);
            });
        }));
    });

    describe('call', () => {
        beforeEach(() => {
            storefrontService.delay.and.callThrough();
        });

        it('should', waitForAsync(() => {
            component.call('test').then(() => {
                expect(component.show).toBeFalse();
                expect(dialogRef.close).toHaveBeenCalled();
            });
        }));
    });

    describe('handleInactivity', () => {
        it('should set minutes', fakeAsync(() => {
            component.handleInactivity();
            tick(1000);
            expect(component.minutes).toBeInstanceOf(Number);
        }));
    });
});
