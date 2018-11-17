//normal function statement

function sayHi(){
  console.log("Say hi")
}

sayHi()

//function expression

var sayBye = function() {
  console.log("Anonymous function")
}

sayBye()

function callBack(fun) {
  fun()
}

callBack(sayBye)
