import { Injectable } from '@nestjs/common';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '@mean-devops-lab/data';

@Injectable()
export class AppService {
  private todos$ = new BehaviorSubject<Todo[]>([]);

  getData(): Todo[] {
    return this.todos$.getValue();
  }

  addTodo() {
    const title = `New todo ${Math.floor(Math.random() * 1000)}`;
    const todos = this.todos$.getValue();
    this.todos$.next([...todos, { title: title }]);
  }
}
