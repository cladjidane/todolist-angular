import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: any;
  constructor(private taskService: TaskService) { }
  
  updateStatus(): void {
    this.taskService.addTask(this.task);
  }

  deleteTask(): void {
    this.taskService.deleteTask(this.task);
  }
}
