

//function accept an number argument and return their sums
function sum(...nums) {
let total =0;
for( let nums of nums) total= +num;
console.log("Total:",total);
return total;
}

// function  return another function remember closure
function createCounter(){
    let count = 0;
    return function(){
        count +=1;
        return count;
    }
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


// Write a function that validates input types and throws meaningful errors.
function validate(name, age) {
  if (typeof name !== "string" || name === "") {
    throw new Error("Name must be text, not a number");
  }

  if (typeof age !== "number" || age <= 0) {
    throw new Error("Age must be a positive number");
  }

  return "Valid";
}

// Test cases
try {
  console.log(validate(11, 22));
} catch (e) {
  console.log(e.message);
}

try {
  console.log(validate("kevin", -22));
} catch (e) {
  console.log(e.message);
}

try {
  console.log(validate("Kevin", 22));
} catch (e) {
  console.log(e.message);
}

//
function multiBehaviors(...args){
    if(args == 0) return "no arguments";
    if(args == 1) return " one argument:$args{[0]}";
    return "multiple arguments :$args.join(",")";
    console.log(multiBehaviors());
    console.log(multiBehaviors(10));
    console.log(multiBehaviors(1,2,3));
    
}

// debounce
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// Usage
const log = debounce((msg) => {
  console.log(msg);
}, 1000);

log("Hello");
log("World");


// 20. Execute multiple async tasks and return the first 

function firstSuccess(tasks) {
  return Promise.any(tasks.map(t => t()));
}
const task1 = () => Promise.reject("Fail");
const task2 = () => Promise.resolve("Success");
firstSuccess([task1, task2])
  .then(console.log)
  .catch(() => console.log("All failed"));

//
function fakeAPIPromise(task){
    return new Promise(resolve => {
        setTimeout(() =>(resolve("receved: + data"),500))
    }
     
    );
    fakeAPIPromise("Hi").then
}
