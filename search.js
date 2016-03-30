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

//dataArr();
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

//searchString();

//Linked List
var Node = function(element) {
  this.element = element;
  this.next = null;
}

var LList = function() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  //this.remove = remove;
  this.display = display;
}
var find = function(item) {
  if (item != undefined) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
  }
  return currNode;
}
var insert = function(insertElement, item) {
  var newNode = new Node(insertElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
var display = function() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode.next;
    }
  }
  // var x = new LList();
  // x.insert('vijay','head');
  // x.insert('Aarav','vijay');
  // x.display();

//Get the first non repeated the char in a string in single pass
var nr = function() {
  var s = 'GeeksforGeeks';
  var ss = s.split('');
  for (var i = 0; i <= ss.length - 2; i++) {
    var g = i+1;
    var sss = s.substring(g);
    var d = sss.indexOf(ss[i]);
    if (d == -1)
      return ss[i];
  }
}
console.log(nr());
