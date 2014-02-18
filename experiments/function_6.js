// Explores named IIFEs.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var charCount = (function counter(string) {
		return (string.length < 1) ? 0 : 1 + counter(string.substring(1));
	});

	print(charCount("hello"));
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
