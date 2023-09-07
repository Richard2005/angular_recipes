import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  index:number=0;
  interval;

  startGame(event){
    this.index++;
    console.log('...startting the Game...'+this.index);
    this.interval = setInterval(()=> {
        this.intervalFired.emit(this.index);
        this.index++;
    }, 1000);
  }

onPauseGame() {
  clearInterval(this.interval); 
  this.index=0;
}

}
