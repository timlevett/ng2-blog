import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import {Post} from '../post.model';


@Component({
  moduleId: module.id,
  selector: 'app-list-posts',
  templateUrl: 'list-posts.component.html',
  styleUrls: ['list-posts.component.css'],
  directives: [PostComponent]
})
export class ListPostsComponent implements OnInit {

  posts : Post[] = [
    {
      id : 1,
      title : 'First!',
      text : 'Very ipsum such dolor amet wow wow so filler so styling such divs so scare. So web much many css so layer very styling very develop very margin. Such such divs many css such beta very excuse such fierce so padding so margin many beta much spans such content. So web very margin much layer, such margin many css so beta much picture. Much spans so styling many very css.'
    },
    {
      id: 2,
      title : 'Second',
      text : 'Very ipsum such dolor amet wow wow so filler so styling such divs so scare. So web much many css so layer very styling very develop very margin. Such such divs many css such beta very excuse such fierce so padding so margin many beta much spans such content. So web very margin much layer, such margin many css so beta much picture. Much spans so styling many very css.Very ipsum such dolor amet wow wow so filler so styling such divs so scare. So web much many css so layer very styling very develop very margin. Such such divs many css such beta very excuse such fierce so padding so margin many beta much spans such content. So web very margin much layer, such margin many css so beta much picture. Much spans so styling many very css.'
    }
  ]

  constructor() {}

  ngOnInit() {
  }

}
