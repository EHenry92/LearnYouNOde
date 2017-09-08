//My FIRST I/O --> Print the number of new line characters in a file
var fs = require('fs');
//readFileSync returns a buffer object. to String converts buffer
var buffer = fs.readFileSync(process.argv[2]).toString().split("\n");
console.log(buffer.length-1);