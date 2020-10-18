
var fs = require("fs")
var data = fs.readFileSync('lorem_ipsum.txt')

console.log(data.toString())
console.log("\nFIN")

