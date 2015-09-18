var toString = Object.prototype.toString;
var d = new Date;
var dd = new Date;

console.log( toString.call(d) == toString.call(dd) );
