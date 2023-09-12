import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/GET/get-courses/courses.service';
import { GenerateTitleWithOpeniaService } from 'src/app/services/GENERATE/generate-title-with-openai/generate-title-with-openai.service';
import { CreateCoverLetterWithOpenaiService } from 'src/app/services/GENERATE/generate-cover-letter-with-openai/create-cover-letter-with-openai.service'; 

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true
})
export class HeaderComponent implements OnInit{

  courses: Course[] = []

  titles: String[] = []

  constructor(
    private generateTWOS: GenerateTitleWithOpeniaService,
    private coursesService: CoursesService,
    private createCLWOS: CreateCoverLetterWithOpenaiService
    ){}

  testOpenIa(){
    this.generateTWOS.testOpenAI(this.titles)
    console.log('do it')
  }


  ngOnInit(): void {
    this.coursesService.getAllCourses()
    .subscribe(data => {
      this.courses = data
      this.titles = data.map( courses => courses.title);
      console.log(this.titles); 
    })
  }
}
