import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component17Component } from './component17.component';

describe('Component17Component', () => {
  let component: Component17Component;
  let fixture: ComponentFixture<Component17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
