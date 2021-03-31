import { TestBed } from '@angular/core/testing';

import { AccountManagementProxyService } from './account-management.proxy.service';

describe('AccountManagementProxyService', () => {
  let service: AccountManagementProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountManagementProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
