<!-- Let and Const keyword and their use cases
Arrow function, how it is different from normal function?
Template literals
Default parameters
For of loop
Object and Array de-structuring
Rest parameter
Spread operator
Classes -->


1) let keyWord: In JavaScript, the let keyword is used to declare a variable with block scope. Variables declared with let are limited to the block, statement, or expression where they are defined. This means they are not accessible outside of that scope.


2)const keyword:  In JavaScript, the const keyword is used to declare a variable that has a constant (unchanging) value. Once you assign a value to a variable declared with const, you cannot reassign it to a different value. The variable's value remains the same throughout its scope.

However, it's important to note that when you use const to declare an object or an array, the variable itself is constant, but the properties or elements of the object or array can still be modified. you can modify the properties of the person object, but you cannot reassign the person variable to a different object.


3) Template Literals: Template literals, introduced in ECMAScript 6 (ES6), provide a way to create string literals in JavaScript that allow for embedded expressions and multiline strings. Template literals are enclosed by backticks ( ) instead of single or double quotes.

In this example, the ${name} inside the template literal is an embedded expression, and its value is interpolated into the string when it's evaluated. This makes it easy to concatenate variables and expressions directly into the string.

Template literals also support multiline strings, which means you can include line breaks without the need for escape characters like \n. For example:


4)Default Parameters: Default parameters are a feature in JavaScript introduced with ECMAScript 6 (ES6) that allow you to specify default values for function parameters. When a function is called and an argument is not provided for a parameter with a default value, the default value is used instead.
In the greet function above, both name and message have default values. If you call the function without providing arguments, it uses the default values. If you provide arguments, those values override the defaults.

Default parameter values are evaluated from left to right at the time the function is called. This means that you can reference earlier parameters in later default parameter expressions.

Default parameter values can depend on variables or functions defined outside of the function parameters.

You can use undefined to explicitly signal that you want to use the default value for a parameter:

Default parameters are not limited to just one or two parameters; you can have default values for as many parameters as needed.
Default parameters are a useful feature for making functions more flexible and reducing the need for excessive checks for undefined values inside functions. They are commonly used in modern JavaScript code to simplify function parameter handling.

5)object Destructuring: Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way. It's a powerful tool for working with objects, especially when you need to access multiple properties of an object.

6) Array Destructuring: Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a more concise and flexible way. It's a powerful tool for working with arrays, especially when you need to access multiple elements or swap the values of array elements.

In this example, the [first, second, third] syntax extracts the values at the first, second, and third positions in the numbers array and assigns them to variables with the corresponding names. 
rest operator (...)

You can also use array destructuring to swap the values of two variables without needing a temporary variable:

7) spread operator: The spread operator in JavaScript is represented by three dots (...) and is used for two main purposes:
Array Spread:
Object Spread: 

8) rest Opeartor: n JavaScript, the rest parameter, represented by an ellipsis (...) followed by a parameter name, allows you to collect all the remaining arguments passed to a function into a single array. This is particularly useful when you have a variable number of arguments or want to handle additional arguments beyond a fixed number of named parameters. The rest parameter is also commonly referred to as the "rest operator."

The Rest Parameter as an Array: The rest parameter, in this case, numbers, is treated as an array containing all the remaining arguments passed to the function.

No Need to Specify Argument Count: With the rest parameter, you don't need to specify the number of arguments in advance. It allows you to work with a variable number of arguments.

Can Be Empty: If no extra arguments are passed when calling the function, the rest parameter will be an empty array.