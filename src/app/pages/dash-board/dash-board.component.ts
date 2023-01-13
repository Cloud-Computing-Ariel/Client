import { Component, OnInit } from '@angular/core';
import { CardHeaderData } from 'src/app/consts/dashboard-data';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  cardHeaderData = CardHeaderData;
  headerData: { num: number }[] = [];
  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getHeaderCardsData();
  }
  getHeaderCardsData() {
    this.dashboardService.geHeaderCardsData().subscribe({
      next: (res: any) => {
        debugger;
        this.headerData = res;
      },
      error: (err) => {
        this.headerData = [];
        console.log(err);
      },
    });
  }
}
