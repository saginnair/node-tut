console.log("This is a method from the Global object")
setTimeout(function(){console.log("Will fire after 3 secs")}, 3000) //Also from the Global Object
var time=0
var timer=setInterval(function(){
  time +=2
  console.log(time+" secs have passed")
  if (time > 5) {
    clearInterval(timer)
  }
}, 1000) //Also from the Global Object

console.log(__dirname)
console.log(__filename)
