import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-item',
  template: `
      <form class="ui large form segment">
          <h3 class="ui header">Add a link</h3>
          <div class="field">
              <label for="title">Title:</label>
              <input name="title" id="title" #newtitle>
          </div>
          <div class="field">
              <label for="link">Link:</label>
              <input name="link" id="link" #newlink>
          </div>
          <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
              Submit Link
          </button>
      </form>
        <div class="ui grid posts">
            <app-article></app-article>
        </div>
  `,
  styles: []
})
export class UserItemComponent implements OnInit {
  name: string;

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }

  constructor() {
    this.name = 'Felipe';
  }

  ngOnInit() {
  }

}
