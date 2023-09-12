import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/GET/get-courses/courses.service'
import { Course } from 'src/app/models/course.model';
import { CourseComponent } from '../course/course.component';
import { NgFor } from '@angular/common';


@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css'],
    standalone: true,
    imports: [NgFor, CourseComponent]
})
export class CoursesComponent implements OnInit{
  
  courses: Course[] = []
  

  constructor(
    private coursesService: CoursesService
    ) {}
  
  ngOnInit(): void {
    this.coursesService.getAllCourses()
    .subscribe(data => {
      this.courses = data
      console.log(this.courses)
    })
  }

  

}
