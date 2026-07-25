// Identifier Rules in JavaScript

// Rule 1: Can contain letters, digits, underscore (_), and dollar sign ($)
let userName = "Bibhu";      // letters
let user1 = "User1";         // letters + digits
let _privateVar = 42;        // underscore prefix
let $price = 99.99;          // dollar sign

// Rule 2: Cannot start with a digit
// let 1user = "invalid";   // ❌ SyntaxError

// Rule 3: Case-sensitive
let name = "bibhu";
let Name = "Bibhu";
let NAME = "BIBHU";
console.log(name, Name, NAME); // bibhu Bibhu BIBHU

// Rule 4: Cannot use reserved keywords
// let let = "invalid";      // ❌ SyntaxError
// let const = "invalid";    // ❌ SyntaxError
// let class = "invalid";    // ❌ SyntaxError

// Rule 5: Use camelCase by convention (not enforced but standard)
let firstName = "Bibhu";
let lastName = "Sundar";
let isLoggedIn = true;

// Rule 6: Underscores for constants or private members (convention)
const MAX_LIMIT = 100;
const API_KEY = "abc123";

// Rule 7: Unicode characters are allowed
let 名前 = "Taro";    // Japanese - valid but not recommended
let привет = "hello"; // Cyrillic - valid but not recommended

console.log("07 - Identifier Rules documented");