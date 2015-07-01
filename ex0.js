var fs = require('fs') // require is a special function provided by node
var myNumber = undefined // we don't know what the number is yet since it is stored in a file

function dr2(err, fileContents){
	myNumber = parseInt(fileContents);
	myNumber++
}

function addOne() {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    console.log(Number(fileContents));
    myNumber = parseInt(fileContents)
    myNumber++
console.log(myNumber) // logs out undefined -- this line gets run before readFile is done
  })
}

addOne()

