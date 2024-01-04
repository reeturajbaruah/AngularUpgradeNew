import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IStoreLocatorCms } from 'helpAndSupport/models/store-locator.models';
import { HelpAndSupportManagerService } from 'helpAndSupport/services/manager/help-and-support-manager.service';
import { PipesModule } from 'pipes/module';
import { StoreLocatorComponent } from './store-locator.component';

const mockStoreLocatorCms = {
    Title: 'mock title'
} as IStoreLocatorCms;

describe('StoreLocatorComponent', () => {
	let component: StoreLocatorComponent;
	let fixture: ComponentFixture<StoreLocatorComponent>;

    let managerMock: jasmine.SpyObj<HelpAndSupportManagerService>;

	beforeEach(async () => {
        managerMock = jasmine.createSpyObj('HelpAndSupportManagerService', ['getStoreLocatorCms']);

		await TestBed.configureTestingModule({
            declarations: [StoreLocatorComponent],
            providers: [
                { provide: HelpAndSupportManagerService, useFactory: () => managerMock },
            ],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PipesModule]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StoreLocatorComponent);
        component = fixture.debugElement.componentInstance;
	});

	describe('canary', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should load data from getStoreLocatorCms into storeLocatorCms', () => {
            managerMock.getStoreLocatorCms.and.returnValue(mockStoreLocatorCms);

            component.ngOnInit();

            expect(component.storeLocatorCms).toEqual(mockStoreLocatorCms);
        });
    });
});
