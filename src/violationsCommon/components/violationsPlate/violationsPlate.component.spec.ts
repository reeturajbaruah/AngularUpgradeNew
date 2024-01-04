import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { WebStorageService } from '../../../common/services/webStorageService/webStorage.service';
import { WebStorageConst } from '../../../constants/webstorage.constants';
import { ViolationsPlateComponent } from './violationsPlate.component';

describe('ViolationsPlateComponent', () => {
    let component: ViolationsPlateComponent;
    let fixture: ComponentFixture<ViolationsPlateComponent>;
    let stateService: jasmine.SpyObj<StateService>;
    let webStorageConst: WebStorageConst;
    let webStorage: any;

    beforeEach(async () => {
        stateService = jasmine.createSpyObj('StateService', ['go', 'href']);
        webStorage = jasmine.createSpyObj('webStorage', ['getValue', 'setKeyValue', 'removeEntry']);
        webStorageConst = new WebStorageConst();

        await TestBed.configureTestingModule({
            declarations: [ViolationsPlateComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: StateService, useValue: stateService },
                { provide: WebStorageService, useFactory: () => webStorage },
                { provide: WebStorageConst, useValue: webStorageConst }
            ],
            // schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    });

    beforeEach(() => {
        stateService.go.and.resolveTo({} as any);

        fixture = TestBed.createComponent(ViolationsPlateComponent);
        component = fixture.debugElement.componentInstance;
        // fixture.detectChanges();
    });

    it('should create', () => {
        // component.ngOnInit();
        expect(component).toBeTruthy();
    });

    describe('changeSelection', () => {
        it('showCollapseUi is false', () => {
            // component.ngOnInit();
            component.changeSelection();
            expect(component).toBeTruthy();
        });

        it('showCollapseUi is true', () => {
            // component.ngOnInit();
            component.showCollapseUi = true;
            component.changeSelection();
            expect(component).toBeTruthy();
        });
    });

    describe('goToPaymentPlans', () => {
        it('plate is masked', () => {
            const plate = {
                licenseState: 'FL',
                licensePlate: 'TEST*****'
            } as any;
            // component.ngOnInit();
            component.goToPaymentPlans(plate);
            expect(component).toBeTruthy();
        });

        it('plate is not masked', () => {
            const plate = {
                licenseState: 'FL',
                licensePlate: 'TESTPLATE'
            } as any;
            // component.ngOnInit();
            component.goToPaymentPlans(plate);
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('areAllSelected should be true', () => {
            component.selectAllAsDefault = true;
            component.ngOnInit();
            expect(component.areAllSelected).toBeTruthy();
        });
    });

    describe('toggleSelectAll', () => {
        it('should call emit', () => {
            spyOn(component.changeSelectionAll, 'emit');
            component.toggleSelectAll();
            expect(component.changeSelectionAll.emit).toHaveBeenCalled();
        });
    });
});
