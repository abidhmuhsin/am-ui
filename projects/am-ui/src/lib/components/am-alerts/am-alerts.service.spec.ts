/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AmAlertsService } from './am-alerts.service';

describe('Service: AmAlerts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmAlertsService]
    });
  });

  it('should ...', inject([AmAlertsService], (service: AmAlertsService) => {
    expect(service).toBeTruthy();
  }));
});
