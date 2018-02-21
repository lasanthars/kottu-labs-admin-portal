import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayTotalSalesComponent } from './today-total-sales.component';

describe('TodayTotalSalesComponent', () => {
  let component: TodayTotalSalesComponent;
  let fixture: ComponentFixture<TodayTotalSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayTotalSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayTotalSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
