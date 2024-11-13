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
    return num + 4;
}

console.log(add5)

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

// //loop through array and create an li for each element, then append to powerList
// powers.forEach(power => {
//     const li = document.createElement('li');
//     // console.log(li);
//     li.innerText = power;
//     powerList.appendChild(li)
    

// })

// enemies.forEach(enemy => {
//     const li = document.createElement('li');
//     li.innerText = enemy;
//     enemyList.appendChild(li);
// })


/**
 * Refactor as a Class-based object
 * 
 * 
 * class Superhero {
 * }
 */

class Superhero {
    constructor() {
        this.hero,
        this.alias,
        this.powers = [],
        this.enemies = [],
        this.imgUrl
    }
    //end constructor
    addPower(item) {
        const powerList = document.getElementById('powerList')
        const li = document.createElement('li');
    
        const powers = this.powers //storing this.powers in powers to make it more readable
        
        powers.push(item)  //take item and push into powers array
        li.innerText = item

        powerList.appendChild(li)
    }

    displayHero() {
        const heroName = document.getElementById('heroName')
        const aliasName = document.getElementById('aliasName')
        const img = document.getElementById('heroImg')

        img.src = `images/${this.imgUrl}`
        img.alt = `${this.hero}`

        console.log(img)

        heroName.innerText = this.hero
        aliasName.innerText = this.alias
    }

    addEnemy(item) {
        const enemyList = document.getElementById('enemyList')
        const li = document.createElement('li');
    
        const enemies = this.enemies //storing this.powers in powers to make it more readable
        
        enemies.push(item)  //take item and push into powers array
        li.innerText = item

        enemyList.appendChild(li)
    }
}

const superman = new Superhero()

console.log(superman)
superman.hero = 'Superman'
superman.alias = 'Clark Kent'
superman.imgUrl = 'supermanMullet.jpg';
superman.displayHero()
superman.addPower('super strength')
superman.addPower('x-ray vision')
superman.addPower('super speed')
superman.addEnemy('Lex Luthor')
superman.addEnemy('Doomsday')


