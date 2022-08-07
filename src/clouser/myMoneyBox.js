// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox $${saveCoins}`);
// }

// moneyBox(10);

function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(10);
myMoneyBox(10);

const myMoneyBox2 = moneyBox();
myMoneyBox2(5);
myMoneyBox2(20);
myMoneyBox2(15);
