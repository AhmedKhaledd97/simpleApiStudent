import { TestBed } from '@angular/core/testing';

import { AuothService } from './auoth.service';

describe('AuothService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuothService = TestBed.get(AuothService);
    expect(service).toBeTruthy();
  });
});
