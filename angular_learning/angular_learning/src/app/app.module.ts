import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Modul1Component } from './modul1/modul1.component';
import { Modul2Component } from './modul2/modul2.component';
import { MainCardComponent } from './main-card/main-card.component';

@NgModule({
  declarations: [
    AppComponent,
    Modul1Component,
    Modul2Component,
    MainCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
