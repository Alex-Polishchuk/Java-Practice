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