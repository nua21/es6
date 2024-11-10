    // PROBLEM 1 - Write a function that declares variables using var, let, and const. Attempt to reassign each variable within the same function scope, and observe the outcome. Explain any differences in behavior.
    // SOLVE 1 
    function callName(){
        // using var for function
        var sameName = "Nusrat";
        var sameName = "Suchona";
        console.log(sameName);
        // output- Suchona

        // using let for function
        let person = "NUSRAT"; //can't use same variable for let
        // let person = "SUCHONA"; //can't use same variable for let
        console.log(person);
        // output - error

        // using const for function
        const pblm = "Java"; //can't use same variable for const
        // const pblm = "Script"; ///can't use same variable for const
        console.log(pblm);
        //output - error
    }
    callName();

                // i- BLOCK SCOPE
                {
                    var subject1 = "JavaScript"; //global variable
                    let subject2 = "CSS"; //Suitable for block scope only when console.log is inside block scope 
                    const subject3 = "HTML"; //Suitable for block scope only when console.log is inside block scope 
                }
                console.log(subject1); 
                // console.log(subject2); // Variables declared inside a block scope need to be logged with console.log inside the block to access their output. If you use console.log outside the block, it will produce an error for all variables except var, because var is a global scope while let and const aren't.
                // console.log(subject3); // Variables declared inside a block scope need to be logged with console.log inside the block to access their output. If you use console.log outside the block, it will produce an error for all variables except var, because var is a global scope while let and const aren't.
                //output- JavaScript
                // i- finished 

                // ii- FUNCTION SCOPE
                function all(){
                    var cat = "meow";
                    let bird = "chirp";
                    const cow = "mooo";

                    console.log(cat);
                    console.log(bird);
                    console.log(cow);
                }
                    // console.log(cat); //error 'cause the function only returns a value when the code is inside the function, not when it's outside.
                    // console.log(bird); //error 'cause the function only returns a value when the code is inside the function, not when it's outside.
                    // console.log(cow); //error 'cause the function only returns a value when the code is inside the function, not when it's outside.
                all();
                //output - meow, chirp, mooo
                // ii- finished

                // iii- GLOBAL SCOPE
                var talk1 = "Hello";
                let talk2 = "World";
                const talk3 = "Javascript";
                function talk(){
                    console.log(talk1);
                    console.log(talk2);
                    console.log(talk3);
                }
                talk();
                //output - Hello, World, JavaScript
                // global scope can make variables and functions accessible from anywhere in the code.
                // iii- finished
// PROBLEM 1 SOLVED

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 2 - Create a function named greet that takes two parameters: name and greeting, with greeting having a default value of "Hello". If no greeting is provided, the function should output "Hello, [name]!".
//SOLVE 2 
//with greeting-
function greet(pName, greeting = "Hello"){
    return `${greeting},${pName}!`;
};
console.log(greet("Nusrat Suchona"));
//output- Hello, Nusrat Suchona!

//without greeting-
function greet2(pName){
    return `Hello, ${pName}!`;
};
console.log(greet2("Nusrat Suchona"));
//output- Hello, Nusrat Suchona!
//PROBLEM 2 SOLVED

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 3 - Using template literals, write a function that takes three parameters: firstName, lastName, and age, and returns a string in the format: "My name is [firstName] [lastName] and I am [age] years old.".
// SOLVE 3
function introduction(firstName, lastName, age){
    return `My name is ${firstName} ${lastName} and I am ${age} years old.`;
};
console.log(introduction("Nusrat", "Suchona", "19"));
//output - My name is Nusrat Suchona and I am 19 years old.
//PROBLEM  3 SOLVED

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PROBLEM 4 - Write an arrow function named add that takes two parameters and returns their sum. Rewrite it as a one-line function without using the return keyword.
//SOLVE 4
let add = (n, s) => {
    return n + s;
};
console.log(add(21,11));
//output - 32

//Rewriting it as a one-line function without using the return keyword
let add1 = (n, s) => n + s;
console.log(add1(21,4));
//output - 25
//PROBLEM 4 SOLVED

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PROBLEM 5 - Write a function that accepts any number of arguments and returns the maximum value among them using the spread operator. Test it with varying numbers of arguments.
//SOLVE 5
function maxNum(...numbers){
    return Math.max(...numbers);
};
console.log(maxNum(21, 11, 12, 22, 1, 2, 212, 121, 111, 222));
//output - 222
//PROBLEM 5 SOLVED

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PROBLEM 6 - Create a function mergeArrays that takes two arrays as arguments and returns a single array containing all elements of the two arrays, without modifying the original arrays, using the spread operator.
//SOLVE 6

let arr1 = [11, 21, 12, 1, 2];
let arr2 = [212, 121, 111, 222];
function mergeArrays(arr1, arr2){
    return [...arr1, ...arr2];
};
console.log(mergeArrays(arr1, arr2));
//Outputs - [11, 21, 12, 1, 2, 212, 121, 111, 222]
//PROBLEM 6 SOLVED

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PROBLEM 7 - Given an object person with properties name, age, and country, write a function that extracts name and country using object destructuring and returns them in an array.
let myself = {
    myName: "Nusrat",
    age: 19,
    country: "Bangladesh"
};
let {myName, country} = myself;
function intro(){
    return [myName, country];
}
console.log(intro(myName, country));
//Outputs - ['Nusrat', 'Bangladesh']
//PROBLEM 7 SOLVED

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PROBLEM 8 - Write a function that takes an array of numbers as input, and uses array destructuring to extract the first, second, and third elements, returning them in an object with properties first, second, and third.
//SOLVE 8
let inputNumber = (arrayNumber) => {
    let [first, second, third] = arrayNumber;
    return {first, second, third};
};
console.log(inputNumber([21, 12, 11]));
//Outputs - {first: 21, second: 12, third: 11}
//PROBLEM 8 SOLVED

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//PROBLEM 9 - Create a function that takes an object representing a book with properties title, author, year, and publisher. Use destructuring to extract title and author, and return a formatted string: "Title: [title], Author: [author]".
//SOLVE 9
function fullBook(){
    let book = {
    title: "Kothao keu nei",
    author: "Humayun Ahmed",
    year: 1993,
    publisher: "Kakali Prokashoni",
    };
    let {title, author} = book;
    return `Title: ${title}, Author: ${author}`;
};
console.log(fullBook("The Forty Rules of Love", "Elif Shafak"));
//Outputs - Title: Kothao keu nei, Author: Humayun Ahmed
//PROBLEM 9 SOLVED

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM 10 - Given an array of numbers, write a function that uses the spread operator to copy the array, then adds a new number at the end without modifying the original array.
//SOLVE 10
let array = [1, 2, 11];
let arraay = [12, 21, 22];
function copyArray() {
    return [...array, ...arraay];
}
console.log(copyArray());
// Outputs: [1, 2, 11, 12, 21, 22]
//PROBLEM 10 SOLVED