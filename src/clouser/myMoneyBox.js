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

const myMoneyBox = moneBox();
myMoneyBox(10);
