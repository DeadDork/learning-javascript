var today = new Date();

var tomorrow = today;
tomorrow.setDate( tomorrow.getDate() + 1 );

console.log( today );
console.log( tomorrow );
