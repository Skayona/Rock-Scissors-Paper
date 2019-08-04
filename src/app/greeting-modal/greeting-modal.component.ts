import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeting-modal',
  templateUrl: './greeting-modal.component.html',
  styleUrls: ['./greeting-modal.component.scss']
})
export class GreetingModalComponent {
  playerName = '';

  @Output() setPlayerName  = new EventEmitter<string>();

  onSetPlayerName() {
    this.setPlayerName.emit(this.playerName);
  }
}
