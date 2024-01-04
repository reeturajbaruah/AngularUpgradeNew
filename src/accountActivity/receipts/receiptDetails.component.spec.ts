import { DatePipe } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentUserService, DialogRef, DownloadService } from 'common/services';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { IInjectionValues, ReceiptDetailsComponent } from './receiptDetails.component';


describe('component: ReceiptDetailsComponent', () => {
    let fixture: ComponentFixture<ReceiptDetailsComponent>;
    let component: ReceiptDetailsComponent;
    let dialogRef: DialogRef<IInjectionValues>;
    let downloadService: jasmine.SpyObj<DownloadService>;
    let currentUser: CurrentUserService;
    let datePipe: jasmine.SpyObj<DatePipe>;
    beforeEach(async () => {
        downloadService = jasmine.createSpyObj('downloadService', ['download']);
        currentUser = jasmine.createSpyObj('currentUser', ['getCurrentUser']);
        datePipe = jasmine.createSpyObj('datePipe', ['transform']);
        datePipe.transform.and.returnValue('2022/01/04');
        dialogRef = {
            data: {} as IInjectionValues
        } as DialogRef<IInjectionValues>;

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptDetailsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef },
                    { provide: DownloadService, useFactory: () => downloadService },
                    { provide: CurrentUserService, useFactory: () => currentUser },
                    { provide: DatePipe, useFactory: () => datePipe }
                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(ReceiptDetailsComponent);
        component = fixture.debugElement.componentInstance;

        const fakeResponse: any = {
            accountStatus: '',
            accountTrans: [],
            alerts: [],
            companyName: '',
            csrId: '-24057',
            depositTrans: [],
            errors: [],
            exception: '',
            homePhoneNumber: '',
            mobilePhoneNumber: '',
            name: '',
            paymentDetail: [],
            receiptDate: '',
            securityIssue: false,
            sessionTimedOut: false,
            userAddress: {
                addressOne: ''
            } as any,
            username: '',
            webVersion: '1.0.0.7982.30144',
            workPhoneNumber: ''


        };

        (dialogRef.data as IInjectionValues) = {
            transactionNumber: '40240433449',
            response: fakeResponse
        };

        currentUser.getCurrentUser();
    });


    it('should call the download pdf method', async () => {
        component.getReceiptDetailPdf();
        expect(downloadService.download).toHaveBeenCalled();
    });

    describe('ngOnInit', () => {
        it('should assign data', () => {
            const fakeResponse: any = {
                accountStatus: '',
                accountTrans: [],
                alerts: [],
                companyName: '',
                csrId: '-24057',
                depositTrans: [],
                errors: [],
                exception: '',
                homePhoneNumber: '',
                mobilePhoneNumber: '',
                name: '',
                paymentDetail: [],
                receiptDate: '',
                securityIssue: false,
                sessionTimedOut: false,
                userAddress: {
                    addressOne: ''
                } as any,
                username: '',
                webVersion: '1.0.0.7982.30144',
                workPhoneNumber: ''


            };

            component.ngOnInit();
            expect(component.data).toEqual({ transactionNumber: '40240433449', response: fakeResponse});
        });
    });
});
