// See if it's possible to make a constructor with blank characteristics.

// Conclusion: it *is* possible to create a constructor with blank
// characteristics (in the example, `typeof nobodyBoy.beer === undefined`, which
// makes a lot of sense).

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	obj_1 = {
		beer: "coors",
		meat: "bacon"
	};

	obj_2 = {
		beer: "",
		meat: ""
	};

	/* syntax error
	obj_3 = {
		beer:,
		meat:
	};
	*/

	obj_4 = new fancyBoy();

	obj_5 = new nobodyBoy();

	print(obj_1.beer);
	print(obj_2.beer);
	//print(obj_3.beer);
	print(obj_4.beer);
	print(obj_5.beer);
}

function fancyBoy() {
	this.beer = "Pliny the Elder";
	this.meat = "Sushi";
}

function nobodyBoy() {
	this.beer;
	this.meat;
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
