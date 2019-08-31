import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodeBreakerAPIService {
  constructor(private http: HttpClient) { }

  setSecret(num: number) {
    return this.http.get(`http://localhost:3000/setsecret/${num}`);
  }

  checkGuess(num: number) {
    return this.http.get(`http://localhost:3000/guess/${num}`)
  }
}
