
var fs = require("fs")


fs.readFile('lorem_ipsum.txt', 
  // Callback     
  function(err, data) {
    if (err) {
        console.log(err.stack);
        return;
     }
    console.log(data.toString())
  }

)

console.log("FIN")
