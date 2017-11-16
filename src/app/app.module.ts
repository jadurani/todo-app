import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemRendererComponent } from './todo-list/todo-item-renderer/todo-item-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoItemRendererComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
