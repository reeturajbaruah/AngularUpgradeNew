import { } from 'jasmine';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { LandingComponent } from './landing.component';
import { ResponseErrorService, ToasterService } from 'common/services';
import { VehiclesManagerService, VehicleProduct, MailingAddressService } from 'vehicles/shared';
import { IEZTag, IEzTagResponse, IManageEzTagResponse } from 'vehicles/interfaces';
import { WindowRef } from 'common/providers';
import { DialogService } from 'common/services';
import { GenericCmsModalComponent } from 'common/ui';
import { DateWithTimeZonePipe } from 'pipes/dateWithTimeZone/dateWithTimeZone.pipe';
import { CopyToExcelService } from 'common/services/copyToExcel/copyToExcel.service';
import { changesStable } from 'testing/utilities';
import { By } from '@angular/platform-browser';
import { GridComponent } from '../grid/grid.component';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { ITagReactivateResponse, TagReactivateManagerService, TagReactivateStatus } from 'vehicles/eztag/reactivate';
import { ReplacementManagerService } from 'vehicles/eztag/replacement';
import { SiteCoreItem } from 'cms/cms.module';
import { EditTagComponent } from 'vehicles/eztag/edit/editTag.component';
import { States as stateNames } from 'vehicles/shared';
import { IEditTagInjectedValues } from 'vehicles/shared/models';
import { IManageVehiclesOptions, MANAGE_VEHICLES_OPTIONS, VehicleAction, VehicleCmsContent, VehicleFilter, VehicleState } from './models';
import { VehiclesSortingService } from 'vehicles/manage/services/sorting/sorting-service';


describe('component: LandingComponent', () => {

    let fixture: ComponentFixture<LandingComponent>;
    let component: LandingComponent;
    let mailingService: jasmine.SpyObj<MailingAddressService>;
    let stateService: StateService;
    let responseErrorService: ResponseErrorService;
    let vehiclesManagerService: VehiclesManagerService;
    let dialogService: DialogService;
    let options: IManageVehiclesOptions;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let dateWithTimeZonePipeSpy: jasmine.SpyObj<DateWithTimeZonePipe>;
    let copyToExcelServiceSpy: jasmine.SpyObj<CopyToExcelService>;
    let environmentConfig: { useNewMvu: boolean; vehicleReactivate?: boolean };
    let tagReactivateMgrServiceSpy: jasmine.SpyObj<TagReactivateManagerService>;
    let replacementManagerServiceSpy: jasmine.SpyObj<ReplacementManagerService>;
    let sortingServiceSpy: jasmine.SpyObj<VehiclesSortingService>;

    beforeEach(async () => {

        options = { pageSize: 1 };
        stateService = jasmine.createSpyObj('state', ['go']);
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal', 'openSliderFilled']);
        mailingService = jasmine.createSpyObj('mailingService', ['clearData']);

        responseErrorService = jasmine.createSpyObj('responseError', ['isErrorFree', 'displayErrorsFromResponse']);
        vehiclesManagerService = jasmine.createSpyObj('VehiclesManagerService', ['queryVehicles', 'deactivate', 'updateEzTagVehicle', 'clearData', 'update', 'updateTagVehicleInfoFromLanding']);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);
        dateWithTimeZonePipeSpy = jasmine.createSpyObj('dateWithTimeZonePipe', ['transform']);
        copyToExcelServiceSpy = jasmine.createSpyObj('copyToExcelService', ['getDataForExcel']);
        environmentConfig = {
            useNewMvu: true,
            vehicleReactivate: true
        };

        tagReactivateMgrServiceSpy = jasmine.createSpyObj('tagReactivateMgrService', ['reactivate']);
        replacementManagerServiceSpy = jasmine.createSpyObj('replacementManagerService', ['replace']);
        sortingServiceSpy = jasmine.createSpyObj('sortingService', ['sort']);

        await TestBed
            .overrideComponent(LandingComponent,
                {
                    set: {
                        providers: [{ provide: MANAGE_VEHICLES_OPTIONS, useValue: options }]
                    }
                })
            .configureTestingModule({
                declarations: [
                    LandingComponent,
                    GridComponent,
                    DateWithTimeZonePipe
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: VehiclesManagerService, useFactory: () => vehiclesManagerService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: ToasterService, useFactory: () => toasterService },
                    { provide: WindowRef, useFactory: () => window },
                    { provide: DateWithTimeZonePipe, useFactory: () => dateWithTimeZonePipeSpy },
                    { provide: CopyToExcelService, useFactory: () => copyToExcelServiceSpy },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: TagReactivateManagerService, useFactory: () => tagReactivateMgrServiceSpy },
                    { provide: ReplacementManagerService, useFactory: () => replacementManagerServiceSpy },
                    { provide: VehiclesSortingService, useFactory: () => sortingServiceSpy },
                    { provide: MailingAddressService, useFactory: () => mailingService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.debugElement.componentInstance;

        spyOn(component, 'setEztagStatusValues');

    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('tests vehicles grid eztag html dom structure ', () => {

        it('is checking structure so that copy to excel code does not break ', async () => {
            spyOn(component, 'queryVehicles').and.resolveTo();

            component.cmsAddPlateVehicleInfo = {
                LongDescription: 'test', Title: 'test',
                MaxPlateError: 'test error from sitecore',

            };

            const ezTags = [
                {
                    acctTagStatus: VehicleState.active, nickname: 'nickname1', licPlate: 'TEST'
                    , licState: 'TX'
                } as IEZTag,
            ];

            component.vehicleCmsContent = {} as VehicleCmsContent;
            component.vehicleCmsContent.Title = 'test';
            component.vehicleCmsContent.ShortDescription = 'test short desc';
            component.vehicleCmsContent.tagEditButton = 'edit';
            component.vehicleCmsContent.plateEditButton = 'edit';
            component.vehicleCmsContent = {
                Children: {
                    4: {
                        Title: 'test',
                        accept: 'test',
                        cancel: 'test',
                        LongDescription: 'test',
                        noInActiveEzTag: 'test'
                    }
                }
            } as any; component.ezTags = ezTags;
            component.filter = { product: VehicleProduct.eztag, isActive: true, visiblePages: 1, keyword: null };

            component.ngOnInit();
            await changesStable(fixture);
            component.filteredVehicles = ezTags;
            await changesStable(fixture);

            const de: DebugElement = fixture.debugElement;

            const vehiclesGridDe = de.query(By.css('vehicles-grid'));
            expect(vehiclesGridDe).toBeDefined();

            const fxRowDe = de.queryAll(By.css('fx-row'));
            expect(fxRowDe).toBeDefined();
            expect(fxRowDe.length).toEqual(ezTags.length + 1);

            const divVechileRowDe = fxRowDe[1].query(By.css('.vehicle-row'));
            expect(divVechileRowDe).toBeDefined();

            const nicknameDe = divVechileRowDe.query(By.css('span[name="nickname"]'));
            expect(nicknameDe).toBeDefined();

            const makeyearmodelDe = divVechileRowDe.query(By.css('span[name="year/make/model"]'));
            expect(makeyearmodelDe).toBeDefined();

            const licenceplateDe = divVechileRowDe.query(By.css('span[name="licence plate"]'));
            expect(licenceplateDe).toBeDefined();

            const eztagnumberDe = divVechileRowDe.query(By.css('span[name="ez tag number"]'));
            expect(eztagnumberDe).toBeDefined();

            const colorDe = divVechileRowDe.query(By.css('span[name="color"]'));
            expect(colorDe).toBeDefined();

            const axlesDe = divVechileRowDe.query(By.css('span[name="axles"]'));
            expect(axlesDe).toBeDefined();

            const statusDe = divVechileRowDe.query(By.css('div[name="status"]'));
            expect(statusDe).toBeDefined();

        });
    });

    describe('tests vehicles grid ezplate html dom structure ', () => {

        it('is checking structure so that copy to excel code does not break ', async () => {
            spyOn(component, 'queryVehicles').and.resolveTo();

            component.cmsAddPlateVehicleInfo = {
                LongDescription: 'test', Title: 'test',
                MaxPlateError: 'test error from sitecore',

            };

            const ezPlates = [
                {
                    acctTagStatus: VehicleState.active, nickname: 'nickname1', licPlate: 'TEST'
                    , licState: 'TX'
                } as IEZTag,
            ];

            component.vehicleCmsContent = {} as VehicleCmsContent;
            component.vehicleCmsContent.Title = 'test';
            component.vehicleCmsContent.ShortDescription = 'test short desc';

            const cmsContent = {
                Title: 'title',
                AcceptBtn: 'accept',
                CancelBtn: 'cancel',
                PrimaryContent: 'long'
            };

            component.vehicleCmsContent = {
                Children: {
                    4: {
                        Title: cmsContent.Title,
                        accept: cmsContent.AcceptBtn,
                        cancel: cmsContent.CancelBtn,
                        LongDescription: cmsContent.PrimaryContent,
                        noInActiveEzTag: 'test'
                    }
                }
            } as any;

            component.ezPlates = ezPlates;
            component.filter = { product: VehicleProduct.ezplate, isActive: true, visiblePages: 1, keyword: null };
            component.ngOnInit();
            await changesStable(fixture);

            component.filter = { product: VehicleProduct.ezplate, isActive: true, visiblePages: 1, keyword: null };
            component.filteredVehicles = ezPlates;

            await changesStable(fixture);

            const de: DebugElement = fixture.debugElement;

            const vehiclesGridDe = de.query(By.css('vehicles-grid'));
            expect(vehiclesGridDe).toBeDefined();

            const fxRowDe = de.queryAll(By.css('fx-row'));
            expect(fxRowDe).toBeDefined();
            expect(fxRowDe.length).toEqual(ezPlates.length + 1);

            const divVechileRowDe = fxRowDe[1].query(By.css('.vehicle-row'));
            expect(divVechileRowDe).toBeDefined();

            const nicknameDe = divVechileRowDe.query(By.css('span[name="nickname"]'));
            expect(nicknameDe).toBeDefined();

            const makeyearmodelDe = divVechileRowDe.query(By.css('span[name="year/make/model"]'));
            expect(makeyearmodelDe).toBeDefined();

            const licenceplateDe = divVechileRowDe.query(By.css('span[name="licence plate"]'));
            expect(licenceplateDe).toBeDefined();

            const eztagnumberDe = divVechileRowDe.query(By.css('span[name="ez tag number"]'));
            expect(eztagnumberDe).toBeDefined();

            const colorDe = divVechileRowDe.query(By.css('span[name="color"]'));
            expect(colorDe).toBeDefined();

            const startdateDe = divVechileRowDe.query(By.css('span[name="start date"]'));
            expect(startdateDe).toBeDefined();

            const enddateDe = divVechileRowDe.query(By.css('span[name="end date"]'));
            expect(enddateDe).toBeDefined();

            const statusDe = divVechileRowDe.query(By.css('div[name="status"]'));
            expect(statusDe).toBeDefined();

        });
    });



    describe('hasMore', () => {

        let ezTags: IEZTag[];
        let ezPlates: IEZTag[];

        beforeEach(() => {
            ezTags = [
                { acctTagStatus: VehicleState.active, nickname: `${VehicleState.active}Tag` } as IEZTag,
                { acctTagStatus: VehicleState.inactive, nickname: `${VehicleState.inactive}Tag` } as IEZTag
            ];
            ezPlates = [
                { acctTagStatus: VehicleState.active, nickname: `${VehicleState.active}Plate` } as IEZTag,
                { acctTagStatus: VehicleState.inactive, nickname: `${VehicleState.inactive}Plate` } as IEZTag
            ];

            //'queryVehicles' needs ezTags and ezPlates
            component.ezTags = ezTags;
            component.ezPlates = ezPlates;
        });

        [
            [VehicleProduct.eztag, 1, true],
            [VehicleProduct.eztag, 2, false],
            [VehicleProduct.ezplate, 1, true],
            [VehicleProduct.ezplate, 2, false]
        ].forEach(([product, visiblePages, hasMoreVehicles]: [VehicleProduct, number, boolean]) => {

            it(`selects collection by product with visiblePageSize`, async () => {

                component.filter = { product, visiblePages } as any;

                const hasMore = component.hasMore;

                expect(hasMore).toBe(hasMoreVehicles);
            });

        });
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            component.vehicleCmsContent = {
                tagEditButton: 'edit',
                plateEditButton: 'edit'
            } as VehicleCmsContent;

        });

        it('can initialize component', async () => {

            spyOn(component, 'queryVehicles').and.resolveTo();

            component.cmsAddPlateVehicleInfo = {
                LongDescription: '', Title: '',
                MaxPlateError: 'test error from sitecore'
            };

            await component.ngOnInit();

            expect(component.filter.keyword).toBeNull();
            expect(component.filter.product).toBe(VehicleProduct.eztag);
            expect(component.filter.isActive).toBeTrue();

            expect(component.queryVehicles).toHaveBeenCalled();
        });

    });

    describe('filterVehicles', () => {

        let ezTags: IEZTag[];
        let ezPlates: IEZTag[];

        beforeEach(() => {
            ezTags = [
                { tagStatusDesc: 'Active', nickname: 'AT' } as IEZTag,
                { tagStatusDesc: 'Inactive', nickname: 'IT' } as IEZTag,
                { tagStatusDesc: 'Pending', nickname: 'PT' } as IEZTag,
                { tagStatusDesc: 'Pending Activation', nickname: 'PAT' } as IEZTag
            ];
            ezPlates = [
                { tagStatusDesc: 'Active', nickname: 'AP' } as IEZTag,
                { tagStatusDesc: 'Expired', nickname: 'EP' } as IEZTag
            ];
        });

        [
            [true, ['AT', 'PT', 'PAT'], ['AP']],
            [false, ['IT'], ['EP']]
        ].forEach(([isActive, tags, plates]: [boolean, string[], string[]]) => {

            it(`filters tags and plates on isActive == ${isActive}`, () => {

                component.filter = { isActive } as any;

                const [resultsEzTags, resultsEzPlates] = component.filterVehicles(ezTags, ezPlates);

                expect(resultsEzTags.map(x => x.nickname)).toEqual(tags);
                expect(resultsEzPlates.map(x => x.nickname)).toEqual(plates);

            });

        });
    });

    describe('getVehicleState', () => {

        [
            ['Active', VehicleState.active],
            ['Inactive', VehicleState.inactive],
            ['Expired', VehicleState.expired],
            ['Pending', VehicleState.pending],
            [null, VehicleState.unknown]

        ].forEach(([tagStatusDesc, output]) => {

            it(`returns ${output} when given ${tagStatusDesc}`, () => {

                expect(component.getVehicleState({ tagStatusDesc } as any)).toBe(output);

            });

        });

    });

    describe('getVehicleStateDescription', () => {

        const cmsContent = {
            active: 'active',
            inactive: 'inactive',
            pending: 'pending',
            expired: 'expired',
            lostInMail: 'lost in mail'
        };

        beforeEach(() => {
            component.vehicleCmsContent = cmsContent as any;
        });

        [
            [VehicleState.active, cmsContent.active],
            [VehicleState.inactive, cmsContent.inactive],
            [VehicleState.expired, cmsContent.expired],
            [VehicleState.pending, cmsContent.pending],
            [VehicleState.lostInMail, cmsContent.lostInMail],
        ].forEach(([state, output]: [VehicleState, string]) => {

            it(`returns ${output} when given ${state}`, () => {

                spyOn(component, 'getVehicleState').and.returnValue(state);

                const vehicle = {} as any;

                const description = component.getVehicleStateDescription(vehicle);

                expect(component.getVehicleState).toHaveBeenCalledWith(vehicle);

                expect(description).toBe(output);

            });

        });

    });

    describe('isActive', () => {

        [
            ['Active', true],
            ['Pending', true],
            ['Pending Activation', true],

            ['Inactive', false],
            ['Expired', false],
        ].forEach(([tagStatusDesc, state]: [string, boolean]) => {

            it(`is ${state} when tagStatusDes is ${tagStatusDesc}`, () => {
                expect(component.isActive({ tagStatusDesc } as any)).toBe(state);
            });

        });

    });

    describe('queryVehicles', () => {

        let response: IManageEzTagResponse;

        beforeEach(() => {
            response = {

            } as IManageEzTagResponse;

            (vehiclesManagerService.queryVehicles as jasmine.Spy).and.callFake(async () => response);
        });

        it('handles query errors', async () => {

            spyOn(component, 'filterVehicles');

            component.filter = {} as any;
            const keyword = 'keyword';

            await component.queryVehicles(keyword);

            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith(response);
            expect(component.filterVehicles).not.toHaveBeenCalled();
        });

        it('filters vehicles', async () => {

            spyOn(component, 'filterVehicles').and.callFake((a, b) => [a, b]);
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            response.accountTags = [{ nickname: 'ezTag' } as IEZTag];
            response.pbpTags = [{ nickname: 'ezPlate' } as IEZTag];

            component.filter = {} as any;
            const keyword = 'keyword';

            spyOn(component, 'disableAddProduct');
            await component.queryVehicles(keyword);

            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
            expect(component.filterVehicles).toHaveBeenCalledWith(response.accountTags, response.pbpTags);

            expect(component.ezTags).toEqual(response.accountTags);
            expect(component.ezPlates).toEqual(response.pbpTags);

        });

        [undefined, null, 'keyword']
            .forEach((keyword) => {

                it(`queries based on keyword: ${keyword}`, async () => {

                    component.filter = {} as any;

                    await component.queryVehicles(keyword);

                    expect(component.filter.keyword).toBe(keyword);

                });

            });
    });

    describe('addProduct', () => {

        [
            { product: VehicleProduct.ezplate, state: stateNames.PlateVehicleInformation },
            { product: VehicleProduct.eztag, state: stateNames.TagVehicleInformation }
        ].forEach(({ product, state }) => {

            it(`can transition to ${product} when ${state} is chosen`, async () => {

                component.filter = { product } as any;

                await component.addProduct();

                expect(stateService.go).toHaveBeenCalledWith(state);
            });

        });

    });

    describe('toggleVehicleStatus', () => {

        [
            { before: VehicleState.active, after: VehicleState.inactive },
            { before: VehicleState.inactive, after: VehicleState.active }
        ].forEach(({ before, after }) => {

            it(`can toggle from ${before} to ${after}`, async () => {

                spyOn(component, 'queryVehicles').and.resolveTo();

                component.filter = { isActive: before === VehicleState.active } as any;

                await component.toggleVehicleStatus();

                expect(component.filter.isActive).toBe(after === VehicleState.active);

                expect(component.queryVehicles).toHaveBeenCalled();

            });

        });

    });

    describe('toEZPlate', () => {
        it(`can switch from EZTag to EZPlate`, async () => {
            component.vehicleCmsContent = {
                tagEditButton: 'edit',
                plateEditButton: 'edit'
            } as VehicleCmsContent;

            component.filter = { product: VehicleProduct.eztag } as any;
            spyOn(component, 'disableAddProduct');

            await component.toEZPlate();

            expect(component.filter.product).toBe(VehicleProduct.ezplate);

        });

    });

    describe('toEZTag', () => {
        it(`can switch from EZPlate to EZTag`, async () => {
            component.vehicleCmsContent = {
                tagEditButton: 'edit'
            } as VehicleCmsContent;

            component.filter = { product: VehicleProduct.ezplate } as any;
            spyOn(component, 'disableAddProduct');

            await component.toEZTag();

            expect(component.filter.product).toBe(VehicleProduct.eztag);

        });

    });

    describe('editEzTag', () => {
        beforeEach(() => {
            component.vehicleCmsContent = {
                tagEditButton: 'edit',
                plateEditButton: 'edit'
            } as VehicleCmsContent;
        });

        it('can save', async () => {

            const tag = {} as any;

            component.vehicleCmsContent = {
                active: 'active',
                inactive: 'inactive'
            } as any;

            component.stateList = [];

            const data = {
                tag,
                cmsAddTagVehicleInfo: {},
                cmsModalValues: { ...component.vehicleCmsContent, title: 'EZ TAG' } as any,
                showStatus: true,
                statesList: component.stateList
            } as IEditTagInjectedValues;
            const content = { title: 'Edit EZ TAG' };

            (dialogService.openSliderFilled as jasmine.Spy).and.resolveTo({
                ...data,
                saveTag: true
            } as IEditTagInjectedValues);


            component.filter = {} as any;
            spyOn(component, 'queryVehicles').and.resolveTo({} as any);

            (vehiclesManagerService.updateTagVehicleInfoFromLanding as jasmine.Spy).and.
                resolveTo(
                    {
                        errors: []
                    } as IEzTagResponse
                );

            await component.editEzTag(tag);

            expect(dialogService.openSliderFilled).toHaveBeenCalledOnceWith(EditTagComponent, data, content);
            expect(vehiclesManagerService.updateTagVehicleInfoFromLanding).toHaveBeenCalledWith(tag);

        });

        it('can cancel', async () => {

            const tag = {} as any;

            const data = {
                tag,
                cmsAddTagVehicleInfo: {},
                cmsModalValues: {},
                showStatus: true,
                statesList: []
            } as IEditTagInjectedValues;

            (dialogService.openSliderFilled as jasmine.Spy).and.resolveTo({
                ...data,
                saveTag: false
            } as IEditTagInjectedValues);

            component.vehicleCmsContent = {} as any;

            await component.editEzTag(tag);

            expect(vehiclesManagerService.update).not.toHaveBeenCalled();

        });

    });

    describe('doVehicleAction', () => {

        const vehicle = {} as any;

        beforeEach(() => {

            spyOn(component, 'doVehicleDeactivation').and.resolveTo(undefined);

        });

        [
            [VehicleAction.deactivate, VehicleProduct.eztag, 'doVehicleDeactivation', [vehicle, VehicleProduct.eztag]],
            [VehicleAction.deactivate, VehicleProduct.ezplate, 'doVehicleDeactivation', [vehicle, VehicleProduct.ezplate]]
        ].forEach(([action, product, method, args]: [VehicleAction, VehicleProduct, string, any[]]) => {

            it(`calls ${method} when given ${product} and ${action}`, async () => {

                await component.doVehicleAction(vehicle, product, action);

                expect(component[method]).toHaveBeenCalledWith(...args);

            });

        });

    });

    describe('doVehicleDeactivation', () => {

        const vehicle = {} as any;

        it('does nothing if already inactive for eztag', async () => {
            spyOn(component, 'isActive').and.returnValue(false);
            spyOn(component, 'queryVehicles').and.resolveTo({} as any);

            await component.doVehicleDeactivation(vehicle, VehicleProduct.eztag);

            expect(dialogService.openGenericModal).not.toHaveBeenCalled();
            expect(vehiclesManagerService.deactivate).not.toHaveBeenCalled();
            expect(component.queryVehicles).not.toHaveBeenCalled();
            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
        });

        it('does nothing if already inactive for ezplate', async () => {
            spyOn(component, 'isActive').and.returnValue(false);
            spyOn(component, 'queryVehicles').and.resolveTo({} as any);

            await component.doVehicleDeactivation(vehicle, VehicleProduct.ezplate);

            expect(dialogService.openGenericModal).not.toHaveBeenCalled();
            expect(vehiclesManagerService.deactivate).not.toHaveBeenCalled();
            expect(component.queryVehicles).not.toHaveBeenCalled();
            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
        });

        it('deactivates vehicle when modal accepted', async () => {

            component.filter = {} as any;

            spyOn(component, 'isActive').and.returnValue(true);
            spyOn(component, 'queryVehicles').and.resolveTo({} as any);

            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo(true);
            (vehiclesManagerService.deactivate as jasmine.Spy).and.resolveTo({});
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            await component.doVehicleDeactivation(vehicle, VehicleProduct.ezplate);

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(vehiclesManagerService.deactivate).toHaveBeenCalledWith(vehicle, VehicleProduct.ezplate);
            expect(component.queryVehicles).toHaveBeenCalled();
            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
        });

        it('does not deactivate vehicle when modal rejected', async () => {
            spyOn(component, 'isActive').and.returnValue(true);
            spyOn(component, 'queryVehicles').and.resolveTo({} as any);

            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo(false);
            (vehiclesManagerService.deactivate as jasmine.Spy).and.resolveTo({});
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);

            await component.doVehicleDeactivation(vehicle, VehicleProduct.ezplate);

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(vehiclesManagerService.deactivate).not.toHaveBeenCalled();
            expect(component.queryVehicles).not.toHaveBeenCalled();
            expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
        });

        it('does shows error if deactivate fails', async () => {
            spyOn(component, 'isActive').and.returnValue(true);
            spyOn(component, 'queryVehicles').and.resolveTo({} as any);

            const response = {} as any;

            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo(true);
            (vehiclesManagerService.deactivate as jasmine.Spy).and.resolveTo(response);
            (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(false);

            await component.doVehicleDeactivation(vehicle, VehicleProduct.ezplate);

            expect(dialogService.openGenericModal).toHaveBeenCalled();
            expect(vehiclesManagerService.deactivate).toHaveBeenCalled();
            expect(component.queryVehicles).not.toHaveBeenCalled();
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith(response);
        });

        it('passes correct cms content when product is eztag', async () => {

            const cmsContent = {
                Title: 'title',
                AcceptBtn: 'accept',
                CancelBtn: 'cancel',
                PrimaryContent: 'long'
            };

            component.vehicleCmsContent = {
                Children: {
                    4: {
                        Title: cmsContent.Title,
                        accept: cmsContent.AcceptBtn,
                        cancel: cmsContent.CancelBtn,
                        LongDescription: cmsContent.PrimaryContent
                    }
                }
            } as any;

            spyOn(component, 'isActive').and.returnValue(true);

            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo(false);

            await component.doVehicleDeactivation(vehicle, VehicleProduct.ezplate);

            expect(dialogService.openGenericModal).toHaveBeenCalledWith(GenericCmsModalComponent, { cmsContent });

        });

        it('passes correct cms content when product is eztag', async () => {

            const cmsContent = {
                Title: 'title',
                AcceptBtn: 'accept',
                CancelBtn: 'cancel',
                PrimaryContent: 'long'
            };

            component.vehicleCmsContent = {
                Children: {
                    2: {
                        Title: cmsContent.Title,
                        accept: cmsContent.AcceptBtn,
                        cancel: cmsContent.CancelBtn,
                        LongDescription: cmsContent.PrimaryContent
                    }
                }
            } as any;

            spyOn(component, 'isActive').and.returnValue(true);

            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo(false);

            await component.doVehicleDeactivation(vehicle, VehicleProduct.eztag);

            expect(dialogService.openGenericModal).toHaveBeenCalledWith(GenericCmsModalComponent, { cmsContent });

        });

    });

    describe('canEdit', () => {

        [
            ['Active', true],
            ['Pending', true],
            ['Pending Activation', false],

            ['Inactive', false],
            ['Expired', false],
        ].forEach(([tagStatusDesc, state]: [string, boolean]) => {

            it(`is ${state} when ${tagStatusDesc}`, () => {
                expect(component.canEdit({ tagStatusDesc } as any)).toBe(state);
            });

        });

    });

    it('checks if Add EzPlate link should not be disabled when the product selected is Ez Tag', async () => {
        component.maxEzPlatesAllowed = 3;
        component.filter = {
            isActive: true,
            keyword: '',
            product: VehicleProduct.eztag,
            visiblePages: 1
        };
        component.filter.product = VehicleProduct.eztag;
        component.disableAddProduct();
        expect(component.disableAddProductLink).toBeFalse();

    });

    it('checks if Add EzPlate link should not be disabled when the product selected is EzPlate', async () => {
        component.maxEzPlatesAllowed = 3;
        component.filter = {
            isActive: true,
            keyword: '',
            product: VehicleProduct.ezplate,
            visiblePages: 1
        };
        component.filter.product = VehicleProduct.ezplate;
        component.ezPlates = [
            { acctTagStatus: VehicleState.active, nickname: `${VehicleState.active}Plate` } as IEZTag,
            { acctTagStatus: VehicleState.active, nickname: `${VehicleState.active}Plate` } as IEZTag

        ];

        component.disableAddProduct();
        expect(component.disableAddProductLink).toBeFalse();

    });

    it('checks if Add EzPlate link should be disabled when the product selected is EzPlate', async () => {
        component.maxEzPlatesAllowed = 3;
        component.filter = {
            isActive: true,
            keyword: '',
            product: VehicleProduct.ezplate,
            visiblePages: 1
        };
        component.filter.product = VehicleProduct.ezplate;
        component.ezPlates = [
            { acctTagStatus: VehicleState.active, nickname: `${VehicleState.active}Plate` } as IEZTag,
            { acctTagStatus: VehicleState.active, nickname: `${VehicleState.active}Plate` } as IEZTag,
            { acctTagStatus: VehicleState.active, nickname: `${VehicleState.active}Plate` } as IEZTag

        ];
        component.disableAddProduct();
        expect(component.disableAddProductLink).toBeTrue();

    });

    describe('pendingActivationClick', () => {
        it('should go to Activation page', () => {

            //Act
            component.pendingActivationClick();

            //Assert
            expect(stateService.go).toHaveBeenCalledTimes(1);

        });
    });

    describe('addMVU', () => {
        it('should call go', () => {

            //Act
            component.addMVU();

            //Assert
            expect(stateService.go).toHaveBeenCalledWith('MultiVehicle.Upload');

        });

        it('should call go with MultiVehicleUpload', () => {

            //Act
            environmentConfig.useNewMvu = false;
            component.addMVU();

            //Assert
            expect(stateService.go).toHaveBeenCalledWith('MultiVehicleUpload');

        });
    });

    describe('activatePlateCmsContent', () => {
        const cmsContent = {
            Title: 'title',
            AcceptBtn: 'accept',
            CancelBtn: 'cancel',
            PrimaryContent: 'long'
        };

        it('should get content', () => {
            component.vehicleCmsContent = {
                Children: {
                    3: {
                        Title: cmsContent.Title,
                        accept: cmsContent.AcceptBtn,
                        cancel: cmsContent.CancelBtn,
                        LongDescription: cmsContent.PrimaryContent
                    }
                }
            } as any;

            //Act
            const content = component.activatePlateCmsContent;

            //Assert
            expect(content).toBeTruthy();

        });
    });

    describe('emptyVehicleCmsContent', () => {
        const cmsContent = {
            Title: 'title',
            AcceptBtn: 'accept',
            CancelBtn: 'cancel',
            PrimaryContent: 'long'
        };

        it('should return test string', () => {
            component.vehicleCmsContent = {
                Children: {
                    4: {
                        Title: cmsContent.Title,
                        accept: cmsContent.AcceptBtn,
                        cancel: cmsContent.CancelBtn,
                        LongDescription: cmsContent.PrimaryContent,
                        noInActiveEzTag: 'test'
                    }
                }
            } as any;

            component.filter = {
                isActive: false,
                keyword: '',
                product: VehicleProduct.eztag,
                visiblePages: 1
            };

            //Act
            const empty = component.emptyVehicleCmsContent;

            //Assert
            expect(empty).toEqual('test');

        });
    });


    describe('loadMore', () => {
        it('visiblePages count should be 2', () => {
            component.filter = {
                isActive: true,
                keyword: '',
                product: VehicleProduct.eztag,
                visiblePages: 1
            };

            //Act
            component.loadMore();

            //Assert
            expect(component.filter.visiblePages).toEqual(2);

        });
    });

    describe('editEzPlate', () => {
        const cmsContent = {
            Title: 'title',
            AcceptBtn: 'accept',
            CancelBtn: 'cancel',
            PrimaryContent: 'long'
        };

        it('should call show', waitForAsync(() => {
            component.vehicleCmsContent = {
                active: true,
                inactive: false
            } as any;
            component.cmsAddPlateVehicleInfo = {
                EDIT_EZPLATE: ''
            } as any;
            component.filter = {
                keyword: ''
            } as any;

            (dialogService.openSliderFilled as jasmine.Spy).and.resolveTo({
                plate: {},
                savePlate: true
            } as any);

            (vehiclesManagerService.update as jasmine.Spy).and.resolveTo({
                errors: []
            } as IEzTagResponse);
            spyOn(component, 'queryVehicles').and.resolveTo();

            //Act
            component.editEzPlate({} as any).then(() => {
                //Assert
                expect(toasterService.show).toHaveBeenCalled();
            });
        }));
    });

    it('checks if the tag is reactivated', async () => {
        component.vehicleCmsContent = {} as VehicleCmsContent;

        component.vehicleCmsContent.Children = [{
            ItemName: 'reactivate tag'
        } as SiteCoreItem
        ];

        tagReactivateMgrServiceSpy.reactivate.and.resolveTo({
            status: TagReactivateStatus.Pass
        });

        spyOn(component, 'toggleVehicleStatus');
        await component.reactivateTag({ fullTagId: 'abc' } as IEZTag);
        expect(tagReactivateMgrServiceSpy.reactivate).toHaveBeenCalled();
        expect(toasterService.show).toHaveBeenCalledWith('Success', 'Your Vehicle information has been successfully updated.');
    });

    it('checks if the tag is not reactivated', async () => {
        component.vehicleCmsContent = {} as VehicleCmsContent;

        component.vehicleCmsContent.Children = [{
            ItemName: 'reactivate tag'
        } as SiteCoreItem
        ];

        const tagReactivateResponse = {} as ITagReactivateResponse;
        tagReactivateResponse.status = TagReactivateStatus.Fail;
        tagReactivateResponse.errors = [{ key: 'error', message: 'something is wrong' }];

        tagReactivateMgrServiceSpy.reactivate.and.resolveTo(tagReactivateResponse);
        spyOn(component, 'toggleVehicleStatus');
        await component.reactivateTag({ fullTagId: 'abc' } as IEZTag);
        expect(tagReactivateMgrServiceSpy.reactivate).toHaveBeenCalled();
        expect(toasterService.show).toHaveBeenCalledWith('Error', 'something is wrong');
    });

    it('checks if the tag reactivation is cancelled by user', async () => {
        component.vehicleCmsContent = {} as VehicleCmsContent;

        component.vehicleCmsContent.Children = [{
            ItemName: 'reactivate tag'
        } as SiteCoreItem
        ];

        tagReactivateMgrServiceSpy.reactivate.and.resolveTo({
            status: TagReactivateStatus.UserCancel
        });

        spyOn(component, 'toggleVehicleStatus');
        await component.reactivateTag({ fullTagId: 'abc' } as IEZTag);
        expect(toasterService.show).not.toHaveBeenCalled();
    });

    it('checks if the tag replacement functionlity is called', async () => {
        component.vehicleCmsContent = {} as VehicleCmsContent;

        component.vehicleCmsContent.Children = [{
            ItemName: 'replace tag'
        } as SiteCoreItem
        ];
        component.replaceTag({} as IEZTag);
        expect(replacementManagerServiceSpy.replace).toHaveBeenCalled();

    });

    describe('setEditBtnText', () => {
        beforeEach(() => {
            component.vehicleCmsContent = {
                tagEditButton: 'edit',
                plateEditButton: 'edit'
            } as VehicleCmsContent;
        });
        it('should check btnText is of tagEditButton', () => {
            component.filter = { product: VehicleProduct.eztag } as VehicleFilter;

            const btnText = component.setEditBtnText();
            expect(btnText).toEqual(component.vehicleCmsContent.tagEditButton);
        });
        it('should check btnText is of plateEditButton', () => {
            component.filter = { product: VehicleProduct.ezplate } as VehicleFilter;

            const btnText = component.setEditBtnText();
            expect(btnText).toEqual(component.vehicleCmsContent.plateEditButton);
        });
    });

    it('checks if vehicle should not be reactivated if vehicle is inactive', () => {
        const v = {
            fullTagId: ''
        } as IEZTag;

        component.filter = { isActive: false } as VehicleFilter;
        component.eztagStatusValues = [
            {
                key: 'Inactive',
                value: VehicleAction.deactivate
            },
            {
                key: 'Reactivate',
                value: VehicleAction.reactivate
            }
        ];

        const data = component.filterStatus(v);
        expect(data).toEqual([
            {
                key: 'Inactive',
                value: VehicleAction.deactivate
            }
        ]);

    });

    it('checks if vehicle should not be replaced if vehicle does not have valid tag id', () => {
        const v = {
            fullTagId: '0'
        } as IEZTag;

        component.filter = { isActive: true } as VehicleFilter;
        component.eztagStatusValues = [
            {
                key: 'Inactive',
                value: VehicleAction.deactivate
            },
            {
                key: 'Reactivate',
                value: VehicleAction.reactivate
            },
            {
                key: 'Replace',
                value: VehicleAction.replace
            }
        ];

        const data = component.filterStatus(v);
        expect(data).toEqual([
            {
                key: 'Inactive',
                value: VehicleAction.deactivate
            },
            {
                key: 'Reactivate',
                value: VehicleAction.reactivate
            }
        ]);

    });

    it('checks if vehicle should be reactivated if vehicle is inactive', () => {
        const v = {
            fullTagId: '123'
        } as IEZTag;

        component.filter = { isActive: false } as VehicleFilter;
        component.eztagStatusValues = [
            {
                key: 'Inactive',
                value: VehicleAction.deactivate
            },
            {
                key: 'Reactivate',
                value: VehicleAction.reactivate
            }
        ];

        const data = component.filterStatus(v);
        expect(data).toEqual(component.eztagStatusValues);

    });
});
