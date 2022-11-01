import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Modul1Component } from './modul1/modul1.component';
import { Modul2Component } from './modul2/modul2.component';

@NgModule({
  declarations: [
    AppComponent,
    Modul1Component,
    Modul2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
