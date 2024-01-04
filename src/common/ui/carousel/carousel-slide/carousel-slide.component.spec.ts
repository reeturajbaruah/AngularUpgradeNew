import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PictureModule } from 'common/ui/picture/picture.module';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { MatCarouselComponent } from '../carousel.component';

import { MatCarouselSlideComponent } from './carousel-slide.component';

describe('MatCarouselSlideComponent', () => {
  let component: MatCarouselSlideComponent;
  let fixture: ComponentFixture<MatCarouselSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatCarouselSlideComponent ],
      imports: [PictureModule],
      providers: [
        { provide: MatCarouselComponent, useFactory: ()=> ({ height: '400px' })},
        { provide: ENVIRON_CONFIG, useFactory: ()=> ({})}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCarouselSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
