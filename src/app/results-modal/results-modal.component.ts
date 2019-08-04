import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Result, RSP } from '../models/game.models';

@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.component.html',
  styleUrls: ['./results-modal.component.scss']
})
export class ResultsModalComponent {
  cSelection;
  pSelection;
  result = Result;

  @Input() playerName = '';
  @Input() gameResult: Result;
  @Input() set computerSelection(selection) {
    this.cSelection = RSP[selection];
  }
  get computerSelection() {
    return this.cSelection;
  }
  @Input() set playerSelection(selection) {
    this.pSelection = RSP[selection];
  }
  get playerSelection() {
    return this.pSelection;
  }

  @Output() startNewGame = new EventEmitter<boolean>();

  hideResults(startNew = false) {
    this.startNewGame.emit(startNew);
  }
}
