import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmTabbedpaneComponent } from './am-tabbedpane.component';

describe('AmTabbedpaneComponent', () => {
  let component: AmTabbedpaneComponent;
  let fixture: ComponentFixture<AmTabbedpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmTabbedpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmTabbedpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
