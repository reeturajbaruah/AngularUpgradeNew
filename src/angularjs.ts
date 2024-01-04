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
import 'angulartics/dist/angulartics.min.js';
import 'angulartics-adobe-analytics/dist/angulartics-adobe-analytics.min.js';
import 'ng-infinite-scroll/build/ng-infinite-scroll.js';
import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js';

import '../../legacy/appBundle.js';