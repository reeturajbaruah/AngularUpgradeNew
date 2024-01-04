import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatExpansionPanel } from '@angular/material/expansion';

import { AetAccordionComponent } from './aet-accordion.component';
interface Accordion {
    shortContent: string;
    longContent: string;
    defaultToMore: boolean;
    titleName: string;
    itemId: string;
    itemPath: string;
}
;
const data: Accordion[] = [{
    shortContent: '',
    longContent: 'long Description',
    defaultToMore: false,
    titleName: 'Test',
    itemId: '1',
    itemPath: ''
}];
describe('AetHeaderComponent', () => {
    let component: AetAccordionComponent;
    let fixture: ComponentFixture<AetAccordionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AetAccordionComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AetAccordionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('setPanelState', () => {

        it('panelOpenState value should change to provided index', () => {

            component.panelOpenState = 0;

            component.setPanelState(1);

            expect(component.panelOpenState).toEqual(1);
        });

    });

});
