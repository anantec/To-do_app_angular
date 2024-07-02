import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  httpClient = inject(HttpClient)
  constructor() { }

  // addTask(task:string){
  //   this.httpClient.post("http://localhost:3000/task", {
  //     title:task
  //   })
  // }


  addTask(task: string) {
    return this.httpClient.post("http://localhost:3000/task", {
      title: task
    });
  }
  
  getAllTask() {
    return this.httpClient.get("http://localhost:3000/task")
  }
  
  updateTask(task:any){
    return this.httpClient.put("http://localhost:3000/task/" +task.id, task);
  }

  delTask(task:any){
    return this.httpClient.delete("http://localhost:3000/task/" + task.id, task)
  }
}
