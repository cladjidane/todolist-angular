import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  newTask: string | undefined;

  constructor(private taskService: TaskService) { }

  addTask() {
    const task = {
      id: this.taskService.tasks.length,
      taskname: this.newTask,
      status: 'pending'
    };

    this.taskService.addTask(task);

    this.newTask = '';
  }
}
