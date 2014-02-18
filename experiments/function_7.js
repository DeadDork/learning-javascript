// I'm having issues with function_6.js, so I'm attempting to debug a function
// here.

// Conclusion: both of these work...

// N.B. It turns out that I forgot to execute `main()` in function_6.js. Yup,
// I'm an idiot!

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	string = "What is the capital of Assyria?"

	print(charCount_1(string));
	print(charCount_2(string));
}

function charCount_1(string) {
	if (string.length < 1)
		return 0;
	else
		return 1 + charCount_1(string.substring(1));
}

function charCount_2(string) {
	return (string.length < 1) ? 0 : 1 + charCount_2(string.substring(1));
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
