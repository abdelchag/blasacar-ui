import { TestBed } from '@angular/core/testing';

import { Travel.ProxyService } from './travel.proxy.service';

describe('Travel.ProxyService', () => {
  let service: Travel.ProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Travel.ProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
