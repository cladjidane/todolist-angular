import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})

export class ListTasksComponent {

  tasks: any[] | undefined;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  removeTask(task: any) {
    this.taskService.removeTask(task);
  }
}

