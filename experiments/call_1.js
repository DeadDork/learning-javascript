// Explores the `call` method.

// Conclusion: `call` works by giving a method (e.g. `fullName()`) an object
// (e.g. `dog`). I can see how this would allow you to share methods across
// objects.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var dog = new Dog("Snoopy", "Dog");

	print(fullName.call(dog));
}

function Dog(first, last) {
	this.first = first;
	this.last = last;
}

function print(out) {
	console.log(out);
}

function fullName() {
	return this.first + " " + this.last;
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
