import { NgModule } from '@angular/core';
import { PictureContainerComponent } from './pictureContainer.component';
import { PictureMediaQueryAliasDirective } from './pictureMediaQueryAlias.directive';
import { ImageEnhancementDirective } from './imageEnhancement.directive';
import { LazyLoadingImageDirective } from './lazyLoadingImage.directive';

@NgModule({
    declarations: [PictureMediaQueryAliasDirective, PictureContainerComponent, ImageEnhancementDirective,LazyLoadingImageDirective],
    imports: [],
    exports: [PictureMediaQueryAliasDirective, PictureContainerComponent, ImageEnhancementDirective,LazyLoadingImageDirective]
  })  
  export class PictureModule {
    
  }
