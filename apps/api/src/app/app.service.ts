import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  title: String;
}

@Injectable()
export class AppService {
  private todos$ = new BehaviorSubject<Todo[]>([{ title: 'First todo' }]);

  getData(): Todo[] {
    return this.todos$.getValue();
  }

  addTodo() {
    const title = `New todo ${Math.floor(Math.random() * 1000)}`;
    const todos = this.todos$.getValue();
    this.todos$.next([...todos, { title: title }]);
  }
}
