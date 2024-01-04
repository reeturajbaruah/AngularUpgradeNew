import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { IList } from './models/dropdown.interface';


describe('component: Dropdown', () => {

    let fixture: ComponentFixture<DropdownComponent>;
    let component: DropdownComponent;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    DropdownComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [OverlayModule],
                providers: [
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(DropdownComponent);
        component = fixture.debugElement.componentInstance;

        component.list = {
            defaultDisplayName: 'All',
            data: [
                { displayName: 'All', id: 'All' },
                { displayName: 'All Electronic Tolling', id: 'All Electronic Tolling' },
                { displayName: 'Maintenance', id: 'Maintenance' }
            ]
        } as IList;
    });

    it('should defines dropdown reusable component', () => {
        expect(component).toBeDefined();
    });

    it('should initializes dropdown', () => {

        component.ngOnInit();
        expect(component.showDefault).toBeTrue();

        delete component.list.defaultDisplayName;
        component.ngOnInit();
        expect(component.showDefault).toBeFalse();
        expect(component.selectedData).toEqual(component.list.data[0]);

    });

    it('triggers the dropdown selection', () => {

        const eventData = { displayName: 'All Electronic Tolling', id: 'All Electronic Tolling' };


        component.dispatchEvent(eventData);

        expect(component.isOpen).toBeFalse();
        expect(component.showDefault).toBeFalse();
        expect(component.selectedData).toEqual(eventData);

    });

    it('listens to the dropdown change event', () => {

        const eventData = { displayName: 'All Electronic Tolling', id: 'All Electronic Tolling' };

        component.onChange.subscribe(data => {
            expect(data).toEqual(eventData);
        });

        component.dispatchEvent(eventData);

        expect(component.isOpen).toBeFalse();
        expect(component.showDefault).toBeFalse();
        expect(component.selectedData).toEqual(eventData);

    });

    it('checks if the user clicks outside the open dropdown list', () => {

        component.close();
        expect(component.isOpen).toBeFalse();
    });

});
