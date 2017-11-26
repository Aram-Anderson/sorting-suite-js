function sort(list, i, j) {
  var tempItem = list[i];
  list[i] = list[j];
  list[j] = tempItem;
}

function bubbleSort(list) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < list.length; i++) {
      if(list[i] && list[i + 1] && list[i] > list[i + 1]) {
        sort(list, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return list;
}


module.exports = bubbleSort
