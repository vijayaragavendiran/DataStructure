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
//bubbleSort();


//Selection Sort
var selectionSort = function() {
  var array = [];
  for (var i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  console.log('Unsorted Array : ' + array);
  var min;
  for (var outer = 0; outer <= array.length - 1; outer++) {
    min = outer;
    for (var inner = outer + 1; inner <= array.length - 1; inner++) {
      if (array[inner] < array[min]) {
        min = inner;
      }
    }
    swap(array, outer, min);
  }
  console.log('Selection sort : ' + array);
}
selectionSort();
