import { TestBed } from '@angular/core/testing';

import { UpdateSkillsService } from './update-skills.service';

describe('UpdateSkillsService', () => {
  let service: UpdateSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
