import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMailidComponent } from './check-mailid.component';

describe('CheckMailidComponent', () => {
  let component: CheckMailidComponent;
  let fixture: ComponentFixture<CheckMailidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckMailidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMailidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
