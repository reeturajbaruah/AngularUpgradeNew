import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomDrawerContainerComponent } from './bottomdrawer-container.component';

describe('BottomDrawerContainerComponent', () => {
  let component: BottomDrawerContainerComponent;
  let fixture: ComponentFixture<BottomDrawerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomDrawerContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomDrawerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.enableHeader = true;
      component.config = { headers: [{ fxFlexValue: 'test' }] } as any;
    });

    it('rowFxFlexValues should length should be equal to 1', () => {
      component.ngOnInit();

      expect(component.rowFxFlexValues.length).toEqual(1);
    });
  });

  describe('toggleRow', () => {
    beforeEach(() => {
      component.config = { data: [{ fxFlexValue: 'test', isSelected: false }] } as any;
    });

    it('isSelected should be true', () => {
      component.toggleRow(0);

      expect(component.config.data[0].isSelected).toBeTrue();
    });
  });
});
