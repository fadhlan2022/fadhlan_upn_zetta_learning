import { MaterialModule } from './module/module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ItemCardsComponent } from './item-cards/item-cards.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggingService } from './logging.service';
import { ItemsService } from './items.service';
@NgModule({
  declarations: [AppComponent, ItemInputComponent, ItemCardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [LoggingService, ItemsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
