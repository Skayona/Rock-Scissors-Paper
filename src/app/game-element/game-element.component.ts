import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-element',
  templateUrl: './game-element.component.html',
  styleUrls: ['./game-element.component.scss']
})
export class GameElementComponent {
  src: string;
  alt: string;

  @Input() set element(e: string) {
    this.src = `./assets/images/${ e }.png`;
    this.alt = e;
  }

}
