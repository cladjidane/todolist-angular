import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks: any = []

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  ngDoCheck() {
    this.tasks = this.taskService.getTasks();
  }
}
