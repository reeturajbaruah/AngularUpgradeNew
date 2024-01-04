// This file is required by karma.conf.js and loads recursively all the .spec and framework files

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */

import 'zone.js';  // Included with Angular CLI.

import 'zone.js/testing';
import 'testangularjs';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { processDowngrades } from 'hybrid/module';

declare const require: any;

 import { AppModule } from 'app/app.module';
 import { createAngularJSTestingModule } from '@angular/upgrade/static/testing';

processDowngrades();
createAngularJSTestingModule([AppModule]);

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: false }
}
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
