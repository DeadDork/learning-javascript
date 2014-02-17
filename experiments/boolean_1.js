// Explores incrementing boolean values.

// Conclusion: it appears as though operations will perform type coercions (in
// this case, a boolean is coerced into a float).

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var b = false;
	print(b); // prints a boolean

	++b;
	print(b); // prints a float
}

function print(x) {
	console.log(x);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
