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
// this function works with the anagCheck(). abc() sorts the string. 
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
    var strTest = strMessage.toLowerCase();
    var newMessage;
    for (var i = 0; i <= strTest.length; i++) {
        if (strTest[i] === " ") {
            newMessage += " ";
        } else {
            for (var key in alphabet) {
                if (strTest[i] === key) {
                    newMessage += alphabet[key];
                }
            }
        }
    }
    console.log("Translated to morris code " + newMessage);
}
// function call uncomment to run this function
// translate(message);

// this takes a string from an object by key and splits it into an array using a closure and a callback function

var data = {
    a: 'You have an A'
};

function execData(data, callback) {

    function split(data, callback) {
        for (key in data) {
            if (key === 'a') {
                var ns = data[key].split('').reverse();
                callback(ns);
            }
        }
    }
    return ns.join('');
}

// function call uncomment to run this function
// execData(data);

// Capatalie the first letter of each word in a string

var sentance = "hey you";

function LetterCapitalize(str) {
    var sep = str.split(' ');
    for (var i = 0; i < sep.length; i++) {

        sep[i] = sep[i].charAt(0).toUpperCase() + sep[i].substring(1);
    }
    str = sep.join(" ");

    return str;
}

// uncomment to output the LetterCapitalize() function
// console.log(LetterCapitalize(sentance));

// reverse a string

var myStr "This is a string";

function FirstReverse(str) {
    str = str.split('');
    str.reverse().join();

    return str;
}

// uncomment to output FirstReverse() 
// FirstReverse(myStr;

// Change each letter in a string to the next leeter int he alpabet
// If any of the letters are vowels capatalize them
var lcStr = "This is another string";

function LetterChanges(str) {
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case ' ':
                break;
            case 'z':
                str[i] = 'A';
            case 'Z':
                str[i] = 'A';
                break;
            default:
                str[i] = String.fromCharCode(1 + str[i].charCodeAt(0));
        }
        switch (str[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                str[i] = str[i].toUpperCase();
        }
    }
    str = str.join('');
    // code goes here  
    return str;

}

// Uncomment below to output LetterChange()
// console.log(LetterChange(lcStr));

// Take an int and then loop through it adding the times you loop together till you 
// reach the value of the number
// 4 would be 1 + 2 + 3 + 4 = 10
var myInt = 4;

function SimpleAdding(num) {
    var x = 0;
    for (var i = 0; i < num; i++) {
        x = i + x;
        x++;
    }
    return x;
}

// uncomment to run SimpleAdding
// console.log(SimpleAdding(myInt));
