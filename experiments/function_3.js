// Explores state in functions.

// Conclusion: perhaps there's a C-like `static` keyword, but short of that
// variables inside functions are volatile.

////////////////////////////////////////////////////////////////////////////////
// Functions

function print(x) {
	console.log(x);
}

function state_test(new_state) {
	var state; // Defaults to "undefined"
	print(state);

	state = new_state;
	print(state);
}

function main() {
	state_test("First");
	state_test("Second");
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
