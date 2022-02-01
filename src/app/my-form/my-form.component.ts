import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
model: User = new User();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
  }
}
