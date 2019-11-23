/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabbedPaneDemoComponent } from './tabbed-pane-demo.component';

describe('TabbedPaneDemoComponent', () => {
  let component: TabbedPaneDemoComponent;
  let fixture: ComponentFixture<TabbedPaneDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedPaneDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedPaneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
