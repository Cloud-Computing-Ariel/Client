import { Component } from '@angular/core';
import { SearchTableData } from 'src/app/consts/searchpage-data';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  constructor(private readonly dashboardService: DashboardService) {}

  searchDataDisplay!: SearchTableData[];

  onDatePicked(date: Date) {
    this.dashboardService.getSearchResults(date).subscribe({
      next: (data) => {
        if (data instanceof Array) {
          this.searchDataDisplay = data;
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
