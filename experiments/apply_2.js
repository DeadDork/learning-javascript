// Explores the use of the apply method for an actual object (not just null).

// Conclusion: in a nutshell, take the object with the desired function in it,
// replace it temporarily with the object in the first argument of the `apply`
// method, and then execute the method of the first object on that second
// object.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var cat = new Cat("Felix");
	var dog = new Dog("Woofie");

	print(cat.reverse());
	print(cat.reverse.apply(dog, null));
	//print(dog.reverse()); // Doesn't work
}

function Cat(name) {
	this.name = name;
}

Cat.prototype.reverse = function() {
	var string = "";

	for (var element = this.name.length - 1; element >= 0; --element)
		string += this.name[element];

	return string;
}

function Dog(name) {
	this.name = name;
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
