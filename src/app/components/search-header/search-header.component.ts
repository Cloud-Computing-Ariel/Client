import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
})
export class SearchHeaderComponent implements OnInit {
  formGroup: FormGroup;
  allBranches?: string[];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('he-IL');
    this.formGroup = this.formBuilder.group({
      dropDown: ['', Validators.required],
      date: [new Date(), Validators.required],
    });
  }
  ngOnInit(): void {
    // TODO: Get all of the branches available in the backend
    // TODO: Update the allBreanches array
    this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onDateClick() {
    // TODO: here we submit and request data
    console.log(this.formGroup);
  }
}
