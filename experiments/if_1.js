// Explores whether if is a function or just a statement.

// Conclusion: it's just a statement.

function print(x) {
	console.log(x);
}

function if_check() {
	var x = 1;

	var y = if (x == 1) {2} else {3};

	print("x = " + x);
	print("y = " + y);
}
