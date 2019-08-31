import { Component } from '@angular/core';
import { CodeBreakerAPIService } from './services/code-breaker-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Breaker';
  number: number;
  guess: number;
  response: string;
  guessResponse: string;
  constructor(private codeBreakerAPI: CodeBreakerAPIService) { }

  setSecret() {
    this.codeBreakerAPI.setSecret(this.number)
      .subscribe(data => {
        this.response = data['message'];
      });
  }

  checkGuess() {
    this.codeBreakerAPI.checkGuess(this.guess)
      .subscribe(data => {
        this.guessResponse = data['result'];
      })
  }
}
