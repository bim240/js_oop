class bookList {
  constructor(
    countReadBooks,
    countNotReadBook,
    nextReadBook,
    currentReadBook,
    previousReadBook,
    bookArray = []
  ) {
    this.countBookRead = countReadBooks;
    this.countNotReadBook = countNotReadBook;
    this.nextReadBook = nextReadBook;
    this.currentReadBook = currentReadBook;
    this.previousReadBook = previousReadBook;
    this.bookArray = bookArray;
  }
  add(book) {
    this.bookArray = this.bookArray.concat(book);
  }

  finishCurrentBook() {
    this.countBookRead += 1;
    this.countNotReadBook -= 1;
    this.previousReadBook = this.currentReadBook;
    this.currentReadBook = this.nextReadBook;
    this.nextReadBook = this.bookArray[
      this.bookArray.indexOf[this.currentReadBook] + 1
    ];
  }
}

class Book {
  constructor(Title, Genre, Author, Read = false, readDate = new Date()) {
    this.Title = Title;
    this.Genre = Genre;
    this.Author = Author;
    this.Read = Read;
    this.readDate = readDate;
  }
}
