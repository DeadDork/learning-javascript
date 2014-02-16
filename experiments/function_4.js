// Explore function argument state.

// Non-mutable objects (e.g. variables) will not have persistent state.

////////////////////////////////////////////////////////////////////////////////
// Functions

function print(x) {
	console.log(x);
}

function state_test(variable) {
	print(variable);

	++variable;

	print(variable);
}

function main() {
	var x = 1;

	state_test(x);
	state_test(x);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
