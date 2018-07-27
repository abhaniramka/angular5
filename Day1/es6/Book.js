
class Book {

    constructor(bookNumber, bookName, author, price) {

        this.bookNumber = bookNumber;
        this._bookName = bookName;
        this.author = author;
        this.price = price;
    }

    toString() {
        return `${this._bookName}, ${this.author}`;
    }

    set bookName(bookName) {
        this._bookName = this.bookName;
    }

    get bookName() {
        return this._bookName.toLowerCase();
    }
}

module.exports = Book;