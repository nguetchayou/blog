import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  postTitle = 'title';
  heureCreation = '10/8/8123, 12:50 am';
  contenu = 'Ici se trouve l\'explication';
  number = 0;
  @Input() post = {
    title: this.postTitle,
    content: this.contenu,
    loveIts: this.number,
    createAt: this.heureCreation
  };
  constructor() { }

  ngOnInit() {
  }
  onLoveIt() {
    this.number++;
  }
  onDontLoveIt() {
    this.number--;
  }
}
