import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
      <div class="four wide column center aligned votes">
          <div class="ui statistic">
              <div class="value">{{votes}}</div>
              <div class="label">Points</div>
          </div>
      </div>
      <div class="twelve wide column"><a href="{{link}}" class="ui large header">
          {{title}}
      </a>
          <ul class="ui big horizontal list voters">
              <li class="item">
                  <a href (click)="voteUp()">
                      <i class="arrow up icon"></i>
                      upvote
                  </a>
              </li>
              <li class="item">
                  <a href (click)="voteDown()">
                      <i class="arrow down icon"></i>
                      downvote
                  </a>
              </li>
          </ul>
      </div>

  `,
  styles: []
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular';
    this.link = 'http://angular.io';
    this.votes = 10;
  }


  ngOnInit() {
  }

  voteUp(): boolean {
    this.votes += 1;
    return  false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return  false;
  }
}
