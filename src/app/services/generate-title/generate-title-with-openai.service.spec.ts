import { TestBed } from '@angular/core/testing';

import { GenerateTitleWithOpenaiService } from './generate-title-with-openai.service';

describe('GenerateTitleWithOpenaiService', () => {
  let service: GenerateTitleWithOpenaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateTitleWithOpenaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
