import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-item-renderer',
  templateUrl: './todo-item-renderer.component.html',
  styleUrls: ['./todo-item-renderer.component.css']
})
export class TodoItemRendererComponent {
  @Input() todoItem;
  
  constructor() { }

}
