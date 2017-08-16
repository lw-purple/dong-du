import { DongDuPage } from './app.po';

describe('dong-du App', () => {
  let page: DongDuPage;

  beforeEach(() => {
    page = new DongDuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
