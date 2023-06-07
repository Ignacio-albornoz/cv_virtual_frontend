import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service'
import { Course } from 'src/app/models/course.model';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
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
