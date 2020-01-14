import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Todo {
  title: String;
}

@Component({
  selector: 'mean-devops-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'todos';
  todos$: Observable<Todo[]>;

  constructor(private http: HttpClient) {
    this.getTodos();
  }

  getTodos() {
    this.todos$ = this.http.get<Todo[]>('/api/todos');
  }

  addTodo() {
    this.todos$ = this.http.post<Todo[]>('/api/addTodo', {});
  }
}
