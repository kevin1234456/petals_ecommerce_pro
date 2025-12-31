
// 1. Generate a number pyramid using nested loops
let rows1 = 4;
for (let i = 1; i <= rows1; i++) {
  let line = "";
  for (let s = rows1 - i; s > 0; s--) line += " ";
  for (let j = 1; j <= i; j++) line += j + " ";
  console.log(line);
}

// 2. Print a diamond star pattern based on user input size

let n = 4; 
for (let i = 1; i <= n; i++) {
  let line = "";
  for (let s = n - i; s > 0; s--) line += " ";
  for (let j = 1; j <= 2 * i - 1; j++) line += "*";
  console.log(line);
}
for (let i = n - 1; i >= 1; i--) {
  let line = "";
  for (let s = n - i; s > 0; s--) line += " ";
  for (let j = 1; j <= 2 * i - 1; j++) line += "*";
  console.log(line);
}
// 3. Reverse a number without converting it to string

let num = 12345;
let arr = num.toString().split("");


arr.reverse();

let reversed = Number(arr.join(""));

console.log(reversed);


// 4. Find all prime numbers between 1 and 1000
for (let num = 2; num <= 1000; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(num);
}

// 5. Check if a number is a palindrome using loops only
let num5 = 12321;
let original5 = num5;
let reversed5 = 0;
while (num5 > 0) {
  reversed5 = reversed5 * 10 + (num5 % 10);
  num5 = Math.floor(num5 / 10);
}
console.log(original5 === reversed5 ? "Palindrome" : "Not palindrome");

// 6. Find the second largest number in an array using loops only
let arr6 = [10, 25, 7, 50, 32];
let largest6 = -Infinity;
let secondLargest6 = -Infinity;
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > largest6) {
    secondLargest6 = largest6;
    largest6 = arr6[i];
  } else if (arr6[i] > secondLargest6 && arr6[i] !== largest6) {
    secondLargest6 = arr6[i];
  }
}
console.log("Second largest:", secondLargest6);

// 7. Remove duplicate elements from an array without using Set
let arr_k = [1, 2, 3, 2, 4, 1, 5];
let unique = [];
for (let i = 0; i < arr_k.length; i++) {
  let found = false;
  for (let j = 0; j < unique.length; j++) {
    if (arr_k[i] === unique[j]) {
      found = true;
      break;
    }
  }
  if (!found) unique.push(arr_k[i]);
}
console.log("Unique array:", unique);

// 8. Count the frequency of each element in an array
let a = [1, 2, 2, 3, 1, 4, 2];
let freq_a = {};
for (let i = 0; i < arr_a.length; i++) {
  let count = 0;
  for (let j = 0; j < arr_a.length; j++) {
    if (arr_a[i] === arr_a[j]) count++;
  }
  freq_a[arr_a[i]] = count;
}
console.log("Frequencies:", freq_a);

// 9. Rotate an array k times using loops
let x = [1, 2, 3, 4, 5];
let y = 2;
for (let i = 0; i < y; i++) {
  let last = x[x.length - 1];
  for (let j = x.length - 1; j > 0; j--) {
    x[j] = x[j - 1];
  }
  x[0] = last;
}
console.log("Rotated array:", x);

// 10. Find the intersection of two arrays without built-in methods
let arr_a = [1, 2, 3, 4, 5];
let arr_b = [3, 4, 5, 6, 7];
let intersection = [];
for (let i = 0; i < arr_a.length; i++) {
  for (let j = 0; j < arr_b.length; j++) {
    if (arr_a[i] === arr_b[j]) {
      let found = false;
      for (let k = 0; k < intersection.length; k++) {
        if (intersection[k] === arr_a[i]) {
          found = true;
          break;
        }
      }
      if (!found) intersection.push(arr_a[i]);
    }
  }
}
console.log("Intersection:", intersection);

// 11. Count vowels, consonants, digits, and special characters in a string
let str_x = "Hello World! 123";
let vowels = 0, consonants = 0, digits = 0, special = 0;
for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();
  if ("aeiou".includes(ch)) vowels++;
  else if (ch >= 'a' && ch <= 'z') consonants++;
  else if (ch >= '0' && ch <= '9') digits++;
  else special++;
}
console.log("Vowels:", vowels, "Consonants:", consonants, "Digits:", digits, "Special:", special);

// 12. Find the first non-repeating character in a string
let str= "swiss";
let firstNonRepeating = null;
for (let i = 0; i < str.length; i++) {
  let count = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[i] === str[j]) count++;
  }
  if (count === 1) {
    firstNonRepeating = str[i];
    break;
  }
}
console.log("First non-repeating character:", firstNonRepeating);

// 13. Reverse each word in a sentence using loops
let sentence = "Hello World";
let words = sentence.split(" ");
let reversedSentence = "";
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let reversedWord = "";
  for (let j = word.length - 1; j >= 0; j--) reversedWord += word[j];
  reversedSentence += reversedWord + " ";
}
console.log(reversedSentence.trim());

// 14. Check if two strings are anagrams using loops only
let str14a = "listen";
let str14b = "silent";
let isAnagram14 = true;
if (str14a.length !== str14b.length) isAnagram14 = false;
else {
  for (let i = 0; i < str14a.length; i++) {
    let countA = 0, countB = 0;
    for (let j = 0; j < str14a.length; j++) {
      if (str14a[i] === str14a[j]) countA++;
      if (str14a[i] === str14b[j]) countB++;
    }
    if (countA !== countB) {
      isAnagram14 = false;
      break;
    }
  }
}
console.log(isAnagram14 ? "Anagrams" : "Not anagrams");

// 15. Simulate a login attempt system with maximum 3 tries

let correctPassword = "1234";
let attempts = 0;
let success = false;

const simulatedInputs = ["1111", "2222", "1234"];

do {
  
    console.log(`Attempt ${attempts + 1}: Entered password: ${input}`);
    
    if (input === correctPassword) {
        success = true;
        console.log(" Login successful!");
        break;
    } else {
        console.log(` Wrong password. Attempts left: ${3 - attempts - 1}`);
    }
    
    attempts++;
    
} while (attempts < 3 && !success);

if (!success) {
    console.log("Login failed - Maximum attempts reached");
}

// 16. Print numbers 1–100, skip multiples of 3, stop at first multiple of 25
for (let i = 1; i <= 100; i++) {
  if (i % 25 === 0) break;
  if (i % 3 === 0) continue;
  console.log(i);
}

// 17. Create a menu-driven program using do...while
let choice;
let marks = [85, 90, 78];
do {
    console.log("\n1.Show 2.Avg 3.High 4.Exit");
    choice = 2; // Simulate choice
    
    if(choice === 1) console.log(`Marks: ${marks}`);
    if(choice === 2) {
        let avg = marks.reduce((a,b)=>a+b)/marks.length;
        console.log(`Average: ${avg}`);
    }
    if(choice === 3) console.log(`Highest: ${Math.max(...marks)}`);
    
} while(choice !== 4);

// 18. Implement a simple ATM simulation using loops
let balance = 1000;
let atmChoice;

console.log("ATM Simulation (Console Version)");
console.log("=================================");


const simulatedChoices = [1, 2, 100, 3, 200, 4];
let choiceIndex = 0;

do {
  console.log("\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");
  
  
  atmChoice= simulatedChoices[choiceIndex];
  console.log(`User selected: ${atmChoice}`);
  choiceIndex++;
  
  if (atmChoice === 1) {
    console.log(`Balance: $${balance}`);
  } else if (atmChoice === 2) {
    
    let deposit = simulatedChoices[choiceIndex];
    choiceIndex++;
    balance+= deposit;
    console.log(`Deposited: $${deposit}`);
    console.log(`New balance: $${balance}`);
  } else if (atmChoice === 3) {
      
    let withdraw = simulatedChoices[choiceIndex];
    choiceIndex++;
    
    if (withdraw <= balance) {
      balance -= withdraw;
      console.log(`Withdrawn: $${withdraw}`);
      console.log(`New balance: $${balance}`);
    } else {
      console.log(`Insufficient balance! Cannot withdraw $${withdraw}`);
    }
  }
} while (atmChoice !== 4);

console.log("\nThank you for using ATM!");
console.log(`Final balance: $${balance}`);



// 19. Loop through a nested object and flatten it into key-value pairs

let obj = {a: 1, b: {c: 2, d: 3}, e: 4};
let flat = {};
function flatten(o, prefix = "") {
  for (let key in o) {
    if (typeof o[key] === "object") flatten(o[key], prefix + key + ".");
    else flat[prefix + key] = o[key];
  }
}
flatten(obj);
console.log(flat);

// 20. Given an array of objects, filter active users, total balance, highest spender
let users20 = [
  {name: "Alice", active: true, balance: 500},
  {name: "Bob", active: false, balance: 700},
  {name: "Charlie", active: true, balance: 1200}
];
let activeUsers20 = [];
let totalBalance20 = 0;
let highestSpender20 = users20[0];
for (let i = 0; i < users20.length; i++) {
  if (users20[i].active) activeUsers20.push(users20[i]);
  totalBalance20 += users20[i].balance;
  if (users20[i].balance > highestSpender20.balance) highestSpender20 = users20[i];
}
console.log("Active users:", activeUsers20);
console.log("Total balance:", totalBalance20);
console.log("Highest spender:", highestSpender20);
