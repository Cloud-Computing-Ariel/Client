import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css'],
})
export class SearchHeaderComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      dropDown: [''],
      date: [''],
    });
  }
  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {});
  }

  onSubmit() {
    console.log(this.formGroup);
  }
}
