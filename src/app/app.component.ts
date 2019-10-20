import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = new Date();
  postsL = [];

  posts = [
    {
      title: 'JavaScript',
      content: 'la programmation en JavaScript est tres interessante. Dans les années antérieures le JavaScript était négligé',
      loveIts: 0,
      createAt: this.date
    },
    {
      title: 'Dance',
      content: 'Des exemples notables de cette variété peuvent impliquer la collaboration en 1977 du producteur Giorgio ' +
        'Moroder avec la chanteuse Donna Summer sur la chanson I Feel Love, une chanson dance à succès composée sans aide ' +
        'd\'instrument traditionne',
      loveIts: 0,
      createAt: this.date
    },
    {
      title: 'Pleure',
      content: 'Ca fait du bien',
      loveIts: 0,
      createAt: this.date
    }
  ];

  constructor() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.posts.length; i++) {
      this.postsL.push(new Post(this.posts[i].title, this.posts[i].content,
        this.posts[i].loveIts, this.posts[i].createAt));
    }
  }
}

export class Post {
  title: string;
  content: string;
  loveIts: number;
  createAt;
  constructor(title: string, contentIn: string, loveItsIn: number, createAtIn) {
    this.title = title;
    this.content = contentIn;
    this.loveIts = loveItsIn;
    this.createAt = createAtIn;
  }
  get getPostTitle(): string {
    return this.title;
  }

  get getContent(): string {
    return this.content;
  }

  get getLoveIts(): number {
    return this.loveIts;
  }

  get getCreateAt(): Date {
    return this.createAt;
  }
}
