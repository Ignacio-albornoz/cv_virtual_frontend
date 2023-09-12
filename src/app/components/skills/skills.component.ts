import { Component, OnInit } from '@angular/core';
import { GenerateSkillsService } from 'src/app/services/GENERATE/generate-skills-with-openai/generate-skills.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent implements OnInit{

  titles: String[] = [];
  txt: string | undefined;
  listOfSkills: String[] | undefined;
  saveJson: JSON | undefined

  constructor( private generateSkillsService: GenerateSkillsService ){

  }

  onClick(){
    
  }

  ngOnInit(): void {
    this.generateSkillsService.generateSkills().subscribe(
      data => {
        console.log(data);
        this.txt = data.choices[0].text?.toString();
        this.listOfSkills = this.txt?.split(':')
        this.txt ? console.log(
        this.saveJson = JSON.parse(this.txt)) : console.log("Error");
        
      }
    )
  }
}
