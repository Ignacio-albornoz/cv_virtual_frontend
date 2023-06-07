import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ExpirienceComponent } from './components/expirience/expirience.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { AddCourseComponent } from './components/add-course/add-course.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CourseComponent,
    CoursesComponent,
    ExpirienceComponent,
    PersonalDataComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
