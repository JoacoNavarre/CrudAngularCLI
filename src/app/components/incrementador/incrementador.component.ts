import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  @Input() progress: number = 10;

  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  changeValues(value: number){
   if (this.progress <= 0 && value > 0)
   {
    this.outputValue.emit(0)
     this.progress = 0
   }
   else if (this.progress >= 100 && value > 0)
   {
    this.outputValue.emit(100)
     this.progress = 100
   }
   this.progress = this.progress + value
  this.outputValue.emit(this.progress)
  }

}
