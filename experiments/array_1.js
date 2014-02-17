// Explores iterating through the elements of an array.

// Conclusion: straightforward.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var a = ["a", "b", "c", "d"];

	for (var i in a)
		print(a[i]);

	print(a.toString());
}

function print(x) {
	console.log(x);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
