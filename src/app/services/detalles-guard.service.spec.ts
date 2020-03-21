import { TestBed } from '@angular/core/testing';

import { DetallesGuardService } from './detalles-guard.service';

describe('DetallesGuardService', () => {
  let service: DetallesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
