import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorProjectsComponent } from './majorProjects.component';
import { PipesModule } from 'pipes/module';

describe('MajorProjectsComponent', () => {
  let component: MajorProjectsComponent;
  let fixture: ComponentFixture<MajorProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MajorProjectsComponent],
      imports: [PipesModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      component.tabCms = {
        Children: [
          { ItemName: 'Banner' },
          {
            ItemName: 'Drawer Content', Children: [
              { ItemName: 'Projects Headers', Children: [{ Title: '', fxFlexValue: '', position: '0', isPrimary: 'true' }, { Title: '', fxFlexValue: '', position: '1', isPrimary: 'false' }] },
              { ItemName: 'Projects', Children: [{ Title: '', LongDescription: '', RoadsImpacted: '', Status: 'ToTest' }] }
            ]
          }
        ]
      } as any;
      fixture.detectChanges();
    });

    it('bdConfig should not be null', () => {
      component.ngOnInit();
      expect(component.bdConfig).toBeTruthy();
    });
  });
});
