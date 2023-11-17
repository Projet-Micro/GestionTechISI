import { TestBed } from '@angular/core/testing';

import { ProjectorsService } from './projectors.service';

describe('ProjectorsService', () => {
  let service: ProjectorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
