// Explores what can be pushed into an empty array.

var a = [];

//a[7] = [];
//a[7].push([1,2]); // cannot call method push of undefined

a[3] = [[1,2], 3];

console.log(a);
