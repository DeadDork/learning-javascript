////////////////////////////////////////////////////////////////////////////////
// Comments

// Explores adding elements to an array that are out of the original scope.

// Conclusion: does not create blank elements. I guess this makes arrays in
// JS more like hashes?

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var a = [3];
	a[0] = 'zero';
	a[1] = 'one';
	a[2] = 'two';
	a[15] = 'fifteen';

	for (var i in a) {
		print("i = " + i + ", which is " + a[i]);
	}
}

function print(p) {
	console.log(p);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
