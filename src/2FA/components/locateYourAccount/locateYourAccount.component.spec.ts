import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocateYourAccountComponent } from './locateYourAccount.component';
import { FormsModule, NgForm } from '@angular/forms';
import { PipesModule } from 'pipes/module';
import { MatSelectModule } from '@angular/material/select';

describe('LocateYourAccountComponent', () => {
  let component: LocateYourAccountComponent;
  let fixture: ComponentFixture<LocateYourAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocateYourAccountComponent],
      imports: [FormsModule, PipesModule, MatSelectModule],
      providers: [NgForm]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateYourAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    spyOn(component.dataChange, 'emit');

    component.updateValue();

    expect(component.dataChange.emit).toHaveBeenCalled();
  });
});
