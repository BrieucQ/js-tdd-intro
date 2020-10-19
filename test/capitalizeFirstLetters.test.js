const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it('is a function who transform first letters of chain string with few words in capital', () => {
    assert.strictEqual(
      capitalizeFirstLetters('string with words'),
      'String With Words'
    );
  });
  it('transform first letter of 1 word in capital', () => {
    assert.strictEqual(capitalizeFirstLetters('string'), 'String');
  });
  it('return empty string if input is empty', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});
