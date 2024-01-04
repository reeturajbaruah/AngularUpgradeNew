import { Pipe, PipeTransform, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(html) {
        return html ? this.sanitizer.bypassSecurityTrustHtml(html) : '';
    }    
}
