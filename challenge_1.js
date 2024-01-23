var contacts = {}

function LookUpProfile (name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No Name"
        }
    }
}

/* TERNARY STATEMENTS 
// condition ? statements-if-true : statement-if-false;
*/

function checkEqual(a, b) {
    return a === b ? true : false
}


function checkSign (a) {
    return a > 0 ? "Positive" : a < 0 ? "Negative" : "Zero"
}

/* CONST keywork means that something cannot be re-assigned afterwards
You should use mostly let and var in your code
*/

// we can only change const lists when using bracket 

const s = [5, 7, 3]

s[0] = 10

console.log(s)

//object.freeze(argument) prevents an object from changing

// arrow functions

const magic = () => new Date();

var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]))

//Converting the above to be an arrow function

const toConcat = (arr1, arr2) => arr1.concat(arr2)

//arrow functions work well with higher order functions such as map, filter, reduce
//whenever a function takes another function as an argument, it makes sense to use an arrow function

//Using default parameters

const increment = (function() {
    return function increment (number, value = 1) {
        return number + value;
    }
})

//Rest operator

const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(5, 10))
console.log(sum(5, 10, 15))

//The function above can take multiple arguments now.
