export class NgBlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-blog-app h1')).getText();
  }
}
