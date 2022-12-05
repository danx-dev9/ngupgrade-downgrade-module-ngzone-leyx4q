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
export class TestModule {
  ngDoBootstrap() {}
}


export function testModuleBootstrapFn(extraProviders) {
  return platformBrowserDynamic(extraProviders).
    bootstrapModule(TestModule);
}
