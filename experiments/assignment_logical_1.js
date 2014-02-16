// Explores short-circuit logic.

// Conclusion: `&&` statements short-circuit on `false`; `||` statements short-
// circuit on `true`.

////////////////////////////////////////////////////////////////////////////////
// Functions

function print(x) {
	console.log(x);
}

function and_test(truth_value) {
	var x = truth_value && "and";

	return x;
}

function or_test(truth_value) {
	var x = truth_value || "or";

	return x;
}

function main() {
	print(and_test(false)); // "false"
	print(and_test(true)); // "and"

	print(or_test(false)); // "or"
	print(or_test(true)); // "true"
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
