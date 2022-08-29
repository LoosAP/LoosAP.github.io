/* 
window.alert("how did you end up here")
window.alert("but really") 
*/

//comment

/* 
    long 
    comment
*/
/*
let age = 21;
age = age + 21;

let name = "tes";

name = name+1 + 1;

let student = true;

console.log(age);
console.log("hello", name);
console.log("bent vagy?", student);

document.getElementById("p1").innerHTML = "hello " + name;
document.getElementById("p2").innerHTML = age;
*/

//arithmetics
/*
let studentcount = 20;

let extrastudentcount = studentcount % 3;

studentcount += 1;

console.log(studentcount);
console.log(extrastudentcount);
*/

//name input
/*
let username = window.prompt("give name hehe");
console.log(username);

document.getElementById("userbutton").onclick = function() {
    username = document.getElementById("username").value;
    console.log(username);
    document.getElementById("namelabel").innerHTML = "hello " + username
}
*/

//typeof
/*
let age =window.prompt("age?");
console.log(typeof age)
age = Number(age);
age += 1;

console.log("you are not ",age," years old")

*/

//const
/*
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("enter the radius of a circle")
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("the circumference is: ", circumference);

document.getElementById("p2").innerHTML = "the circumference is: "+ circumference;
*/

//math
/*
let x = 69.4;
let y = 5;
let z = 9;
let max;
let min;

let pi = Math.PI;

max = Math.max(x,y,z)
min = Math.min(x,y,z)
x = Math.abs(x);

console.log(x);
console.log(max);
console.log(min);
console.log(pi);
*/

//derékszögü háromszög
/*
let a;
let b;
let c;


a = window.prompt("add meg az a-t");
a = Number(a)

b = window.prompt("add meg az b-t");
b = Number(b)

c = Math.pow(a,2) + Math.pow(b,2);
c = Math.sqrt(c);

console.log(c);



document.getElementById("szamolobutton").onclick = function(){

    a = document.getElementById("aderek").value;
    a = Number(a)

    b = document.getElementById("bderek").value;
    b = Number(b)

    c = Math.pow(a,2) + Math.pow(b,2);
    c = Math.sqrt(c);

    document.getElementById("cLabel").innerHTML = "C oldal " + c ;

}
*/
//counter
/*
let count = 0;

document.getElementById("decrease").onclick = function(){
    count -= 1;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("increase").onclick = function(){
    count += 1;
    document.getElementById("countlabel").innerHTML = count;
}
*/

//random
/*
let x = Math.floor(Math.random() * 6) + 1;

console.log(x);
*/

//stringmethods
/*
let username = "    nyomod      ";
let phonenumber = "123-456-7890";

let namelength = username.length
let firstletter = username.charAt(0);
console.log(username.indexOf("m"));
console.log(username.lastIndexOf("o"));
username = username.trim();
username = username.toUpperCase();

phonenumber = phonenumber.replaceAll("-", "/");
console.log(phonenumber);
console.log(username);

*/

//slice()
/*
let fullname = "a gép";

let firstname;
let lastname;

firstname = fullname.slice(0, fullname.indexOf(" "));
lastname = fullname.slice(fullname.indexOf(" ") + 1);


console.log(firstname);
console.log(lastname);
*/

//method chaining
/*
let username= "bro";

let letter = username.charAt(0);
letter = letter.toUpperCase();

console.log(letter);

console.log(username.charAt(0).toUpperCase());
*/

//if statement
/*
let age = 15;
let online = false;
if(age >= 18){
    console.log("you are an adult")
}
else if(age < 0){
    console.log("no birthday?")

}
else if(age > 50){
    console.log("you are old")
}
else{
    console.log("you are not an adult")
}

if(online){
    console.log("you are online");

}
else {
    console.log("you are not online")

}
*/
//checked
/*
document.getElementById("mycheckbox").onclick = function(){
    const checkbox = document.getElementById("mycheckbox");
    const radio1 = document.getElementById("radio1");
    const radio2 = document.getElementById("radio2");
    const radio3 = document.getElementById("radio3");

    if(checkbox.checked){
        console.log("you are subscribed!");
    }
    else{
        console.log("you are not subscribed!");
    }

    if(radio1.checked){
        console.log("1 checked");
    }
    else if(radio2.checked){
        console.log("2 checked");
    }
    else if(radio3.checked){
        console.log("3 checked");
    }
    else{
        console.log("nothing is checked")
    }
    
}
*/

//switches
/*
let grade = "F";

switch (grade) {
    case "A":
        console.log("fucking genius!");
        break;
        
    case "B":
        console.log("normal genius!");
        break;
    case "C":
        console.log("good.");
        break;
    case "D":
        console.log("bad.");
        break;
    case "E":
        console.log("fucking dumbass!");
        break;
    default:
        console.log(grade,"unknown");
        break;
}

switch (true) {
    case >= 90:
        console.log("you    are nothing");
        break;

    default:
        break;
}

*/
// And(&&) and Or(||)
/*
let temp = 12;
let sunny = true;

if(temp > 10 && temp < 30 && sunny) {
    console.log("good weather!");
}
else{
    console.log("not good weather!")

}
*/

// not (!)
/*
let temp = -15;
let sunny = false;

if(!(temp > 10)){
    console.log("good weather!");
}
else{
    console.log("not good weather!")
}

if(!sunny){
    console.log("sunny!");

}
else{
    console.log("not sunny!"); 
}
*/

//while loop
/*
let userName = "";

while (userName == "" || userName == null){
    userName = window.prompt("enter your name");
}
console.log("hello", userName);
*/
// do while loop
/*
let userName;
do{
    userName = window.prompt("enter your name");
}while (userName == "" || userName == null)

console.log("hello", userName);
*/

//for loops
/*
for(let i = 10; i > 0; i -= 1){
    console.log(i);
}
console.log("BOMBA")
*/

// BREAK and CONTINUE break kitor a loopbol, continue skippel egy elemet
/*
for(let i = 1; i <= 20; i+=1){
    if(i == 13){
        continue;
    }
    console.log(i);
}
*/

//nested loops
/*
document.getElementById("button").onclick = function () {
  let rows = document.getElementById("myrows").value;
  let columns = document.getElementById("mycolumns").value;

  rows = Number(rows);
  columns = Number(columns);

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      document.getElementById("myrect").innerHTML += j;
    }
    document.getElementById("myrect").innerHTML += "<br>";
  }
};
*/
//functions
/*
start()
function start(){
    let username = "Kisloos";
    birthday(username)
}


function birthday(username) {
    console.log("hi" , username)
}
birthday("Kisloos")
*/

//return
/*
let area;
let width;
let height;

width = window.prompt("enter width");
height = window.prompt("enter height");

area = getarea(width, height);

console.log("the area is: ", area);

function getarea(width, height) {
  let result = width * height;
  return result;
}
*/

//ternary operator condition ? exprIfTrue : exprIfFalse;
/*
let adult = checkAge(51);
console.log(adult);
function checkAge(age) {
  return age >= 18 ? true : false;
}

checkwinner(1);

function checkwinner(win) {
  win ? console.log("you win!") : console.log("You lose!");
}
*/

//let vs var let limited: {} var limited to functions and: {}()
//global == functionon kivuli valtozo, ha var itt van akkor bajok lehetnek
/*
var name = "yes";

console.log(i);

Sumthin();

function Sumthin() {
  for (var i = 0; i <= 3; i++) {}
}
*/
//template literals
/*
let username = "yes";
let items = 3;
let total = 75;

console.log("Hello", username);
console.log("you have ", items, "items");
console.log("your total is ", total);

console.log(`Hello ${username}`);
console.log(`you have ${items} items`);
console.log(`your total is ${total}`);

let text = `Hello ${username}`;
console.log(text);
*/
//toLocaleString() locale, {options}
/*
let myNum = 123456.789;

myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });
myNum = myNum.toLocaleString("hu", { style: "currency", currency: "Huf" });
myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
console.log(myNum);
*/
//arrays
/*
let fruits = ["apple", "orange", "banana"];
let length = fruits.length;
console.log(fruits[1]);

fruits[3] = "fruit";
console.log(fruits[3]);

fruits.push("lemon");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);
fruits.shift();
console.log(fruits);

console.log(length);

let index = fruits.indexOf("banana");
console.log(index);
*/

//loop through an array
/*
let prices = [5, 10, 15, 20, 25, 30, 35, 40];

for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}
for (let i = prices.length - 1; i >= 0; i--) {
  console.log(prices[i]);
}

for (let price of prices) {
  console.log(price);
}
*/

// sort an array of strings sortolás betürendbe és számsorrendbe is müködik
/*
let fruits = [1, 6, 5, 2, 4, 9];

fruits = fruits.sort().reverse();

for (let fruit of fruits) {
  console.log(fruit);
}
*/
//2D arrays
/*
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrot", "onion", "potato"];
let meats = ["egg", "chicken", "fish"];

let groceries = [fruits, vegetables, meats];

groceries[0][0] = "mango";
groceries[2][2] = "steak";

for (let list of groceries) {
  for (let food of list) {
    console.log(food);
  }
}
*/

//spread (...)
/*
let name = "Kisloos";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
let c1 = ["s1", "s2", "s3", "s4", "s5"];
let c2 = ["s6", "s7", "s8", "s9", "s10"];
console.log(...numbers);
console.log(...name);
console.log(maximum);
c1.push(...c2);
console.log(c1);
*/

//rest parameters function (...) {}
/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d));

function sum(...numbers) {
  let total = 0;
  for (let i = 0; i <= numbers.length; i++) {
    total += i;
  }
  return total;
}
*/

//callback
/*
sum(2, 3, displayDom);
sum(2, 3, displayConsole);
function sum(x, y, callback) {
  let result = x + y;
  callback(result);
}
function displayConsole(output) {
  console.log(output);
}
function displayDom(output) {
  document.getElementById("textbox").innerHTML = output;
}
*/
//array.forEach() callback for each element
/*
let student = ["spongebob", "patrick", "squidward", "plankton"];
student.forEach(capitalize);
student.forEach(print);

function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
  console.log(element);
}
*/

//array.map() mint a foreach csak uj arrayt is csinal
/*
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(square);

let cubes = numbers.map(cube);

squares.forEach(print);
cubes.forEach(print);
function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}
function print(element) {
  console.log(element);
}
*/

//array.filter()
/*
let ages = [18, 25, 15, 16, 15, 31];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}
*/
//array.reduce()
/*
let prices = [50, 10, 20, 20, 25];
let total = prices.reduce(checkout);
console.log(total);
function checkout(total, element) {
  return total + element;
}
*/
//sort an array
/*
let grades = [100, 50, 90, 50, 70, 80];
grades = grades.sort(ascSort);
grades.forEach(print);

function print(element) {
  console.log(element);
}

function descSort(x, y) {
  return y - x;
}

function ascSort(x, y) {
  return x - y;
}
*/
//function expression
/*
const greeting = function () {
  console.log("hello");
};

greeting();
let count = 0;

function increaseCount() {
  count += 1;
  document.getElementById("textbox").innerHTML = count;
}
function decreaseCount() {
  count -= 1;
  document.getElementById("textbox").innerHTML = count;
}

document.getElementById("increaseButton").onclick = function () {
  count += 1;
  document.getElementById("textbox").innerHTML = count;
};
document.getElementById("decreaseButton").onclick = function () {
  count -= 1;
  document.getElementById("textbox").innerHTML = count;
};
*/
// arrow function =>
/*
const greeting = (name) => console.log(`hello ${name}`);

greeting("bro");

const percent = function (x, y) {
  return (x / y) * 100;
};
console.log(`${percent(75, 150)}%`);

let grades = [100, 50, 45, 90, 41];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
*/

//shuffle an array
/*
let cards = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
shuffle(cards);

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

cards.forEach((card) => console.log(card));
*/

//nested functions csak a kulso funkcio fer a belso funkciohoz
/*
let username = "bro";
let userInbox = 0;

login();
displayName();
displayinbox();

function login() {
  displayName();
  displayinbox();

  function displayName(params) {
    console.log(`welcome, ${username}`);
  }
  function displayinbox() {
    console.log(`you have ${userInbox} new messages`);
  }
}
*/
//maps kulcsértékpár
/*
const store = new Map([
  ["t-shirt", 20],
  ["pants", 30],
  ["socks", 50],
]);

store.forEach((value, key) => console.log(key, value));

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
store.set("hat", 40);

console.log(shoppingCart);
store.forEach((value, key) => console.log(key, value));

store.delete("hat");
console.log(store.has("hat"));
console.log(store.size);
*/
//object
/*
const car = {
  model: "Mustang",
  color: "red",
  year: "2023",

  drive: function () {
    console.log("you drive the car");
  },

  brake: function () {
    console.log("you step on the brake");
  },
};

const car2 = {
  model: "Mustang",
  color: "red",
  year: "2023",

  drive: function () {
    console.log("you drive the car");
  },

  brake: function () {
    console.log("you step on the brake");
  },
};

console.log(car.model);
car.brake();
console.log(car2.model);
*/

// this
/*
const car = {
  model: "Mustang",
  color: "red",
  year: "2023",

  drive: function () {
    console.log(`you drive the ${this.model}`);
  },

  brake: function () {
    console.log("you step on the brake");
  },
};

const car2 = {
  model: "Corvette",
  color: "blue",
  year: "2024",

  drive: function () {
    console.log(`you drive the ${this.model}`);
  },

  brake: function () {
    console.log("you step on the brake");
  },
};

console.log(car.model);

console.log(this);

this.name = "window";

car.drive();
*/

// classes
/*
class Player {
  score = 0;
  pause() {
    console.log("you paused the game");
  }
  exit() {
    console.log("you exited the game");
  }
}

const player1 = new Player();

const player2 = new Player();
player1.score += 1;
console.log(player1.score);

player1.exit();
player2.exit();
*/

//constructor
/*
class Student {
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 32, 5.0);
const student3 = new Student("Sandy", 19, 1.0);
console.log(student1.name);
student1.study();

console.log(student2.name);
student2.study();
*/

//static
/*
class Car {
  static numberOfCars = 0;
  constructor(model) {
    this.model = model;

    Car.numberOfCars++;
  }
  static startRace() {
    console.log("letsgoo");
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Honda");
const car3 = new Car("BMW");
const car4 = new Car("BMW");

console.log(Car.numberOfCars);
console.log(car2.numberOfCars);
console.log(car3.numberOfCars);
console.log(car4.numberOfCars);

Car.startRace();
car1.startRace();
*/

//inheritance
/*
class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "Rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "Fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  name = "Hawk";

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();

const hawk = new Hawk();

const fish = new Fish();
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
*/

//super refers to the parent class
/*
class Animal {
  alive = true;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit("Buggs", 1, 40);
const fish = new Fish("Nemo", 2, 80);
const hawk = new Hawk("America", 100, 200);

console.log(rabbit.name);
rabbit.run();
*/

//getters and setter
/*
class Car {
  constructor(power) {
    this._gas = 25;
    this._power = power;
  }
  get gas() {
    return this._gas;
  }
  get power() {
    return `${this._power}HP`;
  }
  set gas(value) {
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(400);
car.gas = -10;
console.log(car.power);
console.log(car.gas);
*/

//objects as arguements
/*
class Car {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
  }
}

const car1 = new Car("Mustang", "yellow", 2020);
displayinfo(car1);
changeColor(car1, "blue");
displayinfo(car1);
function displayinfo(car) {
  console.log(car.model);
  console.log(car.color);
  console.log(car.year);
}
function changeColor(car, color) {
  car.color = color;
}
*/

//array of objects
/*
class Car {
  constructor(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
  }
  drive() {
    console.log(`you drive the ${this.model}`);
  }
}

const car1 = new Car("Mustang", "yellow", 2020);
const car2 = new Car("Honda", "black", 2007);

const cars = [car1, car2];

console.log(cars[1].model);

cars[0].drive();

function startRace(cars) {
  for (const car of cars) {
    car.drive();
  }
}
startRace(cars);
*/

//anonymous objects
/*
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

let cards = [
  new Card("A", "Hearts"),
  new Card("A", "Spades"),
  new Card("A", "Diamonds"),
  new Card("A", "Clubs"),
];

console.log(cards[1].value + cards[1].suit);

cards.forEach((card) => console.log(card.suit));
*/
// error handling
/*
try {
  let x = window.prompt("enter a number");
  x = Number(x);
  if (isNaN(x)) throw "NOT A NUMBER";
  if (x == "") throw "empty";

  console.log(`${x} is a number`);
} catch (error) {
  console.log(error);
} finally {
  console.log("this always executes");
}
*/

//setTimeout(), setInterval()
/*
let item = "crypto";
let price = 420;

function firstMessage(item, price) {
  alert(`Buy ${item} for ${price} `);
}
function secondMessage() {
  alert(`Buy course `);
}
function thirdMessage() {
  alert(`Buy course `);
}

let timer1 = setTimeout(firstMessage, 5000, item, price);
document.getElementById("buyButton").onclick = function () {
  clearTimeout(timer1);
  alert("ty loser");
};

let count = 0;
let max = window.prompt("count up to what number?");

const myTimer = setInterval(countUp, 1000);

function countUp() {
  count++;
  console.log(count);
  if (count >= max) {
    clearInterval(myTimer);
  }
}
*/
//Date
/*
let date = new Date();
date.toLocaleString();
console.log(date);
setInterval(updatetimer, 10);

document.getElementById("myLabel2").innerHTML = formatDate(date);

let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayofweek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let ms = date.getMilliseconds();
let time = date.getTime();
console.log(time);

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${month}/${day}/${year}`;
}

function formatTime(date) {
  let hours = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();
  let amorpm = hours >= 12 ? "pm" : "am";

  // hours = hours % 12 || 12;

  return `${hours}:${min}:${seconds} ${amorpm}`;
}

function updatetimer() {
  document.getElementById("myLabel").innerHTML = formatTime(date);
}
updatetimer();
*/
/*
const myLabel = document.getElementById("myLabel");
update();
setInterval(update, 1000);

function update() {
  let date = new Date();
  myLabel.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds();
    hours = formatZeroes(hours);
    min = formatZeroes(min);
    seconds = formatZeroes(seconds);
    return `${hours}:${min}:${seconds}`;
  }
  function formatZeroes(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}
*/
//synchronous and asynchronous code
/*
console.log("Start");
setTimeout(() => {
  console.log("asynchronous");
}, 5000);
console.log("synchronous");
*/
//console.time() and console.timeEnd() ((Synchronous only))
/*
console.time("response time");
//alert("click okay");
setTimeout(() => {
  console.log("hello");
}, 3000);
console.timeEnd("response time");
*/
//promise
/*
let fileLoaded = true;
const promise = new Promise((resolve, reject) => {
  let fileLoaded = false;

  if (fileLoaded) {
    resolve("file loaded");
  } else {
    reject("file rejected");
  }
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
wait(3000).then(() => console.log("thanks for waiting"));
*/

//async
/*
async function loadFile() {
  let fileLoaded = false;

  if (fileLoaded) {
    return "file loaded";
  } else {
    throw "file not loaded";
  }
}
const promise = new Promise((resolve, reject) => {});

loadFile()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));
*/

//await
/*
async function startProcess() {
  try {
    let message = await loadFile();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

async function loadFile() {
  let fileLoaded = false;

  if (fileLoaded) {
    return "file loaded";
  } else {
    throw "file not loaded";
  }
}
const promise = new Promise((resolve, reject) => {});
startProcess();
*/
/*
console.log(document);
console.dir(document);
console.log(document.title);
console.log(document.URL);
document.title = "Title goes here!";
//document.location = "http://www.google.com";
document.body.style.backgroundColor = "skyblue";
*/

//element selectors
/*
let title = document.getElementById("myTitle");

title.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruit");
//console.log(fruits[0]);
fruits.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});

let veggies = document.getElementsByTagName("li");
veggies[2].style.backgroundColor = "green";

let desserts = document.getElementsByClassName("dessert");
console.log(desserts);
let element = document.querySelector("#myTitle");

element.style.backgroundColor = "green";

let elements = document.querySelectorAll("[for]");
elements.forEach((element) => {
  element.style.backgroundColor = "blue";
});
*/
//DOM traversal
/*
  .firstElementChild
  .lastElementChild
  .parentElement
  .nextElementSibling
  .previousElementSibling
  .children[]
  Array.from(.children)
*/
/*
let element = document.querySelector("#ketto");
let child = element.firstElementChild;
let sibling = element.previousElementSibling;
let children = Array.from(element.children);

sibling.style.backgroundColor = "blue";
child.style.backgroundColor = "lightgreen";

children.forEach((child) => (child.style.backgroundColor = "lightgrey"));
*/
//add html .textContext
/*
const nameTag = document.createElement("h1");
const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
nameTag.textContent = "Bro";
myList.append(listItem);
document.body.prepend(nameTag);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]);
*/
//css properties
/*
const title = document.createElement("h1");
title.textContent = "Title";

title.style.backgroundColor = "rgb(50,244,31)";
title.style.color = "#222222";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "block";

document.body.append(title);

//events
/*
const element = document.body;
const element2 = document.getElementById("myText");
const div = document.getElementById("myDiv");
element.onload = doSomething;

function doSomething() {
  alert("you did it!");
}
function changeColor() {
  div.style.backgroundColor = "lightgreen";
}
function changeBack() {
  div.style.backgroundColor = "lightblue";
}

element.onchange = doSomething;
div.onmouseover = changeColor;
div.onmouseout = changeBack;

div.onmousedown = doSomething;
*/

//eventListeners .addEventListener
/*
const innerDiv = document.createElement("div");
const outerDiv = document.createElement("div");
innerDiv.style.backgroundColor = "lightgreen";
innerDiv.style.width = "100px";
innerDiv.style.height = "100px";
innerDiv.style.border = "2px solid black";
innerDiv.style.marginLeft = "50px";
outerDiv.style.backgroundColor = "lightgreen";
outerDiv.style.width = "200px";
outerDiv.style.height = "200px";
outerDiv.style.border = "2px solid black";
outerDiv.style.marginLeft = "50px";

document.body.append(outerDiv);
outerDiv.append(innerDiv);
innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeGreen);
innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);
function changeRed() {
  innerDiv.style.backgroundColor = "red";
}
function changeGreen() {
  innerDiv.style.backgroundColor = "lightgreen";
}
function changeBlue() {
  alert(`you selected ${this}`);
  this.style.backgroundColor = "lightblue";
}
*/

//show/hide
/*
const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

myButton.addEventListener("click", () => {
  if (myImg.style.visibility == "hidden") {
    myImg.style.visibility = "visible";
  } else {
    myImg.style.visibility = "hidden";
  }
});
*/

//keydown event
/*
let x = 0;
let y = 0;
const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", (event) => console.log(event.key));
window.addEventListener("keydown", move);

function move(event) {
  switch (event.key) {
    case "ArrowDown":
      y += 5;
      myDiv.style.top = y + "px";
      break;
    case "ArrowUp":
      y -= 5;
      myDiv.style.top = y + "px";
      break;
    case "ArrowLeft":
      x -= 5;
      myDiv.style.left = x + "px";
      break;
    case "ArrowRight":
      x += 5;
      myDiv.style.left = x + "px";
      break;
    default:
      break;
  }
}

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");
const resizeButton = document.getElementById("button2");

myButton.addEventListener("click", begin);
resizeButton.addEventListener("click", resize);

function begin() {
  let timerId = null;
  let degrees = 0;
  let x = 0;
  let y = 0;
  timerId = setInterval(frame, 5);

  function frame() {
    if (x >= 200 || y >= 200 || degrees >= 360) {
      clearInterval(timerId);
    } else {
      x++;
      y++;
      myAnimation.style.left = x + "px";
      myAnimation.style.top = y + "px";
      degrees += 3;
      myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
    }
  }
}

function resize() {
  let timerId = null;
  let scaleX = 1;
  let scaleY = 1;
  timerId = setInterval(frame, 5);

  function frame() {
    if (scaleX >= 2 || scaleY >= 2) {
      clearInterval(timerId);
    } else {
      scaleY += 0.01;
      scaleX += 0.01;
      myAnimation.style.transform = "scale(" + scaleX + "," + scaleY + ")";
    }
  }
}
*/

//canvas api
/*
let canvas = document.getElementById("myCanvas");

let context = canvas.getContext("2d");
*/
// draw lines
/*
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(500, 500);
context.lineTo(250, 200);
context.moveTo(250, 250);
context.lineTo(0, 500);
context.stroke();
*/

//draw triangle
/*
context.strokeStyle = "grey";
context.fillStyle = "lightgreen";
context.lineWidth = "10";
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/
//draw rect
/*
context.lineWidth = "10";
context.strokeStyle = "red";


context.fillRect(0, 0, 250, 250);
context.strokeRect(0, 0, 250, 250);
*/
//draw circle (x,y,r,sAngle,eAngle,counterclockwise)ű
/*
context.fillStyle = "lightblue";
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.fill();
*/
//draw text
/*
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU FUCKER", canvas.width / 2, canvas.height / 2);
*/
/*
console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");
myButton.addEventListener("click", () => window.print());
//window.alert("hello");
//window.confirm("press ok to continue");
let age = window.prompt("age?");
if (age < 18) {
  window.alert("you are young");
  window.location.href = "https://google.com";
}
*/

//cookies
/*
console.log(navigator.cookieEnabled);
document.cookie =
  "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie =
  "lastName=SquarePants; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";
console.log(document.cookie);


//setCookie("email", "fasz@kuki.com", 365);
//document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
/*console.log(document.cookie);
function setCookie(name, value, expr) {
  const date = new Date();
  date.setTime(date.getTime() + expr * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires};path=/`;
}
function deleteCookie(name) {
  setCookie(name, null, null);
}
//deleteCookie("firstName");
//deleteCookie("email");
/*
function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");

  let result = null;
  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}

console.log(getCookie("email"));

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitButton = document.querySelector("#myButton");
const cookiesButton = document.querySelector("#cookiesButton");

submitButton.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
});
cookiesButton.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
});
*/
// stopwatch

const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startBtn");
const pauseButton = document.querySelector("#pauseBtn");
const resetButton = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let seconds = 0;
let ms = 0;

startButton.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1);
  }
});
pauseButton.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetButton.addEventListener("click", () => {
  if (paused) {
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    seconds = 0;
    ms = 0;
    timeDisplay.textContent = "00:00:00:00";
  } else {
    paused = true;
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    seconds = 0;
    ms = 0;
    timeDisplay.textContent = "00:00:00:00";
  }
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  ms = Math.floor((elapsedTime / 10) % 100);
  seconds = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
  seconds = pad(seconds);
  mins = pad(mins);
  hrs = pad(hrs);
  ms = pad(ms);

  timeDisplay.textContent = `${hrs}:${mins}:${seconds}:${ms}`;
  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
