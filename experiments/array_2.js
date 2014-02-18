// Explores `for...in` on an array.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var array = ["a", "b", "c", "d"];
	array[7] = "h";

	print(array.length); // Demonstrates that elements 4, 5, 6 are created

	for (var element in array)
		print(array[element]);
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
