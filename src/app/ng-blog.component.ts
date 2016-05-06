import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { SinglePostComponent } from './+single-post';
import { ListPostsComponent } from './+list-posts';

@Component({
  moduleId: module.id,
  selector: 'ng-blog-app',
  templateUrl: 'ng-blog.component.html',
  styleUrls: ['ng-blog.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/single-post', component: SinglePostComponent},
  {path: '/list-posts', component: ListPostsComponent}
])
export class NgBlogAppComponent {
  title = 'Tim Blog Test with ng2';
}
