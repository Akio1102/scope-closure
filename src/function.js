function greeting() {
  let userName = "Akio";
  console.log(userName);

  if (userName === "Akio") {
    console.log(`Hello ${userName}!`);
  }
}

greeting();
console.log(userName);
//La variable userName no esta asignada como global solo esta en el function
