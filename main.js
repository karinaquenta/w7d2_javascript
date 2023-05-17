console.log('Day 2')

//flow control
//syntax for conditional if(boolean){action}else{action}

let age = 20

if (age>21){
    console.log('come have a drink')
}else{
    console.log("Come back when youre old enough")
}
age=100
//ternary syntax boolean ? action if true :action if false
age>=21 ? console.log('come on in'): console.log('come back later')
console.log(age>=21? 'come in':'come back later')
//ternary with no actual else action
//age>= 21 ? enterBar(): ''

// function enterBar(){
//     pass
// }
//ternary with if,elif,else
//syntax boolean ? actionIfTrue : 2ndBoolean ? actionIf2ndTrue : actionIfAllFalse
let name = 'sean'

name === 'sean' ? 'instructorOne': name === 'dylan' ? 'instructorTwo':'student'

const numArray = [1,2,3,10]

// traditional for loop-copied dylans til *
for (let i=0;i<numArray.length;i++) {
    console.log(numArray[i])
  }
  // Loop Backwards
  for (let i=numArray.length-1;i>=0;i--) {
    console.log(numArray[i],'backwards')
  }
  // Increment by two
  for (let i=1;i<numArray.length;i+=2) {
    console.log(numArray[i])
  }
  
  for(let num of numArray){
    console.log(num, 'for of')
  }
  
  let i = 0
  while(i<10){
    console.log(`i = ${i}`)
    i++
  }
  // Break and loop
  i = 0
  while(i<10){
    console.log(`i = ${i}`)
    i++
    if(i === 5){
      break
    }
  }
  
  i = 0
  while(i<10){
    if(i === 5){
      i++
      continue
    } 
    console.log(`i = ${i}`)
    i++
  }
  //*

//similar to python dictionary
//Date class  is library

const today = new Date()
//server day of wk,month,yr,time zone
console.log(today)
//convert with tostring
console.log(today.toString())

console.log(today.getMonth())
console.log(today.getDate())
console.log(today.getDay())

//switch case-replacement for if statement
//switch then take in a parameter, curly braces with conditions
//0 is sunday
dayOfWeek=today.getDay()
switch(dayOfWeek){
    case 0:
        console.log("time to prepare for mondays class")
        break
    case 1:
        console.log("wknd is over, glad i finished hw")
        break
    case 2:
        console.log("is the week over")
        break
    case 3:
        console.log("hump day")    
        break
    case 4:
        console.log(" last day of th wk")
        break
    case 5:
        console.log("project day")
        break
    case 6:
        console.log("we are sad we dont have class saturdyay")
        break
}

//create switch statement with cases A B C D F
let myGrade = "A"
console.log(myGrade)
switch("A"){
    case "A":
        console.log("its new years month")
        break
    case "B":
        console.log("its valentines day month")
        break
    case "C":
        console.log("its easter month")
        break
    case "D":
        console.log("April fools month")    
        break
    case "F":
        console.log("its memorial day month")
        break
}

//OBJECTS
//key,values pair

const instructor = {
    firstName:'sean',
    age:25,
    sweetRide: 'honda scooter',
}
//accessing values good either way
console.log(instructor['firstName'])
console.log(instructor.age) 

console.table(instructor)//shows a tablw in console

//adding key value pairs
instructor.favoriteFramework = 'nextJs'
console.log(instructor.favoriteFramework)

//deleting key
delete instructor.sweetRide //deletes seans sweetride in table
console.log(age)
const {firstName,favoriteFramework,age:instructorAge} = instructor
console.log(firstName, instructorAge)

function logAttribute({firstName,favoriteFramework,age}){
    console.log(firstName)
    console.log(age)
    console.log(favoriteFramework)
}
logAttribute(instructor)

//spread operator and functionalit of objects

console.log({} ? "empty obj true" : 'false')

console.log( {a:1,b:2} == {a:1,b:2} )
console.table.apply(instructor)

//create a class animals, attributes:name,age  a method to walk
//create a dog & cat class that inherits from animals and overwrites walk

class Animals {
    constructor (name,age,method){
        this.name = name
        this.age = age
        this.method = method
    }
    describeAnimals(){
        return `${this.name} is ${this.age} years old and ${this.method}`
    }
}
const animal = new Animals('tiger',10,'runs')

console.log(animal.name)
console.log (animal.describeAnimals())

class dog extends Animals{
    constructor (name,age,method){
        super(name,age)
        this.method = method
    }
    describeAnimals(){
        return `${this.name} is ${this.age} years old and ${this.method}`
    }
}
console.log(dog,age)

//call stack
console.log('b4 timeout')
setTimeout(()=>console.log('during timeout'),2000)
console.log('after timeout')

console.log('b4 timeout')
setTimeout(()=>console.log('during timeout'),0)
console.log('after timeout')

//async-api call

function apiEx(){
    setTimeout(()=>'test data',1)
    console.log("waitin ondata")
}
apiEx()
