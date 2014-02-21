// Explores object creation.

// Conclusion: you can add properties easily enough.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	obj_1 = {};
	obj_1.prop_1 = "Hey";
	obj_1.prop_2 = "there!";

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
