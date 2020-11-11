import { TestBed } from '@angular/core/testing';

import { AccountManagement.ProxyService } from './account-management.proxy.service';

describe('AccountManagement.ProxyService', () => {
  let service: AccountManagement.ProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountManagement.ProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
