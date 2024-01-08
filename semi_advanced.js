/* objects are defined with curly braces*/

var ourDog = {
    "name": "Camper",
    "age": 4,
    "Legs": 1,
    "friends": ["everyone!"]

};

console.log(ourDog);
console.log(ourDog.name);
console.log(ourDog['friends']);

/* we can update the values using dot notation too & add a new one too*/

ourDog.name = "New Name 4 Dog"
ourDog.new = "New thing"
console.log(ourDog["name"]);
console.log(ourDog['new']);

delete ourDog["friends"];

/* hasownproperty keyword to check is object has a certain property*/
console.log(ourDog.hasOwnProperty("name"));

/* accessing nested objects */

var myStorage = {
    "car": {
        "inside": {
            "glove box" : "maps",
            "passenger seat": "crumbs"},
        "outside": {
            "boot":"jack"
        }
        }
    };

console.log(myStorage.car["inside"]["glove box"])

/* record collection */

var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You give me a bad name"
        ]
    }
}


/* makes a copy of the original function*/
var collectionCopy = JSON.parse(JSON.stringify(collection));


function UpdateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "Tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

UpdateRecords(2548, "artist", "ABBA");
console.log(collection[2548])

/* WHILE LOOPS */

myArray = []
for (var i = 1; i < 5; i++) {
    myArray.push(i)
}

console.log(myArray);

/* DO WHILE LOOPS , will always run atleast one time before checking the condition */

var i = 10

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);