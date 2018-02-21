import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeliveryOrderCountComponent } from './ondelivery-order-count.component';

describe('OndeliveryOrderCountComponent', () => {
  let component: OndeliveryOrderCountComponent;
  let fixture: ComponentFixture<OndeliveryOrderCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndeliveryOrderCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndeliveryOrderCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
