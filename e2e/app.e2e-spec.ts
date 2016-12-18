import { ScssProject4Page } from './app.po';

describe('scss-project-4 App', function() {
  let page: ScssProject4Page;

  beforeEach(() => {
    page = new ScssProject4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
