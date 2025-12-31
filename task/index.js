/* 1.	Write a program that checks if a number is:
o	Positive, negative, or zero
o	Even or odd
(Use %, >, <, ===)
*/
let number = 5;

if (number > 0) 
    console.log("Positive");
else if (number < 0) 
    console.log("Negative");
else 
    console.log("Zero");

/*even or odd */
var num=5;
if(num%2===0){
    console.log("even");
}
    else {
         console.log("odd");
    }


/*2.	Create a program that compares two numbers and:
o	Displays the greater number
o	If equal, display their sum
(Use >, <, ===, +) */

let num1 = 10;
let num2 = 20;

if (num1 > num2){
     console.log(num1 + " is greater");
    }
else if (num1 === num2){
     console.log("Equal, sum = " + (num1 + num2));
      }
else
     console.log(num2 + " is greater");

/*3.	Write a program that calculates BMI and classifies it:
o	Underweight
o	Normal
o	Overweight
o	Obese
(Use /, *, comparison operators)
 */
let weight = 70;
let height = 1.75;
let bmi = weight / (height * height);

if (bmi < 18.5){
     console.log("Underweight");
}
else if (bmi < 25){
     console.log("Normal");
}
else if (bmi < 30){
     console.log("Overweight");
} 
else{
   console.log("Obese");
}


//4.Create a program that checks whether a number is divisible by 3, 5, or both.
 
let n = 15;

if (n % 3 === 0 && n % 5 === 0){
     console.log("Divisible by 3 and 5");
}
else if (n % 3 === 0){ 
    console.log("Divisible by 3");
}
else if (n % 5 === 0) {
    console.log("Divisible by 5");
}
else {
    console.log("Not divisible");
}

//5.Write a program that calculates the final price after discount and tax
let price = 1000;
let discount = 10;
let tax = 18;

let finalPrice = price * (1 - discount / 100) * (1 + tax / 100);
console.log("Final Price:", finalPrice);

/*6.	Create a login system that checks:
o	Username exists
o	Password correct
o	Account active
*/
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login successful");
} else {
    console.log("Invalid login");
}


/*7.Write a program that checks eligibility for a scholarship based on:
o	GPA
o	Family income
o	Extra achievements
*/
let gpa = 3.6;
let income = 40000;
let achievements = 2;

if (gpa >= 3.5 && income < 50000 && achievements >= 2) {
    console.log("Scholarship approved");
} else {
    console.log("Scholarship denied");
}

/*8.Create a program that checks if a person can drive based on:
o	Age
o	Has license
o    not drunk
 */
let age = 20;
let hasLicense = true;
let isDrunk = false;

if (age >= 18 && hasLicense && !isDrunk) {
    console.log("Allowed to drive");
} else {
    console.log("Not allowed to drive");
}


/*9.Write a program that checks if a number is:
o	Between 10 and 100
o	Or exactly 0
 */
let rangeNum = 50;

if ((rangeNum >= 10 && rangeNum <= 100) || rangeNum === 0) {
    console.log("Valid number");
} else {
    console.log("Invalid number");
}


/* 10.Create a program that validates form submission using ! operator.
🔹 Assignment Operators (=, +=, -=, *=)*/
let name = "Kevin";
let email = "kevin@mail.com";
let formPassword = "password123";
let terms = "yes";
let errors = [];

if (!name){
 errors.push("Name required");
}
if (!email){
     errors.push("Email required");
}
if (formPassword.length < 8){ 
    errors.push("Password too short");
}
if (terms !== "yes"){
  errors.push("Accept terms");
} 

if (errors.length === 0) {
      console.log("Form submitted");
}
  
else{
     console.log(errors);
}

/*11.Write a program that updates a bank balance after:
o	Deposit
o	Withdrawal
(Use += and -=) */
let balance = 1000;
let deposit = 300;
let withdraw = 200;

if (deposit > 0){
  balance += deposit;
} 
if (withdraw <= balance){ 
    balance -= withdraw;
} 
console.log("Balance:", balance);

// 12.Create a program that calculates total marks and assigns grade.
let total = 0;
let marks = [70, 80, 90, 60, 75];

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;
let grade;

if (average >= 90){
    grade = "A";
} 
else if (average >= 80){
grade = "B";
} 
else if (average >= 70){
grade = "C";
}
else if (average >= 60){
grade = "D";
} 
   else{

   grade = "F"
   }

//13.Write a program that calculates compound interest using assignment operators.
let principal = 2000;
let rate = 5;
let years = 2;
let amount = principal * Math.pow(1 + rate / 100, years);
console.log("Final Amount:", amount.toFixed(2));


/*14.Create a shopping cart total calculator that updates total dynamically. 
🔹 Strict vs Loose Comparison*/
let cartTotal = (200 * 2) + (150 * 1);
let cartDiscount = 10;

cartTotal -= cartTotal * cartDiscount / 100;
cartTotal *= 1.08;
console.log("Cart Total:", cartTotal.toFixed(2));


/*15.Write a program that compares two inputs using:
o	==
o	===
Explain the output difference.
 */
let a = "5";
let b = 5;

console.log(a == b);
console.log(a === b);


// 16.Create a program that validates age input when it is provided as a string.
let ageCheck = 17;

if (isNaN(ageCheck)){
     console.log("Invalid age");
}
else if(ageCheck >= 18){
    console.log("Adult");
}
else{
    console.log("Underage");
} 


/*17.	Rewrite an if-else program using ternary operator:
o	Check pass or fail
*/
let score = 45;
console.log(score >= 40 ? "Pass" : "Fail");


/*18.	Create a program that displays:
o	"Even" or "Odd"
o	Using ternary inside if
*/
let evenNum = 9;
console.log(evenNum % 2 === 0 ? "Even" : "Odd");


/*19.Write a program that assigns a discount using nested ternary operators.
🔹 Type & Edge Case Handling
 */
let member = "gold";
let amountSpent = 1200;
let discountRate = 0;

if (member === "gold"){
  discountRate = amountSpent > 1000 ? 0.25 : 0.20;
} 
else if (member === "silver"){
     discountRate = 0.15;
}
else {
    discountRate = 0.05;
}
console.log("Final Amount:", amountSpent * (1 - discountRate));


/* 20.Write a program that checks if a value is:
o	Number
o	Not NaN
o	Finite
*/
let checkNum = 25;  
let isValidNumber = typeof checkNum === 'number' && !isNaN(checkNum) && isFinite(checkNum);

console.log("Value:", checkNum);
console.log("Is valid number?", isValidNumber);


 //21.Create a program that safely divides two numbers and handles zero. 

let dividend = 10;
let divisor = 2;

if (divisor === 0) {
    console.log("Cannot divide by zero");
} 
else {
    console.log("Result:", dividend / divisor);
}

/*22.	Write a program that checks if a variable is:
o	null
o	undefined
o	Or valid
 */
let someVariable = null; 

if (someVariable === undefined) {
    console.log("Variable is undefined");
} else if (someVariable === null) {
    console.log("Variable is null");
} else {
    console.log("Variable is valid:", someVariable);
}

/*23.Write a program that determines user access level:
o	Admin
o	Editor
o	Viewer
(Use logical & comparison operators) */
let userRole = "editor"; 
let userPermission = "edit";  

if (userRole === "admin"){
 console.log("Access granted");
} 
else if (userRole === "editor" && (userPermission === "edit" || userPermission === "view")){
    console.log("Access granted");
}
else if (userRole === "viewer" && userPermission === "view"){
    console.log("Access granted");
}
else{
    console.log("Access denied");
}

//24.Create an electricity bill calculator using slab rates. */
let units = 250;
let bill = 0;

if (units <= 100){
 bill = units * 3;
}
else if (units <= 200){
    bill = 100 * 3 + (units - 100) * 5;
} 
else{
 bill = 100 * 3 + 100 * 5 + (units - 200) * 7;

} 
console.log("Electricity Bill:", bill);



/* 25.	Write a coupon validation system that checks:
o	Expiry date
o	Minimum order value
o	User eligibility
*/
let couponExpiry = new Date("2025-12-31");
let minOrderValue = 100;
let requiredMembership = "gold";

let orderAmount = 150;
let userMembership = "gold";
let today = new Date();

if (couponExpiry < today) {
    console.log("Coupon expired");
}
else if (orderAmount < minOrderValue) {
    console.log("Order value too low");
}
else if (userMembership !== requiredMembership) {
    console.log("User not eligible");
}
else {
    console.log("Coupon applied successfully");
}