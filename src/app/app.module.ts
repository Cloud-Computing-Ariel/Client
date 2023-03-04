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
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBodyComponent } from './components/search-body/search-body.component';
import { MatTableModule } from '@angular/material/table';
import { AnalyzePageComponent } from './pages/analyze-page/analyze-page.component';
import { AnalyzeHeaderComponent } from './components/analyze-header/analyze-header.component';
import { AnalyzeBodyComponent } from './components/analyze-body/analyze-body.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'analyze', component: AnalyzePageComponent },
  { path: '**', component: DashBoardComponent },
];
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    BodyCardComponent,
    HeaderCardComponent,
    DashBoardComponent,
    HeaderComponent,
    SearchPageComponent,
    SearchHeaderComponent,
    SearchBodyComponent,
    AnalyzePageComponent,
    AnalyzeHeaderComponent,
    AnalyzeBodyComponent,
  ],
  imports: [
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
