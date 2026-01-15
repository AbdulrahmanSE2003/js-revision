const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

let bills = [125, 555, 44];
let tips = bills.map(calcTip);
let totals = bills.map((bill, i) => bill + tips[i]);
