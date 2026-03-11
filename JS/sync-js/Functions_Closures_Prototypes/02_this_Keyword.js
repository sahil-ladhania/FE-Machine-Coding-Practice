// ============================================================
// TOPIC 2: 'this' Keyword in JavaScript
// TYPE: Heavily Output-Based — Most critical topic for interviews
// ============================================================
// Rules of 'this':
//   1. Default binding   → global object (or undefined in strict mode)
//   2. Implicit binding  → the object before the dot
//   3. Explicit binding  → call / apply / bind
//   4. new binding       → the newly created object
//   5. Arrow functions   → inherit 'this' from enclosing lexical scope
// ============================================================



// ----------------------------------------------------------
// Q1. OUTPUT BASED — What does 'this' refer to here?
// What is the difference in strict mode vs non-strict mode?
// ----------------------------------------------------------

function showThis() {
  console.log(this); // window
}

showThis();



// ----------------------------------------------------------
// Q2. OUTPUT BASED — What will each call log? Why are they different?
// (Implicit binding vs losing 'this')
// ----------------------------------------------------------

const user = {
  name: "Sahil",
  greet() {
    console.log(this.name);
  },
};

user.greet();                 // Sahil

const greetFn = user.greet;
greetFn();                    // undefined



// ----------------------------------------------------------
// Q3. OUTPUT BASED — What is the problem with this code?
// How do you fix it using an arrow function?
// ----------------------------------------------------------

const timer = {
  seconds: 0,
  start() {
    setInterval(function () {
      this.seconds++;         // undefined
      console.log(this.seconds);
    }, 1000);
  },
};

// What is logged after 1 second? Why?
// Write the fixed version using an arrow function.

// start() {
//   setInterval(() => {
//     this.seconds++;
//     console.log(this.seconds);
//   }, 1000);
// }



// ----------------------------------------------------------
// Q4. OUTPUT BASED — What will be logged?
// (Nested function loses 'this')
// ----------------------------------------------------------

const obj1 = {
  value: 42,
  getValue: function () {
    const inner = function () {
      return this.value; // What is 'this' inside inner?
    };
    return inner();
  },
};

console.log(obj1.getValue()); // undefined



// ----------------------------------------------------------
// Q5. OUTPUT BASED — What will be logged?
// (Arrow function captures 'this' from enclosing scope)
// ----------------------------------------------------------

const obj2 = {
  value: 42,
  getValue: function () {
    const inner = () => {
      return this.value; // obj2
    };
    return inner();
  },
};

console.log(obj2.getValue()); // 42



// ----------------------------------------------------------
// Q6. OUTPUT BASED — What will be logged?
// (Losing 'this' in class methods)
// ----------------------------------------------------------

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal("Dog");
dog.speak();                   // Dog makes a sound.

const speakFn = dog.speak;
speakFn();                     // TypeError



// ----------------------------------------------------------
// Q7. OUTPUT BASED — What will be logged? (Classic trick question)
// Think carefully: what is 'this' inside callback()?
// ----------------------------------------------------------

var length = 4;

function callback() {
  console.log(this.length); // 4
}

const object = {
  length: 5,
  method(cb) {
    cb(); // How is callback invoked?
  },
};

object.method(callback); // 4



// ----------------------------------------------------------
// Q8. OUTPUT BASED — What will be logged?
// Then fix it three ways: (a) arrow, (b) bind, (c) self/that trick
// ----------------------------------------------------------

const person = {
  name: "Alice",
  friends: ["Bob", "Charlie"],
  listFriends() {
    this.friends.forEach(function (friend) {
      console.log(this.name + " knows " + friend); // ?
    });
  },
};

person.listFriends(); // Alice knows Bob , Alice knows Charlie



// ----------------------------------------------------------
// Q9. OUTPUT BASED — All four calls. Think carefully.
// (Arrow function 'this' CANNOT be changed with call/bind/apply)
// ----------------------------------------------------------

function Foo() {
  this.bar = function () {
    console.log(this);
  };
  this.baz = () => {
    console.log(this);
  };
}

const foo = new Foo();

foo.bar();               // ?
foo.baz();               // ?
foo.bar.call({ x: 1 }); // ?
foo.baz.call({ x: 1 }); // ?  ← arrow function 'this' is locked!



// ----------------------------------------------------------
// Q10. OUTPUT BASED — Conceptual (Browser context)
// What is 'this' inside each event listener? Why?
// ----------------------------------------------------------

/*
  const btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    console.log(this); // <button>...</button>
  });

  btn.addEventListener("click", () => {
    console.log(this); // 
  });
*/

// Answer the above conceptually — no need to run in a browser.
