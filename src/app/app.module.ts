import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingModalComponent } from './greeting-modal/greeting-modal.component';
import { ResultsModalComponent } from './results-modal/results-modal.component';
import { PlayerBoxComponent } from './player-box/player-box.component';
import { ComputerBoxComponent } from './computer-box/computer-box.component';
import { GameElementComponent } from './game-element/game-element.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingModalComponent,
    ResultsModalComponent,
    PlayerBoxComponent,
    ComputerBoxComponent,
    GameElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
