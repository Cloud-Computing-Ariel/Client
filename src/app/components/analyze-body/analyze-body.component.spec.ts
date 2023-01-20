import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeBodyComponent } from './analyze-body.component';

describe('AnalyzeBodyComponent', () => {
  let component: AnalyzeBodyComponent;
  let fixture: ComponentFixture<AnalyzeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzeBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyzeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
