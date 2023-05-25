import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormTaskComponent } from './form-task/form-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TaskComponent } from './task/task.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormTaskComponent,
    ListTasksComponent,
    TaskComponent,
    ButtonComponent,
    TasksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
