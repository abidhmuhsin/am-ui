/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReadmeComponent } from './readme.component';

describe('ReadmeComponent', () => {
  let component: ReadmeComponent;
  let fixture: ComponentFixture<ReadmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
