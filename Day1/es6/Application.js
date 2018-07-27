
var sIntRef = require('./interestCalculation');
var Book = require('./Book');

//console.log(sIntRef(2000, 2, 0.05));

var angular4 = new Book(101, 'Angular 4', 'VK', 4500);
var angular5 = new Book(102, 'Angular 5', 'VK', 4500);
var angular6 = new Book(103, 'Angular 6', 'VK', 4500);
var angular7 = new Book(104, 'Angular 7', 'VK', 4500);

let bookList = [angular4, angular5, angular6, angular7];

for (var i=0;i<=2;i++) {
    console.log(bookList[i].bookName);
}

console.log('value of i at the end of loop using var: = ' + i);

for (k=0;k<=2;k++) {
    console.log(bookList[k].bookName);
    //console.log('value of i at the end of loop using let: = ' + i);
}

console.log('value of k at the end of loop using let: = ' + k);
//console.log(angular4.bookName);
//console.log(angular4);
