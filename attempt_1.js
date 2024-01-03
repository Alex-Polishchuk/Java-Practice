console.log("Hello World");

/*
inseting comments here
*/

/*
1. undefined
2. null
3. boolean
4. string
5. symbol
6. number
7. object
*/

var myName = "Beau";
myName = "Hello";
let ourName = "Beau2";
const pi = 3.14;

/*
var - used throughout the whole program
let - scope of where it's declared
const - can never changed
*/

var a;
var b = 2;
/* declaring a and assigned b*/

b++;
b--;
/* this means the previous variable +-1*/

/* % sign is the remainder operator*/

var remainder;
remainder = 11 % 3;
console.log(remainder);

a += 12;
b *= 7;
/* these are escape literals /. They essential prevent a " not looking like the end of a string */

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

/* Finding the length of string */
console.log(myStr.length);

function wordBlanks(Noun, Adjective, Verb, Adverb) {
    var result = ''

    result += Noun + Adjective + Verb + Adverb
    return result
}

console.log(wordBlanks('dog', 'big','ran','quickly'))

var ourArray = [18,64,99];
firstInstance = ourArray[1];
console.log(firstInstance);

var secondArray = [5, [10, 15],[20, 25]];
test1 = secondArray[0];
test2 = secondArray[1][1];
console.log(test1);
console.log(test2);

/* push function to ppush values into the end of an array */

var pushArray = [[10, 'string'],[5, 'dumb'],[7, 'idiot']];
pushArray.push(["doggy", 2]);
console.log(pushArray);

var popArray = [[10, 'string'],[5, 'dumb'],[7, 'idiot']];
poppedPiece = popArray.pop();
console.log(poppedPiece);

var ShiftArray = [[10, 'string'],[5, 'dumb'],[7, 'idiot']];
shiftPiece = ShiftArray.shift();
console.log(shiftPiece);
ShiftArray.unshift(shiftPiece);
console.log(ShiftArray);

var outerWear = "T-shirt";
function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

function NextInLine(arr, item) {

    arr.push(item)
    return arr.shift();
}
arr = [1, 2, 3, 4, 5]
console.log(arr)
NextInLine(arr, 6)
console.log(arr)

/* Bool */

function TrueOrFalse (wasThatTrue) {
    if (wasThatTrue) {
        return "Yes That's true";
    }
   return "Oh no that's false";
}

console.log(TrueOrFalse(true));

function CompareEqual (a, b){
    if (a===b){
        return true;
    }
    return false;
}

console.log(CompareEqual(5, '5'));
console.log(CompareEqual(5, 5));

/* this mean && and*/

function testElseIf (val) {
    if (val > 10) {
        return "Greater than 10"
    }
    else if (val < 5) {
        return "Less than 5"
    }
    else {
        return "Between 5 & 10"
    }
}

console.log(testElseIf(7))

/* Switch operator in JS*/
function CaseInSwitch (num) {
    var answer;
    switch(num) {
        case 1:
            answer = "alpha";
            break
        
        case 2:
            answer = "beta";
            break

        case 3:
            answer = "gamma";
            break

        case 4:
            answer = "delta";
            break
    }

    return answer;
}

console.log(CaseInSwitch(2))

function SwitchOfStuff (input) {

    let final;

    switch(input) {
        case a:
            final = "Apple";
            break
        
        case b:
            final = "Banana";
            break
        
        case c:
            final = "Cumquat";
            break

        case d:
            final = "Dried Fruit";
            break
        
        default:
            final = "No"
            break
    }

    return final
}

/* omit the break statement if you wish to have multiple outputs from a switch statements */

function HighOrLow (val) {
    let ans;

    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
    }
    return answer
}

console.log(HighOrLow(5))