import { FaqappPage } from './app.po';

describe('faqapp App', () => {
  let page: FaqappPage;

  beforeEach(() => {
    page = new FaqappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
