module HCTRA.Service {

    // export interface IDomUtilService {
    //     getDomElementId: (el: HTMLElement) => void;
    //     getParents: (el: HTMLElement) => void;
    //     getDomElementIdChain: (el: HTMLElement) => string[];
    //     parseUrl: (url: string) => HCTRA.Model.ParsedUrl;
    //     documentAddClickEventListener: (cb: any) => void;
    // }

    // export class DomUtilService implements IDomUtilService {

    //     static $inject: string[] = ["$document"];

    //     constructor(private $document: angular.IDocumentService) {

    //     }

    //     public getDomElementId = (el: HTMLElement) => {

    //         return el.id || null;
    //     };

    //     public getParents = (el: HTMLElement) => {

    //         const result = [];

    //         if (!el) {
    //             return result;
    //         }

    //         const root = el.ownerDocument.querySelector(':root');

    //         for(let parent = el; parent && parent.nodeType === Node.ELEMENT_NODE && parent !== root; parent = parent.parentElement) {
    //             result.push(parent);
    //         }

    //         return result;
    //     };

    //     public getDomElementIdChain = (el: HTMLElement): string[] => {

    //         const parentArr: HTMLElement[] = this.getParents(el);
    //         const idChain = parentArr.map<string>(u => this.getDomElementId(u));

    //         return idChain;
    //     };

    //     // from https://gist.github.com/jlong/2428561
    //     public parseUrl = (url: string): HCTRA.Model.ParsedUrl => {

    //         const parser = document.createElement("a");
    //         parser.href = url;

    //         return {
    //             protocol: parser.protocol, // => "http:"
    //             hostname: parser.hostname, // => "example.com"
    //             port: parser.port,     // => "3000"
    //             pathname: parser.pathname, // => "/pathname/"
    //             search: parser.search,   // => "?search=test"
    //             hash: parser.hash,     // => "#hash"
    //             host: parser.host     // => "example.com:3000"
    //         };
    //     };

    //     public documentAddClickEventListener = cb => {

    //         document.addEventListener("click", cb);
    //     };
    // }
}

(function () {

    "use strict";

    // angular.module("HCTRAModule").service("domUtilService", HCTRA.Service.DomUtilService);

}());