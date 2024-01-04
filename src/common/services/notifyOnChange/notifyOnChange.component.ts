import { Component, Input, HostBinding, ChangeDetectionStrategy, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'notify-on-change',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotifyOnChangeComponent {

    @HostBinding('style.display') display = 'none';
    @Output() notify = new EventEmitter();
    @Input() set watch(val: any) {
        this.notify.emit(val);
    };
}


