// Here's an engaging example that combines arrays and objects in a relatable way.
// Let's build a simple shopping cart system, which is something many can relate to.

// Example: Shopping Cart System
// Objective
// Create a simple shopping cart system where we can:

// Add items to the cart
// View the items in the cart
// Calculate the total price

// Define a shopping cart as an array of objects

let shoppingCart = [];

// Function to add an item to the cart
function addItemToCart(name, quantity, price) {
  // Check if the item already exists in the cart
  const existingItem = shoppingCart.find((item) => item.name === name);

  if (existingItem) {
    // If the item exists, update the quantity
    existingItem.quantity += quantity;
  } else {
    // If the item doesn't exist, add it to the cart
    shoppingCart.push({ name, quantity, price });
  }
  console.log(`${name} added to the cart.`);
}

// Function to view all items in the cart
function viewCart() {
  if (shoppingCart.length === 0) {
    console.log("Your cart is empty.");
  } else {
    console.log("Items in your cart:");
    shoppingCart.forEach((item) => {
      console.log(
        `${item.name} - Quantity: ${item.quantity}, Price: $${item.price}`
      );
    });
  }
}

// Function to calculate the total price
function calculateTotal() {
  let total = 0;
  shoppingCart.forEach((item) => {
    total += item.quantity * item.price;
  });
  console.log(`Total Price: $${total}`);
}

// Test the shopping cart system
addItemToCart("Apple", 3, 0.5);
addItemToCart("Banana", 2, 0.3);
addItemToCart("Orange", 1, 0.8);
viewCart();
calculateTotal();

// Adding more of an existing item
addItemToCart("Apple", 2, 0.5);
viewCart();
calculateTotal();

// Explanation
// shoppingCart is an array that holds objects representing items in the cart.
// addItemToCart adds items to the cart, either by adding a new item or
// updating the quantity if it already exists.
// viewCart displays all items currently in the cart.
// calculateTotal calculates the total price based on the items and their quantities.
// This example is engaging because it ties in real-world shopping experience and
// demonstrates how arrays and objects work together.

// Definition of Array and Object
// 1. Array
// An array is a data structure that stores a collection of elements (values or items) in a specific order.
// Each element in the array is indexed, starting from 0 for the first element, 1 for the second, and so on.
// Arrays can hold multiple values, typically of the same data type, but in JavaScript,
// you can have mixed data types in a single array.

// Example:

// An array of fruits
const fruits = ["Apple", "Banana", "Orange"];

// Accessing elements
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"

// 2. Object
// An object is a data structure that represents real-world entities with
// properties (characteristics) and values. Objects store data in key-value pairs,
// where each key (or property) is associated with a value.
// This allows you to access and manipulate the data using the keys.

// Example:

// An object representing a car
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "Blue",
};

// Accessing properties
console.log(car.make); // Output: "Toyota"
console.log(car.year); // Output: 2021

// Key Differences
// Array: An ordered collection indexed by numbers (0, 1, 2, ...).
// Object: An unordered collection with key-value pairs, accessed by keys (property names).
// Both arrays and objects are fundamental in handling data,
// and they often work together to manage more complex data structures.

/////////////////////////////////////////////////////////////////////////////////

// Take-Home Exercises
// 1] Log out only students whose names contain an 'e'.
// 2] Attempt to log all students whose grades are lower than 'year 10'.
// 3] Add 2 new students data to the students data.

let students = [
  {
    name: "John",
    age: 13,
    grade: "year 9",
  },
  {
    name: "Jane",
    age: 11,
    grade: "year 7",
  },
  {
    name: "Ade",
    age: 14,
    grade: "year 10",
  },
];

students.forEach((student) => {
  if (student.name.toLowerCase().includes("e")) {
    console.log(student.name);
  }
});
