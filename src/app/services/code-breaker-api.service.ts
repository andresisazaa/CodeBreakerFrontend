import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodeBreakerAPIService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  setSecretNumber(number: number) {
    return this.http.get(`${this.BASE_URL}/setsecret/${number}`);
  }

  tryToGuessNumber(number: number) {
    return this.http.get(`${this.BASE_URL}/guess/${number}`);
  }
}