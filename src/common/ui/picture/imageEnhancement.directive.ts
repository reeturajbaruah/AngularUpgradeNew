import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: 'img[enhanced]'
})
export class ImageEnhancementDirective {

    constructor(el: ElementRef<HTMLImageElement>) { 
        
        el.nativeElement.addEventListener('load', (ev)=> {

            if (!ev.target) {
                return;
            }

            const img = ev.target as HTMLImageElement;
            img.style.backgroundImage = `url(${img.currentSrc})`;
            
        }, { passive: true });
    }
}