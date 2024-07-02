import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { HeaderComponent } from '../../header/header.component';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [HeaderComponent,PageTitleComponent, TaskListComponent, CommonModule],
  templateUrl: './completed-task.component.html',
  styles: ''
})
export class CompletedTaskComponent {

  initialTaskList: any[] = []
  taskList: any[] = []
  newTask = "";
  httpService = inject(HttpService)
  stateService = inject(StateService);

  ngOnInit(){
    this.stateService.searchSubject.subscribe((value)=>{
      if(value){
        this.taskList=this.initialTaskList.filter(x=>x.title.toLowerCase().includes(value.toLowerCase()))
      }
      else{
        this.taskList=this.initialTaskList;
        this.getAllTask()
      }
    })
    }

  addTask() {
    this.httpService.addTask(this.newTask).subscribe(() => {
      this.newTask = "";
      this.getAllTask();
    })
  }
  
  getAllTask() {
    this.httpService.getAllTask().subscribe((res: any) => {
      this.taskList = this.initialTaskList= res.filter((x:any)=>x.completed==true)
    })
  }

  onComplete(task:any){
    task.completed = true;
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTask();
      
    })
  }
  
  onImportant(task:any){
    task.important = true;
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTask();
  
    })
  }

  DelTask(task:any){  
    task.delete=true
    this.httpService.delTask(task).subscribe(()=>{
    alert("deleted successfully");
    this.getAllTask();
    
    })
      
    }
}
