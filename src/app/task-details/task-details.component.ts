import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent {
  task: any
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTask(id);
    console.log(this.task)
  }

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
