import { Component, OnInit } from '@angular/core';
import { CardHeaderData } from 'src/app/consts/dashboard-data';
import { DashboardService } from 'src/app/services/dashboard.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  cardHeaderData = CardHeaderData;
  headerData: { num: number }[] = [];
  constructor(private readonly dashboardService: DashboardService) {}

  ngOnInit(): void {}
  getHeaderCardsData() {}
}
