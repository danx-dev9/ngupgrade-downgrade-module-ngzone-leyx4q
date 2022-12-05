export const demoAppComponent = {
  selector: 'demoApp',
  template: `NG1 <testng1></testng1>
             <hr>
             <tc1 [name]="$ctrl.name"></tc1>
             <hr>
             <tc2 [name]="$ctrl.name"></tc2>`,
  controller: class TestComponent {
    name = 'ngUpgradeLite';
  },
};
