import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/environment';
import { AnalyzeResultsDTO, SearchResultsDTO } from '../utils/helpers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private readonly http: HttpClient) {}

  getSearchResults(searchDate: Date): Observable<SearchResultsDTO> {
    const date = new Intl.DateTimeFormat('en-IL', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(searchDate);
    return this.http.post<SearchResultsDTO>(`${environment.apiURL}search`, {
      date,
    });
  }

  getAnalyzeResults(
    fromSearchDate: Date,
    toSearchDate: Date
  ): Observable<AnalyzeResultsDTO> {
    const fromDate = new Intl.DateTimeFormat('en-IL', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(fromSearchDate);
    const toDate = new Intl.DateTimeFormat('en-IL', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(toSearchDate);
    return this.http.post<AnalyzeResultsDTO>(`${environment.apiURL}analyze`, {
      fromDate,
      toDate,
    });
  }
}
