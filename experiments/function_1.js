// Explores how to write functions with variadic parameters.

// Conclusion: pretty straightforward.

function print() {
	for (var i = 0, j = arguments.length; i < j; i++)
		console.log(arguments[i]);
}

print("hey, ", "who ", "you ", "lookin' ", "at?!");
