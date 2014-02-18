// I had a bit of trouble understanding one of the examples in the "Custom
// Objects" section of "Re-Introduction to JavaScript". I work through it
// here.

// Conclusion: prototypes are not scoped.

// (At least I understand the example now.)

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	person = new Person("Arthur", "of Camelot");

	print_1(person);
	print_2(person);
	print_1(person);
}

function Person(first, last) {
	this.first = first;
	this.last = last;
}

Person.prototype.fullName = function() {
	return this.first + " " + this.last;
}

function print_1(obj) {
	console.log("Hello " + obj);
}

function print_2(obj) {
	Person.prototype.toString = function() {
		return this.fullName();
	}

	console.log("Goodbye " + obj);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
