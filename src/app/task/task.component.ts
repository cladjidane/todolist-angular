import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  updateStatus(): void {
    let updatedtask = {...this.task, status: this.task.status === 'pending' ? 'finish' : 'pending'}
    this.update.emit(updatedtask);
  }

  deleteTask(): void {
    this.delete.emit(this.task);
  }
}
