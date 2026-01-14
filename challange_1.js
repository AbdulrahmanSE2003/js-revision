// const BMI =  mass / (height * height);

// Mark data

const markHeight = 1.69;
const markMass = 78;

let markBMI = markMass / (markHeight * markHeight);
// john data

const johnHeight = 1.95;
const johnMass = 92;

let johnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
