import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private readonly http: HttpClient) {}

  geHeaderCardsData() {
    return this.http.get(`${environment.apiURL}dashboard/header-cards`);
  }
}
