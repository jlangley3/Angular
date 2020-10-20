import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1, 
        title: "Stuff 1",
        completed: false
      },
      {
        id: 2, 
        title: "Stuff 2",
        completed: false
      },
      {
        id: 3, 
        title: "Stuff 3",
        completed: true
      },
      {
        id: 4, 
        title: "Stuff 4",
        completed: false
      }

    ]
  }

}
