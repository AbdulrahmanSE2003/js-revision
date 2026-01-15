// const BMI =  mass / (height * height);

// Mark data

const markHeight = 1.69;
const markMass = 78;

let markBMI = markMass / (markHeight * markHeight);
// john data

const johnHeight = 1.98;
const johnMass = 92;

let johnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI)
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
else console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
