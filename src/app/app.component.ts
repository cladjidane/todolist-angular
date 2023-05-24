import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todolist-angular';
  tasks: any = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskService.getTasks().subscribe(
      response => {
        this.tasks = response;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des tâches :', error);
      }
    );
  }
}
