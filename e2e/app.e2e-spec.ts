import { MultimodulePage } from './app.po';

describe('multimodule App', function() {
  let page: MultimodulePage;

  beforeEach(() => {
    page = new MultimodulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(' works!');
  });
});
