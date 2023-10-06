// let x = 50;
// function example() {
//     let x = 10; // 'x' is only accessible within this function
//     if (true) {
//       let y = 20; // 'y' is only accessible within this if block
//       console.log(x); // You can access 'x' here
//       console.log(y); // You can access 'y' here
//     }
//     // You cannot access 'y' here
//   }
//   // console.log(x)
//   example()
// const a = 10;
// // const a = 20;
// console.log(a)

  // const person = {
  //   name: "John",
  //   age: 30
  // };
  
//   person.name = "Jane"; // This is allowed
//   person.age = 31;      // This is allowed
  
//   // You can't reassign the 'person' variable itself
  // person = {}; // This would cause an error

//   function hello(){
//     console.log("hello")
//   }
// hello()
// hello()
// let hello = () => console.log("hello")
// hello()

//   const name = 'Alice';
// const greeting = `Hello, ${name}!`;
// // console.log(greeting); // Output: Hello, Alice!
// console.log("hello " + name)

// const multiLineString = `
//   This is a multiline string.
//   It spans multiple lines.
//   No need for escape characters.
// `;

// console.log(multiLineString); 


// function greet(name = 'Guest', message = 'Hello') {
//     console.log(`${message}, ${name}!`);
//   }
  
  // greet();                 // Output: Hello, Guest!
  // greet('Alice');          // Output: Hello, Alice!
  // greet('Bob', 'Hi there'); // Output: Hi there, Bob!
  
  // function multiply(a, b = 2 * a) {
  //   return a * b;
  // }
  
  // console.log(multiply(10)); // Output: 10 (default value of 'b' is 2 * 5)

  
  // function example(a = 1, b = 2) {
  //   console.log(a, b);
  // }
  
  // example(undefined, 3); // Output: 1 3

  // let arr = [1,2,3,45,6];
  // for(let ele of arr){
  //   console.log(ele)
  // }
  // for(let i = 0; i < arr.length; i++){
  //   console.log(arr[i])
  // }

  
  // const person = { firstName: 'John', lastName: 'Doe' };

// Extract values from the 'person' object
// const { firstName, lastName } = person;
// console.log(person.firstName)
// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe


// const user = {
//     username: 'johndoe',
//     info: {
//       firstName: 'John',
//       lastName: 'Doe'
//     }
//   };
  
//   const { username, info: { firstName, lastName } } = user;
  
//   // console.log(username);  // Output: johndoe
//   console.log(firstName); // Output: John
//   console.log(lastName);  // Output: Doe


//   const numbers = [1, 2, 3, 4, 5];

// // Extract values from the 'numbers' array
// const [first, second, third] = numbers;

// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(third);  // Output: 3


// const numbers = [1, 2, 3, 4, 5];

// // Extract the first value and capture the rest in 'restNumbers'
// const [first, ...restNumbers] = numbers;

// console.log(first);      // Output: 1
// console.log(restNumbers); // Output: [2, 3, 4, 5]


// function getCoordinates() {
//     return [10, 20];
//   }
  
//   const [x, y] = getCoordinates();
  
//   console.log(x); // Output: 10
//   console.log(y); // Output: 20
  
//   let a = 5;
// let b = 10;
// let c;
// c = a;
// a = b;
// b=c;
// [a, b] = [b, a];

// console.log(a); // Output: 10
// console.log(b); // Output: 5

// const array1 = [1, 2, 3];
// const array2 = [...array1, 4, 5, 6];

// console.log(array2); // Output: [1, 2, 3, 4, 5, 6]


// const obj1 = { a: 1, b: 4 };
// const obj2 = { b: 3, c: 4 };
// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }


// function sum(a, b, c) {
//     return a + b + c;
//   }
  
//   // const numbers = [1, 2, 3];
//   const result = sum(...1,2,3); // Equivalent to sum(1, 2, 3)
// console.log(result)


  // function sum(...numbers) {
  //   let result = 0;
  //   for (const number of numbers) {
  //     result += number;
  //   }
  //   return result;
  // }
  
  // console.log(sum(1, 2, 3, 4, 5,6,7)); // Output: 15
  

//   // This is valid
// function example(a, b, ...rest) {
//     // ...
//   }
  
//   // This will result in a syntax error
//   function invalidExample(...rest, a, b) {
//     // ...
//   }
  function example(...rest) {
    console.log(rest);
  }
  
  example(); // Output: []
    
  