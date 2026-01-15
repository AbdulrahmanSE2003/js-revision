let scoreKoalas = (88 + 91 + 110) / 3;
let scoreDolphins = (96 + 108 + 89) / 3;

let winners =
  scoreDolphins > scoreKoalas
    ? scoreDolphins
    : scoreDolphins === scoreKoalas
    ? "Tie"
    : scoreKoalas;

if (winners === scoreDolphins) console.log("Dolphins win the trophy");
else if (winners === "Tie") console.log("Both win the trophy");
else console.log("Koalas win the trophy");

/* 
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}
*/
