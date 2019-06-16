import { TestBed } from '@angular/core/testing';

import { AmUiService } from './am-ui.service';

describe('AmUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmUiService = TestBed.get(AmUiService);
    expect(service).toBeTruthy();
  });
});
