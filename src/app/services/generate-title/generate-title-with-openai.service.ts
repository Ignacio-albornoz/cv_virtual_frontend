import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Configuration, OpenAIApi } from 'openai';
import { Course } from 'src/app/models/course.model';
import { filter, from, map } from 'rxjs';
const APIKEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class GenerateTitleWithOpenaiService {

  constructor() { }

  readonly configuration = new Configuration({
    apiKey:APIKEY
  })

  
  

  readonly openai = new OpenAIApi(this.configuration);

  /*Params: listaDeCursos: Array<Course>*/

  getTitleWithOpenAI(listaDeCursos: Array<Course>){
    console.log(this.configuration);

    from(this.openai.createCompletion(
      {  
        model: "gpt-3.5-turbo",
        prompt: "Say this is a test",
        temperature: 0,
        max_tokens: 15,
      }
    )).pipe(
        filter( resp =>!!resp && !!resp.data),
        map( resp => resp.data),
        filter((data: any) => (
          data.choises && data.choises.length > 0 && data.choises[0].text
        )),
        map( data => data.choises)
    ).subscribe( data => {
      console.log(data);
    })
  }
}
