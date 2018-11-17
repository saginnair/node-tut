var counter = function(arr){
  return ('There are ' + arr.length +" elements in this array")
}

var adder = function(a,b) {
  return `The sum of ${a} and ${b} is ${a+b}`
}

var pi = 3.142

module.exports.counter = counter;
module.exports.adder = adder
module.exports.pi = pi

module.exports = {
  count1:counter,
  adder1:adder,
  pi1:pi
}
