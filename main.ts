// Object , Array and function

// Assignment 1: Building Your Friend List

// Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.

//1. Define people object with an empty friends array
const people = {
    friends: []
  };
  
  // 2. Create friend objects
  const friend1 = {
    firstName: "Saima",
    lastName: "Waheed",
    id: 1
  };
  
  const friend2 = {
    firstName: "Anshara",
    lastName: "Waheed"
  };

  const friend3 = {
    firstName: "Hania",
    lastName: "Amir",
    id: 2
  };
  
  // 3. Add friend objects to the people.friends array
  people.friends.push(friend1);
  people.friends.push(friend2);
  people.friends.push(friend3);
  
  // 4. Output the people object to the console
  console.log(people);
  


// // Assignment 2:Manipulating an Array: Rearranging Words


// // Objective:
// // Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// // Steps:
// // 1. Scrambled Array:
// // o Start with an array of elements in a scrambled order, like:

// // const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// // • Modify the Array:
// // • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// // o Convert non-strings (booleans, numbers) to strings if needed.
// // o Split elements into character arrays (optional).
// // o Rearrange characters or elements in the desired order (modify original array or
// // create temporary arrays).

// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
// Scrambled Array





type Order = "I" | "am" | "a" | "student" | "of" | "GIAIC";  // Type alias for the sentence order

const scrambledArray: (string | number |boolean)[] = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

// Rearrange the array using array methods
scrambledArray.sort((a: string | number |boolean, b: string | number |boolean) => {
  const order: Order[] = "I am a student of GIAIC".split(" ") as Order[];  // Ensure order is of type Order[]
  return order.indexOf(a as Order) - order.indexOf(b as Order);
});

// Convert non-strings to strings (optional)
scrambledArray.forEach((element: string | number |boolean, index: number) => {
  if (typeof element !== "string") {
    scrambledArray[index] = element.toString();
  }
});

// Join the rearranged array to form the sentence
const sentence: string = scrambledArray.join(" ");

// Output the result
console.log(sentence); // Output:true 123  I am a student of GIAIC




// Assignment 3: Company Product Catalog

// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.


// 1. Define inventory array to store product information
const inventory: Product[] = [];

// 2. Define interface for product structure
interface Product {
  name: string;
  model: string;
  cost: number;
  quantity: number;
}

// 3. Create product objects
const product1: Product = {
  name: "Laptop",
  model: "X1 Carbon",
  cost: 35000,
  quantity: 5
};

const product2: Product = {
  name: "Phone",
  model: "techno go",
  cost: 25000,
  quantity: 10
};

const product3: Product = {
  name: "Tablet",
  model: "Galaxy Tab S8",
  cost: 40000,
  quantity: 3
};

// Add product objects to the inventory array using push
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);

// 4. Access and log the quantity of the third product
const thirdProductQuantity = inventory[2].quantity;
console.log(`Quantity of the third product: ${thirdProductQuantity}`);

5.// Add a new product and access its properties
const newProduct: Product = {
  name: "Headphones",
  model: "WH-1000XM4",
  cost: 300,
  quantity: 8
};

inventory.push(newProduct);

console.log("Inventory after adding a new product:");
console.log(inventory); // This will display the entire inventory array with all products



  