import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResmeetComponent } from './resmeet.component';

describe('ResmeetComponent', () => {
  let component: ResmeetComponent;
  let fixture: ComponentFixture<ResmeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResmeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
