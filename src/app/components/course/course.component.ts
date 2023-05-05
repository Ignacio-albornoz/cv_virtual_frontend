import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course: Course = {
    id: 0,
    title: '',
    description: '',
    duration: 0,
    finishedMonth: 1,
    finishedYear: 2000,
    startMonth: 1,
    startYear: 2000,
    establishment: '',
    technologies: [],
    categories: []
  }
}
