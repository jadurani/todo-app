import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    console.log('here at todo list');
    console.log(this.todoService.todos);

  }

}
