// Explores using anonymous functions as objects.

// Conclusion: holy crap, I guess explicit function declaration & assigning
// an anonymous function to a variable results in the same thing!

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var average = function() {
		return sum.apply(null, arguments) / arguments.length;
	}

	print(average(1, 2, 3));
}

function sum() {
	var total = 0;

	for (var i in arguments)
		total += arguments[i];

	return total;
}

function print(arg) {
	console.log(arg);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
