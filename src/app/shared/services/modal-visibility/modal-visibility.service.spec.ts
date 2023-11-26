import { TestBed } from '@angular/core/testing';

import { ModalVisibilityService } from './modal-visibility.service';

describe('ModalVisibilityService', () => {
  let service: ModalVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
