import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { GenericRepoService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { SimplePageTemplateComponent } from './simple-page-template.component';

describe('SimplePageTemplateComponent', () => {
  let component: SimplePageTemplateComponent;
  let fixture: ComponentFixture<SimplePageTemplateComponent>;
  let stateService: StateService;
  let genericRepo: any;


  beforeEach(async () => {
    stateService = jasmine.createSpyObj('stateService', ['go'], {
      params: {
        CmsId: 1
      }
    });
    genericRepo = {
      dataFactory: {
        getCmsPageById: jasmine.createSpy('getCmsPageById'),
      }
    };

    genericRepo.dataFactory.getCmsPageById.and.resolveTo({
      cmsResponse: JSON.stringify({
        ShortDescription: 'Short Test'
      })
    });

    await TestBed.configureTestingModule({
      declarations: [SimplePageTemplateComponent],
      providers: [
        { provide: StateService, useFactory: () => stateService },
        { provide: GenericRepoService, useFactory: () => genericRepo },
      ],
      imports: [
        PipesModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should check getCmsPageById to have been called', () => {
      component.ngOnInit();

      expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalled();
    });
  });
});
