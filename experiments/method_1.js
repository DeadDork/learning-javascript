// Explores the "right" (?) way of creating methods for an object.

// Conclusion: OK, I think I've got it.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var person = new Person("John", "Doe");

	print(person.first);
	print(person.last);
	print(person.fullName());
	print(person.fullNameReversed());
}

function Person(first, last) {
	this.first = first;
	this.last = last;
}

Person.prototype.fullName = function() {
	return this.first + " " + this.last;
}

Person.prototype.fullNameReversed = function() {
	return this.last + ", " + this.first;
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
