// This is my ES6 study material.
// Function I wrote to study the new ES6 features

// Data to use in my study functions *********************************************************
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 25, 35, 45, 55, 65, 75, 85, 95];

var cars = [
    { model: 'Buick', price: 'cheap' },
    { model: 'Audi', price: 'Expensive' },
    { model: 'Cadillac', price: 'Expensive' },
    { model: 'Honda', price: 'cheap' },
    { model: 'Chevrolet', price: 'Expensive' },
];

var prices = [
    { cost: 100, rate: 'Cheap' },
    { cost: 200, rate: 'Cheap' },
    { cost: 300, rate: 'Reasonable' },
    { cost: 400, rate: 'Expensive' },
    { cost: 500, rate: 'Expensive' },
];

var users = [
 { id: 1, admin: true, name: 'Alex'},
 { id: 2, admin: false, name: 'Nick' },
 { id: 3, admin: false, name: 'Bob' },
 { id: 4, admin: false, name: 'Jesse' },
 { id: 5, admin: true, name: 'Bryan' },
];

var posts = [
    { id: 1, title: 'Awesome Post' },
    { id: 2, title: 'Cool Post' },
    { id: 3, title: 'Amazing Post!' },
];

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

var computers = [
    {name: 'Apple', ram: 12},
    {name: 'Dell', ram: 12},
    {name: 'PC', ram: 12},
    {name: 'AWS', ram: 24}
];

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var url = 'http://jsonplaceholder.typicode.com/posts/';

// Array Helper Functions *********************************************************

// forEach functions *********************************************************
numbers.forEach(function(number) {
    console.log(number);
});

// map *********************************************************

var models = cars.map(function(car) {
    let data = [];
    return console.log(car.model);
});

function pluck(array, property) {
    let data = [];
   array.map(function(arr) {
       return data.push(arr[property]);
   });
   return data;
}

console.log(pluck(cars, 'model'));

// Filter functions *********************************************************
const filteredPrices = prices.filter(function(price) {
        return price.cost < 500;
    });

function checkvalue(number) {
        return number > 50;
    }
const filteredNumbers = numbers.filter(checkvalue)

console.log(filteredNumbers);

function checkPermission(users) {
        return users.admin === true;
    }
const filteredUsers = users.filter(function(user) {
    return checkPermission(user);
});

function rejectUser(users) {
    return users.admin === true;
}

const filteredRejects = users.filter(function(user) {
    return rejectUser(user);
});

function iter(array) {
    return array.filter(function(arr) {
        return arr.admin !== true;
    });
}

function reject(array, iteratorFunction) {
    return iter(array, iter);
}

console.log(reject(users, reject));

// Promise functions *********************************************************

function testPromise() {
    promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });

    promise
    .then(() => console.log('1 cool thing just happened'))
    .then(() => console.log('2 cool thing just happened'))
    .then(() => console.log('3 cool thing just happened'))
    .then(() => console.log('4 cool thing just happened'))
    .then(() => console.log('5 cool thing just happened'))
    .catch(() => console.log('Ahhhhhhh mannnnnnnn! Something bad happend!'));
}


// fetch(url)
//     .then(response => console.log(response) );

// Queries with Find Helper *********************************************************

const findNames = users.find(function(user) {
    return user.name === 'Bryan';
});

console.log(findNames);

var comment = { postId: 1, content: 'Great Post'};

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));

var admin = users.find(user => {
    return user.admin === true;
});

var account = accounts.find(acc => {
    return acc.balance === 12;
});

function findWhere(array, criteria) {

 var criteriaKey = Object.keys(criteria);

 return array.find(item => {
  return item[criteriaKey] === criteria[criteriaKey];
  });
}

var result = findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
console.log(result)

// Queries with Find Helper *********************************************************

// Every Helpers evaluates all the data

const cmpsEvery = computers.every(comp => {
    return comp.ram < 16;
});

// Some Helper evaluates if all the data to check if any of the data meets conditions
const cmpsSome = computers.some(comp => {
    return comp.ram > 16;
});

console.log(cmpsSome);

var inProgress = requests.some(req => {
    return req.status;
});

console.log(inProgress);

// Reduce Helper *********************************************************

// Balance parens problem

function balanceParens(string) {
    return !string.split("").reduce((previous, char) => {
        // Handle if parens open and close out of order
        if (previous < 0) { return previous; }
        // Add 1 for each open in order
        if (char === "(") { return ++previous; }
        // subtract 1 for each close in order
        if (char === ")") { return --previous; }
        // handle use case if char is not a paren
        return previous;
    }, 0);
}

console.log(balanceParens("()())"));

var deskTypes = desks.reduce((previous, desks) => {
    if (desks.type === 'sitting') { previous.sitting += 1}
    if (desks.type === 'standing') { previous.standing += 1}
    return previous;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

// Remove duplicates from an array
function unique(array){
  return array.reduce((previous, current) => {
    if(!previous.find((prevItem) => { return prevItem === current; })){
        previous.push(current);
    }
    return previous;
  }, []);
}
unique(numbers);

function unique(array) {
    return array.reduce((previous, char) => {
        if (!previous.includes(char)) {
            previous.push(char);
        }
        return previous;
    }, []);
}

// const & let *********************************************************

const name = 'name is nick and does not change';

let age = 'My age is 33 and that does change';

// Template Strings *********************************************************

let randomString = `This is a radom string with js inside of it, ${age}`;

console.log(randomString);

// Arrow Functions *********************************************************

// no arguments with parans
const doubleNo = () => 2 * 5;
// one argument no parans
const doubleOne = number => 2 * number;
// multiple arguments with parans
const doubleMult = (number1, number2) => 2 * number1 + 2 * number2;
console.log(doubleNo());
console.log(doubleOne(100));
console.log(doubleMult(10, 10));

const profile = {
    name: 'Alex',
    getName: function() {
        return this.name;
    }
};

const team = {
    members: ['jane', 'bill'],
    teamName: 'Super Squad',
    teamSummary: function() {
        return this.members.map((member) => {
            return `${member} is on team ${this.teamName}`;
        });
    }
};

console.log(team.teamSummary());

// Advanced Object Literals *********************************************************

let color = 'red';
let height = '12';
// new way
const artSpecsNew = {
    color,
    height,
    doStuff() { }
}
// old way
const artSpecsOld = {
    color: color,
    height: height,
    doStuff: function() {}
}

// Defualt Function Arguments *********************************************************

function makeRequest(url, method = 'GET') {
    return method;
}

// Change Default to POST
makeRequest('google.com', 'POST');

// Makse user with default args
function User(id) {
    this.id = id;
}
function generateId() {
    return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user;
}

console.log(createAdminUser());

// do math with default args
function sum(a = 0, b = 0) {
  return a + b;
}

// Rest Operator *********************************************************
// instead of function(a,b,c) we can pass ...numbers ...variable
function shoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items;
}

// Destructuring *********************************************************

const exp = {
    type: 'Business',
    amount: '45'
};

// let type = exp.type;
// let amount = exp.amount;
// ES6
// const { type, amount } = expense;

function destru({type, amount}) {
    return type + amount;
}

console.log(destru(exp));

const p = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

console.log(isEngineer(p));

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map( ( [subject, time, teacher] ) => {
 return { subject, time, teacher };
});

const nums = [1, 2, 3];

function double([ number, ...rest] = numbers) {
    if (!number) {
        return [];
    }
    return [number * 2, ...double(rest)];
}

console.log(double(nums));

// Classes *********************************************************

class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'GOGOGO!';
    }
}

class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'beep beep';
    }
}

const toyota = new Toyota({title: 'Nicks car', color: 'Blue' });
console.log(toyota.drive());

// Generators *********************************************************
const testingingTeam = {
    lead: 'Jesse',
    tester: 'Nick',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
        yield 5;
    }
};

const engineeringTeam = {
    testingingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Nick',
    manager: 'Bob',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineering;
        yield* this.testingingTeam;
    }
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingingTeam;
}

const names = [];
for ( let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);

// Generators with recursion *********************************************************

class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good', []),
    new Comment('bad', []),
    new Comment('ugly', [])
];

const tree = new Comment('Great Post!', children);
console.log(tree);

const values = [];
for (let value of tree) {
    values.push(value);
}
console.log(values);
