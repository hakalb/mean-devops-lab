import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '@mean-devops-lab/data';

@Component({
  selector: 'mean-devops-lab-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos$: Observable<Todo[]>;

  constructor() {}

  ngOnInit() {}
}
