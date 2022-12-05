import {Component, Input, OnInit, OnChanges} from '@angular/core';



@Component({
  selector: 'test2-component',
  template: `
    <versionStamp></versionStamp>
    Hello2, {{ name }}!
  `
})
export class TestComponent2 implements OnInit, OnChanges{
  static selector = 'test';
  @Input() name: string;

  ngOnInit() {
    console.log('onInit', this.name);
  }

  ngOnChanges() {
    console.log('onChanges', this.name);
  }
}
