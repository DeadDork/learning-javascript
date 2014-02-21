// Having problems with GAS again.

// Conclusion: works!

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	obj_1 = {
		property_1: "",
		property_2: "",
		property_3: ""
	};
	obj_1.property_1 = "Hello";
	obj_1.property_2 = "you";
	obj_1.property_3 = "scum!";

	for (var element in obj_1) {
		print(obj_1[element]);
	}
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
