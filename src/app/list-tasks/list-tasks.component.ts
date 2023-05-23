import { Component } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent {
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

  tasksPending = this.tasks.filter((task) => task.status === 'pending');
  tasksFinish = this.tasks.filter((task) => task.status === 'finish');

  updateTask(updatedTask: any): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      const updatedTasks = [...this.tasks];
      updatedTasks.splice(index, 1, updatedTask);
      this.tasks = updatedTasks;

      this.tasksPending = this.tasks.filter((task) => task.status === 'pending');
      this.tasksFinish = this.tasks.filter((task) => task.status === 'finish');
    }
  }

  deleteTask(task: any): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) this.tasks.splice(index, 1);

    this.tasksPending = this.tasks.filter((task) => task.status === 'pending');
    this.tasksFinish = this.tasks.filter((task) => task.status === 'finish');
  }
}
