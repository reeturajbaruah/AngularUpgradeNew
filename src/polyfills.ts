/* eslint-disable */
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

//commented out imports are for thing that are now supported
//by common browsers (IE is not longer supported)
//import 'mdn-polyfills/Object.assign';
//import 'mdn-polyfills/Object.create';
//import 'mdn-polyfills/Object.entries';
//import 'mdn-polyfills/Array.from';
//import 'mdn-polyfills/Array.of';
//import 'mdn-polyfills/Array.prototype.find';
//import 'mdn-polyfills/Array.prototype.forEach';
//import 'mdn-polyfills/Array.prototype.filter';
//import 'mdn-polyfills/Array.prototype.findIndex';
//import 'mdn-polyfills/Array.prototype.includes';
//import 'mdn-polyfills/String.prototype.includes';
//import 'mdn-polyfills/String.prototype.repeat';
//import 'mdn-polyfills/String.prototype.startsWith';
//import 'mdn-polyfills/String.prototype.endsWith';
//import 'mdn-polyfills/String.prototype.padStart';
//import 'mdn-polyfills/String.prototype.padEnd';
//import 'mdn-polyfills/Function.prototype.bind';
//import 'mdn-polyfills/NodeList.prototype.forEach';
//import 'mdn-polyfills/Element.prototype.closest';
//import 'mdn-polyfills/Element.prototype.matches';
//import 'mdn-polyfills/MouseEvent';
//import 'mdn-polyfills/CustomEvent';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
// if (!String.fromCodePoint) {(function(stringFromCharCode) {
//     const fromCodePoint = function(_) {
//         const codeUnits = []; let codeLen = 0; let result = '';
//         for (let index = 0, len = arguments.length; index !== len; ++index) {
//             let codePoint = +arguments[index];
//             // correctly handles all cases including `NaN`, `-Infinity`, `+Infinity`
//             // The surrounding `!(...)` is required to correctly handle `NaN` cases
//             // The (codePoint>>>0) === codePoint clause handles decimals and negatives
//             if (!(codePoint < 0x10FFFF && (codePoint >>> 0) === codePoint))
//                 {throw RangeError('Invalid code point: ' + codePoint);}
//             if (codePoint <= 0xFFFF) { // BMP code point
//                 codeLen = codeUnits.push(codePoint);
//             } else { // Astral code point; split in surrogate halves
//                 // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
//                 codePoint -= 0x10000;
//                 codeLen = codeUnits.push(
//                     (codePoint >> 10) + 0xD800,  // highSurrogate
//                     (codePoint % 0x400) + 0xDC00 // lowSurrogate
//                 );
//             }
//             if (codeLen >= 0x3fff) {
//                 result += stringFromCharCode.apply(null, codeUnits);
//                 codeUnits.length = 0;
//             }
//         }
//         return result + stringFromCharCode.apply(null, codeUnits);
//     };
//     try { // IE 8 only supports `Object.defineProperty` on DOM elements
//         Object.defineProperty(String, 'fromCodePoint', {
//             value: fromCodePoint, configurable: true, writable: true
//         });
//     } catch (e) {
//         String.fromCodePoint = fromCodePoint;
//     }
// }(String.fromCharCode));}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://tc39.github.io/ecma262/#sec-array.prototype.find
// if (!Array.prototype.find) {
//     Object.defineProperty(Array.prototype, 'find', {
//         value(predicate) {
//             // 1. Let O be ? ToObject(this value).
//             if (this == null) {
//                 throw TypeError('"this" is null or not defined');
//             }

//             const o = Object(this);

//             // 2. Let len be ? ToLength(? Get(O, "length")).
//             const len = o.length >>> 0;

//             // 3. If IsCallable(predicate) is false, throw a TypeError exception.
//             if (typeof predicate !== 'function') {
//                 throw TypeError('predicate must be a function');
//             }

//             // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
//             const thisArg = arguments[1];

//             // 5. Let k be 0.
//             let k = 0;

//             // 6. Repeat, while k < len
//             while (k < len) {
//                 // a. Let Pk be ! ToString(k).
//                 // b. Let kValue be ? Get(O, Pk).
//                 // c. Let testResult be ToBoolean(? Call(predicate, T, � kValue, k, O �)).
//                 // d. If testResult is true, return kValue.
//                 const kValue = o[k];
//                 if (predicate.call(thisArg, kValue, k, o)) {
//                     return kValue;
//                 }
//                 // e. Increase k by 1.
//                 k++;
//             }

//             // 7. Return undefined.
//             return undefined;
//         },
//         configurable: true,
//         writable: true
//     });
// }
/* tslint:enable */
