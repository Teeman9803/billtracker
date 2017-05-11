import { BilltrackerPage } from './app.po';

describe('billtracker App', () => {
  let page: BilltrackerPage;

  beforeEach(() => {
    page = new BilltrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
