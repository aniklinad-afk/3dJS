// 3. Сравнение двух книг
console.log("--- Сравнение двух книг ---");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `«${this.title}» – ${this.author}, ${this.year} год`;
  }

  static compareAge(first, second) {
    if (first.year < second.year) {
      return `«${first.title}» издана раньше`;
    }
    if (first.year > second.year) {
      return `«${second.title}» издана раньше`;
    }
    return "Книги изданы в одном году";
  }
}

class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }
}

// книги для теста
const book1 = new Book("Война и мир", "Лев Толстой", 1869);
const book2 = new Book("Анна Каренина", "Лев Толстой", 1877);
const book3 = new EBook("Дубровский", "Александр Пушкин", 1869, "EPUB"); // Год совпадает с первой

console.log(Book.compareAge(book1, book2)); // Война и мир раньше
console.log(Book.compareAge(book2, book1)); // Война и мир раньше
console.log(Book.compareAge(book1, book3)); // Книги изданы в одном году
console.log(Book.compareAge(book3, book2)); // Дубровский раньше