import angular from 'angular';
import {downgradeComponent, downgradeModule} from '@angular/upgrade/static';
import {TestComponent} from '../ng2/test.component';
import {testModuleBootstrapFn} from '../ng2/test.module';
import {testModuleBootstrapFn2} from '../ng2/test2.module';

import {demoAppComponent} from './demo-app.component';
import {versionStampComponent} from './version-stamp.component';
import {testng1Component} from './testng1.component';


export const demoAppModule = angular.
  module('demoApp', [downgradeModule(testModuleBootstrapFn), downgradeModule(testModuleBootstrapFn2)]).
  component(demoAppComponent.selector, demoAppComponent).
  component(versionStampComponent.selector, versionStampComponent).
  component(testng1Component.selector, testng1Component).
  directive(TestComponent.selector, downgradeComponent({
    component: TestComponent
  }));
