import { Component } from '@angular/core';
import { Result, RSP } from './models/game.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  computerSelection: RSP = null;
  elementsCount = Object.keys(RSP).filter((k) => Number(k)).length;
  elementsList = Object.keys(RSP).filter((k) => !Number(k));
  gameStarted = false;
  playerName = '';
  playerSelection: RSP = null;
  playNewGame = false;
  result: Result = null;
  showResultModal = false;
  timer;
  timerInterval;

  setPlayerName(name: string) {
    this.playerName = name;
  }

  startTimer() {
    this.timer = 5;
    this.result = null;
    this.timerInterval = setInterval(() => {
      if (this.timer === 0) {
        this.result = this.getResults();
        this.playNewGame = false;
        this.showResultModal = true;
        clearInterval(this.timerInterval);
        return;
      }
      this.timer -= 1;
    }, 1000);
  }

  startGame() {
    this.gameStarted = true;
    this.startTimer();
  }

  onPlayerSelection(selection: RSP) {
    this.playerSelection = selection;
  }

  onComputerSelection(selection: RSP) {
    this.computerSelection = selection;
  }

  getResults() {
    if (!this.playerSelection) {
      return Result.SELF_LOSS;
    }

    console.log(`
      Player: ${ this.playerSelection }
      Comp: ${ this.computerSelection }
    `);

    if (this.playerSelection === this.computerSelection) {
      return Result.DRAW;
    }

    const equator = (this.elementsCount - 1) / 2;

    let playerSelection = this.playerSelection === this.elementsCount ? 0 : this.playerSelection;

    for (let i = 0; i < equator; i++) {
      playerSelection = playerSelection === this.elementsCount ? 1 : playerSelection + 1;

      if (playerSelection === this.computerSelection) {
        i = equator;
        return Result.WIN;
      }
    }

    return Result.LOSS;
  }

  onStartNewGame(start: boolean) {
    this.showResultModal = false;
    if (start) {
      this.playNewGame = true;
      this.startTimer();
      return;
    }
  }
}
