import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-analyze-header',
  templateUrl: './analyze-header.component.html',
  styleUrls: ['./analyze-header.component.css'],
})
export class AnalyzeHeaderComponent implements OnInit {
  range: FormGroup;
  @Output() onDateSelect = new EventEmitter();

  constructor(private readonly formBuilder: FormBuilder) {
    this.range = this.formBuilder.group({
      start: [<Date | null>null],
      end: [<Date | null>null],
    });
  }
  ngOnInit(): void {
    this.range.valueChanges.subscribe((value) => {
      this.onDateSelect.emit(value);
    });
  }

  onSubmit() {
    console.log(this.range);
  }
  get form(): { [key: string]: AbstractControl } {
    return this.range.controls;
  }
}
