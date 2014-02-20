// Confirms the use of `array.join()`'

// Conclusion: works. I have no idea what GAS is bitching about...

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var a = ["hey", ",", " ", "baby", "!"];

	print(a.join(''));
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
