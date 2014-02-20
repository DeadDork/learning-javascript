// Explores another way of declaring objects.

// Conclusion: I still can't make sense of this declaration style.

////////////////////////////////////////////////////////////////////////////////
// Functions

function main() {
	var obj_1 = new Obj();
	obj_1.chara_1 = "Hey";
	obj_1.chara_2 = "Ho";
	obj_1.chara_3 = "Hum";

	var obj_2 = new Obj();
	obj_2["chara_1"] = "Yes";
	obj_2["chara_2"] = "Yup";
	obj_2["chara_3"] = "Yus";

	var obj_3 = new Obj(),
		chara_1 = "Me",
		chara_2 = "Myself",
		chara_3 = "Mister";

	print(obj_1.chara_1);
	print(obj_2.chara_1);
	print(obj_3.chara_1); // I don't understand
}

function Obj() {
	this.chara_1;
	this.chara_2;
	this.chara_3;
}

function print(out) {
	console.log(out);
}

////////////////////////////////////////////////////////////////////////////////
// Execute

main();
