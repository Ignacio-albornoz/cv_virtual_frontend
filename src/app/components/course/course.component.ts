import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';


@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    standalone: true
})
export class CourseComponent implements OnInit{
  
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


  formatTitle(title: string) {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  }
  

  constructor(){}

  ngOnInit(): void {
  }
}
