import { Component, OnInit } from '@angular/core';
import {
  CardBodyData,
  CardHeaderData,
  HeaderCardData,
} from 'src/app/consts/dashboard-data';
import { DashboardService } from 'src/app/services/dashboard.service';
import { WebSocketService } from 'src/app/services/web-socket.service';
import {
  HeaderCardDataResponse,
  instanceOfBodyCardData,
  instanceOfHeaderCardData,
} from 'src/app/utils/helpers';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  cardHeaderData = CardHeaderData;
  cardBodyData = CardBodyData;
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly webSocketService: WebSocketService
  ) {}

  ngOnInit(): void {
    this.getBodyCards();
    this.getHeaderCards();
    this.updateHeaderCards();
    this.updateBodyCards();
  }

  getHeaderCards() {
    this.dashboardService.getHeaderCardsData().subscribe({
      next: (data: unknown) => {
        if (instanceOfHeaderCardData(data)) {
          this.cardHeaderData[0].number = data.totalOrders;
          this.cardHeaderData[1].number = data.totalOpenOrders;
          this.cardHeaderData[2].number = data.avgTimeSpent;
          this.cardHeaderData[3].number = data.openStores;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getBodyCards() {
    this.dashboardService.getBodyCardsData().subscribe({
      next: (data: unknown) => {
        if (instanceOfHeaderCardData(data)) {
          this.cardHeaderData[0].number = data.totalOrders;
          this.cardHeaderData[1].number = data.totalOpenOrders;
          this.cardHeaderData[2].number = data.avgTimeSpent;
          this.cardHeaderData[3].number = data.openStores;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateHeaderCards() {
    this.webSocketService.updateHeaderCardsData().subscribe({
      next: (data: unknown) => {
        if (instanceOfBodyCardData(data)) {
          const newCardsData = JSON.parse(JSON.stringify(this.cardBodyData));
          newCardsData[0].data = data.topToppingsOrdered;
          newCardsData[1].data = data.topBranchesLowestWaitTime;
          newCardsData[2].data = data.DistriByArea;
          newCardsData[3].data = data.numberOfOrders;
          this.cardBodyData = newCardsData;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  updateBodyCards() {
    this.webSocketService.updateBodyCardsData().subscribe({
      next: (data: unknown) => {
        if (instanceOfBodyCardData(data)) {
          const newCardsData = JSON.parse(JSON.stringify(this.cardBodyData));
          newCardsData[0].data = data.topToppingsOrdered;
          newCardsData[1].data = data.topBranchesLowestWaitTime;
          newCardsData[2].data = data.DistriByArea;
          newCardsData[3].data = data.numberOfOrders;
          this.cardBodyData = newCardsData;
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
