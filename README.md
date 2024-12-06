# JavaScript Objects and Math Assignments

---

## Project Overview
This project demonstrates the use of JavaScript **objects**, **constructors**, **prototypes**, and **Math operations** through two assignments:
1. A **Digital Library System** for managing books.
2. A **Banking Application** for managing accounts and performing financial calculations.

---

## Features

### **1. Digital Library System**
- **Book Constructor**:
  - Creates book objects with `title`, `author`, and `pages` properties.
- **Prototype Method**:
  - `displayInfo`: Displays book details in a readable format.
- **Library Array**:
  - Stores all book objects.
- **Functions**:
  - `addBook`: Adds a new book to the library.
  - `searchBooks`: Finds books by title or author.
  - `filterByPages`: Filters books with more than a specified number of pages.
  - `mapBookProperties`: Transforms book properties to include prefixes (`Title:`, `Author:`).

### **2. Banking Application**
- **Account Constructor**:
  - Creates account objects with `accountNumber`, `owner`, and `balance` properties.
- **Prototype Methods**:
  - `deposit`: Adds money to the account.
  - `withdraw`: Deducts money from the account (ensures sufficient balance).
  - `calculateInterest`: Calculates compound interest using the `Math.pow` method.

---

## File Structure /project ├── index.html # HTML file to load the script and display output in the console └── script.js # Contains all the JavaScript code for both assignments

---

## How to Run
1. Save the provided `index.html` and `script.js` files in the same directory.
2. Open `index.html` in a web browser.
3. Open the browser's developer tools (usually `F12`) and go to the **Console** tab.
4. Observe the output for the Digital Library System and Banking Application.

---

## Expected Outcomes

### **Digital Library System**
- Add books to the library.
- Search for books by title or author.
- Filter books with more than 100 pages.
- Transform book properties to include prefixes like `Title:` and `Author:`.

### **Banking Application**
- Create accounts with initial balances.
- Deposit and withdraw funds.
- Calculate compound interest based on a given interest rate and time period.

---

## Key Concepts Covered
- Object creation using constructor functions.
- Adding properties and methods to objects using prototypes.
- Manipulating arrays of objects with methods like `filter` and `map`.
- Using the `Math` class for financial calculations.
