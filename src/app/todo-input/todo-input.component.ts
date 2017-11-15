import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {
  todoModel;
  
  constructor(public todoService:TodoService) {}
  
  ngOnInit() {}

  onSubmit() {
    this.todoService.todos.push(this.todoModel);
    console.log(this.todoService.todos);
  }  
}
