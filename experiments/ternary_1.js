// Explores the precedence of the ternary operator.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	print(test(0));
	print(test(1));
	print(test(2));
	print(test(4));
}

function print(out) {
	console.log(out);
}

function test(x) {
	return (x == 0) ? "zero"
		: (x == 1) ? "one"
		: (x == 2) ? "two"
		: "other";
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
