import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { CmsUtilService } from 'cms/services';
import { GenericRepoService } from 'common/services';
import { UrlPaths } from 'constants/routes.constants';
import { PipesModule } from 'pipes/module';
import { SectionalPageTemplateComponent } from './sectional-page-template.component';

describe('SimplePageTemplateComponent', () => {
  let component: SectionalPageTemplateComponent;
  let fixture: ComponentFixture<SectionalPageTemplateComponent>;
  let genericRepo: any;
  let cmsUtilRepo: any;
  const urlPaths = new UrlPaths();
  const stateService = jasmine.createSpyObj('StateService', ['go']);

  beforeEach(async () => {
    genericRepo = {
      dataFactory: {
        getCmsPageById: jasmine.createSpy('getCmsPageById'),
      }
    };

    genericRepo.dataFactory.getCmsPageById.and.resolveTo({
      cmsResponse: JSON.stringify({
        ShortDescription: 'Short Test',
        Children: [{
          ItemName: 'test'
        }]
      })
    });

    cmsUtilRepo = {
        generateFileSrc: jasmine.createSpy('generateFileSrc'),
      
    };
    
 

    await TestBed.configureTestingModule({
      declarations: [SectionalPageTemplateComponent],
      providers: [
        { provide: StateService, useFactory: () => stateService },
        { provide: GenericRepoService, useFactory: () => genericRepo },
        { provide: CmsUtilService, useFactory: () => cmsUtilRepo },
        { provide: UrlPaths, useFactory: () => urlPaths }
      ],
      imports: [
        PipesModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionalPageTemplateComponent);
    component = fixture.componentInstance;
    stateService.params = {
      CmsId: urlPaths.eftHelp
    } as any;
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

    it('should check getCmsPageById with invalid', () => {
        stateService.params = {
        CmsId: '1'
      } as any;

      component.ngOnInit();

      expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalled();
    });
  });

  describe('closeNeedHelp', () => { 
    it('should check for close', () => {
      const closeSpy = spyOn(window, 'close').and.callFake(() => {});
      component.closeNeedHelp();
      expect(closeSpy).toHaveBeenCalled();
    });
  });
});
