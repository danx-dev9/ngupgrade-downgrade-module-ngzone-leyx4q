export const demoAppComponent = {
  selector: 'demoApp',
  template: `NG1 <testng1></testng1>
             <hr>
             <test-component [name]="$ctrl.name"></test-component>
             <hr>
             <test2-component [name]="$ctrl.name"></test2-component>`,
  controller: class TestComponent {
    name = 'ngUpgradeLite';
  },
};
