import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from '../../models/article';

@Component({
  selector: 'app-article',
  template: `
      <div class="four wide column center aligned votes">
          <div class="ui statistic">
              <div class="value">{{article.votes}}</div>
              <div class="label">Points</div>
          </div>
      </div>
      <div class="twelve wide column"><a href="{{article.link}}" class="ui large header">
          {{article.title}}
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
  @Input() article: Article;


  constructor() {

  }


  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
