// Explores the scoping of inner functions.

// Conclusion: you can use declared variables from the parent function.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var a = 1;

	function a_plus_1() {
		return a + 1;
	}

	print(a);
	print(a_plus_1());
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
