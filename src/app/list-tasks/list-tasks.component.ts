import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})
export class ListTasksComponent {
  @Input() tasks: string[] | undefined;
  @Output() delete: EventEmitter<string> = new EventEmitter<string>();

  deleteTask(task: string): void {
    this.delete.emit(task);
  }
}

