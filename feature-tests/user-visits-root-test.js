const { assert } = require('chai');


// The describe function is used to group tests together
describe('User visits root', () => {
  // check the webpages empty state
  describe('without existing messages', () => {
    it('starts blank', () => {
      // browser.url is a phantomjs method that will navigate to the specified URL
      browser.url('/');
      // assert.equal is a chai method that will compare the first and second arguments
      assert.equal(browser.getText('#messages'), '');
    });
  });
});
