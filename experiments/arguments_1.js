// Explores the apply method.

// Conclusion: you can use the apply method to push in your own arguments
// array-like object.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var a = ["a", "b", "c", "d"];

	print(cat.apply(null, a));
}

function cat() {
	var x = "";
	for (i = 0, j = arguments.length; i < j; ++i)
		x += arguments[i];

	return x;
}

function print(x) {
	console.log(x);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
