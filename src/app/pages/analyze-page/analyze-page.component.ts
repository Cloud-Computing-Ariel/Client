import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-analyze-page',
  templateUrl: './analyze-page.component.html',
  styleUrls: ['./analyze-page.component.css'],
})
export class AnalyzePageComponent {
  constructor(private readonly dashboardService: DashboardService) {}
  onDateSelect(event: { end: Date; start: Date }) {
    this.dashboardService.getAnalyzeResults(event.start, event.end).subscribe({
      next: (results) => {
        console.log(results);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
