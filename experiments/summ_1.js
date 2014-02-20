// Builds a basic sum function.

// N.B. Built on GAS.

////////////////////////////////////////////////////////////////////////////////
// Functions

function summ(range) {
  var total = 0;
  var value = 0;
  
  for (var element = 0, end = range.length; element < end; ++element) {
    value = String(range[element]);
    if (isANumber(value)) {
      total += parseFloat(value);
    }
  }
  
  return total;
}

function isANumber(string) {
  if (string.match(/^[+-]?(?:\d+\.\d+|\.?\d+)$/)) {
    return true;
  } else {
    return false;
  }
}

function test() {
  var a = ["a", "1", "2.", ".3", "4.0"];
  
  Logger.log(summ(a));
}

////////////////////////////////////////////////////////////////////////////////
// Execute

test();
