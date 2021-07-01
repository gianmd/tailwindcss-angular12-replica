import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component19Component } from './component19.component';

describe('Component19Component', () => {
  let component: Component19Component;
  let fixture: ComponentFixture<Component19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
