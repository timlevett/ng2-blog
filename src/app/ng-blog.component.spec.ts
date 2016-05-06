import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgBlogAppComponent } from '../app/ng-blog.component';

beforeEachProviders(() => [NgBlogAppComponent]);

describe('App: NgBlog', () => {
  it('should create the app',
      inject([NgBlogAppComponent], (app: NgBlogAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-blog works!\'',
      inject([NgBlogAppComponent], (app: NgBlogAppComponent) => {
    expect(app.title).toEqual('ng-blog works!');
  }));
});
