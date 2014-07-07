// Huh, apparently JavaScript is dynamic enough to allow for number-like strings.

var a = [];
a['1'] = 'one';
a['12'] = 'twelve';

console.log(a);
