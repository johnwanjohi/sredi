import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from './shared/material.module';
import { MainNavModule } from './main-nav/main-nav.module';
import {provideHttpClient} from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,  MaterialModule, AppRoutingModule, MainNavModule, DashboardModule],
  providers: [provideClientHydration(), provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
