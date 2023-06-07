import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { EMPTY, catchError, from, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { PromptToGenerateTitle } from 'src/app/prompt/generate-title';
import { PromptToCreateCover } from 'src/app/prompt/create-cover';
const APIKEY = environment.apiKey;
const ORGANIZATION = environment.organization;

@Injectable({
  providedIn: 'root'
})
export class CreateCoverLetterWithOpenaiService {

  private openai: OpenAIApi;

  private promptToCreateCover = PromptToCreateCover

  constructor() {
    const configuration = new Configuration({
      apiKey: APIKEY,
      organization: ORGANIZATION,
    });
    this.openai = new OpenAIApi(configuration)
  }

  testOpenAI(listaDeCursos: Array<String>) {
    console.log([this.promptToCreateCover.prompt + listaDeCursos])
    from(this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: [this.promptToCreateCover.prompt + listaDeCursos],
      temperature: PromptToGenerateTitle.temperature,
      max_tokens: PromptToGenerateTitle.max_tokens,
    })).pipe(
      catchError(error => {
        console.error(error);
        return EMPTY;
      }),
      map(response => response.data)
    ).subscribe(data => {
      console.log(data);
    });
  

  }
}
