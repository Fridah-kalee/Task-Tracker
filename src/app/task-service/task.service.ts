import { Injectable } from '@angular/core';
import { Tasks } from '../taskList';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  getTasks(){
    return Tasks
  }
  constructor() { }
}
