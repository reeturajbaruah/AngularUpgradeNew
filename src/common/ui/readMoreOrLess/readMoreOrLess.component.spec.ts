import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreOrLessComponent } from './readMoreOrLess.component';
import { ReadMoreOrLessService } from 'common/services/readMoreOrLess/readMoreOrLess.service';
import { WindowRef } from 'common/module';
import { PipesModule } from 'pipes/module';
import { SimpleChange } from '@angular/core';

describe('ReadMoreOrLessComponent', () => {
  let component: ReadMoreOrLessComponent;
  let fixture: ComponentFixture<ReadMoreOrLessComponent>;
  let readMoreOrLessService: jasmine.SpyObj<ReadMoreOrLessService>;
  let $window: jasmine.SpyObj<any>;
  const READLESS = 'Read Less';
  const READMORE = 'Read More';
  const SHORTDESCRIPTION = 'short Description';
  const LONGDESCRIPTION = 'long Description';
  const TITLE = 'Title';

  beforeEach(async () => {
    readMoreOrLessService = jasmine.createSpyObj('ReadMoreOrLessService', ['getReadMoreOrLessInitialState'], { readMore: 'Read More', readLess: 'Read Less' });
    $window = jasmine.createSpyObj('WindowRef', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ReadMoreOrLessComponent],
      imports: [PipesModule],
      providers: [
        { provide: ReadMoreOrLessService, useFactory: () => readMoreOrLessService },
        { provide: WindowRef, useFactory: () => $window }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreOrLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  [
    '',
    undefined,
    null
  ].forEach((titleName) => {

    it(`should set vm to empty object when titleName '${titleName}'`, () => {

      component.titleName = titleName;
      component.defaultToMore = true;
      component.shortContent = SHORTDESCRIPTION;
      component.longContent = LONGDESCRIPTION;
      component.itemPath = 'something';
      component.itemId = 'something';
      fixture.detectChanges();

      expect(component.vm).toEqual({});
    });
  });

  describe('expanderClicked', () => {
    beforeEach(() => {
      readMoreOrLessService.getReadMoreOrLessInitialState.and.returnValue({
        content: LONGDESCRIPTION,
        expanderText: READLESS,
        displayBreakoutPageLink: false,
        displayReadMoreOrLessLink: true,
        articleUrl: 'url'
      });

      component.titleName = TITLE;
      component.defaultToMore = true;
      component.shortContent = SHORTDESCRIPTION;
      component.longContent = LONGDESCRIPTION;
      component.itemPath = 'something';
      component.itemId = 'something';
      fixture.detectChanges();
    });

    it('should be toggled when ExpanderClicked', () => {
      component.ngOnChanges({
        titleName: new SimpleChange(null, TITLE, false),
      });

      expect(component.vm).toEqual({
        content: LONGDESCRIPTION,
        expanderText: READLESS,
        displayBreakoutPageLink: false,
        displayReadMoreOrLessLink: true,
        articleUrl: 'url'
      });

      component.expanderClicked();

      expect(component.vm).toEqual({
        content: SHORTDESCRIPTION,
        expanderText: READMORE,
        displayBreakoutPageLink: false,
        displayReadMoreOrLessLink: true,
        articleUrl: 'url'
      });

      component.expanderClicked();

      expect(component.vm).toEqual({
        content: LONGDESCRIPTION,
        expanderText: READLESS,
        displayBreakoutPageLink: false,
        displayReadMoreOrLessLink: true,
        articleUrl: 'url'
      });
    });
  });
});
