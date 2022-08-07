//variable

var a; //declaracion
var b = "b"; //declaracion y asignacion
b = "bb"; //reaccionacion
var a = "aa"; //redeclaracion

//Global Scope
var fruit = "Apple";
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function contries() {
  country = "Colombia"; //Global
  console.log(country);
}

contries();
console.log(country);
