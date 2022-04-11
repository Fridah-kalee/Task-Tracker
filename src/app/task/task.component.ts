import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task-service/task.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[];
  alertService:AlertService;
  quote:Quote;
   
  addNewTask(task){
  let taskLength =this.tasks.length;
  task.id =taskLength+1;
  task.completeDate =new Date(task.completeDate)
  this.tasks.push(task)
}
toggleDetails(index){
  this.tasks[index].showDescription = !this.tasks[index].showDescription;
}
deleteTask(isComplete, index){
  if (isComplete) {
  let toDelete = confirm(`Are you sure you want to delete ${this.tasks[index].name}?`)
  if (toDelete) {
    this.tasks.splice(index,1);
    this.alertService.alertMe("The task has been deleted")
  }
}
}

  constructor(taskService:TaskService,alertService:AlertService,private http:HttpClient){
    this.tasks =taskService.getTasks()
    this.alertService = alertService;
  }
  ngOnInit(): void {
    interface ApiResponse{
      author:string;
      quote:string;
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Successful API request
      this.quote = new Quote(data.author, data.quote)
    },err=>{
      this.quote=new Quote("Winston Churchill","Never never give up")
      console.log("An error occured")
    }
    )
  }

}
