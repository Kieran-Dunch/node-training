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

  describe('posting a message', () => {
    it('saves the message with the author information', () => {
      // create expectations for the message and author
      const message = 'feature tests often hit every level of the TDD Testing Pyramid';
      const author = "username";

      // navigate to the root URL
      browser.url('/');

      // fill in the author and message fields
      browser.setValue('input[id=author]', author);
      browser.setValue('textarea[id=message]', message);
      // submit the form
      browser.click('input[type=submit]');

      assert.include(browser.getText('#messages'), message);
      assert.include(browser.getText('#messages'), author);
    });
  });
});
