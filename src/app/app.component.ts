import { Component, OnInit } from '@angular/core';
import { CodeBreakerAPIService } from './services/code-breaker-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'Code Breaker';
  guessedNumber: boolean;
  results: any[];
  response: string;
  message: string;
  constructor(private codeBreakerAPI: CodeBreakerAPIService) { }

  ngOnInit() {
    this.codeBreakerAPI.setSecretNumber()
      .subscribe(res => {
        this.response = res['message'];
      });
    this.results = [];
    this.message = null;
    this.guessedNumber = false;
  }

  playAgain() {
    this.codeBreakerAPI.setSecretNumber()
      .subscribe(res => {
        this.response = res['message'];
      });
    this.results = [];
    this.message = null;
    this.guessedNumber = false;
  }
  checkGuess(input: HTMLInputElement) {
    if (!input.value || input.value.length !== 4) return;
    this.codeBreakerAPI.tryToGuessNumber(input.value)
      .subscribe(res => {
        this.response = res['result'];
        if (this.response === 'XXXX') {
          this.message = 'You won!';
          this.guessedNumber = true;
        } else if (!this.response) {
          this.response = 'no matches';
        }
        this.results.push({
          guess: input.value,
          response: res['result']
        });
        input.value = null;
      });
  }
}
