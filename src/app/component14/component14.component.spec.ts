import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component14Component } from './component14.component';

describe('Component14Component', () => {
  let component: Component14Component;
  let fixture: ComponentFixture<Component14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
