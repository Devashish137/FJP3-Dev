//Arrays
//Arrays can be declared with let and const

let car = ["ferrari", "jaguar", "BMW", "Tesla"]

//Accessing the element of arrays

console.log(car[0])
console.log(car[1])
console.log(car[2])
console.log(car[3])

// //replacing element
car[2] = "Bently"
console.log(car)

// //Adding element
car[4] = "Mercedes"
console.log(car)

car[9] = "Maruti"
console.log(car)

//Arrays Method - 

//pop method () - This method remove last element from arrays
car.pop()
console.log(car)

//pus method () - this method add last elment in the arrays
car.push("Tesla")
console.log(car)

// Shift method -  remove first element in array
console.log(car.shift())
console.log(car)

//unshift method - add first element in array
car.unshift("Ferrari")
console.log(car)