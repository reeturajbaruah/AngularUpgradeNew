import { Component, Input, Inject, OnInit, OnDestroy } from '@angular/core';
import { PrintHook, HookTarget, OptionalBreakPoint } from '@angular/flex-layout';
import { WindowRef } from 'common/providers';
import { noop } from 'rxjs';
@Component({
    selector: 'print-link',
    templateUrl: './print-link.html',
    styleUrls: ['./print-link.less']
})
export class PrintLinkComponent implements OnInit {

    constructor(
        @Inject(WindowRef) private window: Window,
        private readonly printHook: PrintHook,
    ) {
    }

    @Input() msg: string;

    ngOnInit() {
        this.msg = this.msg || 'Print';
    }

    public clickedPrint() {

        //TODO there is an issue with flex layout and printing.
        // hack until resolve: https://github.com/angular/flex-layout/issues/1201
        // The fix below is inspired by fix given in the link above
        const startPrintingOriginal = this.printHook['startPrinting'];
        const stopPrintingOriginal = this.printHook['stopPrinting'];
        const collectActivationsOriginal = this.printHook.collectActivations;

        this.printHook.collectActivations = noop;

        this.printHook['startPrinting'] = (target: HookTarget, bpList: OptionalBreakPoint[]) => {
            
            this.printHook['deactivations'] = [...target.activatedBreakpoints];

            //this should be called after as it mutates target
            startPrintingOriginal.call(this.printHook, target, bpList);
        };

        this.printHook['stopPrinting'] = (target: HookTarget) => {

            this.printHook['startPrinting'] = startPrintingOriginal;
            this.printHook['stopPrinting'] = stopPrintingOriginal;
            this.printHook.collectActivations = collectActivationsOriginal;

            stopPrintingOriginal.call(this.printHook, target);
        };

        this.window.print();
    }
}
