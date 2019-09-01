import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodeBreakerAPIService {

  BASE_URL = 'https://codebreaker-andresisazaa.herokuapp.com';

  constructor(private http: HttpClient) { }

  generateSecretNumber() {
    let numbers: number[] = [];
    while (numbers.length < 4) {
      let randomNum: number = Math.floor(Math.random() * 10);
      if (!numbers.includes(randomNum)) numbers.push(randomNum);
    }
    return numbers.join('');
  }

  setSecretNumber() {
    let number = this.generateSecretNumber();
    number = '1234';
    return this.http.get(`${this.BASE_URL}/setsecret/${number}`);
  }

  tryToGuessNumber(number: string) {
    return this.http.get(`${this.BASE_URL}/guess/${number}`);
  }
}