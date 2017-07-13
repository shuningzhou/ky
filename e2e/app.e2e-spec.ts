import { KyAppPage } from './app.po';

describe('ky-app App', () => {
  let page: KyAppPage;

  beforeEach(() => {
    page = new KyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
