import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsideAssistanceComponent } from './roadsideAssistance.component';
import { CmsUtilService } from 'cms/services';
import { PipesModule } from 'pipes/module';

describe('RoadsideAssistanceComponent', () => {
  let component: RoadsideAssistanceComponent;
  let fixture: ComponentFixture<RoadsideAssistanceComponent>;
  let cmsUtilService: jasmine.SpyObj<CmsUtilService>;

  beforeEach(async () => {
    cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['generateFileSrc', 'parseAltText']);

    await TestBed.configureTestingModule({
      declarations: [RoadsideAssistanceComponent],
      imports: [PipesModule],
      providers: [
        { provide: CmsUtilService, useFactory: () => cmsUtilService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    cmsUtilService.generateFileSrc.and.returnValue('test');
    cmsUtilService.parseAltText.and.returnValue('test');

    fixture = TestBed.createComponent(RoadsideAssistanceComponent);
    component = fixture.componentInstance;
    component.pageCms = {
      Title: '',
      Children: [
        { ItemName: 'TEST', Image: 'path' },
        { ItemName: 'TEST' },
        { ItemName: 'TEST' },
        { ItemName: 'TEST', Children: [{ Children: [] }] }
      ]
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(cmsUtilService.generateFileSrc).toHaveBeenCalled();
    expect(cmsUtilService.parseAltText).toHaveBeenCalled();
  });
});
