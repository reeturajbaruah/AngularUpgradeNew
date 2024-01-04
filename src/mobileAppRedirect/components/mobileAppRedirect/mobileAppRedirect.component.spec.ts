import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileAppRedirectComponent } from './mobileAppRedirect.component';
import { UrlService } from '@uirouter/angular';

describe('MobileAppRedirectComponent', () => {
  let component: MobileAppRedirectComponent;
  let fixture: ComponentFixture<MobileAppRedirectComponent>;
  let windowSpy: jasmine.SpyObj<Window>;
  let urlService: jasmine.SpyObj<UrlService>;

  beforeEach(async () => {
    windowSpy = jasmine.createSpyObj('Window', null, { location: { href: '' } });
    urlService = jasmine.createSpyObj('UrlService', ['search', 'url']);

    urlService.url.and.returnValue('');

    await TestBed.configureTestingModule({
      declarations: [MobileAppRedirectComponent],
      providers: [
        { provide: Window, useValue: windowSpy },
        { provide: UrlService, useValue: urlService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppRedirectComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call url', () => {
      component.ngOnInit();

      expect(urlService.url).toHaveBeenCalled();
    });

    it('should set href', () => {
      urlService.search.and.returnValue({ webUrl: 'test' });
      component.ngOnInit();

      expect(windowSpy.location.href).toEqual('test');
    });
  });
});
