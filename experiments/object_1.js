// Creates an object & assigns it a name.

// Conclusion: mutable objects (such as, errrr, objects) have persistent state,
// so that what happens in functions, doesn't just stay in functions.

////////////////////////////////////////////////////////////////////////////////
// Functions

function namer(object, name) {
	object.nom = String(name);
}

function print(x) {
	console.log(x);
}

function main() {
	var object = new Object();

	object.nom = "Lambda";
	print(object.nom);

	namer(object, "Mythril");
	print(object.nom);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
