function greeting() {
  let username = "Akio";

  function displayUserName() {
    return `Hello ${username}`;
  }
  return displayUserName();
}

const g = greeting();

console.log(g);
