import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoState } from '../../store/todo/todo.reducer';
import { TodoCreateAction, TodoDeleteAction, TodoToggleAction, TodoEditAction } from '../../store/todo/todo.actions';
import { todoListSelector } from '../../store/todo/todo.selectors';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo';
import { TodoSyncStorageService} from '../../service/todo-sync-storage.service'

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {
  todoList =[];
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>,
              private todoStorageService: TodoSyncStorageService
    ) { }

  ngOnInit(): void {
    this.todoStorageService.init();
  }

  onCreate(name: string) {
    console.log(name);
    this.store$.dispatch(new TodoCreateAction({name}));
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({id}));
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleAction({id}));
  }

  onEdit({id, name}) {
    this.store$.dispatch(new TodoEditAction({id,name}));
  }
}
