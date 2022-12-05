import './polyfills';
import angular from 'angular';
import {demoAppModule} from './ng1/demo-app.module';

// Ensure AngularJS destroys itself on hot reloads.
const rootElement = angular.element(document.body);
const oldInjector = rootElement.injector();
if (oldInjector) {
  oldInjector.get('$rootScope').$destroy();
  rootElement.data('$injector', null);
}

angular.bootstrap(document.body, [demoAppModule.name]);
