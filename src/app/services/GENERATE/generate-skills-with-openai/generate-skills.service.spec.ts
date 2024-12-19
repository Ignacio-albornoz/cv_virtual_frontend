import { TestBed } from '@angular/core/testing';

import { GenerateSkillsService } from './generate-skills.service';

describe('GenerateSkillsService', () => {
  let service: GenerateSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
