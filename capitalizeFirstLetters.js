const assert = require('assert');

assert.strictEqual(
  capitalFirstLetters('string with words'),
  'String With Words'
);
assert.strictEqual(capitalFirstLetters('string'), 'String');
assert.strictEqual(capitalFirstLetters(''), '');
