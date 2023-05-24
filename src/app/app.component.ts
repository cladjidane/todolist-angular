import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist-angular';

  taskList: any[] = [
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

  deleteTask(task: any): void {
    const index = this.taskList.indexOf(task);
    if (index !== -1) this.taskList.splice(index, 1);
  }

  updateTask(updatedTask: any): void {
    console.log(updatedTask)
    const index = this.taskList.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      const updatedTasks = [...this.taskList];
      updatedTasks.splice(index, 1, updatedTask);
      this.taskList = updatedTasks;
    }
  }

  addTask(task: any): void {
    this.taskList.push(task)
  }
}
