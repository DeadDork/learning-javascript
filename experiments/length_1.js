// Explores whether the length method exists also for objects.

// Conclusion: I guess not...

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	// Control
	var a = ["a", "b", "c"];
	print(a.length); // Prints 3

	var o = {
		"0": 1,
		"1": 2,
		"3": 3
	}
	print(o.length); // Prints `undefined`
}

function print(x) {
	console.log(x);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
