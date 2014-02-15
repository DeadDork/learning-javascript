// Tests whether it's true that variables do not have scope.

// Conclusion: yup, variables are not scoped. I'm curious to see how fear
// and terror are averted...

var a = 'a';

if (a) { // Should work, as `a` is truthy
	var b = 'b';
}

console.log("a = " + a);
console.log("b = " + b); // WTF?! *Headache*
