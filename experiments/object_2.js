// Explores calling an object's property that has sub-properties.

// Conclusion: will print out all of the sub-properties (so be careful!).

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var obj = {
		name: "Carrot",
		description: {
			color: "orange",
			size: 6,
			type: "baby"
		}
	}

	print(obj.name); // prints "Carrot"
	print(obj.description); // prints '{ color: "orange", size: 6, type: "baby" }'
}

function print(x) {
	console.log(x);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
