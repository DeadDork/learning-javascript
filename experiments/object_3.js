// Explores a variable declaration format I saw on a Google talk.

// Conclusion: I'm dropping this for now, as the example might have been
// CSS.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var person_1 = new Person("John", "Doe");
	print(person_1.fullName());

	/* Doesn't work
	var person_2 = new Person(),
		first = "James",
		last = "Dean";
	print(person_2.fullName());
	*/
}

function Person(first, last) {
	this.first = first;
	this.last = last;
}

Person.prototype.fullName = function() {
	return this.first + " " + this.last;
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
