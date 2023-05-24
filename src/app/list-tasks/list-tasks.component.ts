import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
})

export class ListTasksComponent implements DoCheck{
  @Input() tasks: any[] | undefined;

  ngDoCheck() {
    console.log(this.tasks)
  }
  
}

