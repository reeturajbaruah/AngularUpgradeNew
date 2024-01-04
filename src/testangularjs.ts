import * as angularjs from 'angular';

declare global {
    // eslint-disable-next-line no-var
    var angular: angularjs.IAngularStatic;
}

angular = angularjs;

import 'ng-file-upload/dist/ng-file-upload-shim.js';
import 'ng-file-upload/dist/ng-file-upload.js';
import 'angular-animate/angular-animate.js';
import 'angular-aria/angular-aria.js';
import 'angular-loader/angular-loader.js';
import 'angular-message-format/angular-message-format.js';
import 'angular-messages/angular-messages.js';
import 'angular-route/angular-route.js';
import 'angular-sanitize/angular-sanitize.js';
import '@uirouter/angularjs/release/angular-ui-router.min.js';
import '@uirouter/angular-hybrid';
import 'angulartics/dist/angulartics.min.js';
import 'angulartics-adobe-analytics/dist/angulartics-adobe-analytics.min.js';
import 'ng-infinite-scroll/build/ng-infinite-scroll.js';
import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js';
import 'angular-mocks/angular-mocks.js';

import pstack from '../../Scripts/Prod/stacktrace.js';

window['printStackTrace'] = pstack;

import '../../legacy/appBundle.html2js.js';
import '../../legacy/appBundle.testing.js';

