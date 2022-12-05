import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {VersionStampComponentFacade} from '../ng1/version-stamp.component';
import {TestComponent} from './test.component';
import {Testng1ComponentFacade} from '../ng1/testng1.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    TestComponent,
    VersionStampComponentFacade,
    Testng1ComponentFacade,
  ],
  entryComponents: [
    TestComponent
  ]
})
export class Test2Module {
  ngDoBootstrap() {}
}



export function testModuleBootstrapFn2(extraProviders) {
  return platformBrowserDynamic(extraProviders).
    bootstrapModule(Test2Module);
}
