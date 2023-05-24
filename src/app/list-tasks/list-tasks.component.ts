import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})

export class ListTasksComponent {

  @Input() tasks: any[] | undefined;

  removeTask(task: any) {
    //this.taskService.removeTask(task);
  }
}

