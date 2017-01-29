// Fizz Buzz
function fizzy() {
    for (var i = 0; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("Fizz Buzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}
// function call uncomment to run this function
// fizz();

// Compare two strings to check if they are Anagrams
var fir = "Dormitory";
var sec = "Dirty Room";

function anagCheck(a, b) {
    var myA = fir.replace(/\s/g, '').toLowerCase();
    var myB = sec.replace(/\s/g, '').toLowerCase();
    if (myA.length !== myB.length) {
        console.log("Not a anagram");
    } else {
        var sortA = abc(myA);
        var sortB = abc(myB);
        if (sortA === sortB) {
            console.log("These strings are anagrams");
        } else console.log("These words almost tricked us!");
    }
}

function abc(str) {
    var arr = str.split(''),
        sorted = arr.sort().join('').replace(/\s+/g, '');
    return sorted;
}
// function call uncomment to run this function
// anagCheck(fir, sec);

// Convert a string to morris code. 
var message = "abc bca";

var alphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    L: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
};


function translate(strMessage) {
    var newMessage;
    for (var i = 0; i <= message.length; i++) {
        if (message[i] === " ") {
            newMessage += " ";
        } else {
            for (var key in alphabet) {
                if (message[i] === key) {
                    newMessage += alphabet[key];
                }
            }
        }
    }
    console.log("Translated to morris code " + newMessage);
}

// function call uncomment to run this function
// translate(message);
