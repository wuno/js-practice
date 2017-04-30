// Big O
// O = function evaluated
// N = size of the input

// O(1) Constant Run Time
// Input increases but the time it takes never changes
// A function that will run once to complete
function log(array) {
 console.log(array[0]);
 console.log(array[1]);
}

// O (log n) Logromithmic Runtime
// Each operation that is performed cuts the input in half
// Example would be a binary search function
function binarySearch(array, key) {
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// O(N) Linear Runtime
// Runtime is proportional to the input
// A function that has one for loop. It runs as many times as the for loop causes it to

// Example 1 O(N) fibonacci with a loop non recursive
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

// example 2 O(N)
function logAll(array) {
 for (var i = 0; i < array.length; i++) {
   console.log(array[i]);
 }
}

// O(N^2) Exponential Runtime
// Grows exponentially and we try our best to avoid such functions
// A function that will run squared times typically becasue it has nested for loops
function addAndLog(array) {
 for (var i = 0; i < array.length; i++) {
   for (var j = 0; j < array.length; j++) {
     console.log(array[i] + array[j]);
   }
 }
}

// O(2^N) A function that will double and grow exponentially
// Example 1 was O(N) but the fibonacci recursive function is worst case
function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
