import { NgModule, Injectable, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCarouselComponent } from './carousel.component';
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { PipesModule } from 'pipes/module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';
import { PictureModule } from '../picture/picture.module';

// https://github.com/angular/angular/issues/10541#issuecomment-300761387
@Injectable()
export class MatCarouselHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}
@NgModule({
  declarations: [MatCarouselComponent, MatCarouselSlideComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule, MatDividerModule, PipesModule, FlexLayoutModule, PictureModule],
  exports: [MatCarouselComponent, MatCarouselSlideComponent]
})
export class MatCarouselModule {
  static forRoot(): ModuleWithProviders<MatCarouselModule> {
    return {
      ngModule: MatCarouselModule,
      providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: MatCarouselHammerConfig }
      ]
    };
  }
}
