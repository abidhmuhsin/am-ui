/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MixedDemosComponent } from './mixed-demos.component';

describe('MixedDemosComponent', () => {
  let component: MixedDemosComponent;
  let fixture: ComponentFixture<MixedDemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedDemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
