// Explores what can be pushed into an empty array.

var a = [];

//a[7] = [];
//a[7].push([1,2]); // cannot call method push of undefined

a[3] = [[1,2], 3]; // works

//a[1][2] = [[4,5], 6]; // Cannot set property of undefined

console.log(a);
