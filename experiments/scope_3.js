// Explores using an anonymous function to control variable scope intra-
// function.

// Conclusion: looks like you can manage scope via anonymous functions.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var a = 1;
	var b = 2;
	var c = 3;

	(function() {
		var b = 20;
	});

	var c = 30;

	print(a);
	print(b);
	print(c);
}

function print(x) {
	console.log(x);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
