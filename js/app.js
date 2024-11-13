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

myName.style.fontFamily = 'sans-serif'
myName.style.color = 'rgb(255, 0, 0)'

console.log(myName);

// // console.log(myName)

// let hero = 'Superman';
// let alias = 'Clark Kent';
// let powers = ['super strength', 'x-ray vision', 'super speed', 'heat vision']
// let enemies = ['Lex Luthor', 'Doomsay', 'Darkseid']

// const heroName = document.getElementById('heroName');
// heroName.innerText = hero;



// const aliasName = document.getElementById('aliasName');
// aliasName.innerText = alias;

// const powerList = document.getElementById('powerList');
// const enemyList = document.getElementById('enemyList');

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


