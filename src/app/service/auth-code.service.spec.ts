import { TestBed } from '@angular/core/testing';

import { AuthCodeService } from './auth-code.service';

describe('AuthCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthCodeService = TestBed.get(AuthCodeService);
    expect(service).toBeTruthy();
  });
});
