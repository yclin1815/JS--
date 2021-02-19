// function yo(callback) {
//   console.log('Yo');
//   if (callback) {
//     callback();
//   }
// }

// yo(function () {
//   console.log('222222')
// });


var a = [2, 4, 6, 8];

function each(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    callback(item);
  }
}


each(a, function (item) {
  if (item > 5) {
    console.log(item);
  }
});