import { TestBed } from '@angular/core/testing';

import { TravelProxyService } from './travel.proxy.service';

describe('Travel.ProxyService', () => {
  let service: TravelProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
