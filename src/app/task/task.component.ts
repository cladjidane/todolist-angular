import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  updateStatus(): void {
    this.task.status = this.task.status === 'pending' ? 'finish' : 'pending';
  }

  deleteTask(): void {
    this.delete.emit(this.task);
  }
}
