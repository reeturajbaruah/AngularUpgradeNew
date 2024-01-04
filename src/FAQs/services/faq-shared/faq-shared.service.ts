import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FaqSharedService {

    private isTopResultAccordionOpen = new BehaviorSubject<boolean>(true);

    isTopResultAccordionOpen$ = this.isTopResultAccordionOpen.asObservable();

    setTopResultAccordion(newValue: boolean) {
        this.isTopResultAccordionOpen.next(newValue);
    }
}
