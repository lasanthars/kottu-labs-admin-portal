import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressOrderCountComponent } from './inprogress-order-count.component';

describe('InprogressOrderCountComponent', () => {
  let component: InprogressOrderCountComponent;
  let fixture: ComponentFixture<InprogressOrderCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressOrderCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressOrderCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
