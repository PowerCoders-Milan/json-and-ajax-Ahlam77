
var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
  };

object.set = "hello";
console.log(object);
var jsone = JSON.stringify(object);
console.log(jsone);

var myObject = JSON.parse(jsone);
console.log(jsone);


