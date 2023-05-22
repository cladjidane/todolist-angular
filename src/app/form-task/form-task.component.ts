import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {
  newTask: string | undefined;
  @Output() add: EventEmitter<any> = new EventEmitter();

  addTask() {
    this.add.emit(this.newTask);
  }
}
