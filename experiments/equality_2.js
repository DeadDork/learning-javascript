// I had some funny results in "equality_1.js", so I'm exploring `==`
// type-coercion more finely here.

// Conclusion: the Mozilla "Re-Introduction to JavaScript" discussion on
// Boolean types is wrong, as is demonstrated below.

////////////////////////////////////////////////////////////////////////////////
// Functions

function print() {
	for (var i = 0, j = arguments.length; i < j; ++i)
		console.log("\t", arguments[i]);
}

function test_false() {
	console.log("test_false():");

	var u = false;
	if (u == false)
		print(u + " is false.");
	else
		print(u + " is true.");

	var v = 0;
	if (v == false)
		print(v + " is false.");
	else
		print(v + " is true.");

	var w = "";
	if (u == false)
		print('""' + " is false.");
	else
		print(w + " is true.");

	var x = NaN; // Should be false...?
	if (x == false)
		print(x + " is false.");
	else
		print(x + " is true.");

	var y = null; // Should be false...?
	if (y == false)
		print(y + " is false.");
	else
		print(y + " is true.");

	var z = undefined; // Should be false...?
	if (z == false)
		print(z + " is false.");
	else
		print(z + " is true.");
}

function test_true() {
	console.log("test_true():");

	var w = true;
	if (w == true)
		print(w + " is true.");
	else
		print(w + " is false.");

	var x = 43; // I would have expected this to be true, but it's false
	if (x == true)
		print(x + " is true.");
	else
		print(x + " is false.");

	var y = 1; // This is true, though (urgh)
	if (y == true)
		print(y + " is true.");
	else
		print(y + " is false.");

	var z = "hello";
	if (z == true)
		print(z + " is true.");
	else
		print(z + " is false.");
}

function main() {
	test_false();
	test_true();
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
