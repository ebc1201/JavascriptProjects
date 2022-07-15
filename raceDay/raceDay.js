let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const runnerAge = 16;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Runner ${raceNumber} will run at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Runner ${raceNumber} will run at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber} will run at 12:30 pm.`);
  /* } else if (runnerAge === 18 && registeredEarly) {
  console.log('See registration desk.'); */
} else {
  console.log("See registration desk.");
}
