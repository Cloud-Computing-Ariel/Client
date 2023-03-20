import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
})
export class SearchHeaderComponent implements OnInit {
  formGroup: FormGroup;
  allBranches!: string[];
  @Output() onDatePicked: EventEmitter<{ searchDate: Date; branch: string }> =
    new EventEmitter();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dateAdapter: DateAdapter<Date>,
    private readonly dashboardService: DashboardService
  ) {
    this.dateAdapter.setLocale('he');
    this.formGroup = this.formBuilder.group({
      dropDown: ['', Validators.required],
      date: [new Date(), Validators.required],
    });
  }
  ngOnInit(): void {
    this.dashboardService.getAvailableBranches().subscribe({
      next: (branches) => {
        this.allBranches = branches;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onDateClick() {
    this.onDatePicked.emit({
      searchDate: this.formGroup.controls['date'].value,
      branch: this.formGroup.controls['dropDown'].value,
    });
  }
}
