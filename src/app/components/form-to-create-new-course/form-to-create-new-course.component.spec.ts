import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToCreateNewCourseComponent } from './form-to-create-new-course.component';

describe('FormToCreateNewCourseComponent', () => {
  let component: FormToCreateNewCourseComponent;
  let fixture: ComponentFixture<FormToCreateNewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormToCreateNewCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormToCreateNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
