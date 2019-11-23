/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvgDonutDemoComponent } from './svg-donut-demo.component';

describe('SvgDonutDemoComponent', () => {
  let component: SvgDonutDemoComponent;
  let fixture: ComponentFixture<SvgDonutDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgDonutDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgDonutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
