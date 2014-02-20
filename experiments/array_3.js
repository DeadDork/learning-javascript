// Explores the length method for multi-dim arrays.

// Conclusion: yup, you can get length from each dim (makes sense, as a multi-
// dim array is just an object of objects).

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	a1 = [1, 2, 3];
	a2 = [4, 5, 6, 7];
	aa = [a1, a2];

	print("a1.length: " + a1.length);
	print("a2.length: " + a2.length);
	print("aa.length: " + aa.length);
	print("aa[0].length: " + aa[0].length);
	print("aa[1].length: " + aa[1].length);
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
