let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = false

let runnerAge = 18

if (earlyReg === true && runnerAge > 18){
    raceNumber += 1000;
} else {
    raceNumber;
}

if (earlyReg === true && runnerAge > 18){
    console.log(`Your race starts at 9:30am! Your race number is: ${raceNumber}.`)
} else if (earlyReg === false && runnerAge > 18){
    console.log(`Your race starts at 11:00am! Your race number is ${raceNumber}.`)
} else if (runnerAge < 18) {
    console.log(`Your race starts at 12:30pm! Your race number is ${raceNumber}`)
} else {
    console.log('Please see registration desk')
}