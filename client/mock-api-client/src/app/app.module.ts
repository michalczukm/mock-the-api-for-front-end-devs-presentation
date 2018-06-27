import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { CoreModule, ENVIRONMENT_TOKEN } from './core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: ENVIRONMENT_TOKEN,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
