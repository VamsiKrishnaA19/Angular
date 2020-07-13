import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchEarlyEveningMenuComponent } from './lunch-early-evening-menu.component';

describe('LunchEarlyEveningMenuComponent', () => {
  let component: LunchEarlyEveningMenuComponent;
  let fixture: ComponentFixture<LunchEarlyEveningMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchEarlyEveningMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchEarlyEveningMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
