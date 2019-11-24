/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmGuagemeterComponent } from './am-guagemeter.component';

describe('AmGuagemeterComponent', () => {
  let component: AmGuagemeterComponent;
  let fixture: ComponentFixture<AmGuagemeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmGuagemeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmGuagemeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
