// Fizz Buzz
function fizzy() {
    for (var i = 0; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("Fizz Buzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        }
    }
}

// fizz();

// Compare two strings to be Anagrams
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


// anagCheck(fir, sec);
