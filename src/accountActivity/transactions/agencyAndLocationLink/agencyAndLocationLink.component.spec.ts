import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountActivityService } from 'accountActivity/services';
import { TransactionRecord } from 'accountDashboard/services';
import { } from 'jasmine';
import { AgencyAndLocationLinkComponent } from './agencyAndLocationLink.component';


describe('component: agencyAndLocationLinkComponent', () => {
    let accountActivityService: jasmine.SpyObj<AccountActivityService>;

    let fixture: ComponentFixture<AgencyAndLocationLinkComponent>;
    let component: AgencyAndLocationLinkComponent;

    beforeEach(async () => {
        accountActivityService = jasmine.createSpyObj('accountActivityService', ['hasLocationCoordinates', 'showMapFor']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    AgencyAndLocationLinkComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: AccountActivityService, useValue: accountActivityService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AgencyAndLocationLinkComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('setAgencyLinkParts', () => {
        it('should assign the location link parts if a matching agency is found', () => {
            spyOn(component, 'isAgencyInLocationName').and.returnValue(['fakeString', 'left', 'match', 'right'] as any);

            component['setAgencyLinkParts']({} as TransactionRecord);

            expect(component.agencyLinkMatchedString).toEqual('match');
            expect(component.agencyLinkLeftPart).toEqual('left');
            expect(component.agencyLinkRightPart).toEqual('right');
        });
    });

    describe('isAgencyInLocationName', () => {
        [
            { location: '1HCTRA', expectLeft: '1', expectMatch: 'HCTRA', expectRight: '' },
            { location: 'HCTRA1', expectLeft: '', expectMatch: 'HCTRA', expectRight: '1' },
            { location: '1HCTRA1', expectLeft: '1', expectMatch: 'HCTRA', expectRight: '1' },
            { location: '1CTRMA', expectLeft: '1', expectMatch: 'CTRMA', expectRight: '' },
            { location: 'CTRMA1', expectLeft: '', expectMatch: 'CTRMA', expectRight: '1' },
            { location: '1CTRMA1', expectLeft: '1', expectMatch: 'CTRMA', expectRight: '1' },
            { location: '1FBGPTRA', expectLeft: '1', expectMatch: 'FBGPTRA', expectRight: '' },
            { location: 'FBGPTRA1', expectLeft: '', expectMatch: 'FBGPTRA', expectRight: '1' },
            { location: '1FBGPTRA1', expectLeft: '1', expectMatch: 'FBGPTRA', expectRight: '1' },
            { location: '1METRO', expectLeft: '1', expectMatch: 'METRO', expectRight: '' },
            { location: 'METRO1', expectLeft: '', expectMatch: 'METRO', expectRight: '1' },
            { location: '1METRO1', expectLeft: '1', expectMatch: 'METRO', expectRight: '1' },
            { location: '1NTTA', expectLeft: '1', expectMatch: 'NTTA', expectRight: '' },
            { location: 'NTTA1', expectLeft: '', expectMatch: 'NTTA', expectRight: '1' },
            { location: '1NTTA1', expectLeft: '1', expectMatch: 'NTTA', expectRight: '1' },
            { location: '1TxDOT-TOD', expectLeft: '1', expectMatch: 'TxDOT-TOD', expectRight: '' },
            { location: 'TxDOT-TOD1', expectLeft: '', expectMatch: 'TxDOT-TOD', expectRight: '1' },
            { location: '1TxDOT-TOD1', expectLeft: '1', expectMatch: 'TxDOT-TOD', expectRight: '1' }
        ].forEach(({ location, expectLeft, expectMatch, expectRight }) => {
            it('should split the location if a matching agency is found', () => {
                const regexArr = component['isAgencyInLocationName']({ locationName: location } as TransactionRecord);

                expect(regexArr[1]).toEqual(expectLeft);
                expect(regexArr[2]).toEqual(expectMatch);
                expect(regexArr[3]).toEqual(expectRight);
            });
        });
    });
});
