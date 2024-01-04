import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameAsMailingAddressComponent } from './sameAsMailingAddress.component';

describe('SameAsMailingAddressComponent', () => {
  let component: SameAsMailingAddressComponent;
  let fixture: ComponentFixture<SameAsMailingAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameAsMailingAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameAsMailingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call emit', () => {
    spyOn(component.statusChange, 'emit');
    component.change(true);
    expect(component.statusChange.emit).toHaveBeenCalled();
  });
});
