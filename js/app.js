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

console.log(myName)


