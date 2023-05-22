import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log(this.task); // Affiche les tâches reçues dans la console
  }

  updateStatus(): void {
    this.task.status = this.task.status === 'pending' ? 'finish' : 'pending';
  }

  deleteTask(): void {
    this.delete.emit(this.task);
  }
}
