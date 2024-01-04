import { Directive, ElementRef, Inject } from '@angular/core';
import { ENVIRON_CONFIG } from 'common/upgrades';

@Directive({
    selector: 'img:not([loading])'
})
export class LazyLoadingImageDirective {

    constructor(
        el: ElementRef<HTMLImageElement>,
        @Inject(ENVIRON_CONFIG) { lazyLoadImages }: { lazyLoadImages: boolean }
        ) { 
        
            if (lazyLoadImages) {
                el.nativeElement.loading = 'lazy';
            }
    }
}