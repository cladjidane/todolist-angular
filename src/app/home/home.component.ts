import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tasks: any = []

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getHomeTasks();
  }

  ngDoCheck() {
    this.tasks = this.taskService.getHomeTasks();
  }
}
