import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  template: `
    <form class="ui large form segment">
        <h3 class="ui header">Add a link</h3>
        
        <div class="field">
            <label for="title">Title:</label>
            <input name="title" id="title">
        </div>
        <div class="field">
            <label for="link">Link:</label>
            <input name="link" id="link">
        </div>
    </form>
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
