import {Component, OnInit} from '@angular/core';
import {Users} from './core/models/users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user: Users = {};

  constructor() {

  }

  ngOnInit() {
  }

  displayNewLastname(event) {

  }
}
