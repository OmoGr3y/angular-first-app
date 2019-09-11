export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndpath: string = this.link.split('//')[1];
      // e.g foo.com/path/to/bar
      return  domainAndpath.split('/')[0];
    } catch (e) {
      return  null;

    }
  }
}
