import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: any[] = [
    {
      id: 'task-1',
      taskname: 'Saluer le boss',
      status: 'finish',
    },
    {
      id: 'task-2',
      taskname: 'Passer le balai',
      status: 'finish',
    },
    {
      id: 'task-3',
      taskname: 'Travailler un peu quand même !',
      status: 'pending',
    },
    {
      id: 'task-4',
      taskname: 'Mail pour Tatiana',
      status: 'pending',
    },
  ];

  getTasks(): any[] {
    return this.tasks;
  }

  addTask(task: any) {
    this.tasks.push(task);
  }
  
  updateTask(updatedTask: any): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      const updatedTasks = [...this.tasks];
      updatedTasks.splice(index, 1, updatedTask);
      this.tasks = updatedTasks;
    }
  }

  deleteTask(task: any): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) this.tasks.splice(index, 1);
  }
}
