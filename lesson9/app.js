var fs = require('fs')

var readMe = fs.readFileSync('./test.txt','utf8')
console.log(readMe)

var writeMe = fs.writeFileSync('./test_write.txt', readMe)
console.log(writeMe)

var readAsync= fs.readFile('./testasync.txt', 'utf8', function(err,data){
  console.log(data);
})
console.log('Testing async read')

var testMsg='Testing'
console.log('Starting file testasync_write')
var writeAsync = fs.writeFile('./testasync_write.txt', testMsg, function(err){
  console.log(err)
})
