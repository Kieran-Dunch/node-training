const { assert } = require('chai');

// The quote itself
// Who the quote is attributed to
// The source of the quote:
// Book
// Article
// Speech
// IRL

describe('User visits root', () => {
  describe('Posting a quote', () => {
    it('saves quote and metadata submitted by user', () => {
      const quote = 'feature tests often hit every level of the TDD Testing Pyramid';
      const author = "username";
      const source = "Book";

      browser.url('/');

      browser.setValue('textarea[id=quote]', quote);
      browser.setValue('input[id=author]', author);
      browser.setValue('input[id=source]', source);
      browser.click('input[type=submit]');
    });
  });
});
