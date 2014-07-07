// Explores the `match` return array.

// (Also explores a simpler programming style.)

//var s = "abc123def456";
var s = "789abc123def456";
var re = new RegExp("(\\D+)" + "(\\d+)" + "(.*)");
var s_a = re.exec(s);

console.log(s_a[0]);
console.log(s_a[1]);
console.log(s_a[2]);
console.log(s_a[3]);
console.log(s_a.index);
console.log(s_a.input);
