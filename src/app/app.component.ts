import { Component } from '@angular/core';
import { CodeBreakerAPIService } from './services/code-breaker-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Code Breaker';
  secretNumberUnsetted: boolean = true;
  guessedNumber: boolean = false;
  results: any[] = [];
  number: number;
  response: string;
  message: string;
  constructor(private codeBreakerAPI: CodeBreakerAPIService) { }

  setSecret() {
    if (!this.number) return;
    this.codeBreakerAPI.setSecretNumber(this.number)
      .subscribe(res => {
        this.response = res['message'];
        this.secretNumberUnsetted = false;
      });
    this.results = [];
    this.message = null;
    this.guessedNumber = false;
    this.number = null;
  }

  checkGuess() {
    if (!this.number) return;
    this.codeBreakerAPI.tryToGuessNumber(this.number)
      .subscribe(res => {
        this.response = res['result'];
        if (this.response === 'XXXX') {
          this.message = 'You won!';
          this.guessedNumber = true;
        } else if (!this.response) {
          this.response = 'no matches';
        }
        this.results.push({
          guess: this.number,
          response: res['result']
        });
        this.number = null;
      });
  }
}
