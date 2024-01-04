import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ShipChannelBridgeFacadeService } from 'shipChannelBridge/services/ship-channel-bridge-facade-api/ship-channel-bridge-facade.service';
import { ShipChannelBridgeComponent } from './ship-channel-bridge.component';


describe('ShipChannelBridgeComponent', () => {

    let fixture: ComponentFixture<ShipChannelBridgeComponent>;
    let component: ShipChannelBridgeComponent;
    let shipChannelBridgeFacadeService: jasmine.SpyObj<ShipChannelBridgeFacadeService>;


    beforeEach(async () => {
        shipChannelBridgeFacadeService = jasmine.createSpyObj('ShipChannelBridgeFacadeService', ['getData']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ShipChannelBridgeComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: ShipChannelBridgeFacadeService, useFactory: () => shipChannelBridgeFacadeService },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ShipChannelBridgeComponent);
        component = fixture.debugElement.componentInstance;
        component.dynamicDisplays = [
            {
                title: 'title1',
                longDescription: 'content1',
                shortDescription: ''

            } as any,
            {
                title: 'title2',
                longDescription: 'content2',
                shortDescription: ''

            } as any,
        ];

        component.tabs = {Children:[]};

    });

    describe('component', () => {

        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should parse cmsData', async () => {
            const data = {banner: {image: 'img'},carousel:{}, tabs: {} };

            (shipChannelBridgeFacadeService.getData as jasmine.Spy).and.returnValue(of(data));
            spyOn(component, 'formTabDisplayData');

            component.ngOnInit();
            
            expect(component.imageSliderArrow).toEqual('mat-imageSliderArrow');
        });
    });

    describe('disableCaurosel', () => {
        it('should check showCaurosel is true', ()=> {
            component.disableCaurosel(true);

            expect(component.showCaurosel).toBeTrue();
        });

        it('should check showCaurosel is false', ()=> {
            component.disableCaurosel(false);

            expect(component.showCaurosel).toBeFalse();
        });
    });
});