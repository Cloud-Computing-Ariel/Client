import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currTime: string = '';

  constructor() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    this.currTime = new Intl.DateTimeFormat('en-US', {
      timeStyle: 'medium',
    }).format(new Date());
  }
}
