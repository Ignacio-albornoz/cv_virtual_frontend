import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Course } from 'src/app/models/course.model';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCourses(){
    return this.http.get<Course[]>('/api/courses');
  }
}
