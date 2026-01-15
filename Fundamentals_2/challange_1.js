const calcAverage = (av1, av2, av3) => (av1 + av2 + +av3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  avgDolphins;
  if (avgDolphins >= avgKoalas * 2)
    console.log(
      `The winners is Dolphins Team (${avgDolphins} vs. ${avgKoalas})`
    );
  else if (avgKoalas >= avgDolphins * 2)
    console.log(`The winners is Koalas Team (${avgDolphins} vs. ${avgKoalas})`);
  else console.log(`No one wins, It's a Tie.`);
};

checkWinner(scoreDolphins, scoreKoalas);
