import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ButtonModule } from 'primeng/button';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { Home } from './common/home/home';

@NgModule({
  declarations: [
    App,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
