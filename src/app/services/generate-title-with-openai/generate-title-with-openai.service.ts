import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { EMPTY, catchError, from, map } from 'rxjs';
import { environment } from 'src/environment/environment';
import { PromptToGenerateTitle } from 'src/app/prompt/generate-title';

const APIKEY = environment.apiKey;
const ORGANIZATION = environment.organization;

@Injectable({
  providedIn: 'root'
})
export class GenerateTitleWithOpeniaService {

  private openai: OpenAIApi;

  private promptToGenerateTitle = PromptToGenerateTitle

  constructor() {
    const configuration = new Configuration({
      apiKey: APIKEY,
      organization: ORGANIZATION,
    });
    this.openai = new OpenAIApi(configuration)
  }

  testOpenAI(listaDeCursos: Array<String>) {
    console.log([this.promptToGenerateTitle.prompt_init + listaDeCursos + this.promptToGenerateTitle.prompt_end])
    from(this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: [this.promptToGenerateTitle.prompt_init + listaDeCursos + this.promptToGenerateTitle.prompt_end],
      temperature: PromptToGenerateTitle.temperature,
      max_tokens: PromptToGenerateTitle.max_tokens,
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
