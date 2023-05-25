import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todolist-angular';
  tasks = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe({
      next: (response: any) => {
        this.tasks = response.todos;
      },
      error: (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des tâches :', error);
      }
    });
  }
}
