import { AngularSvgDemoPage } from './app.po';

describe('angular-svg-demo App', () => {
  let page: AngularSvgDemoPage;

  beforeEach(() => {
    page = new AngularSvgDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
