const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it('must to return true if is a square', () => {
    assert.strictEqual(new Rectangle(5, 5).isSquare(), true);
    assert.strictEqual(new Rectangle(4, 5).isSquare(), false);
  });

  it('must to return the rectangle area', () => {
    assert.strictEqual(new Rectangle(10, 5).getArea(), 10 * 5);
  });

  it('must to return the rectangle perimeter', () => {
    assert.strictEqual(new Rectangle(10, 5).getPerimeter(), 10 * 2 + 5 * 2);
  });
});
