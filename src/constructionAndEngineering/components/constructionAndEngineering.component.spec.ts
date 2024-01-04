import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionAndEngineeringComponent } from './constructionAndEngineering.component';
import { CEFacadeApiService } from 'constructionAndEngineering/services/constructionAndEngineering-facade-api/constructionAndEngineering-facade-api.service';

describe('ConstructionAndEngineeringComponent', () => {
  let component: ConstructionAndEngineeringComponent;
  let fixture: ComponentFixture<ConstructionAndEngineeringComponent>;
  let ceFacadeApiService: jasmine.SpyObj<CEFacadeApiService>;

  beforeEach(async () => {
    ceFacadeApiService = jasmine.createSpyObj('CEFacadeApiService', ['parseAllImageAttributes']);

    await TestBed.configureTestingModule({
      declarations: [ConstructionAndEngineeringComponent],
      providers: [
        { provide: CEFacadeApiService, useFactory: () => ceFacadeApiService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionAndEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      ceFacadeApiService.parseAllImageAttributes.and.returnValue({} as any);

      component.pageCms = { Children: [{ ItemName: 'Tabs', Children: [{ ItemName: 'Major Projects' }] }, { ItemName: 'Caret Image' }] } as any;
      fixture.detectChanges();
    });

    it('caratCmsImage should create not be null', () => {
      component.ngOnInit();

      expect(component.caratCmsImage).toBeTruthy();
    });
  });
});
