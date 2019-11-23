/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertsDemoComponent } from './alerts-demo.component';

describe('AlertsDemoComponent', () => {
  let component: AlertsDemoComponent;
  let fixture: ComponentFixture<AlertsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
