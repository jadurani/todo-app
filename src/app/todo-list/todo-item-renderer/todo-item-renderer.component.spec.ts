import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemRendererComponent } from './todo-item-renderer.component';

describe('TodoItemRendererComponent', () => {
  let component: TodoItemRendererComponent;
  let fixture: ComponentFixture<TodoItemRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
