# Learn Playwright with JavaScript - Batch 2x (Bibhu)

A hands-on repository for learning Playwright automation with JavaScript fundamentals.

---

## Chapters Overview

### Chapter 01: Basics (`chapter_01_Basics/`)

Covers the very basics of JavaScript and Node.js setup.

| File | Description |
|------|-------------|
| `01_Basics.js` | Hello World program — basic `console.log()` and variable declaration with `let` |
| `02_JS.js` | Variables, `for` loops, and function declarations |
| `03_JS_Verify_Setup.js` | Verify Node.js setup — logs OS platform (`process.platform`), architecture (`process.arch`), and Node version (`process.version`) |
| `04_HotCode.js` | Function definition (`add`) called inside a loop — demonstrates code execution flow |

**How to run:**
```bash
node chapter_01_Basics/01_Basics.js
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
node chapter_01_Basics/01_Basics.js
```