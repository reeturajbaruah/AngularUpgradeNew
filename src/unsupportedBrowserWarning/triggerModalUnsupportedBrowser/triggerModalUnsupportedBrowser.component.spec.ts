import { MatDialog } from '@angular/material/dialog';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PipesModule } from 'pipes/module';

import { TriggerModalUnsupportedBrowserComponent } from './triggerModalUnsupportedBrowser.component';
import { GenericRepoService } from '../../common/services';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

describe('triggerModalUnsupportedBrowserComponent tests', () => {
    let fixture: ComponentFixture<TriggerModalUnsupportedBrowserComponent>;

    let dialog: jasmine.SpyObj<MatDialog>;
    let genericRepo: any;
    let storefrontUtilityService: any;

    let component: TriggerModalUnsupportedBrowserComponent;

    beforeEach(async () => {

        dialog = jasmine.createSpyObj('dialog', ['open']);

        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        genericRepo.dataFactory.getCmsPageById.and.returnValue({
            cmsResponse: '{ "Title": "fake cms title", "ShortDescription": "fake cms short desc" }',
            errors: []
        });
        storefrontUtilityService = { isRunningAsKiosk: false };

        await TestBed
            .configureTestingModule({
                declarations: [
                    TriggerModalUnsupportedBrowserComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: MatDialog, useFactory: () => dialog },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TriggerModalUnsupportedBrowserComponent);

        component = fixture.debugElement.componentInstance;

        spyOn<any>(component, 'getCmsContent').and.returnValue(
            {
                cmsResponse: { Title: 'fake cms title', ShortDescription: 'fake cms short desc' },
                errors: []
            });
        spyOn<any>(component, 'showBrowserEndSupportModal').and.callFake(() => { });
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        [
            { validBrowser: true, isRunningAsKiosk: false, expectedTimesCalled: 1 },
            { validBrowser: false, isRunningAsKiosk: true, expectedTimesCalled: 0 },
            { validBrowser: true, isRunningAsKiosk: true, expectedTimesCalled: 0 },
            { validBrowser: false, isRunningAsKiosk: false, expectedTimesCalled: 1 },
        ].forEach(({ validBrowser, isRunningAsKiosk, expectedTimesCalled }) => {

            it(`should call showBrowserEndSupportModal() ${expectedTimesCalled} times when validBrowser is ${validBrowser} and isRunningAsKiosk is ${isRunningAsKiosk}`,
                () => {

                    //Assemble
                    storefrontUtilityService.isRunningAsKiosk = isRunningAsKiosk;

                    if (validBrowser) {
                        spyOn<any>(component, 'getUserAgent').and.returnValue(
                            `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727;
                            .NET CLR 3.0.30729; .NET CLR 3.5.30729; Tablet PC 2.0; wbx 1.0.0; rv:11.0) like Gecko`);
                    }
                    else {
                        spyOn<any>(component, 'getUserAgent').and.returnValue('not valid');
                    }

                    //Act 
                    component.ngOnInit();

                    //Assert
                    expect(component['showBrowserEndSupportModal']).toHaveBeenCalledTimes(expectedTimesCalled);

                });
        });
    });

    describe('showBrowserEndSupportModal', () => {
        it('should call dialog.open() 1 time', async () => {
            //Assemble
            (component['showBrowserEndSupportModal'] as jasmine.Spy).and.callThrough();
            (dialog.open as jasmine.Spy).and.callFake(() => { });

            //Act
            await component['showBrowserEndSupportModal']();

            //Assert
            expect(dialog.open).toHaveBeenCalledTimes(1);
        });

        it('should call dialog.open() 0 times', async () => {
            //Assemble
            (component['getCmsContent'] as jasmine.Spy).and.returnValue({});
            (component['showBrowserEndSupportModal'] as jasmine.Spy).and.callThrough();
            (dialog.open as jasmine.Spy).and.callFake(() => { });

            //Act
            await component['showBrowserEndSupportModal']();

            //Assert
            expect(dialog.open).toHaveBeenCalledTimes(0);
        });
    });

    describe('getCmsContent', () => {
        beforeEach(() => {
            (component['getCmsContent'] as jasmine.Spy).and.callThrough();
        });

        it('should call api.getCmsPageId() 1 time', async () => {
            //Assemble
            genericRepo.dataFactory.getCmsPageById.and.returnValue({
                cmsResponse: '{ "Title": "fake cms title", "ShortDescription": "fake cms short desc" }',
                errors: ['error1', 'error2']
            });

            //Act
            await component['getCmsContent']();

            //Assert
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledTimes(1);
        });
        it('should return with correct object if no errors are returned for cms call', async () => {
            //Act
            const result = await component['getCmsContent']();

            //Assert
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledTimes(1);
            expect(result).toEqual({ Title: 'fake cms title', ShortDescription: 'fake cms short desc' });
        });
        it('should return with empty object {} if errors are returned for cms call', async () => {
            //Assemble
            genericRepo.dataFactory.getCmsPageById.and.returnValue(
                {
                    cmsResponse: '{ "Title": "fake cms title", "ShortDescription": "fake cms short desc" }',
                    errors: ['error1', 'error2']
                });

            //Act
            const result = await component['getCmsContent']();

            //Assert
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledTimes(1);
            expect(result).toEqual({});
        });
    });


});
