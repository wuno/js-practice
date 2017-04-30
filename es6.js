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
var url = 'http://jsonplaceholder.typicode.com/posts/';

// forEach functions *********************************************************
numbers.forEach(function(number) {
    console.log(number);
});

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

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(acc => {
    return acc.balance === 12;
});

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

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
var computers = [
    {name: 'Apple', ram: 12},
    {name: 'Dell', ram: 12},
    {name: 'PC', ram: 12},
    {name: 'AWS', ram: 24}
];

const cmpsEvery = computers.every(comp => {
    return comp.ram < 16;
});

// Some Helper evaluates if all the data to check if any of the data meets conditions
const cmpsSome = computers.some(comp => {
    return comp.ram > 16;
});

console.log(cmpsSome);

// Reduce Helper *********************************************************
