/**
 * Document Object Model
 *      -looks like a tree diagram (roots, branches, nodes)
 * 
 * 
 * 
 * Syntax:  
 * 
 *      function funcName(args) {
 *          //do stuff
 *          return statement 
 *      }
 * 
 * funcName(args)
 * 
 * 
 */




function add5(num) {
    return num + 5;
}

console.log(add5)  //doesnt work

console.log(add5(5))



// let string = 'Will'; //My way

// function greetUser(string) {
//     return `Good morning, ${string}`
// }



function greetUser(user = 'Guest') {
return `Good Morning ${user}!`
}

// const greetUser = (user = 'Guest) => `Good morning, ${user}




greetUser();

// console.log(greetUser(string))/


// function addTwoNumbers(a=4,b=5) {
//     return a + b
// }



// console.log(addTwoNumbers(2,4));
// console.log(addTwoNumbers(7));
// console.log(undefined, 19);

//Scope

/**
 * Global Scope => a variable is accesible throughout the file
 * 
 * Local Scope => a variable is accesible only within local space
 * 
 */


console.clear();

let scope = 'global';

function sayScope () {
    scope = 'local'
    console.log(`The scope is now ${scope}.`);
    return scope;
}

console.log(`The scope is ${scope}`);  //global
sayScope();  //local
console.log(scope);  //local


//Write a function that takes a temperature in celius and coverts to fahrenheit



function celToFah (cel) {
   let fah = (cel * (9 / 5) + 32);
console.log(`${cel} degrees celsius is ${fah} degrees fahrenheit`)
    return fah;

}
console.log(celToFah(100));

//Write a function that takes a temperature and a unit as arguments.  If the unit iscel convert the temp to fah if the unit is 'fah convert the temperature to cel.  Return the newTemp



function tempConverter (temp , unit) {
    if (unit == 'cel') {
        let tempF = temp * (9 / 5) + 32;
        console.log(`${temp} degrees celsius is ${tempF} degrees fah`)
        return;
    } else if (unit == 'fah') {
        let tempC = (temp -32) * (5 / 9);
        console.log(`${temp} degrees fah is ${tempC} degrees cel`)
        return; 
    }
    else {
        console.log(`Not Valid!`)
        return;
    }
}
console.log(tempConverter(212, 'fah'))

/**
 * refactor addTwoNumbers => writing as an arrow function
 * 
 */

const addTwoNumbers =(a = 4, b = 5)=> a + b

console.clear()

//run the arrow function

console.log(addTwoNumbers(16 , 17));

const tempConverter = (temp, unit) => {     if (unit == 'cel') {
             let tempF = temp * (9 / 5) + 32;
            console.log(`${temp} degrees celsius is ${tempF} degrees fah`)
        } else if (unit == 'fah') {
             let tempC = (temp -32) * (5 / 9);
            console.log(`${temp} degrees fah is ${tempC} degrees cel`)
        }
        else {
            console.log(`Not Valid!`)
        }}

tempConverter(212, 'fah')

//Write an arrow function that will take an number, num, as an argument and return if the number is odd or even. Test with



const oddOrEven = (num) => {
    if (num % 2 == 0) {
        console.log (`${num} is even`);}
    else  {
        console.log(`${num} is odd`);
    }}

    oddOrEven(2);
    oddOrEven(3);
    oddOrEven(0);
    oddOrEven(-1);

    

