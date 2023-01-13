import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [AppComponent, SideNavBarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
