import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

   progress: number = 10;

   get getPercentage(){

    return `${this.progress}%`

   }

   changeValues(value: number){
    if (this.progress <= 0 && value > 0)
    {
      this.progress = 0
    }
    else if (this.progress >= 100 && value > 0)
    {
      this.progress = 100
    }
    this.progress = this.progress + value
   }

}
