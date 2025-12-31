function sum(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  console.log("Total:", total); 
  return total;                  
}

sum(2, 3, 4);  
sum(5, 10, 15); 



  



function createCounter() {
  let count = 0;  // This is remembered
  
  return function() {
    count += 1;   // Can change the remembered value
    return count;
  };
}

const counters = createCounter();
console.log(counters());  // 1
console.log(counters());  // 2
console.log(counters());  // 3



function validatePassword(password, confirmPassword) {
  if (!password || password.length < 8) {
    return "Password must be at least 8 characters";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  return "Password is valid";
}


// 5. Debounce a function
function debounce(fn, delay) {
  let timer;
  return function(value) {
    clearTimeout(timer);           
    timer = setTimeout(() => fn(value), delay); 
  };
}

const log = debounce(msg => console.log(msg), 500);

log("Hello");   
log("World");   



// 6. Flatten a deeply nested array

function flatten(arr) {
  let result = [];
  for (let el of arr) {
    if (Array.isArray(el)) result = result.concat(flatten(el));
    else result.push(el);
  }
  return result;
}
console.log(flatten([1, [2, [3, 4], 5]]));


// 7. Power function recursively

function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}
console.log(power(2, 3));


//8. Factorial: recursive & iterative
function factorialRec(n) {
  if (n <= 1) return 1;
  return n * factorialRec(n - 1);
}
console.log(factorialRec(5)); 

// 9. Count all keys in nested object

function countKeys(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
    if (typeof obj[key] === "object" && obj[key] !== null) count += countKeys(obj[key]);
  }
  return count;
}
console.log(countKeys({a:1, b:{c:2,d:{e:3}}}));


// 10. Memoization

function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = args.toString();
    if (cache[key]) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}
const slow = n => n*2;
const fast = memoize(slow);
console.log(fast(5));
console.log(fast(5));


// 11. map, filter, reduce implementations

function myMap(arr, fn) {
  let res = [];
  for (let item of arr) res.push(fn(item));
  return res;
}


function myFilter(arr, fn) {
  let res = [];
  for (let item of arr) if (fn(item)) res.push(item);
  return res;
}

function myReduce(arr, fn, init) {
  let acc = init;
  for (let item of arr) acc = fn(acc, item);
  return acc;
}

// TEST WITH AGE FILTER EXAMPLE
const people = [
  {name: "John", age: 17},
  {name: "Sarah", age: 25},
  {name: "Mike", age: 15},
  {name: "Lisa", age: 32}
];

const names = myMap(people, p => p.name);
console.log("All names:", names); 

const adults = myFilter(people, p => p.age >= 18);
console.log("Adults:", adults); 


const totalAge = myReduce(people, (sum, p) => sum + p.age, 0);
console.log("Total age:", totalAge); 

// 12. Execute callbacks in sequence

function runInSequence(callbacks) {
  let result;
  for (let cb of callbacks) result = cb(result);
  return result;
}
const steps = [
  () => 1,
  prev => prev + 2,
  prev => prev * 3
];
console.log(runInSequence(steps));


// 13. Limit execution to N times

function runNTimes(fn, n) {
  let count = 0;
  return function(...args) {
    if (count < n) {
      count++;
      return fn(...args);
    }
    return "Limit reached";
  };
}
const greet = runNTimes(() => "Hi", 2);
console.log(greet());
console.log(greet());
console.log(greet());


// 14. Retry execution if it fails
function retry(fn, maxRetries) {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      return fn();
    } catch (e) {
      attempts++;
    }
  }
  throw new Error("Max retries reached");
}
let count = 0;
function failSometimes() {
  count++;
  if (count < 3) throw "Failed";
  return "Success";
}
console.log(retry(failSometimes, 5));


// 15. Function works with call, apply, bind

function greetFunc(greeting, name) {
  return greeting + " " + name + " from " + this.city;
}
const obj = {city: "Kigali"};
console.log(greetFunc.call(obj, "Hello", "Kevin"));
console.log(greetFunc.apply(obj, ["Hi", "Julia"]));
const bound = greetFunc.bind(obj);
console.log(bound("Hey", "James"));


// 16. Preserve this inside nested function

const obj2 = {
  city: "Paris",
  printCity: function() {
    const self = this;
    function inner() { return "City is " + self.city; }
    return inner();
  }
};
console.log(obj2.printCity());

// 17. Private variables without classes

function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
}
const c = counter();
console.log(c.increment());
console.log(c.get());
console.log(c.count); 


// 18. Simulate API request with callback

function fetchData(data, callback) {
  setTimeout(() => callback("Received: " + data), 500);
}
fetchData("Hello", console.log);

// 19. Callback to Promise
function fakeAPIAsync(data) {
  return new Promise(resolve => setTimeout(()=>resolve("Received: "+data), 500));
}
fakeAPIAsync("Hi").then(console.log);


// 20. Execute multiple async tasks and return first success
function firstSuccess(tasks) {
  return Promise.any(tasks.map(t => t()));
}

const task1 = () => Promise.reject("Fail");
const task2 = () => Promise.resolve("Success");

firstSuccess([task1, task2])
  .then(result => console.log(result))
  .catch(() => console.log("All failed"));






 