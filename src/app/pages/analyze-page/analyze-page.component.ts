import { Component } from '@angular/core';

@Component({
  selector: 'app-analyze-page',
  templateUrl: './analyze-page.component.html',
  styleUrls: ['./analyze-page.component.css'],
})
export class AnalyzePageComponent {
  onDateSelect(event: { end: Date; start: Date }) {
    console.log(event);
  }
}
