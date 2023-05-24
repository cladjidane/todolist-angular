import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log(this.task); // Affiche les tâches reçues dans la console
  }

  deleteTask(): void {
    this.delete.emit(this.task);
  }

  updateStatus(): void {
    this.update.emit({
      ...this.task,
      status: this.task.status === 'pending' ? 'finish' : 'pending',
    });
  }
}
