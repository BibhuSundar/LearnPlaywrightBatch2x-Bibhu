//Exercise 1 
class bug {
    constructor(title, seviority) {
        this.title = title;
        this.seviority = seviority;
    }

    display() {
        console.log(this.seviority + " - " + this.title)
    }
}

let b1 = new bug("login crash", "critical");
let b2 = new bug("type in footer", "low");

b1.display();
b2.display();



//Exercise 2 constructor with default value 

class Environment {
    constructor(name = "staging", port = 3000) {
        this.name = name;
        this.port = port;
    }
    geturl() {
        return "https://" + this.name + ":" + this.port
    }
}

let e1 = new Environment();
let e2 = new Environment("production", 8000);

console.log(e1.geturl());
console.log(e2.geturl());


//Exercise-3 this refers to the current object. 
class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hi, I am " + this.name);
    }

}
let u1 = new User("Alice");
let u2 = new User("Rabs");

u1.greet();
u2.greet();







//Exercise-4 Method Chaining with this 
class Counter {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
        return this;
    }
    display() {
        console.log("Count : " + this.count);
        return this;
    }

}
new Counter().increment().increment().increment().display()