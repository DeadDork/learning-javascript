// Reduce functions in the global scope via nesting.

// Conclusion: I had hoped to find a way of scoping functions so that I can
// call them from other functions, but without having to put them in the global
// scope. I can do that with prototypes & methods, but it definitely feels
// kludgy.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var math = new Math();

	print(math.sum(1, 2, 3));
}

/*
// Option A
// (The bad way?)
function Math() {
	return {
		sum: function() {
			var total = 0;

			for (var element = 0, end = arguments.length; element < end; ++element)
				total += arguments[element];

			return total;
		}
	}
}
*/

// Option B
// (The good way?)
function Math() {
}

Math.prototype.sum = function() {
	var total = 0;

	for (var element = 0, end = arguments.length; element < end; ++element)
		total += arguments[element];

	return total;
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
