// variable named kelvin with a value of 293
const kelvin = 293

//variable named clecius with a value 273 less than kelvin
const celsius = kelvin - 273

// variable named fahrenheit converted from celsius
let fahrenheit = celsius * (9/5) + 32

//convert fahrenheit to no decimal
fahrenheit = Math.floor(fahrenheit);

// variable named newton converted from celsius
let newton = celsius * (33/100)

//convert newton to no decimal
newton = Math.floor(newton)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

console.log(`The temperature is ${newton} degrees Newton`)

console.log(kelvin)
console.log(celsius)
console.log(fahrenheit)
console.log(newton)
