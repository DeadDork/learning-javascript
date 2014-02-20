// Explores the return value of a bad `Date.parse()`.

// Conclusion: a bad parse will result in a NaN (maybe?)

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	print(typeof Date.parse("asdlkfjasd"));
	print(Date.parse("asdlkfjasd"));
	print(typeof Date.parse("11-11-1911"));
	print(Date.parse("11-11-1911"));
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
