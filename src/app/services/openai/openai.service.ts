import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { EMPTY, Observable, catchError, filter, from, map } from 'rxjs';
import { Prompt } from 'src/app/models/prompt.model';
import { environment } from 'environment/environment';

const APIKEY = environment.apiKey;
const ORGANIZATION = environment.organization;


@Injectable({
  providedIn: 'root'
})
export class OpenAiService{
  private openai: OpenAIApi;  
  private prompt_completo: string | undefined;
  private respuesta: string | undefined;

  constructor() {
    const configuration = new Configuration({
      apiKey: APIKEY,
      organization: ORGANIZATION,
    });
    this.openai = new OpenAIApi(configuration)
  }

  generateWithString(prompt: Prompt, text: string){

    this.prompt_completo = this.concatenarStrings(prompt.prompt, text, prompt.prompt_end);

    return from(this.openai.createCompletion({
      model: prompt.model,
      prompt: this.prompt_completo,
      temperature: prompt.temperature,
      max_tokens: 2000
    })).pipe(
      catchError(error => {
        console.error(error);
        return EMPTY;
      }),
      map(response => response.data)
    )

  }

  concatenarStrings(str1: string, str2: string, str3: string) {
    return str1.concat(str2.concat(str3));
  }


  testOpenAI() {
    
    from(this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'test',
      temperature: 1,
      
    })).pipe(
      catchError(error => {
        console.error(error);
        return EMPTY;
      }),
      map(response => response.data)
    ).subscribe(data => {
      console.log(data.choices[0].text);
    });
  }
}
