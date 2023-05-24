import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent {
  @Input() tasks: any[] = [];
  tasksPending: any[] = []; 
  tasksFinish: any[] = []; 

  ngOnInit() {
    this.tasksPending = this.tasks.filter((task) => task.status === 'pending');
    this.tasksFinish = this.tasks.filter((task) => task.status === 'finish');
  }

  ngDoCheck() {
    this.tasksPending = this.tasks.filter((task) => task.status === 'pending');
    this.tasksFinish = this.tasks.filter((task) => task.status === 'finish');
  }

}
