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
// 1. Define people object with an empty friends array
// const people = {
//     friends: []
//   };
//   // 2. Create friend objects
//   const friend1 = {
//     firstName: "Saima",
//     lastName: "Waheed",
//     id: 1
//   };
//   const friend2 = {
//     firstName: "Anshara",
//     lastName: "Waheed"
//   };
//   const friend3 = {
//     firstName: "Hania",
//     lastName: "Amir",
//     id: 2
//   };
//   // 3. Add friend objects to the people.friends array
//   people.friends.push(friend1);
//   people.friends.push(friend2);
//   people.friends.push(friend3);
//   // 4. Output the people object to the console
//   console.log(people);
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
// type Order = "I" | "am" | "a" | "student" | "of" | "GIAIC";  // Type alias for the sentence order
// const scrambledArray: (string | number |boolean)[] = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// // Rearrange the array using array methods
// scrambledArray.sort((a: string | number |boolean, b: string | number |boolean) => {
//   const order: Order[] = "I am a student of GIAIC".split(" ") as Order[];  // Ensure order is of type Order[]
//   return order.indexOf(a as Order) - order.indexOf(b as Order);
// });
// // Convert non-strings to strings (optional)
// scrambledArray.forEach((element: string | number |boolean, index: number) => {
//   if (typeof element !== "string") {
//     scrambledArray[index] = element.toString();
//   }
// });
// // Join the rearranged array to form the sentence
// const sentence: string = scrambledArray.join(" ");
// // Output the result
// console.log(sentence); // Output:true 123  I am a student of GIAIC
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
var inventory = [];
// 3. Create product objects
var product1 = {
    name: "Laptop",
    model: "X1 Carbon",
    cost: 35000,
    quantity: 5
};
var product2 = {
    name: "Phone",
    model: "techno go",
    cost: 25000,
    quantity: 10
};
var product3 = {
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
var thirdProductQuantity = inventory[2].quantity;
console.log("Quantity of the third product: ".concat(thirdProductQuantity));
// 5. Add a new product and access its properties
// const newProduct: Product = {
//   name: "Headphones",
//   model: "WH-1000XM4",
//   cost: 300,
//   quantity: 8
// };
// inventory.push(newProduct);
// console.log("Inventory after adding a new product:");
// console.log(inventory); // This will display the entire inventory array with all products
// // Assignment 4: Student List Organizer
// // Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// // functions in TypeScript.
// // Tasks:
// // 1. Student Data: The provided code defines an interface named Student that describes
// // student information like name, senior status (true/false), and whether they've completed
// // their assignments (true/false).
// // o Imagine this as a template for organizing student details.
// // 2. Student List:
// // o An array named students stores information about several students using the
// // Student template. Think of this array as your class list!
// // 3. Find Senior Students with Assignments (Optional):
// // o The code (not shown here) has a function that might find students who are seniors
// // and have completed their assignments.
// // o Can you guess why this information might be helpful?
// // 4. Class List Update:
// // o Imagine you need to update your class list! The code (not shown here) might have
// // a function that removes students who haven't completed their assignments
// // (assuming only seniors are responsible).
// // o Can you think of any reasons why this might be useful (consider limitations)?
// // 1. Student Data Interface
// interface Student {
//     name: string;
//     isSenior: boolean; // True if the student is a senior, false otherwise
//     completedAssignments: boolean; // True if the student has completed assignments, false otherwise
//   }
//   // 2. Student List (Example)
//   const students: Student[] = [
//     { name: "Alice", isSenior: true, completedAssignments: true },
//     { name: "Bob", isSenior: false, completedAssignments: false },
//     { name: "Charlie", isSenior: true, completedAssignments: false },
//     { name: "Diana", isSenior: false, completedAssignments: true },
//     { name: "Eve", isSenior: true, completedAssignments: true },
//   ];
//   // 3. Finding Senior Students with Assignments (Explanation)
//   // This information is helpful for identifying students who are nearing graduation and
//   // have fulfilled their academic responsibilities. It could be used for various purposes,
//   // such as:
//   //   - Awarding scholarships or honors
//   //   - Facilitating graduation registration
//   //   - Providing targeted academic support to students who haven't completed assignments
//   // (The actual implementation of this function may not be provided, but it would
//   // likely iterate through the student list and filter or find students based on these
//   // criteria)
//   // 4. Class List Update (Explanation)
//   // Removing students who haven't completed assignments (assuming only seniors are
//   // responsible) can be a strict policy. It's important to consider potential reasons
//   // for incomplete work, such as:
//   //   - Medical issues
//   //   - Personal emergencies
//   //   - Learning difficulties
//   // Alternative approaches could include:
//   //   - Providing extensions or alternative assignments
//   //   - Offering tutoring or support services
//   // (The actual implementation of this function may not be provided, but it would
//   // likely iterate through the student list and remove students who meet the criteria,
//   // with appropriate safeguards and notifications)
//   console.log("Original Class List:");
//   console.log(students);
//   // Function Calls for Finding Senior Students and Updating Class List (uncomment to use)
//   // (Replace these with the actual function implementations)
//   // const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
//   // console.log("\nSenior Students with Completed Assignments:");
//   // console.log(seniorStudentsWithAssignments);
//   // const updatedClassList = updateClassList(students);
//   // console.log("\nUpdated Class List (assuming removal of non-completing seniors):");
//   // console.log(updatedClassList);
