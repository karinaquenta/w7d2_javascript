//Q1:Use the array of shop items provided and present the the information in the following format

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

for (const item of shopItems) {
    console.log("====================================");
    console.log(`Name: ${item.name}`);
    console.log(`Price: ${item.price}`);
    console.log(`About: ${item.desc}`);
    console.log(`Category: ${item.category}`);
  }

//Question 2:Write a function that parses through the below object and displays all of their favorite food dishes as shown:
const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayDishes(mainFood, items) {
    for (const key in mainFood) {
    const value = mainFood[key];
    const fullList = items ? items + '.' + key : key;
        
    if (Array.isArray(value)) {
        console.log(fullList + " contains:");
        for (const items of value) {
        console.log(items);
        }
    }

//displayDishes(hwPerson)

//Question 3:Create a Promised based function that will check a string to determine if it's length is greater than 10.
//If the length is greater than 10 then resolve it and console log "Big word". 
//If the length of the string is less than 10 then reject it and  console log "Small String"

function checkString(string) {
    return new Promise((resolve, reject) => {
      if (string.length > 10) {
        console.log("Big word");
      } else {
        console.log("Small String");
      }
    });
  }
  
checkString("Sean's the MVP")
//output = Big Word

Question 5:
1: https://www.codewars.com/kata/55a70521798b14d4750000a4/solutions/javascript?filter=me&sort=best_practice&invalids=false
2: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/solutions/javascript?filter=me&sort=best_practice&invalids=false
3: https://www.codewars.com/kata/523b4ff7adca849afe000035/solutions/javascript?filter=me&sort=best_practice&invalids=false
