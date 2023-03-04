import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
})
export class SearchHeaderComponent implements OnInit {
  formGroup: FormGroup;
  allBranches?: string[];
  @Output() onDatePicked: EventEmitter<Date> = new EventEmitter();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('he');
    this.formGroup = this.formBuilder.group({
      dropDown: ['', Validators.required],
      date: [new Date(), Validators.required],
    });
  }
  ngOnInit(): void {
    // TODO: Get all of the branches available in the backend
    // TODO: Update the allBranches array
    this.formGroup.valueChanges.subscribe((value) => {
      // console.log(value);
    });
  }

  onDateClick(date: MatDatepickerInputEvent<Date>) {
    if (date.value && date.value instanceof Date) {
      this.onDatePicked.emit(date.value);
    }
  }
}
