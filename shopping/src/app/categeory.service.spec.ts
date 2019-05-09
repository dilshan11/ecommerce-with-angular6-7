import { TestBed } from '@angular/core/testing';

import { CategeoryService } from './categeory.service';

describe('CategeoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategeoryService = TestBed.get(CategeoryService);
    expect(service).toBeTruthy();
  });
});
