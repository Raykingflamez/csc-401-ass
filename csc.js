let input = prompt('Enter Some Values');

let regex = /\d+/g;
 
let result = input.match(regex);

console.log(typeof result)
console.log(result);

//regular expression to check for an email
// /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

// regular expression for testing
 //let text = 'Java script is not Java or Script. Javascript is a programming language on its own';
 //let regex = /java\s*Script/ig;
//console.log( regex.test(text)); true
//for search :console.log( text.search(regex)); 0
// for match  console.log( text.match(regex)); ['Java script' , 'javascript']
