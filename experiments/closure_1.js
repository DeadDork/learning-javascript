// Explores closures.

// Conclusion: OK, I get how this works... But I'm definitely not a good enough
// programmer to appreciate closures.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	x = makeAdder(5);
	y = makeAdder(50);

	print(x(1));
	print(y(1));
}

function makeAdder(a) {
	return function(b) {
		return a + b;
	}
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
