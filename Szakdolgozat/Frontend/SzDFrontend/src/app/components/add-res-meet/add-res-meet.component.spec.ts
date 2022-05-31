import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResMeetComponent } from './add-res-meet.component';

describe('AddResMeetComponent', () => {
  let component: AddResMeetComponent;
  let fixture: ComponentFixture<AddResMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResMeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
