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
//Generate random data and find the value poition in the array
var dataArr = function() {
  var r = [];
  for (var i = 0; i < 10; i++) {
    r.push(Math.floor(Math.random() * 10));
  }
  var data = 3;
  r = insertionSort(r); //Sorted
  console.log('array : ' + r);
  var result = binarySearch(r, data); //Passing array to perform binarySearch
  var count = 0;
  if (result >= 0) {
    ++count;
    for (var j = result - 1; j < 0; --j) {
      if (r[j] == data) {
        ++count;
      } else {
        break;
      }
    }

    for (p = result + 1; p < r.length - 1; ++p) {
      if (r[p] == data) {
        ++count;
      } else {
        break;
      }
    }
    console.log('Value ' + data + ' occurs : ' + count + ' times');
  } else {
    console.log('cannot find the value');
  }
}

dataArr();
//End

//Search string.
var searchString = function() {
  var s = 'the sonorous rhetoric which Webster learned in the schools';
  var sp = s.split(' ');
  sp = insertionSort(sp);
  var find = 'rhetoric';
  var result = binarySearch(sp, find);
  console.log('Word rhetoric occurs at ' + result);
}

searchString();
//Sorting
//Bubble Sorted
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  var dataStore = [1, 0, 3, 3, 5, 4, 5, 0, 6, 7];
  var numElements = dataStore.length;
  var temp;
  for (var outer = numElements; outer >= 2; --outer) {
    for (var inner = 0; inner <= outer - 1; ++inner) {
      if (dataStore[inner] > dataStore[inner + 1]) {
        swap(dataStore, inner, inner + 1);
      }
    }
    console.log(dataStore);
  }
}
bubbleSort();
