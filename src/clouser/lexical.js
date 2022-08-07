const global = 0;

function myFunction() {
  const myNumber = 1;
  console.log(global);

  function parent() {
    //Funcion anidada
    const inner = 2;
    console.log(myNumber, global);

    function child() {
      console.log(inner, myNumber, global);
    }
    return child();
  }
  return parent();
}

myFunction();
