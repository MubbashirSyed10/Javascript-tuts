// JAVASCRIPT BASICS

console.log("Hello World");
console.log(1 + 2);
var a = 1;
console.log(a + 6);

console.log("syed", "Mubbashir");
var name1 = "mubbas";
var name2 = "hir";

console.log(name1 + name2);
console.log(10 > 4);
console.log("'UpGrad'is an elearning platform.");
console.log('\'UpGrad\' is a elearning platform.');


// .length function is used to get the length of the string
var name = 'Mubbashir Syed';
console.log(name.length);

var x = 1 + 2 + 'UpGrad'; //"3"+"UpGrad"
var y = 'UpGrad' + 1 + 2; //"UpGrad"+"1"//"UpGrad1"+"2"
console.log(x, y);
console.log(3 + 3 + 'UpGrad' + 2 + 3 + 'UpGrad' + 3 - 2);

//
var string1 = 3 + 3 + "UpGrad" + 2 + 3;
var num1 = 2;
var num2 = 3 - 2;
console.log(string1 + "UpGrad" + num1 + num2);
//Output 
// 6upGrad23upGrad21
// 6UpGradUpGrad23UpGrad21
// 6UpGrad23UpGrad21


// Convert string to a valid number
var i = "20";
var j = "2"; // if j = 2a then output will be NaN
var add = i + j;
var sub = i - j;
var mul = i * j;
var div = i / j;
console.log(add, sub, mul, div);
console.log(isNaN(j));

//conver string to valid number
//Number()
//The parseInt() or parseFloat() function, and
//The +() function.
console.log(Number("220aa"));
console.log(parseInt("20asd233"));

// null and undefined
var a = null;
console.log(a);
var b;
console.log(b);

//typeof operator
console.log(typeof 12);
console.log(typeof "syed");
console.log(typeof true);
console.log(typeof 11.2);
console.log(typeof undefined);
console.log(typeof null);

// triple equality operator '===' it checks the value and its data type
console.log(0 == "0");
console.log(0 === "0");

//Ternary operator
//condition ? true-block : false-block
var ter = 10;
ter % 2 == 0 ? console.log("even") : console.log("odd");
console.log(ter % 2 == 0 ? "Even" : "Odd");

//Array in js
var arrname;
arrname = [1, 2, 3];
console.log(arrname);
console.log(arrname[2]);
arrname[3] = 4;
console.log(arrname);
//push function will insert the element at the end of the array
arrname.push(5);
console.log(arrname);
//unshift function will insert the element at the beginning of the array.
arrname.unshift(0);
console.log(arrname);
arrname.pop();
console.log(arrname);
arrname.shift();
console.log(arrname);

var developer = ["Syed", "Mubbashir", "Mumbai", 21, true];
console.log(developer);

//slice() and splice()
var alphabets = ['a', 'b', 'c', 'd', 'e'];
console.log(alphabets.slice(1, 4)); // 1 will be inclusive and 4 will be exclusive

alphabets.splice(2, 3, 'z', 'm');
console.log(alphabets);

//Objects in js
var book = {
    title: "X",
    nopages: 29,
    "is-Available": true,
    author: {
        name: "R R Martin"
    }
}

console.log(book["is-Available"]);
console.log(book.nopages);
console.log(book);
console.log(book.author.name);

// for(var key in object)
//{
//  
//}

for (var key in book) {
    console.log(key + " = " + book[key]);
}

// Functions
var cartAmount = 2000;
function applyDiscount(cartAmount) {
    //var cartAmount = 1000;
    var discountAmount = 100;
    cartAmount -= discountAmount;
    console.log(cartAmount);
}

applyDiscount(cartAmount);

var user = {
    name: "Mubbashir",
    greet: function () // this function is called as method in js
    {
        console.log("Hello User");
        //alert("Hello User");    
    }
}

user.greet();

// Optional part of js
//var name123 = prompt("What is your name? ");
//console.log(name123);

// ES6 introduced two new ways to declare a variable - let and const
let name1233 = "Syed";
console.log(name1233);
console.log(typeof (name1233));
// difference between let and const is in let we can modify later on however in const you cant
// let and const are block codes it will not be accessible outside the block
/*function placeOrder(status)
{
    if(status)
    {
        let message = "Order successfully placed!";
        console.log(message);
    }
    console.log(message);
}
placeOrder(true);
*/

function placeOrder(status)
{
    let message = "Order successfully placed!";
    if(status)
    { 
        console.log(message);
    }
    console.log(message);
}
placeOrder(true);
function placeOrder(status)
{
    if(status)
    {
        var message = "Order successfully placed!";
        console.log(message);
    }
    console.log(message);
}
placeOrder(true);

// Function prototype
let animal = {
    moves: false
}
let rabbit = {
    eats: true
}
rabbit.__proto__;
// rabbit will extend from animal and it can use its properties
rabbit.__proto__ = animal;

// classes in js, it was introduced with es6 and it is just another way of writing functions
class Animal {
}
a = new Animal();
class Animal2 {
    constructor() {
        this.moves = true;
    }
}
a1 = new Animal2();
class Rabbit extends Animal2 {

}
r = new Rabbit();

class Rabbit1 extends Animal2 {

}
r1 = new Rabbit1();

class Rabbit2 extends Animal2 {
    constructor() {
        super();
        this.eats = true;
    }
}
r2 = new Rabbit2();
console.log(r2.Rabbit2);

// this keyword
var operation = {
    a: 1,
    b: 2,

    add: function () {
        this.a + this.b;
        console.log("a = " + this.a + ", b = " + this.b);
        var print = function () {
            console.log("a = " + this.a + ", b = " + this.b);
        }

        print();
    }
}

operation.add();
//=========================================================
// Arrow Functions
function print(firstname, lastname) {   // in es5
    console.log(firstname + " " + lastname);
}
const print1 = (firstname, lastname) => {  // in es6
    console.log(firstname + " " + lastname);
}
print("Syed", "Mubbashir");
print1("Hello", "World!");

// Arrow function can solve the issue of this keyword 
var operation1 = {
    a1: 1,
    b1: 2,

    add1: function () {
        this.a1 + this.b1;
        console.log("a = " + this.a1 + ", b = " + this.b1);
        function print4(){
            console.log("a = " + this.a1 + ", b = " + this.b1);
        }

        print4();
    }
}

operation1.add1();

//What will happen if we change the outer function into an arrow function
var operation2 = {
    a2: 1,
    b2: 2,

    add2:() => {
        //this.a1 + this.b1;
        console.log("a = " + this.a2 + ", b = " + this.b2);
        let print5 = () =>{
            console.log("a = " + this.a2 + ", b = " + this.b2);
        }

        print5();
    }
}

operation2.add2(); // undefined because it lost the scope of the variable and started pointing to the global variable which is the window object, so the inner function points to the outer function which was pointing to the window object thats why both results to undefined.

// map()

var arr = [10,20,30];
const map1=arr.map(function(item){
    return item*2;
})
console.log(map1);

//======================================================
// filter()

const filter1 = arr.filter(function(item){
    return item == 10;
})
console.log(filter1);
const filter2 = arr.filter(function(item){
    return item > 10;
})
console.log(filter2);
//======================================================
// reduce()

const reduce1 = arr.reduce(function(x,y){
    console.log("x: "+ x+"y: "+y);
    return x+y;
})
console.log(reduce1);
//======================================================
//ES6 
var firstName1 = "Syed";
var secondName2 = "Mubbashir";
console.log(`My name is ${firstName1} ${secondName2}`);

// Advanced Javascript
// Closure
function greet(name) {
	var greeting = "Hi" + name;
	return function() {
		console.log(greeting);
	}
}

var sayHello = greet("Sakshi");
console.log(sayHello());


function createEmployeeID() { 
	var prefix = "employee"; 
	var generateID = function() { 
		for (var i = 0; i < 5; i++) { 
			console.log(prefix + i); 
		} 
	} 
	return generateID; 
} 
var print = createEmployeeID(); 
print();

//Spread operator is used we want to transform an array into its individual elements
getSum = function(a,b,c,d){
    return a+b+c+d;
}
var arrr = [1,2,3,4];
console.log(getSum.apply(null,arrr));
// much easier way to do this using spread operator
console.log(getSum(...arrr));

// Array reference
var a = [1, 2, 3];
var a1 = a;

a.push(2);
console.log(a);
console.log(a1);
/*
Notice that the array a has been passed as reference to the variable a1. Now, if you make any change to a1, the array a will also reflect those changes. 
In the given code snippet, array a contains three values - 1, 2, and 3. Now, the array a is assigned to variable a1. So, a1 now points to the array a. Now, when you push (add) an element to the array a. After this, you print the array a to the console, which will print the updated array containing 4 elements - 1, 2, 3, and 2. Now, since a1 also points to the same array a, the array a1, when printed to the console, prints the 4 elements inside the array a as 1, 2, 3, and 2.
Thus, this option is the correct choice.
*/
// rest parameters
function add3(...arr2)
{
    let sum = 0;
    arr2.forEach(element =>sum+=element);
    return sum;
}
console.log(add3(1,2,3,4,5));

// Asynchronous Javascript
console.log("Print line 1");
setTimeout(()=>{
    console.log("Print line 2");
},10000);
console.log("Print line 3"); 

// CallBacks in synchronous JavaScript
let add2 = (callback) => {
    let x = 2, y = 3;
    console.log("Sum :", x + y);
    callback();
}

add2(function() {
    console.log("Finished this operation!");
});

const subtract = (callback) => {
    let x = 2, y = 3;
    console.log("Difference :", x - y);
    callback();
}

subtract(function() {
    console.log("Finished this operation!");
});

// Callbacks in asynchronous javascript ========================================
let name1234;
let getName = (cb) => {
	// get name from DB
	setTimeout(() => {
		name1234 = "Syed";
		cb();   // cb(name1234)
	}, 2000);
}
let greet1 = () => {  // greet1 = (nameval) =>
	console.log(`Hello ${name1234}`); //$(nameval)
}
getName(greet1);
//==============================================================================
// ---------------------------Callback Hell---------------------------------
const getAddress = () => {
    getContinents(continent => {
      getCountries(continent, country => {
        getStates(country, state => {
          getCities(state, () => {
            done();
          });
        });
      });
    });
   };
   
   const getContinents = callback => { // callback = getCountries()
    setTimeout(() => {
      // code to get all continents
      let continent = "Asia";
      console.log(continent);
      callback(continent);
    }, 1000);
   };
   
   const getCountries = (continent, callback) => { // callback = getStates()
    setTimeout(() => {
      // code to get all countries
      let country = "India";
      console.log(country);
      callback(country);
    }, 1000);
   };
   
   const getStates = (country, callback) => { // callback = getCities()
    setTimeout(() => {
      // code to get all states
      let state = "Rajasthan";
      console.log(state);
      callback(state);
    }, 1000);
   };
   
   const getCities = (state, callback) => { // callback = done()
    setTimeout(() => {
      // code to get all cities
      let city = "Jaipur";
      console.log(city);
      callback();
    }, 1000);
   };
   
   const done = () => {
    console.log("DONE!");
   };
   
   getAddress();

//===============================================================================================
// Promise in javascript- A promise is an object which makes the result produced by the producer code available to the consumer code, thereby linking them together.
let promiseObj = new Promise((resolve,reject) =>{
    console.log("Producing code is executed automatically as soon as the promise object is created.");
})
console.log(promiseObj);
// creating promise with producer
let promiseObj1 = new Promise((resolve,reject)=>{
    console.log("Getting the name from DB...");
    setTimeout(()=>{
        // resolve("Syed");
        reject(new Error("Error getting name from DB"));
    })
})
console.log(promiseObj1);

// then() method as consumer
let promiseObj2 = new Promise((resolve,reject)=>{
    console.log("Getting name...");
    setTimeout(()=>{
        //resolve("Mubbashir");
        reject("error while getting name");
    },0);
})
promiseObj2.then(val=>{
    //console.log(`Name is ${val}`);
},(err)=>{
    console.log(`Error is ${err}`);
})
// catch() method
let promiseObj3 = new Promise((resolve,reject)=>{
    console.log("Getting name...");
    setTimeout(()=>{
        //resolve("Mubbashir");
        reject("error while getting name");
    },0);
})
promiseObj3.catch(val=>{
    //console.log(`Name is ${val}`);
},(err)=>{
    console.log(`Error is ${err}`);
})
// async and alert 
let foo = async () => Promise.resolve("Srishti"); // Here if we give = async() => "Srishti" then also we will get the same output because async keyword will make any function to a promise function and it will resolve the value which was present in it.
foo().then(val => alert(val));

// defining the async function which waits for the promise to be resolved / rejected
const getName2 = async () => {
    try {
        let name = await namePromise;
        console.log(`Name received from DB = ${name}`);
    } catch (err) {
        console.log(err);
    }
}

// defining the promise object with the producer
let namePromise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);
});

getName2();















































