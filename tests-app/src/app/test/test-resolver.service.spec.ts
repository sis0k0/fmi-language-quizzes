import { TestBed } from '@angular/core/testing';

import { TestResolverService } from './test-resolver.service';

describe('TestResolverService', () => {
  let service: TestResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
