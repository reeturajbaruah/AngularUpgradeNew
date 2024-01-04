import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebApisService } from 'accountActivity/services';
import { ENVIRON_CONFIG } from 'common/module';
import { DownloadService } from 'common/services';
import { } from 'jasmine';
import { YearlySummaryInfoComponent } from './yearlySummaryInfo.component';


describe('component: YearlySummaryInfoComponent', () => {

    let fixture: ComponentFixture<YearlySummaryInfoComponent>;
    let component: YearlySummaryInfoComponent;
    let service: jasmine.SpyObj<WebApisService>;
    let downloadService: jasmine.SpyObj<DownloadService>;
    let environmentConfig: { [key: string]: boolean };

    beforeEach(async () => {
        service = jasmine.createSpyObj('webApisService', ['getYearlySummary']);
        service.getYearlySummary.and.resolveTo({} as any);
        downloadService = jasmine.createSpyObj('downloadService', ['download']);
        environmentConfig = {};

        await TestBed
            .configureTestingModule({
                declarations: [
                    YearlySummaryInfoComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: DownloadService, useFactory: () => downloadService },
                    { provide: WebApisService, useFactory: () => service },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(YearlySummaryInfoComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should call the download pdf method', async () => {
        component.getYearlySummaryPdf();

        expect(downloadService.download).toHaveBeenCalled();
    });

    it('should call the download excel method', async () => {
        component.getYearlySummaryExcel();

        expect(downloadService.download).toHaveBeenCalled();
    });

});

