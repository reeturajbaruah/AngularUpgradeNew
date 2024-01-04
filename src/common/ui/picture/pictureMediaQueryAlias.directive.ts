import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { BreakPoint } from '@angular/flex-layout';
import { BREAKPOINT_DICTIONARY } from 'common/provider/customBreakPointsProvider';
import { WindowRef } from 'common/providers';

@Directive({
    selector: 'picture > source[mq-alias]'    
})
export class PictureMediaQueryAliasDirective implements OnInit {

    private console: Console;

    constructor(
        private el: ElementRef<HTMLSourceElement>,
        @Inject(BREAKPOINT_DICTIONARY) private breakPoints: {[key: string]: BreakPoint },
        @Inject(WindowRef) { console }: typeof globalThis
    ) { 
        this.console = console;
    }

    ngOnInit(): void {
        
        if (this.mediaQueryAlias in this.breakPoints){
            this.el.nativeElement.media = this.breakPoints[this.mediaQueryAlias]?.mediaQuery;    
        } else {
            this.console.log(`'${this.mediaQueryAlias}' not a defined alias.`);
        }
    }

    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('mq-alias') mediaQueryAlias: string;
}
