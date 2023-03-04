import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AnalyzeResultsDTO } from 'src/app/utils/helpers';

@Component({
  selector: 'app-analyze-page',
  templateUrl: './analyze-page.component.html',
  styleUrls: ['./analyze-page.component.css'],
})
export class AnalyzePageComponent {
  constructor(private readonly dashboardService: DashboardService) {}
  analyzeData!: AnalyzeResultsDTO[];
  onDateSelect(event: { end: Date; start: Date }) {
    this.dashboardService.getAnalyzeResults(event.start, event.end).subscribe({
      next: (results) => {
        if (results instanceof Array) {
          this.analyzeData = results;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
