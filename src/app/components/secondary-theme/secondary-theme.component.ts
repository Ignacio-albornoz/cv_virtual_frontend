import { Component } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { PersonalDataComponent } from '../personal-data/personal-data.component';
import { TitleComponent } from '../title/title.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-secondary-theme',
  templateUrl: './secondary-theme.component.html',
  styleUrls: ['./secondary-theme.component.css'],
  standalone: true,
  imports: [CoursesComponent, PersonalDataComponent, TitleComponent, SkillsComponent]
})
export class SecondaryThemeComponent {

}
