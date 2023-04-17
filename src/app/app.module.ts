import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromCarreraModule } from './prom-carrera/prom-carrera.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PromCarreraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
