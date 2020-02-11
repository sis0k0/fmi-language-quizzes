import { TestBed } from '@angular/core/testing';

import { ScoreResolverService } from './score-resolver.service';

describe('ScoreResolverService', () => {
  let service: ScoreResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
