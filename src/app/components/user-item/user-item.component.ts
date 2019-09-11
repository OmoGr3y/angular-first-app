import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';

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
            <app-article *ngFor="let article of sortedArticles()" [article]="article"></app-article>
        </div>
  `,
  styles: []
})
export class UserItemComponent implements OnInit {
  name: string;
  articles: Article[];

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  constructor() {
    this.name = 'Felipe';
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  ngOnInit() {
  }

}
