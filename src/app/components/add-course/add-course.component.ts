import { Component } from '@angular/core';
import { addCourseService } from 'src/app/services/POST/add-course/add-course.service';
import { Course } from 'src/app/models/course.model';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-course',
    templateUrl: './add-course.component.html',
    styleUrls: ['./add-course.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class AddCourseComponent {
  course: Course = {
    title: '',
    finishedMonth: 0,
    finishedYear: 0,
    categories: []
  };

  constructor(
    private addCourseService: addCourseService
  ) {}

  onSubmit() {
    this.addCourseService.addCourse(this.course)
      .subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('This is the end!')
    });
  }
}

