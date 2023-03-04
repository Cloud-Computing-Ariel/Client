import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBodyComponent } from './search-body.component';

describe('SearchBodyComponent', () => {
  let component: SearchBodyComponent;
  let fixture: ComponentFixture<SearchBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
