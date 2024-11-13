/**
 * Document Object Model
 *      -looks like a tree diagram (roots, branches, nodes)
 * 
 * Accessing the DOM
 *
 *      byTagNames  for example: (p, ul, div)
 *      querySelector for example: (.class, id)
 *      querySelectorAll for example (.class, id)
 *      byId (id)
 */

console.log(document.getElementById("myName"))

let myName = document.getElementById('myName')

myName.innerText = 'Will'

// console.log(myName)

let hero = 'Superman';
let alias = 'Clark Kent';
let powers = ['super strength', 'x-ray vision', 'super speed', 'heat vision']
let enemies = ['Lex Luthor', 'Doomsay', 'Darkseid']

const heroName = document.getElementById('heroName');
heroName.innerText = hero;



const aliasName = document.getElementById('aliasName');
aliasName.innerText = alias;

const powerList = document.getElementById('powerList');
const enemyList = document.getElementById('enemyList');

//loop through array and create an li for each element, then append to powerList
powers.forEach(power => {
    const li = document.createElement('li');
    // console.log(li);
    li.innerText = power;
    powerList.appendChild(li)
    

})

enemies.forEach(enemy => {
    const li = document.createElement('li');
    li.innerText = enemy;
    enemyList.appendChild(li);
})


/**
 * Refactor as a Class-based object
 * 
 * 
 * class Superhero {
 * }
 */

class Superhero

