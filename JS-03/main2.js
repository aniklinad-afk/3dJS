// 2. Каталог и электронная книга
console.log("--- Каталог книг ---");

// Класс обычной книги
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `«${this.title}» – ${this.author}, ${this.year} год`;
  }
}

// Класс электронной книги, наследуется от Book
class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year); // Передаем данные в родительский конструктор
    this.format = format;
  }

  getSummary() {
    return `${super.getSummary()}, формат ${this.format}`;
  }
}

// Создаем каталог
const books = [
  new Book("Война и мир", "Лев Толстой", 1869),
  new Book("Анна Каренина", "Лев Толстой", 1877),
  new EBook("Дубровский", "Александр Пушкин", 1841, "EPUB"),
];

// Вывод описания всех книг
for (const book of books) {
  console.log(book.getSummary());
}