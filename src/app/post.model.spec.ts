import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Post} from './post.model';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post("test")).toBeTruthy();
  });
});
