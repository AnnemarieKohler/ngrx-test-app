import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient) {}

  public getQuestions(level): Observable<any> {
    return this.http.get(`http://localhost:4200/assets/questions.json`);
  }
}
