import { TestBed } from '@angular/core/testing';

import { RestoServiceService } from './resto-service.service';

describe('RestoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestoServiceService = TestBed.get(RestoServiceService);
    expect(service).toBeTruthy();
  });
});
