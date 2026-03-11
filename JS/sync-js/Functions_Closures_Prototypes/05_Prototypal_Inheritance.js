// ============================================================
// TOPIC 5: Prototypal Inheritance in JavaScript
// TYPE: Implementation-Based (Most critical — interviewers LOVE
//       asking you to build things without using 'class')
// ============================================================
// Key concepts:
//   - Every object has a [[Prototype]] (accessible via __proto__)
//   - Property lookup walks UP the chain until it hits null
//   - Constructor functions + .prototype + new
//   - Object.create() for clean prototype linking
//   - instanceof checks the prototype chain
// ============================================================



// ----------------------------------------------------------
// Q1. OUTPUT BASED — Prototype chain basics
// Know the difference between own properties vs prototype properties
// ----------------------------------------------------------

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};

const cat = new Animal("Cat");

console.log(cat.speak());                        // Cat makes a sound.
console.log(cat.hasOwnProperty("name"));         // true
console.log(cat.hasOwnProperty("speak"));        // false
console.log(cat.__proto__ === Animal.prototype); // true



// ----------------------------------------------------------
// Q2. OUTPUT BASED — Classical Inheritance chain
// (Very commonly asked — trace the chain, check instanceof)
// ----------------------------------------------------------

function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.describe = function () {
  return `I am a ${this.type}`;
};

function Car(brand) {
  Vehicle.call(this, "car"); // ← Why is this needed?
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; // ← Why do we reset constructor?

Car.prototype.describe = function () {
  return `I am a ${this.brand} car`;
};

const myCar = new Car("Toyota");

console.log(myCar.describe());              // ?
console.log(myCar instanceof Car);          // ?
console.log(myCar instanceof Vehicle);      // ?
console.log(myCar.constructor === Car);     // ?


// ----------------------------------------------------------
// Q3. IMPLEMENTATION — Polyfill for the 'new' keyword
// *** Very frequently asked in senior-level interviews ***
// ----------------------------------------------------------
// myNew(Constructor, ...args) should:
//   1. Create a new empty object
//   2. Set its prototype to Constructor.prototype
//   3. Call Constructor with 'this' = the new object
//   4. Return the new object (or the constructor's return value if it's an object)

function myNew(Constructor, ...args) {
  // Your code here
}

// function Person(name, age) { this.name = name; this.age = age; }
// Person.prototype.greet = function() { return `Hi, I'm ${this.name}`; };
// const p = myNew(Person, "Sahil", 25);
// console.log(p.greet());            // "Hi, I'm Sahil"
// console.log(p instanceof Person);  // true



// ----------------------------------------------------------
// Q4. IMPLEMENTATION — Inheritance using Object.create (no class)
// ----------------------------------------------------------
// Create a Dog object that inherits from Animal2.
// Dog should have bark() in addition to Animal2's speak().
// Use Object.create — do NOT use 'class' or constructor functions.

const Animal2 = {
  init(name) {
    this.name = name;
    return this;
  },
  speak() {
    return `${this.name} makes a sound.`;
  },
};

const Dog = /* Object.create(Animal2) + add bark() */ null;

// const myDog = Object.create(Dog).init("Rex");
// console.log(myDog.speak()); // "Rex makes a sound."
// console.log(myDog.bark());  // "Rex barks!"



// ----------------------------------------------------------
// Q5. OUTPUT BASED — Shared vs Own properties (common gotcha)
// ----------------------------------------------------------

function Person(name) {
  this.name = name;
  this.hobbies = []; // ← Own property per instance
}

const p1 = new Person("Alice");
const p2 = new Person("Bob");

p1.hobbies.push("Reading");
console.log(p2.hobbies); // No

// ---

function Person2(name) {
  this.name = name;
}
Person2.prototype.hobbies = []; // ← SHARED on prototype

const p3 = new Person2("Alice");
const p4 = new Person2("Bob");

p3.hobbies.push("Reading");
console.log(p4.hobbies); // ?  ← DIFFERENT result — explain why!



// ----------------------------------------------------------
// Q6. IMPLEMENTATION — Polyfill for Object.create
// ----------------------------------------------------------
// myObjectCreate(proto) should return a new object whose [[Prototype]]
// is set to 'proto', without calling any constructor.

function myObjectCreate(proto) {
  // Your code here
}

// const base = { greet() { return "hello"; } };
// const child = myObjectCreate(base);
// console.log(child.greet()); // "hello"
// console.log(Object.getPrototypeOf(child) === base); // true



// ----------------------------------------------------------
// Q7. OUTPUT BASED — instanceof and the prototype chain
// ----------------------------------------------------------

function A() {}
function B() {}

B.prototype = Object.create(A.prototype);

const b = new B();

console.log(b instanceof B);         // ?
console.log(b instanceof A);         // ?
console.log(b instanceof Object);    // ?
console.log(B.prototype instanceof A); // ?



// ----------------------------------------------------------
// Q8. IMPLEMENTATION — Convert ES6 class to prototype-based code
// ----------------------------------------------------------
// Rewrite the following using constructor functions + prototype.
// No 'class', no 'extends', no 'super' keywords allowed.

class Shape {
  constructor(color) {
    this.color = color;
  }
  describe() {
    return `A ${this.color} shape`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

// Your prototype-based version below:
// function Shape(color) { ... }
// function Circle(color, radius) { ... }



// ----------------------------------------------------------
// Q9. OUTPUT BASED — Property shadowing on prototype
// What happens after you delete an instance property?
// ----------------------------------------------------------

function Gadget(name) {
  this.name = name;
}

Gadget.prototype.name = "Unknown Gadget";

Gadget.prototype.toString = function () {
  return this.name;
};

const g1 = new Gadget("Phone");

console.log(g1.toString()); // ?

delete g1.name;             // deletes the OWN property

console.log(g1.toString()); // ?  ← What happens now? Where does lookup go?



// ----------------------------------------------------------
// Q10. IMPLEMENTATION — Mixin pattern (simulating multiple inheritance)
// ----------------------------------------------------------
// JS doesn't support multiple prototype chains, but mixins let us
// copy methods from multiple sources onto a prototype.
// Apply Flyable and Swimmable behaviors to Duck.

const Flyable = {
  fly() { return `${this.name} is flying!`; },
};

const Swimmable = {
  swim() { return `${this.name} is swimming!`; },
};

function Duck(name) {
  this.name = name;
}

// Apply both mixins to Duck.prototype using Object.assign
// Your code here

// const duck = new Duck("Donald");
// console.log(duck.fly());   // "Donald is flying!"
// console.log(duck.swim());  // "Donald is swimming!"
