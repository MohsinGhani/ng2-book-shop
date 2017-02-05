import { DbPage } from './app.po';

describe('db App', function() {
  let page: DbPage;

  beforeEach(() => {
    page = new DbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
