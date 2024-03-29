// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify)
  var filterFunction = applyFilter(reddify);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    var row = image[i];
    for (var k = 0; k < row.length; k++) {
      var rgbString = row[k]
      var rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers) //call the Array String with an argument inside.
      row[k] = rgbString //assign the the string back to its array

    }
  }
}
// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
  var x = 0;
  var x = 255;
  var bigger = Math.max(num, 0);
  var solution = Math.min(bigger, 255);
  
}

// TODO 3: Create reddify function 
function reddify(arr) {
  arr[RED] = 200

}
console.log(keepInBounds(-30)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(127)); // should print 127


// TODO 6: Create more filter functions
function decreaseBlue(arr){
arr[BLUE] = arr[Blue] - 50;
arr[BLUE] = keepInBounds(result)
}

// CHALLENGE code goes below here
