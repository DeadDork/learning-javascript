////////////////////////////////////////////////////////////////////////////////
// Comments

// Explores the string match prototype method.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var s = "hi123bye456";
	var re = new RegExp("^(\\D+)" + "(\\d+)" + "(.*)$");
	var s_a = s.match(re);

	print(s_a[0]); // matches the whole regex
	print(s_a[1]); // matches the first group
	print(s_a[2]); // matches the second group
	print(s_a[3]); // matches the third group
}

function print(p) {
	console.log(p);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
