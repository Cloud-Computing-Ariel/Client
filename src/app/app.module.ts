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
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBodyComponent } from './components/search-body/search-body.component';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'search', component: SearchPageComponent },
  { path: '**', component: DashBoardComponent },
];

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
  ],
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    BrowserModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
