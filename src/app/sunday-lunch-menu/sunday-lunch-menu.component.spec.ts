import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SundayLunchMenuComponent } from './sunday-lunch-menu.component';

describe('SundayLunchMenuComponent', () => {
  let component: SundayLunchMenuComponent;
  let fixture: ComponentFixture<SundayLunchMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SundayLunchMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SundayLunchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
