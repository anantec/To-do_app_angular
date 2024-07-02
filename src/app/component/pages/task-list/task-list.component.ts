import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject, input } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styles: ''
})
export class TaskListComponent {
@Input() taskList: any[] = []
@Output() important= new EventEmitter<any>();
@Output() complete= new EventEmitter<any>();
@Output() remove= new EventEmitter<any>();
@Output() delete= new EventEmitter<any>();

httpService = inject(HttpService)
markImpTask(task:any){
this.important.emit(task);
}

DelTask(task:any){
   this.delete.emit(task)
  console.log("button click")
}

markCmpTask(task:any){
   this.complete.emit(task);
 }
}
