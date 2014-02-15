// Explores scope as it pertains to functions (perhaps this is how variable
// scope is managed?).

// Conclusion: variables are completely scoped within functions.

function fun_1() {
	var x = 'a';
}

function fun_2() {
	var x = 'b';
}

// Control
//var x = 'c';
//console.log(x);

// Test 1
fun_1();
console.log(x);

// Test 2
fun_2();
console.log(x);
