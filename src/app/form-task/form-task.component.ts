import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  newTask: any;
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Input() tasks: string[] | undefined;

  addTask() {
    this.add.emit(
      {
        id: `task-${this.tasks?.length}`,
        taskname: this.newTask,
        status: 'pending',
      });
  }
}
