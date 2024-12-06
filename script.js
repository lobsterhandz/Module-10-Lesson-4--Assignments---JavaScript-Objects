// 1. EXPLORING JAVASCRIPT OBJECTS
console.log("===== Digital Library System =====");

// Task 1: Book Constructor Function
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// Task 2: Method to Display Book Information
Book.prototype.displayInfo = function () {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

// Task 3: Array to Store Books and Functions to Add/Search Books
const library = [];

// Function to Add New Books
function addBook(title, author, pages) {
  const newBook = new Book(title, author, pages);
  library.push(newBook);
  console.log(`Book added: ${newBook.displayInfo()}`);
}

// Function to Search for Books by Title or Author
function searchBooks(query) {
  const results = library.filter(book => 
    book.title.includes(query) || book.author.includes(query)
  );
  return results;
}

// Task 4: Filter and Map Functions
function filterByPages(threshold) {
  return library.filter(book => book.pages > threshold);
}

function mapBookProperties() {
  return library.map(book => ({
    title: `Title: ${book.title}`,
    author: `Author: ${book.author}`,
    pages: book.pages
  }));
}

// Demonstration
addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBook("1984", "George Orwell", 328);
addBook("Green Eggs and Ham", "Dr. Seuss", 62);

console.log("Search Results for 'George':", searchBooks("George"));
console.log("Books with more than 100 pages:", filterByPages(100));
console.log("Mapped Book Properties:", mapBookProperties());

console.log("===== End of Digital Library System =====\n");

// 2. EXPLORING OBJECTS AND MATH
console.log("===== Banking Application =====");

// Task 1: Account Constructor Function
function Account(accountNumber, owner, balance = 0) {
  this.accountNumber = accountNumber;
  this.owner = owner;
  this.balance = balance;
}

// Task 2: Methods for Depositing and Withdrawing Funds
Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  } else {
    console.log("Invalid deposit amount.");
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
  } else if (amount > this.balance) {
    console.log("Insufficient funds.");
  } else {
    console.log("Invalid withdrawal amount.");
  }
};

// Task 3: Method to Calculate Compound Interest
Account.prototype.calculateInterest = function (rate, years) {
  const compoundInterest = this.balance * Math.pow(1 + rate / 100, years);
  console.log(
    `Balance after ${years} years at ${rate}% interest: $${compoundInterest.toFixed(2)}`
  );
  return compoundInterest;
};

// Demonstration
const account1 = new Account(101, "Alice", 1000);
const account2 = new Account(102, "Bob", 2000);

account1.deposit(500);
account1.withdraw(300);
account1.calculateInterest(5, 2);

account2.deposit(1000);
account2.withdraw(5000); // Insufficient funds
account2.calculateInterest(3, 3);

console.log("===== End of Banking Application =====");
