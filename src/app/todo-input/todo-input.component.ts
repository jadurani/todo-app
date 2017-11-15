import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {

  constructor(public todoService:TodoService) {}

  onClick(value) {
    console.log(value);
    this.todoService.todos.push(value);
    console.log(this.todoService.todos);
  }

  ngOnInit() {}
}
