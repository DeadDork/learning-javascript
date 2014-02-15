// Explores the difference between prefix & postfix incrementation.

// Conclusion: it doesn't appear as though there is a difference between prefix
// and postfix.

function print() {
	for (var i = 0, j = arguments.length; i < j; ++i)
		console.log(arguments[i]);
}

function prefix(x) {
	print("Prefix:");
	for (var i = 0; i < 10; ++i)
		print(i);
}

function postfix(x) {
	print("Postfix:");
	for (var i = 0; i < 10; i++)
		print(i);
}

function main() {
	prefix();
	postfix();
}

main();
