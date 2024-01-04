import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameComponent } from '..';
import { HelpAndSupportManagerService } from '../../services/manager/help-and-support-manager.service';
import { IFrameCms, IHelpAndSupportCms } from 'helpAndSupport/models/frame.models';

const mockFrameCms = {
    Title: 'mock title'
} as IFrameCms;

const mockHelpAndSupportCms = {
    frameCms: mockFrameCms
} as IHelpAndSupportCms;

describe('Help and Support frame component', () => {
    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;
    let helpAndSupportMgrServiceSpy: jasmine.SpyObj<HelpAndSupportManagerService>;

    beforeEach(async () => {
        helpAndSupportMgrServiceSpy = jasmine.createSpyObj('helpAndSupportMgrServiceSpy', ['loadCmsData', 'getFrameCms']);
        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: HelpAndSupportManagerService, useFactory: () => helpAndSupportMgrServiceSpy },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeTruthy();
        });
    });

    it('should load data into loadCmsData', () => {
        component.cmsContent = mockHelpAndSupportCms;

        component.ngOnInit();

        expect(helpAndSupportMgrServiceSpy.loadCmsData).toHaveBeenCalledWith(mockHelpAndSupportCms);
    });

    it('should load data from getFrameCms', () => {
        helpAndSupportMgrServiceSpy.getFrameCms.and.returnValue(mockFrameCms);

        component.ngOnInit();

        expect(component.frameCms).toEqual(mockFrameCms);
    });
});
