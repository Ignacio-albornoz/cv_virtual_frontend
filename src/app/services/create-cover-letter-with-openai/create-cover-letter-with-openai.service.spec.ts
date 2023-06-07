import { TestBed } from '@angular/core/testing';

import { CreateCoverLetterWithOpenaiService } from './create-cover-letter-with-openai.service';

describe('CreateCoverLetterWithOpenaiService', () => {
  let service: CreateCoverLetterWithOpenaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCoverLetterWithOpenaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
