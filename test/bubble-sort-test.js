assert = require('chai').assert;
const bubbleSort = require('../bubbleSort')

describe('Chai tests bubble sort', function() {
  it('can sort numbers', function() {
    var unsorted = [5, 4, 6, 3, 1];
    var sorted = [1, 3, 4, 5, 6];
    assert.deepEqual(bubbleSort(unsorted), sorted)
  })
  it('can sort letters', function() {
    var unsorted = ['g', 'p', 'z', 'j', 'a'];
    var sorted = ['a', 'g', 'j', 'p', 'z'];
    assert.deepEqual(bubbleSort(unsorted), sorted)
  })
  it("can sort large arrays", function() {
    var unsorted = Array.from({length: 5000}, () => Math.floor(Math.random() * 90000));
    var sorted = unsorted.sort();
    debugger
    assert.deepEqual(bubbleSort(unsorted), sorted)
  })
})
