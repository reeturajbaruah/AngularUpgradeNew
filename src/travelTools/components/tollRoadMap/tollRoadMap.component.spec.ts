import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TollRoadMapComponent } from './tollRoadMap.component';
import { PipesModule } from 'pipes/module';

describe('TollRoadMapComponent', () => {
  let component: TollRoadMapComponent;
  let fixture: ComponentFixture<TollRoadMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TollRoadMapComponent ],
      imports: [PipesModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TollRoadMapComponent);
    component = fixture.componentInstance;
    component.pageCms = {
      Children: [
        {} as any,
        {} as any
      ]
    } as any;
    fixture.detectChanges();
  });

  it('should create comp', () => {
    expect(component).toBeDefined();
  });
});
