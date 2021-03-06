import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestoComponent } from './edit-resto.component';

describe('EditRestoComponent', () => {
  let component: EditRestoComponent;
  let fixture: ComponentFixture<EditRestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
