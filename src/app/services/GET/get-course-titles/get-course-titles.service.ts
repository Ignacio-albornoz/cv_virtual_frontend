import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class GetCourseTitlesService {

  constructor(
    private http: HttpClient
  ) { }

  getCourseTitles(){
    return this.http.get<String[]>('/api/courses/titles');
  }
}