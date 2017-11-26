function bubbleSort(list) {
  var swapped;
  do {
    working = false;
    for(var i = 0; i < list.length; i++) {
      if(list[i] && list[i + 1] && list[i] > list[i + 1]) {
        var tempItem = list[i];
        list[i] = list[i + 1];
        list[i + 1] = tempItem;
        working = true;
      }
    }
  } while(working);
  return list;
}


module.exports = bubbleSort
