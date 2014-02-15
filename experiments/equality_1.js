// `==` performs type coercion. This program explores whether `!=` performs
// type coercion, too.

////////////////////////////////////////////////////////////////////////////////
// Functions

function print() {
	for (var i = 0, j = arguments.length; i < j; ++i)
		console.log(arguments[i]);
}

function main() {
	var x = 1;

	// Control
	if (x == true)
		print("'" + x + " == true' is true.");
	else if (x == false)
		print("'" + x + " is false' is true.");

	// Tests
	if (x != false) // test 1 (should be true)
		print("'" + x + " != false' is true.");

	if (x !== false) // test 2 (should be false)
		print("'" + x + " !== false' is true.");
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
