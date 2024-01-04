import { Directive, ElementRef, OnInit, OnDestroy, Inject } from '@angular/core';
import { TranslationService } from '../services/translationService/translation.service';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[translatable]'
})
export class TranslatableDirective implements OnInit, OnDestroy {

    constructor(
        private translationService: TranslationService,
        private elementRef: ElementRef
    ) {        
    }

    private translationSubscription: Subscription;
    
    ngOnInit() {

        //reacts to service starting translation services
        this.translationSubscription = this.translationService
            .realTimeTranslationsEvent
            .subscribe(translationEvent => {
                if (translationEvent.status === 'starting') {
                    translationEvent.startNewSession(this.elementRef);
                }
            });
    }

    ngOnDestroy() {
        if (this.translationSubscription) {
            this.translationSubscription.unsubscribe();
        }
    }
}
