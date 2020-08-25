import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookedFlightComponent } from './view-booked-flight.component';

describe('ViewBookedFlightComponent', () => {
  let component: ViewBookedFlightComponent;
  let fixture: ComponentFixture<ViewBookedFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBookedFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookedFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
