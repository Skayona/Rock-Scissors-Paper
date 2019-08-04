import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { RSP } from '../models/game.models';

@Component({
  selector: 'app-computer-box',
  templateUrl: './computer-box.component.html',
  styleUrls: ['./computer-box.component.scss']
})
export class ComputerBoxComponent implements OnInit, OnChanges {
  currIndex: number;
  interval;
  selectedElement: string;

  @Input() count: number;
  @Input() playNewGame: boolean;
  @Input() timer: number;

  @Output() computerSelection = new EventEmitter<RSP>();

  get randomInt(): number {
    return Math.floor(Math.random() * this.count) + 1;
  }

  getRandomIndex(prevIndex: number): number {
    const index = this.randomInt;
    if (prevIndex === index) {
      return this.getRandomIndex(index);
    } else {
      return index;
    }
  }

  startSelectingElement() {
    this.interval = setInterval(() => {
      this.currIndex = this.getRandomIndex(this.currIndex);
      this.selectedElement = RSP[this.currIndex];
    }, 100);
  }

  ngOnInit() {
    this.currIndex = this.randomInt;
    this.selectedElement = RSP[this.currIndex];
    this.startSelectingElement();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.timer === 0) {
      clearInterval(this.interval);
      this.computerSelection.emit(this.currIndex);
    }

    if (changes.playNewGame && changes.playNewGame.currentValue) {
      this.startSelectingElement();
    }
  }


}
