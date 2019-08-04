import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RSP, Result } from '../models/game.models';

@Component({
  selector: 'app-player-box',
  templateUrl: './player-box.component.html',
  styleUrls: ['./player-box.component.scss']
})
export class PlayerBoxComponent implements OnChanges {
  disabled = false;
  selectedElement: string = null;

  @Input() elementsList: [];
  @Input() playNewGame: boolean;
  @Input() timer: number;

  @Output() playerSelection = new EventEmitter<RSP>();

  onSelectElement(element: string) {
    this.selectedElement = element;
    this.playerSelection.emit(RSP[element]);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.disabled = this.timer === 0;

    if (changes.playNewGame && changes.playNewGame.currentValue) {
      this.selectedElement = null;
    }
  }
}
