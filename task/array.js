// 1. Sum of Numbers: Use reduce() to calculate the total sum.
let nums1 = [3, 5, 7, 9];
let sum = nums1.reduce((acc, curr) => acc + curr, 0);
console.log("1. Total Sum:", sum);

// 2. Double All Values: Use map() to create a new array where each number is doubled.
let numbers2 = [2, 4, 6];
let doubled = numbers2.map(num => num * 2);
console.log("2. Doubled:", doubled);

// 3. Filter Odd Numbers: Use filter() to return only odd numbers.
let nums3 = [1, 2, 3, 4, 5, 6];
let oddNums = nums3.filter(num => num % 2 !== 0);
console.log("3. Odd Numbers:", oddNums);

// 4. Find First Number Greater Than 50: Use find() to get the first value > 50.
let scores = [10, 25, 60, 45, 80];
let firstOver50 = scores.find(score => score > 50);
console.log("4. First value > 50:", firstOver50);

// 5. Count Total Elements Using reduce: Use reduce() to count how many items.
let items = ['Pen', 'Book', 'Eraser', 'Bag'];
let itemCount = items.reduce((acc) => acc + 1, 0);
console.log("5. Total items count:", itemCount);

// 6. Capitalize All Words: Use map() to return: ['JS', 'HTML', 'CSS']
let words = ['js', 'html', 'css'];
let capitalized = words.map(word => word.toUpperCase());
console.log("6. Capitalized:", capitalized);

// 7. Remove Negative Numbers: Use filter() to remove negative values.
let nums7 = [-5, 10, -3, 8, 0];
let nonNegatives = nums7.filter(num => num >= 0);
console.log("7. Positives and Zero:", nonNegatives);

// 8. Multiply All Numbers: Use reduce() to calculate the product.
let nums8 = [2, 3, 4];
let product = nums8.reduce((acc, curr) => acc * curr, 1);
console.log("8. Product:", product);

// 9. Log Each Element with Index: Use forEach() to log index and fruit.
let fruits = ['Apple', 'Banana', 'Mango'];
console.log("9. Fruit List:");
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// 10. Check If a Value Exists: Use find() to check if 25 exists.
let nums10 = [10, 20, 30, 40];
let exists25 = nums10.find(num => num === 25);
console.log("10. Does 25 exist?", exists25);
// 11. Create an Object: Create an object called car with brand, model, year.
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2024
};
console.log("11. Car Object:", car);

// 12. Access Properties: Print the name using dot and bracket notation.
let user = { name: 'Alice', age: 22 };
console.log(" Dot notation:", user.name);
console.log("Bracket notation:", user['name']);

// 13. Add New Property: Add a property age to the student object.
let student = { name: 'John', grade: 'B' };
student.age = 21;
console.log("pdated student:", student);

// 14. Delete a Property: Remove the pages property.
let book = { title: 'JS Basics', pages: 200 };
delete book.pages;
console.log("14. After deletion:", book);

// 15. Loop Through Object: Use for...in to print keys and values.
let person = { name: 'Tom', age: 30, city: 'Kigali' };
console.log("15. Person details:");
for (let key in person) {
    console.log(key, person[key]);
}

// 16. Count Object Properties: Count how many properties the object has.
let phone = { brand: 'Samsung', price: 300, color: 'Black' };
let propertyCount = Object.keys(phone).length;
console.log("16. Number of properties:", propertyCount);


// 17. Destructuring: Use destructuring to extract role and salary.
let employee = { id: 101, role: 'Developer', salary: 500 };
const { role, salary } = employee;
console.log("17. Role:", role, "Salary:", salary);

// 18. Object Inside Array: Use map() to return only names.
let users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 30 }
];
let userNames = users.map(user => user.name);
console.log("18. User Names:", userNames);

// 19. Filter Objects: Use filter() to return users age >= 25.
let olderUsers = users.filter(user => user.age >= 25);
console.log("19. Users aged 25+:", olderUsers);

// 20. Calculate Total Salary: Use reduce() to calculate total salary.
let staff = [
  { name: 'A', salary: 300 },
  { name: 'B', salary: 400 },
  { name: 'C', salary: 500 }
];
let totalSalary = staff.reduce((acc, person) => acc + person.salary, 0);
console.log("20. Total Salary:", totalSalary);