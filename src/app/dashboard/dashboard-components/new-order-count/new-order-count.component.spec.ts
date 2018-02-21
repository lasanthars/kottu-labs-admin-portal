import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderCountComponent } from './new-order-count.component';

describe('NewOrderCountComponent', () => {
  let component: NewOrderCountComponent;
  let fixture: ComponentFixture<NewOrderCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
