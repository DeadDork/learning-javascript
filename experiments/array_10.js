// Explores making a matrix.

var matrix = [ [], [], [], [] ];
for (var i = 0; i < 4; ++i) {
	for (var j = 0; j < 4; ++j) {
		matrix[i][j] = i * j;
	}
	console.log(matrix[i]);
}
