import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmUiComponent } from './am-ui.component';

describe('AmUiComponent', () => {
  let component: AmUiComponent;
  let fixture: ComponentFixture<AmUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
