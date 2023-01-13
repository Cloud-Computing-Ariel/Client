import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { BodyCardComponent } from './components/body-card/body-card.component';
import { HeaderCardComponent } from './components/header-card/header-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    BodyCardComponent,
    HeaderCardComponent,
    DashBoardComponent,
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
