import { TestBed } from '@angular/core/testing';

import { GetCourseTitlesService } from './get-course-titles.service';

describe('GetCourseTitlesService', () => {
  let service: GetCourseTitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCourseTitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
