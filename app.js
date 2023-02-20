let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;

if (early === true && age > 18) {
  raceNumber += 1000;
};

if (age > 18 && early === true) {
  console.log(`Your race number is ${raceNumber}. You will race at 9:30am.`);
} else if (age > 18 && early === false) {
  console.log(`Your race number is ${raceNumber}. You will race at 11:00am.`);
} else if (age < 18) {
  console.log(`Your race number is ${raceNumber}. You will race at 12:30pm}`);
} else {
  console.log("See the front desk.");
};

