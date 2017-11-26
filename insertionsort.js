function insertionSort(list) {
  for(var i = 0; i < list.length; i++) {
    var temp = list[i];
    var n = i - 1;
    while (n >= 0 && list[n] > temp) {
      list[n + 1] = list[n];
      n--;
    }
    list[n + 1] = temp;
  }
  return list;
};

module.exports = insertionSort
