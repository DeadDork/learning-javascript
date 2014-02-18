// Explores the `apply` method.

// Conclusion: all right, this kind of makes sense.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	print(cat.apply(null, ["a", "b", "c", "d"]));
}

function cat() {
	var string = "";

	for (var element in arguments)
		string += arguments[element];

	return string;
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
