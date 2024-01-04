import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { } from 'jasmine';
import { StorefrontService } from '../services/storefront.service';
import { ExternalDialogComponent, IExternalDialogInjectedValues } from './external-dialog.component';

describe('component: ExternalDialogComponent - storefront', () => {

    let fixture: ComponentFixture<ExternalDialogComponent>;
    let component: ExternalDialogComponent;
    let storefrontService: jasmine.SpyObj<StorefrontService>;
    let mockInjectedData: IExternalDialogInjectedValues;
    let dialogRef: jasmine.SpyObj<MatDialogRef<ExternalDialogComponent>>;
    let domSanitizer: jasmine.SpyObj<DomSanitizer>;
    let windowMock: any;

    beforeEach(async () => {

        storefrontService = jasmine.createSpyObj('StorefrontService', ['getCmsItem']);
        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
        domSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
        mockInjectedData = {
            url: '',
            pdf: false
        };
        windowMock = {
            location: {
                origin: 'https://hctra.org'
            },
            sessionStorage: {
                getItem: jasmine.createSpy('getItem'),
                setItem: jasmine.createSpy('setItem')
            }
        };

        await TestBed
            .configureTestingModule({
                declarations: [
                    ExternalDialogComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule
                ],
                providers: [
                    { provide: StorefrontService, useFactory: () => storefrontService },
                    { provide: MAT_DIALOG_DATA, useValue: mockInjectedData },
                    { provide: DomSanitizer, useFactory: () => domSanitizer },
                    { provide: MatDialogRef, useFactory: () => dialogRef },
                    { provide: Window, useValue: windowMock }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ExternalDialogComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });


    describe('constructor', () => {
        it('should call bypassSecurityTrustResourceUrl', () => {
            //Assert
            expect(domSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
            expect(mockInjectedData.pdf).toEqual(false);
        });

        it('should set pdf to true', () => {
            //Arrange
            mockInjectedData.url = 'https://hctra.org/-/media/';

            //Act
            fixture = TestBed.createComponent(ExternalDialogComponent);
            component = fixture.debugElement.componentInstance;

            //Assert
            expect(domSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
            expect(mockInjectedData.pdf).toEqual(true);
        });

        it('should not set pdf to true', () => {
            //Arrange
            mockInjectedData.url = 'https://hctra.org/test/-/media/';

            //Act
            fixture = TestBed.createComponent(ExternalDialogComponent);
            component = fixture.debugElement.componentInstance;

            //Assert
            expect(domSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalled();
            expect(mockInjectedData.pdf).toEqual(false);
        });
    });

    describe('ngOnInit', () => {
        it('should not set fullSiteMode to true', async () => {
            //Arrange
            windowMock.sessionStorage.getItem.and.returnValue('{\"fullSiteMode\": false }');

            //Act
            await component.ngOnInit();

            //Assert
            expect(storefrontService.getCmsItem).toHaveBeenCalled();
            expect(windowMock.sessionStorage.getItem).toHaveBeenCalled();
        });

        it('should set fullSiteMode to true', async () => {
            //Arrange
            mockInjectedData.pdf = true;

            //Act
            await component.ngOnInit();

            //Assert
            expect(storefrontService.getCmsItem).toHaveBeenCalled();
            expect(windowMock.sessionStorage.getItem).not.toHaveBeenCalled();
        });
    });
});
