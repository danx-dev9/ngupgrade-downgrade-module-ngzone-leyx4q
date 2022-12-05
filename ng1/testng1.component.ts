import angular from 'angular';
import {Directive, ElementRef, Injector, Input, VERSION} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';


export const testng1Component = {
  selector: 'testng1',
  template: `
    <div>
      Calls
      <button ng-click="$ctrl.test()" type="button">Test Handler</button>
      <button ng-click="$ctrl.reset()" type="button">Reset</button>
      <div ng-repeat="item in $ctrl.calls track by $index">
        ({{$index}}): {{item}}
      </div>
    </div>
  `,
  controller: class Testng1Component {
    calls = [
    ];
    test() {
      this.calls.push(`In Angular Zone: ${ng.coreTokens.NgZone.isInAngularZone()}`);
    }
    reset() {
      this.calls.length = 0;
    }

    $onInit() {
      console.log('onInit', 'testng1');
    }

    $onChanges() {
      console.log('onChanges', 'testng1');
    }
  }
};


@Directive({selector: testng1Component.selector})
export class Testng1ComponentFacade extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(testng1Component.selector, elementRef, injector);
  }
}