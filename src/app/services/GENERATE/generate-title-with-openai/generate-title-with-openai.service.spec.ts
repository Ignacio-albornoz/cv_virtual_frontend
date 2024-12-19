import { TestBed } from '@angular/core/testing';

import { GenerateTitleWithOpeniaService } from './generate-title-with-openai.service';

describe('GenerateTitleWithOpeniaService', () => {
  let service: GenerateTitleWithOpeniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateTitleWithOpeniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
