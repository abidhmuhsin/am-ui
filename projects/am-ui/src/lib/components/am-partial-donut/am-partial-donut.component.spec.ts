/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmPartialDonutComponent } from './am-partial-donut.component';

describe('AmPartialDonutComponent', () => {
  let component: AmPartialDonutComponent;
  let fixture: ComponentFixture<AmPartialDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmPartialDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmPartialDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
