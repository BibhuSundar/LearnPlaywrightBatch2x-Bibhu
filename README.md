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