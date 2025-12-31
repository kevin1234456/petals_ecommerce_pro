 let squareroot=Math.sqrt(4);
 console.log("squareroot 4:",squareroot);

 let pow = Math.pow(2,3);
 console.log("2 to power of 3:",pow);

 let brand =" John Maiden";
 let bandUpper = brand.toUpperCase();
 console.log("favoriteBand:",bandUpper);




 function validatePassword(password, confirmPassword) {
  if (!password || password.length < 8) {
    return "Password must be at least 8 characters";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  return "Password is valid";
}

console.log(validatePassword("password1", "password2"));
console.log(validatePassword("pass", "pass"));
console.log(validatePassword("password1", "password1"));




// sum with reduce;
let nums= [3,5,7,9];
let sum =nums.reduce((acc , curr)=>acc+curr,0);
console.log('sum is:',sum);

//map
let num =[2,4,6,8];
let doubled =num.map(i=>i*2);
console.log("doubled:",doubled);

//filter
let  x =[1,2,3,4,5,6,7,8,9,10];
let odd =x.filter(i=>i%2!==0);
console.log("odd:",odd);

 //find
 let  value =[24,35,60 ,70];
 let greatValue = value.find(value=>value>50);
 console.log("greatValue:",greatValue);

 //count using reduce

let items =['pens','book','eraser','computer'];
let countItems = items.reduce(acc=>acc+1,0);
console.log('countItems:',countItems);

//capitalize word using map

let course = ['html','css','javascript'];
let capCourse = course.map(i=>i.toUpperCase());
console.log("capCourse:",capCourse);


//filter removing negative number
let n = [-5, 10, -3, 8, 0];
let nonNegative = n.filter(n=>n>0);
console.log("nonNegative:",nonNegative);

// multiply using reduce

let nums8 =[2,3,4];
let product = nums8.reduce((acc,curr)=>acc * curr);
console.log('product:',product);

//log using Foreach
const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});



//check exists by using find
let nums10 = [10, 20, 30, 40];
let exists = nums10.find(num => num === 25);
console.log(" Does 25 exist?", exists);


//creating object with propety of car

let car ={
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
}

//accesing properties using dot notation
let user = { name: 'Alice', age: 22 };
console.log("User Name:", user.name);
console.log("User Age:", user.age);
//accesing properties using bracket notation