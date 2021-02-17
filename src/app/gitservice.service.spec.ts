import { TestBed } from '@angular/core/testing';

import { GitserviceService } from './gitservice.service';

describe('GitserviceService', () => {
  let service: GitserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
