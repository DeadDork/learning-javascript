// Explores the use of re.

// Conclusion: got it!

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var num_array = ["1", "1.", ".1", "1.1", "-1", "+1", "+-0.1"];
	var num_re = /^[+-]?([0-9]+.[0-9]+|.?[0-9]+)$/;

	for (var element in num_array) {
		if (num_array[element].match(num_re)) {
			print(num_array[element] + " is a number");
		} else {
			print(num_array[element] + " is *not* a number");
		}
	}
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
