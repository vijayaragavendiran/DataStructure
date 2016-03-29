// Bineary Search Algorthim
var binarySearch = function(arr, data) {
  console.log('arr.length - ' + arr.length);
  var upperBound = arr.length - 1;
  var lowerBound = 0;
  while (lowerBound <= upperBound) {
    var midBound = Math.floor((upperBound + lowerBound) / 2);
    if (arr[midBound] < data) {
      lowerBound = midBound + 1;
    } else if (arr[midBound] > data) {
      upperBound = midBound - 1;
    } else {
      return midBound;
    }
  }
  return -1;
}
//Sorting the array
function insertionSort(dataStore) {
  var temp, inner;
  for (var outer = 1; outer <= dataStore.length - 1; ++outer) {
    temp = dataStore[outer];
    inner = outer;
    while (inner > 0 && (dataStore[inner - 1] >= temp)) {
      dataStore[inner] = dataStore[inner - 1];
      --inner;
    }
    dataStore[inner] = temp;
  }
  return dataStore;
}

var dataArr = function() {
  var r = [];
  for (var i = 0; i < 10; i++) {
    r.push(Math.floor(Math.random() * 10));
  }

  r = insertionSort(r);//Sorted
  console.log('array : ' + r);
  var result = binarySearch(r, 3);//Passing array to perform binarySearch
  if (result >= 0) {
    console.log('Value position is : ' + result);
  } else {
    console.log('cannot find the value');
  }
}

dataArr();
//End
