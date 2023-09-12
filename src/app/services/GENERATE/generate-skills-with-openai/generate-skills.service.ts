import { Injectable, OnInit } from '@angular/core';
import { GetCourseTitlesService } from '../../GET/get-course-titles/get-course-titles.service';
import { OpenAiService } from '../../openai/openai.service';
import { PromptToGenerateSkills } from 'src/app/prompt/generate-skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateSkillsService implements OnInit{

  titles: String[] = [];

  resp: string | undefined;

  prompt = PromptToGenerateSkills;

  constructor( 
    private getCTS: GetCourseTitlesService, 
    private openAiService: OpenAiService 
    ){}
  
  generateSkills(){
    return this.openAiService.generateWithString(this.prompt, this.titles.toString())
  }

  ngOnInit(): void {
    this.getCTS.getCourseTitles()
    .subscribe(data => this.titles = data)
    
  }
}
