// Explores the logical value of assignment

// Conclusion: logical value passes from right to left

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var x = false;
	if (x = true) {
		console.log("false assigned true");
	}

	x = true;
	if (x = false) {
		console.log("true assigned false");
	}

	x = false;
	if (x = false) {
		console.log("false assigned false");
	}
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
