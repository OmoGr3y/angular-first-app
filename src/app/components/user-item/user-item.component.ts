import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  template: `
    <h5 class="ui large header">
        Hello {{name}}
    </h5>
  `,
  styles: []
})
export class UserItemComponent implements OnInit {
  name: string;

  constructor() {
    this.name = 'Felipe';
  }

  ngOnInit() {
  }

}
