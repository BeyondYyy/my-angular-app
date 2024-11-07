import { Component } from '@angular/core';
import { HEROES } from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  msg = '海阔<b>天</b>空';
  flag = false;
  list = [
    {
      name: 'yuan',
      age: 20
    },
    {
      name: 'yang',
      age: 18
    },
    {
      name: 'yu',
      age: 20
    }
  ];
  testArr = [1,2,3,4,5]

  heroes = HEROES;
  master = 'Master'
}
