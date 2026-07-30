# Learn Playwright with JavaScript - Batch 2x (Bibhu)

A hands-on repository for learning Playwright automation with JavaScript fundamentals.

---

## Chapters Overview

### Chapter 01: Basics (`chapter01_Basics/`)

Covers the very basics of JavaScript and Node.js setup.

| File | Description |
|------|-------------|
| `01_Basics.js` | Hello World program — basic `console.log()` and variable declaration with `let` |
| `02_JS.js` | Variables, `for` loops, and function declarations |
| `03_JS_Verify_Setup.js` | Verify Node.js setup — logs OS platform (`process.platform`), architecture (`process.arch`), and Node version (`process.version`) |
| `04_HotCode.js` | Function definition (`add`) called inside a loop — demonstrates code execution flow |

**How to run:**
```bash
node chapter01_Basics/01_Basics.js
```

---

### Chapter 02: JavaScript Concepts (`chapter02_javascript_concepts/`)

Introduces core JavaScript concepts and variable declarations.

| File | Description |
|------|-------------|
| `05_js_basics.js` | `var` keyword usage — variable declaration and reassignment |

**How to run:**
```bash
node chapter02_javascript_concepts/05_js_basics.js
```

---

### Chapter 03: Keywords, Identifiers & Literals (`chapter03_keyword_identifier_literals/`)

Covers JavaScript identifier rules, naming conventions, and comments.

| File | Description |
|------|-------------|
| `06_identifier_rules.js` | Identifier rules — valid characters (`$`, `_`, letters, digits), case-sensitivity, naming restrictions |
| `js_identifier_rules2.js` | Extended identifier rules — 7 rules with examples (reserved keywords, unicode, conventions) |
| `07_identifier_part2.js` | Naming conventions cheat sheet — camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, kebab-case, Train-Case |
| `08_Comment.js` | JavaScript comments — single-line, multi-line, and JSDoc comments |

**How to run:**
```bash
node chapter03_keyword_identifier_literals/06_identifier_rules.js
```

---

### Chapter 04: JavaScript Variables (`chapter04_javascript_variables/`)

Covers `var`, `let`, `const`, function scope, block scope, and hoisting in depth.

| File | Description |
|------|-------------|
| `09_var_let_const.js` | Introduction to `var`, `let`, and `const` — declaration, redeclaration, reassignment, and `for` loop leakage |
| `10_function.js` | Function definition and calling — basic `function` keyword usage |
| `11_var_explained.js` | Deep dive into `var` — global scope, function scope, and shadowing inside `if` blocks |
| `12_let_people_love.js` | Why developers love `let` — block scoping, no redeclaration, reassignment allowed |
| `13_const_explained.js` | `const` explained — block scoping, no reassignment, and block-level shadowing |
| `14_var_functionscope.js` | `var` function scope demo — shows `var` leaking out of `if` blocks within functions |
| `15_let_blockscope.js` | `let` block scope demo — shows `let` staying confined inside `if` blocks |
| `16_hosting.js` | Hoisting with `var` — variable is hoisted with `undefined` before execution |
| `17_hosting_function.js` | Hoisting inside functions — `var` is hoisted to the top of the function, not global scope |
| `18_let_hosting.js` | `let` and the Temporal Dead Zone (TDZ) — `ReferenceError` when accessed before declaration |
| `19_let_hosting_block.js` | Block-level TDZ — `let` variables are in TDZ until declaration, even if a same-named global exists |
| `20_let_const.js` | `const` hoisting behavior — `ReferenceError` when accessed before declaration |
| `21_Jr_QA.js` | Junior QA interview question — predict the output of `const` hoisting with `console.log` |

**How to run:**
```bash
node chapter04_javascript_variables/09_var_let_const.js
```

---

### Chapter 05: Literals (`chapter05_literal/`)

Covers all JavaScript literal types — strings, numbers, `null`, `undefined`, template literals, and more.

| File | Description |
|------|-------------|
| `22_Literal.js` | Introduction to literals — string, boolean, numeric, `null`, and `undefined` with `typeof` operator |
| `23_null_undefined.js` | Deep dive into `null` vs `undefined` — definitions, comparisons (`==` vs `===`), and when to use each |
| `24_null.js` | Falsy values — `null`, `undefined`, `0`, and empty string `""` with `typeof` |
| `25_Literal_All.js` | Number literal formats — decimal, hex (`0xFF`), octal (`0o77`), and exponential notation |
| `26_Literal_Number_all.js` | Complete number types guide — integer, float, binary, BigInt, Infinity, NaN, numeric separators, and `Number` properties |
| `27_String.js` | String basics — single quotes vs double quotes, escaping, and `typeof` |
| `28_Template_Literal.js` | Template literals — variable interpolation, Playwright locator examples, dynamic API URLs, and JSON payload generation |
| `29_Backtick_single_double.js` | Single vs double quotes vs backticks — comparison, multi-line strings, and expression interpolation |

**How to run:**
```bash
node chapter05_literal/22_Literal.js
```

---

### Chapter 06: Operators (`chapter06_operator/`)

Covers all JavaScript operators — assignment, arithmetic, comparison, logical, ternary, increment/decrement, and more.

| File | Description |
|------|-------------|
| `30_Assign_operator.js` | Assignment operator (`=`) — assigning and reassigning values |
| `31_Arithmetic_OP.js` | Arithmetic operators — addition, subtraction, multiplication, division |
| `32_Modulus_OP.js` | Modulus operator (`%`) — remainder, odd/even number check |
| `33_Expo_OP.js` | Exponentiation operator (`**`) — power calculations |
| `34_IQ.js` | Compound assignment operators — `+=`, `-=`, `*=`, `/=`, `%=` |
| `35_Comparsion_OP.js` | Comparison operators — `>`, `<`, `>=`, `<=` returning boolean values |
| `36_Comparsion_Strict_loose.js` | Loose (`==`) vs strict (`===`) equality — type coercion, `!=` vs `!==` |
| `37_IQ_Loose_Strict.js` | IQ questions on loose/strict comparison — `0 == ""`, `null == undefined` edge cases |
| `38_Confusing_Comparsion.js` | Confusing comparisons deep dive — `NaN`, objects, arrays, null traps, and interview cheats |
| `39_Logical_Op.js` | Logical operators — AND (`&&`), OR (`||`), NOT (`!`) |
| `40_String_Con_Op.js` | String concatenation with `+=` operator |
| `41_Ternary_Op.js` | Ternary operator — simple and nested ternaries, practical QA/testing examples |
| `42_Type_Op.js` | `typeof` operator — checking data types of strings, numbers, booleans, arrays, and null |
| `43_Incre_Decre_Op.js` | Increment/decrement — pre-increment (`++a`), post-decrement (`a--`) |
| `44_Null_Op.js` | Nullish coalescing operator (`??`) — fallback values for `null`/`undefined` |
| `45_Post_Increment.js` | Post-increment explained — assign first, then increment |
| `46_IQ_INCREMENT_D.js` | IQ question on post-increment — predict output of `a++` |
| `47_Advance_ID.js` | Advanced increment/decrement IQ — complex expressions with `++a`, `a++`, `--b`, `b--` |

**How to run:**
```bash
node chapter06_operator/30_Assign_operator.js
```

---

### Chapter 07: If-Else Statements (`chapter07_If_else/`)

Covers conditional statements — `if`, `else if`, `else`, nested conditions, and real-world examples.

| File | Description |
|------|-------------|
| `48_IF_ESLE.js` | Basic `if-else` — age check for voting eligibility |
| `49_If_elseif_else.js` | `if-else if-else` chain — grade classification based on score |
| `50_REAL_IF_ELSE.js` | Real-world nested if-else — user role-based access control (admin/editor/viewer) |
| `51_API_IF_ELSE.js` | API status code handling with `if-else if-else` |
| `52_IQ_IF_ELSE.js` | IQ — truthy/falsy values in conditions (0, null, undefined, NaN, empty string) |
| `53_IF_ELSE_real.js` | Logical operators + if-else — combined conditions for login with locked account check |
| `54_IQ.js` | IQ — single-line `if` without braces |
| `55_IE.js` | `if-else` for even/odd check and grade calculator |
| `56_IQ_EVEN_ODD.js` | Even/odd check using modulus operator |
| `57_Grade_Calc.js` | Grade calculator — marks to grade conversion using `if-else if-else` |
| `58_LEAP_YEAR.js` | Leap year check — divisible by 4, 100, and 400 rules |

**How to run:**
```bash
node chapter07_If_else/48_IF_ESLE.js
```

---

### Chapter 08: Switch Statement (`chapter08_switch_statement/`)

Covers `switch` statement — `case`, `break`, `default`, fall-through behavior, grouped cases, and IQ questions.

| File | Description |
|------|-------------|
| `59_Switch.js` | Basic `switch` statement — day of the week mapping |
| `60_No_Break.js` | Switch without `break` — fall-through behavior demonstration |
| `61_Default.js` | Switch with `default` — handling invalid day values |
| `62_REAL_TIME_EXAMPLE.js` | Real-world switch — API response code handling (200, 404) |
| `63_Switch_Group.js` | Grouped switch cases — Chromium browsers (Chrome, Edge, Brave, Opera) grouped together |
| `64_IQ.js` | IQ — switch fall-through with fruit selection (no breaks) |
| `65_IQ2.js` | IQ — `switch(true)` pattern for range-based grading |
| `66_IQ3.js` | IQ — duplicate `case` values and variable declarations inside switch |
| `67_IQ4.js` | IQ — type coercion in switch (number 0 vs boolean false) |

**How to run:**
```bash
node chapter08_switch_statement/59_Switch.js
```

---

### Chapter 09: User Input (`chapter09_userinput/`)

Covers different ways to accept user input in JavaScript.

| File | Description |
|------|-------------|
| `68_User_Input.js` | Browser `prompt()` — accepting user input in browser environment |
| `69_Node_readline.js` | Node.js `readline` module — reading user input from terminal |
| `70_prompt_sync.js` | `prompt-sync` package — synchronous prompt for Node.js scripts |

**How to run:**
```bash
node chapter09_userinput/68_User_Input.js
```

---

### Chapter 10: Loops (`chapter10_loops/`)

Covers all loop types — `for`, `while`, `do-while`, `continue`, and loop IQ questions.

| File | Description |
|------|-------------|
| `71_For_loop.js` | Introduction to loops — why loops are needed |
| `72_For_loop.js` | Basic `for` loop — 0 to 5 with `<=` condition |
| `73_For_Loop2.js` | `for` loop variations — custom variable names, 0 to 10 range |
| `74_IQ.js` | IQ — `for` loop with conditions and gift logic |
| `75_For_OF_IN_EACH.js` | `for` loop with `while` — attempt/retry pattern (preview of `for...of`, `for...in`, `forEach`) |
| `76_While.js` | `while` loop — basic syntax, retry counter, 1 to 15 print |
| `77_Do_While.js` | `do-while` loop — executes at least once before checking condition |
| `78_Do_While.js` | `do-while` real-world — retry logic with attempt counter |
| `79_IQ.js` | IQ — `while` loop with countdown (5 to 1) |
| `80_IQ.js` | IQ — `do-while` with decrement (runs once even when condition is false) |
| `81_IQ.js` | IQ — `continue` keyword in `for` loop (skipping iteration) |
| `82_IQ.js` | IQ — `do-while` with infinite loop (no update to variable) |

**How to run:**
```bash
node chapter10_loops/71_For_loop.js
```

---

### Chapter 11: Arrays (`chapter11_array/`)

Covers JavaScript arrays — creation, access, add/remove, search, iterate, transform, sort, slice, concat, and checking.

| File | Description |
|------|-------------|
| `83_Arrays.js` | Array basics — empty array, index access, mixed types |
| `84_Arrays.js` | Creating arrays — array literal, `new Array()`, `Array.of()`, `Array.from()` |
| `85_Access_Array.js` | Accessing & modifying arrays — index, `at()`, and reassignment |
| `86_Arrays_Adding_Remove.js` | Add/remove elements — `push`, `pop`, `unshift`, `shift` |
| `87_Adding_Remove2.js` | `splice()` — add, remove, replace elements at any position |
| `88_REAL_Example.js` | Real-world array — browser list with `pop`, `shift`, and `for` loop |
| `89_Searching.js` | Searching arrays — `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast` |
| `90_Iterate.js` | Iterating arrays — `for`, `for...of`, `forEach`, `for...in`, `entries()` |
| `91_Transform_Array.js` | Transforming arrays — `map`, `filter`, `reduce`, `flat` |
| `92_Arrays.js` | Sorting arrays — `sort()`, numeric sort, ascending/descending |
| `93_Array_Slicing.js` | Slicing & splicing — `slice()` vs `splice()` |
| `94_Concat_array.js` | Concatenating arrays — `concat()`, spread operator, `join()` |
| `95_Array_Checking.js` | Checking arrays — `Array.isArray()`, `every()`, `some()` |

**How to run:**
```bash
node chapter11_array/83_Arrays.js
```

---

### Chapter 12: Functions (`chapter12_functions/`)

Covers JavaScript functions in depth — types, expressions, arrow functions, IIFE, closures, higher-order functions, and more.

| File | Description |
|------|-------------|
| `96_Functions.js` | Function basics — define and call a function |
| `97_Type1_Fn_Basic_Functions.js` | Type 1 function — no parameters, no return |
| `98_Type2_Fn_With_Param_No_Return.js` | Type 2 function — with parameters, no return |
| `99_Type3_Fn_without_Param_Return_Type.js` | Type 3 function — no parameters, with return |
| `100_Type4_Fn_With_Param_With_Return.js` | Type 4 function — with parameters and return |
| `101_Template_literal.js` | Template literal (empty) |
| `102_Fn_Expression.js` | Function expressions — assigning functions to variables |
| `103_Arrow_Fn.js` | Arrow functions (ES6) — shorthand syntax, conversions from normal functions |
| `104_Arrow_Fn_REAL.js` | Arrow functions real-world — normal vs expression vs arrow for status validation |
| `105_IIFE.js` | Immediately Invoked Function Expressions (IIFE) — run on definition |
| `106_Default_Param_Fn.js` | Default parameters — fallback values in function signatures |
| `107_IQ.js` | IQ — function with template literal return |
| `108_Rest_Param_Fn.js` | Rest parameters (`...args`) — variable number of arguments |
| `109_IQ.js` | IQ — function hoisting with function expressions (ReferenceError) |
| `110_Spead_IQ.js` | Spread operator in functions — spread array as arguments, `hasError` utility |
| `111_Scope.js` | Function scope — global vs local scope access |
| `112_IQ.js` | IQ — nested function scope and block scope access |
| `113_Closure.js` | Closures — inner function retaining access to outer function's variables |
| `114_Closure.js` | Closure practical — `makeCounter` with increment/decrement/get methods |
| `115_API_REAL_Closure.js` | Real-world closure — retry tracker for API testing |
| `116_Higher_Order_Fn.js` | Higher-order functions — functions that take or return functions |
| `117_Pure_Fn.js` | Pure functions — predictable output, no side effects vs impure functions |

**How to run:**
```bash
node chapter12_functions/96_Functions.js
```

---

### Chapter 13: Strings (`chapter13_strings/`)

Covers JavaScript strings — creation, properties, searching, substring, transformation, and type conversion.

| File | Description |
|------|-------------|
| `118_Strings.js` | String basics — single/double quotes, template literals, multiline, `String()` conversion |
| `119_String_Properties.js` | String properties — `length`, index access, `at()`, `charAt()`, `charCodeAt()` |
| `120_Search_Check_Str.js` | Searching strings — `includes`, `startsWith`, `endsWith`, `indexOf`, `lastIndexOf`, `search` with regex |
| `121_Substring.js` | Substrings — `slice()` vs `substring()` with negative indexes |
| `122_Transform_Str.js` | String transformations — `toUpperCase`, `toLowerCase`, `trim`, `replace`, `replaceAll`, `split`, `join` |
| `123_SC.js` | String conversion — `toString()`, `Number()`, `parseInt()`, `parseFloat()` |

**How to run:**
```bash
node chapter13_strings/118_Strings.js
```

---

### Chapter 14: Objects (`chapter14_objects/`)

Covers JavaScript objects — creation, properties, methods, destructuring, spread, `get`/`set`, and real-world examples.

| File | Description |
|------|-------------|
| `124_Objects.js` | Object basics — empty object, key-value pairs, JSON format |
| `125_Objects2.js` | Object access — dot notation vs bracket notation, reference assignment, `===` comparison |
| `126_Objects_Creation.js` | Object creation — reference comparison between two identical objects |
| `127_Objects_REAL.js` | Real-world object — config object with dynamic property add/delete |
| `128_Primitive_Ref.js` | Primitive vs reference types — value copy vs reference copy for objects |
| `129_Ob_Examples.js` | Object examples — JSON-style vs JS-style key notation |
| `130_IQ.js` | IQ — dynamic property access, adding/modifying properties, `getOwnPropertyDescriptor` |
| `131_Object_Fn.js` | Methods in objects — functions as object properties |
| `132_Obj_Decon.js` | Destructuring — basic, renaming, default values, nested destructuring |
| `133_Spead.js` | Spread operator for objects — copying, merging, modifying config objects |
| `134_Objects_GET_SET_Methods.js` | `get`/`set` methods — computed properties with `fullName` example |
| `135_IQ.js` | IQ — `Object.keys()`, `Object.values()`, `Object.entries()`, `for...in` loop |
| `136_Obj_REAL.js` | Real-world objects — environment config, API response structure, Playwright config |
| `137_Let_const_obj.js` | `let` vs `const` for objects — modifying properties allowed, reassignment blocked for `const` |

**How to run:**
```bash
node chapter14_objects/124_Objects.js
```

---

### Chapter 15: 2D Arrays (`chapter15_2D_array/`)

Covers 2D arrays (matrices) — creation, access, iteration, real-world test matrices, and pattern printing.

| File | Description |
|------|-------------|
| `138_2D_Array.js` | 2D array basics — grid creation, nested `for` loop to print all elements |
| `139_2d.js` | 2D array access — row/column access, `.length` for rows and columns |
| `140_REAL.js` | Real-world 2D array — test matrix with `for`, `for...of`, and `forEach` iteration |
| `141_2d_Array_Fn.js` | 2D array with functions — `map`/`reduce` for row sums, filtering failed test cases |
| `142_IQ_Right_Pattern_Py.js` | IQ — right-angled triangle pattern using nested loops |

**How to run:**
```bash
node chapter15_2D_array/138_2D_Array.js
```

---

### Chapter 16: Callbacks (`chapter16_callback/`)

Covers JavaScript callbacks — synchronous, asynchronous, callback hell, and real-world QA scenarios.

| File | Description |
|------|-------------|
| `143_Callback.js` | Callback basics — named, anonymous, and arrow function callbacks |
| `144_CB.js` | Callback in Playwright `test()` syntax |
| `145_CB_Fn.js` | Callback as argument — cafe table ready notification pattern |
| `146_PW_CB.js` | Playwright-style callback — `test()` with callback for test execution |
| `147_JS_CB.js` | JavaScript async behavior — `setTimeout` and why code order matters |
| `148_Sync_CB.js` | Synchronous callback — `forEach` processing array items one by one |
| `149_Async_CB.js` | Asynchronous callback — `setTimeout` execution order demonstration |
| `150_CB_Hell.js` | Callback hell — 4-step E2E login flow with nested callbacks |
| `151_CB_Hell_20_Steps.js` | Callback hell deep dive — 24-step E2E checkout journey (Pyramid of Doom) |
| `152_CB_Parameter.js` | Callback as parameter — passing functions as arguments |
| `153_CB_Return.js` | Callback as return — functions returning other functions |

**How to run:**
```bash
node chapter16_callback/143_Callback.js
```

---

### Chapter 17: Promises (`chapter17_promises/`)

Covers JavaScript Promises — creating, resolving, rejecting, chaining, `Promise.all`, `Promise.allSettled`, and real-world API scenarios.

| File | Description |
|------|-------------|
| `154_Promise.js` | Promise basics — `resolve`/`reject` with food delivery analogy |
| `155_Promise_REAL_API.js` | Real-world API promise — resolving with status code and body |
| `156_Promise_REAL_API_PART2.js` | Promise rejection — `.then()` vs `.catch()` for error handling |
| `157_Finally.js` | `.finally()` — cleanup code that runs regardless of resolve/reject |
| `158_Call_Py_Problem.js` | Promise chaining — 4-step E2E login flow using `.then()` chain (callback hell solution) |
| `159_Promise_ALL.js` | `Promise.all` vs `Promise.allSettled` — parallel execution, fail-fast vs report-all |
| `160_Promise_IQ.js` | Promise IQ questions — chaining, error handling, `allSettled` test report |

**How to run:**
```bash
node chapter17_promises/154_Promise.js
```

---

### Chapter 18: Async/Await (`chapter18_async_await/`)

Covers `async/await` — converting promise chains to async/await, sequential vs parallel execution, and Playwright integration.

| File | Description |
|------|-------------|
| `161_Async.js` | Basic `async/await` — try/catch/finally error handling |
| `162_Aysnc_P2.js` | Await with function returning promise — token retrieval example |
| `163_PyODom.js` | 4-step E2E login with `async/await` — cleaner alternative to callback hell |
| `164_Async_Ex.js` | `async` function returns a promise — basic Playwright test example |
| `165_AA_Parallel.js` | Parallel execution — `Promise.allSettled` for concurrent API calls |
| `165_AA_Seq.js` | Sequential execution — awaiting each step, timing measurement |
| `166_IQ.js` | IQ questions — `async` return value, status code, multi-step flow |
| `167_ACLogin.js` | Playwright real test — `async` login test with `test.step` and assertions |

**How to run:**
```bash
node chapter18_async_await/161_Async.js
```

---

### Chapter 19: Playwright Basic Setup (`chapter19_playwright_basic/`)

Playwright setup and configuration — package.json with Playwright dependency, node_modules, and test artifacts.

| File | Description |
|------|-------------|
| `package.json` | Playwright project setup — `playwright` v1.62.0 dependency |
| `package-lock.json` | Locked dependency versions |
| `node_modules/` | Installed Playwright packages |
| `tests/codegen-tta-cart.spec.ts` | Playwright Codegen-generated test — login flow with assertions |
| `playwright.config.ts` | Playwright test configuration |
 | `abb.pdf` | Test artifact (PDF) |

**Setup commands:**
```bash
cd chapter19_playwright_basic
npm install
npx playwright install
```

---

### Chapter 20: Import & Export (`chapter20_import_expoert/`)

Covers ES6 modules — named exports, default exports, imports with aliases, and cross-file dependencies.

| File | Description |
|------|-------------|
| `EXPORT_IMPORT/168_EXPORT_IMPORT.js` | Named imports — importing `BASE_URL`, `formatUpperCaseString`, `fname` from `testutils.js` |
| `EXPORT_IMPORT/169_Utils.js` | Import with aliases — renaming imports from multiple modules using `as` |
| `EXPORT_IMPORT/170_Logger.js` | Default import — importing the default `log` function from `logger.js` |
| `logger.js` | Combined exports — default and named exports from a single module |
| `testutils.js` | Named exports — exporting URL, function, and variable |
| `utils.js` | Named exports — alternate staging URL and test name formatter |

**How to run:**
```bash
node chapter20_import_expoert/EXPORT_IMPORT/168_EXPORT_IMPORT.js
```

---

### Chapter 21: Classes & Objects (`chapter21_Classes_and_Objects/`)

Covers OOP in JavaScript — classes, constructors, methods, private fields, static members, and real-world browser/test case examples.

| File | Description |
|------|-------------|
| `171_Class_Object.js` | Class basics — `Person` class with attributes (name, email) and methods (sleep, eat, walk) |
| `172_Class_Object2.js` | Constructor — constructor runs automatically when object is created with `new` |
| `173_Car.js` | Parameterized constructor — `Car` class with `name` and `drive()` method |
| `174_REAL_Browser.js` | Real-world class — `TestCase` with name, status, priority and `display()` method |
| `175_IQ.js` | IQ — `Browser` class with constructor and `launched` status tracking |
| `176_Private_Public.js` | Private fields (`#`) — `Credentials` class with private `#apiKey` and custom getter |
| `177_Static.js` | Static members — reserved for static keyword demonstration |

**How to run:**
```bash
node chapter21_Classes_and_Objects/171_Class_Object.js
```

---

### Chapter 22: Encapsulation (`chapter22_encapuslation/`)

Covers encapsulation using private fields (`#`) with getters/setters — bank accounts, car engines, and OOP interview exercises.

| File | Description |
|------|-------------|
| `179_Ecap.js` | Private `#balance` — deposit and getBalance methods |
| `180_REAK_EXAMPLE.js` | Private children fields with `getChild1`/`setChild1` |
| `181_Ecap_Car.js` | Car class with private `#engine` and getter/setter |
| `182_ECap_Bank.js` | ICICI bank account — setBalance with cashier permission check |
| `IQ.js` | OOP exercises — Bug class, Environment defaults, User greeting, Counter chaining |

**How to run:**
```bash
node chapter22_encapuslation/179_Ecap.js
```

---

### Chapter 23: Inheritance (`chapter23_Inheritance/`)

Covers single, multilevel, hierarchical inheritance with `extends` and `super` — real-world Page Object Model examples.

| File | Description |
|------|-------------|
| `183_Single_Inheritance.js` | Single inheritance — `LoginPage` extends `BasePage` |
| `184_SI_Example.js` | `Dog` extends `Animal` — calling `super(name)` |
| `186_IQ.js` | `super.setup()` / `super.teardown()` — UI test lifecycle |
| `187_IQ2.js` | Polymorphic inheritance — `TestCase` with `UnitTest`, `APITest`, `E2ETest` |
| `188_REAL_PageObject_Model.js` | Page Object Model — `LoginPage`, `DashboardPage`, `CartPage` extend `BasePage` |
| `189_Multiple_Inheritance.js` | Multiple inheritance attempt — JS does not support `class C extends A, B` |
| `190_Multiple_Level_Inheritance.js` | Multilevel — `AdminPage` → `AuthPage` → `BasePage` |
| `191_Hierarchial_Inheritance.js` | Hierarchical — `Son1` and `Son2` both extend `Father` |

**How to run:**
```bash
node chapter23_Inheritance/183_Single_Inheritance.js
```

---

### Chapter 24: Polymorphism (`chapter24_polymerphism/`)

Covers method overriding — redefining parent class methods in child classes.

| File | Description |
|------|-------------|
| `192_Method_Overriding.js` | `APIPage` overrides `BaseTest.setup()` |

**How to run:**
```bash
node chapter24_polymerphism/192_Method_Overriding.js
```

---

### Chapter 25: OOP Interview Questions (`chapter25_oops_interview_questions/`)

OOP exercises — Bug class, Environment defaults, User greeting, and method chaining with Counter.

| File | Description |
|------|-------------|
| `ex1.js` | Bug class with title, severity, and display method |
| `ex2.js` | Environment class with default params (staging, port 3000) |
| `ex3.js` | User class — `this.name` in greet method |
| `ex4.js` | Counter — method chaining with `return this` |

**How to run:**
```bash
node chapter25_oops_interview_questions/ex1.js
```

---

### Chapter 26: TypeScript Basics (`chapter26_typescript/`)

Covers TypeScript fundamentals — type annotations, functions, arrays, and type systems.

| File | Description |
|------|-------------|
| `193_TS.js` | Plain JS — testName and add function (no types) |
| `194_TS_HelloWorld.ts` | TypeScript Hello World — typed variables and function with `: number` |
| `195_TS_Part1.ts` | Basic TS — `msg: string`, `void` return type |
| `196_TS_Part2.ts` | TS types — string, number, boolean, null, undefined, arrays, any, unknown |
| `197_TS_Part2.ts` | Functions & objects — typed arrow functions, object type annotations |
| `198_Part3.ts` | Return types — `string`, `void`, `never` (throw/infinite) |
| `199_IQ.ts` | IQ — `buildEndpoint`, `isSuccessCode`, `logTestStep` functions |
| `200_IQ.ts` | IQ — `getFailedCodes` with array filter |

**How to run:**
```bash
npx tsx chapter26_typescript/194_TS_HelloWorld.ts
```

---

### Chapter 27: Interfaces (`chapter27_interface/`)

Covers TypeScript interfaces — optional/readonly properties, function types, extension, and class implementation.

| File | Description |
|------|-------------|
| `201_IF.ts` | Interface basics — `TestCase` interface with id, name, status, duration |
| `202_IF_Part2.ts` | Optional properties — `APIResponse` with `?` optional fields |
| `203_IF_READONLY.ts` | Readonly — `APIReponse` with `readonly statusCode` |
| `204_IF_READOnly.ts` | Readonly array & point — `readonly x: number` |
| `205_Interface.ts` | Empty interface (placeholder) |
| `206_Hooks.ts` | Function type interface — `TestHook` callback signature |
| `207_bug_REPORT.ts` | BugReport interface — array fields for steps to reproduce |
| `208_TestConfig.ts` | TestConfig — CI vs local config with optional timeout/retries |
| `209_REAL_EXAMPLE.ts` | Interface extension — `LoginPage` and `FreeTrailPage` extend `BasePage` |
| `210_Class_Interface.ts` | Class implements interface — `TestCase` implements `Executable` |

**How to run:**
```bash
npx tsx chapter27_interface/201_IF.ts
```

---

### Chapter 28: Enums (`chapter28_enums/`)

Covers TypeScript enums — string enums for test status, severity, browsers, HTTP methods, and environments.

| File | Description |
|------|-------------|
| `211_ENUM.ts` | TestStatus enum — Pass, Fail, Skip, Pending, Blocked |
| `212_Enum_Fn.ts` | SeverityLevels and Environment enums — string values |
| `213_ENUM.ts` | Browser enum — switch-case for Chrome, Firefox, Safari, Edge |
| `214_API.ts` | HTTPMethod enum — GET, POST, PUT, DELETE with sendRequest |

**How to run:**
```bash
npx tsx chapter28_enums/211_ENUM.ts
```

---

### Chapter 29: TypeScript Generics (`chapter29_typescript_generic/`)

Covers TypeScript generics — generic functions, generic classes, and typed API response wrappers.

| File | Description |
|------|-------------|
| `215_Generic.ts` | Generic function — `getFirstResult<T>()` works with numbers or strings |
| `216_Generic_Class.ts` | Generic class — `TestDataStorage<T>` with add, getFirst, getAll, count |
| `217_Generic_API_RESPONSE.ts` | Generic API wrapper — `wrapResponse<T>()` returns typed status+data |

**How to run:**
```bash
npx tsx chapter29_typescript_generic/215_Generic.ts
```

---

### Chapter 30: Access Modifiers (`chapter30_public_private_protected/`)

Covers public, private, protected, readonly, and abstract classes in TypeScript — real-world Page Object Model.

| File | Description |
|------|-------------|
| `218_PPP.ts` | Public/private/protected — `APIClient` with private `apiKey` and auth header |
| `219_PageObjectModel.ts` | Protected `navigate()` — `LoginPage` extends `BasePage` with POM pattern |
| `220_READONLY.ts` | Readonly config — `PlaywrightConfig` with URL, timeout, retries |
| `221_Abstract_Class.ts` | Abstract class — `BaseTest` with abstract `setup()`, `execute()`, `teardown()` |

**How to run:**
```bash
npx tsx chapter30_public_private_protected/218_PPP.ts
```

---

### Chapter 31: Type Override & Decorators (`chapter31_Type_Overide_Decortors/`)

Covers TypeScript type assertions (`as`), type aliases (`type`), method overriding, and decorators (Stage 3) with real-world test scenarios.

| File | Description |
|------|-------------|
| `222_Type_As.ts` | Type assertion — casting `unknown` element with `as` |
| `223_Type_Alias_As.ts` | Type alias — `type APIResponse` with assertion |
| `224_Override.ts` | Method override — `APIChain` overrides `BaseTest` methods |
| `225_IQ.ts` | Override IQ — `Son` overrides `Father.home()` |
| `226_Decorator.ts` | Decorator — `@Log` logs method calls with args |
| `227_Decortors_2.ts` | Decorator — `@logged` wraps method with console log |
| `228_Multiple_Decor.ts` | Multiple decorators — `@beforeSomething`, `@afterSomething` on `makeDinner` |

**How to run:**
```bash
npx tsx chapter31_Type_Overide_Decortors/222_Type_As.ts
```

---

### Chapter 32: Playwright Fundamentals (`chapter32_playwright_fundamental/`)

Covers Playwright test runner setup — configuration, test specs, browser projects (Chromium, Firefox, WebKit), and basic web testing.

| File | Description |
|------|-------------|
| `playwright.config.ts` | Playwright config — 3 browser projects, HTML reporter, fully parallel |
| `tests/example.spec.ts` | Test spec — "has title" and "get started link" tests on playwright.dev |

**How to run:**
```bash
cd chapter32_playwright_fundamental
npx playwright test
```

---

### Project Configuration

| File | Description |
|------|-------------|
| `package.json` | Root project config — scripts (`ts-run`), tsx and TypeScript dev deps |
| `tsconfig.json` | TypeScript compiler config — strict mode, nodenext module, ESNext target |
| `.vscode/settings.json` | VS Code Code Runner config — uses `npx tsx` for TypeScript files |

**Setup commands:**
```bash
cd chapter19_playwright_basic
npm install
npx playwright install
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system
- A code editor (VS Code recommended)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/BibhuSundar/LearnPlaywrightBatch2x-Bibhu.git
```

2. Navigate to the project:
```bash
cd LearnPlaywrightBatch2x-Bibhu
```

3. Run any file using Node.js:
```bash
node chapter01_Basics/01_Basics.js
```