import { Component, OnInit } from '@angular/core';
import {PostComponent } from '../post/post.component';
import {Post} from '../post.model';

@Component({
  moduleId: module.id,
  selector: 'app-single-post',
  templateUrl: 'single-post.component.html',
  styleUrls: ['single-post.component.css'],
  directives: [PostComponent]
})
export class SinglePostComponent implements OnInit {
  posts : Post[] = [
    {
      id : 1,
      title: 'Attempt 1',
      text : 'Very ipsum such dolor amet wow wow so filler so styling such divs so scare. So web much many css so layer very styling very develop very margin. Such such divs many css such beta very excuse such fierce so padding so margin many beta much spans such content. So web very margin much layer, such margin many css so beta much picture. Much spans so styling many very css.'

    },
    {
      id : 2,
      title: 'Attempt 2',
      text : 'Very ipsum such dolor amet wow wow so filler so styling such divs so scare. So web much many css so layer very styling very develop very margin. Such such divs many css such beta very excuse such fierce so padding so margin many beta much spans such content. So web very margin much layer, such margin many css so beta much picture. Much spans so styling many very css.'

    },
    {
      id : 3,
      title: 'Attempt 3',
      text : 'Very ipsum such dolor amet wow wow so filler so styling such divs so scare. So web much many css so layer very styling very develop very margin. Such such divs many css such beta very excuse such fierce so padding so margin many beta much spans such content. So web very margin much layer, such margin many css so beta much picture. Much spans so styling many very css.'

    },
    {
      id : 4,
      title: 'Attempt 4',
      text : 'Very ipsum such dolor amet wow wow so filler so styling such divs so scare. So web much many css so layer very styling very develop very margin. Such such divs many css such beta very excuse such fierce so padding so margin many beta much spans such content. So web very margin much layer, such margin many css so beta much picture. Much spans so styling many very css.'

    }
  ]

  post : Post;
  index : number;

  constructor() {}

  ngOnInit() {
    this.index = 0;
    this.post = this.posts[this.index];
  }

  changePost(changeNum : number) {
    this.index = this.index + changeNum;
    this.post = this.posts[this.index];

  }

}
