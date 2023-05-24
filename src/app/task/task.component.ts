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

  deleteTask() {
    this.taskService.deleteTask(this.task);
  }

  updateTask() {
    this.taskService.updateTask({
      ...this.task,
      status: this.task.status === 'pending' ? 'finish' : 'pending',
    });
  }
}
