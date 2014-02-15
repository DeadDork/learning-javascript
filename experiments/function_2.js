// Explores if the order of function declaration matters.

// Conclusion: order doesn't seem to matter.

function print(x) {
	console.log(x);
}

function fun_1(x) {
	print(x);
}

fun_1("hello");
fun_2("goodbye");

function fun_2(x) {
	print(x);
}
