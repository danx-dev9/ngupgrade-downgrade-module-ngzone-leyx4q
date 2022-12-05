import {Component, Input, OnInit, OnChanges} from '@angular/core';


@Component({
  selector: 'tc1',
  template: `
    NGX upgrade Component <testng1></testng1>
    <hr>
    <button (click)="testClick()" type="button">Test Regular Click</button>
    <versionStamp></versionStamp>
  `
})
export class TestComponent implements OnInit, OnChanges{
  static selector = 'test';
  @Input() name: string;

  ngOnInit() {
    console.log('onInit', this.name);
  }

  ngOnChanges() {
    console.log('onChanges', this.name);
  }

  testClick(){
    console.log('testClick');
  }
}
