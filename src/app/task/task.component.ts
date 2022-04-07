import { Component, OnInit } from '@angular/core';
// import { task } from '../task';
import{ Task } from '../task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[] = [
    new Task(1,'Go to the gym','for aerobics',new Date(2022,4,14)),
    new Task(2,'Cook','minji',new Date(2022,4,15)),
    new Task(3,'Go to work','on my projects',new Date(2022,4,14)),
];
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
  }
}
}
  constructor() { }

  ngOnInit(): void {
  }

}
