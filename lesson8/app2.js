var events = require('events')
var util = require('util')

var Person = function(name){
  this.name = name
};

util.inherits(Person, events.EventEmitter)

var James = new Person("James")
var Raj = new Person("Raj")
var Iqbal = new Person("Iqbal")

var people = [James, Raj, Iqbal]
people.forEach(function(person) {
  person.on('speak', function(msg) {
    console.log(person.name+' said: '+msg);
  })
})

James.emit('speak','Hi this is James here')
Raj.emit('speak','Hi this is Raj here')
