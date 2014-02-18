// Explores recursion.

// Conclusion: recursion is pretty logical.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	fibonacci(0, 1, 5);
}

function fibonacci(last_last, last, length) {
	if (length < 1)
		return;
	else {
		print(last_last);
		fibonacci(last, last + last_last, length - 1);
	}
}

function print(x) {
	console.log(x);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
