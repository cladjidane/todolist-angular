import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
tasks: any = []

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>('https://dummyjson.com/todos');
  }

  addTask(task: any) {
    this.tasks.push(task);
  }

  deleteTask(task: any): void {
    // const index = this.tasks.indexOf(task);
    // if (index !== -1) this.tasks.splice(index, 1);
  }
}
