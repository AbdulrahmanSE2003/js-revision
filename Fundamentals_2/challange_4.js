const calcTip = (bill) => {
  let tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
  let total = bill + tip;

  tips.push(tip);
  totals.push(total);
};

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}

const calcAverage = (arr) => {
  let count = 0;
  count = arr.reduce((acc, cur) => acc + cur, 0);
  return count / arr.length;
};

calcAverage(bills);
