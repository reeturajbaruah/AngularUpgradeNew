import Player from '@vimeo/player';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DialogRef } from 'common/services';
import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

export interface VimeoSettings {
    mediaUrl: string;
}

@Component({
    selector: 'vimeo-player-modal-component',
    templateUrl: `./vimeoPlayerModal.html`,
    styleUrls: ['./vimeoPlayerModal.less']
})
export class VimeoPlayerModalComponent implements OnInit, AfterViewInit, OnDestroy {

    constructor(
        private sanitizer: DomSanitizer,
        private dialogRef: DialogRef<VimeoSettings>,
        private matIconRegistry: MatIconRegistry
    ) { }

    private player: Player;
    private readonly iconSvg = 'close-x';

    @Input() mediaUrl: SafeResourceUrl;

    @ViewChild('iframe') iframe: ElementRef;

    public icon: string;

    async ngOnInit() {
        this.mediaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dialogRef.data.mediaUrl);

        //if an svg has a color fill defined, you cannot change the color via CSS.
        //this forces the polygon's fill style to be set to white.
        //maybe this might be usefull as it's own component/directive?
        await this.matIconRegistry
            .getNamedSvgIcon(this.iconSvg)
            .toPromise()
            .then(this.addIcon);
    }

    createPlayer(iframe: HTMLElement) {
        return new Player(iframe);
    }

    addIcon = (svgElement: SVGElement) => {
        const newElm = this.resetSvgStyle(svgElement);
        this.icon = newElm.outerHTML;
    };

    resetSvgStyle(svgElement: SVGElement) {
        const newElm = svgElement.cloneNode(true) as HTMLElement;
        newElm.querySelectorAll('polygon[style]').forEach((elm: HTMLElement) => {
            elm.style.fill = '#FFFFFF';
        });
        return newElm;
    }

    ngAfterViewInit() {
        this.player = this.createPlayer(this.iframe.nativeElement);
    }

    ngOnDestroy() {
        if (this.player) {
            this.player.destroy();
        }
    }

    close() {
        this.dialogRef.close();
    }
}
