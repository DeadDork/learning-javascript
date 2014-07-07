// Explores for in.

var a = [];
a[0] = 'zero';
a[10] = 'ten';
a[20] = 'twenty';

for (var i in a) {
	console.log('i = ' + i + ', a[i] = ' + a[i]);
}
