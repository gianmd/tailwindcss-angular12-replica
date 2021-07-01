import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component18Component } from './component18.component';

describe('Component18Component', () => {
  let component: Component18Component;
  let fixture: ComponentFixture<Component18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
