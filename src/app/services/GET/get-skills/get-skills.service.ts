import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Skills } from 'src/app/models/skills.model';

@Injectable({
  providedIn: 'root'
})

export class GetSkill {

  constructor(
    private http: HttpClient
  ) { }

  getSkill(){
    return this.http.get<Skills[]>('/api/skills');
  }
  
}