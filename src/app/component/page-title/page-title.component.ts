import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './page-title.component.html',
  styles: ''
})
export class PageTitleComponent {

  

  datenow: Date;
   date = new Date;
  
  constructor() {
    this.datenow = new Date();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.datenow = new Date();
    }, 1000); // Update every second
  }
}

  // updateTime(): void {
  //   const now = new Date();
  //   this.currentTime = now.toLocaleTimeString();
  // }
// }
