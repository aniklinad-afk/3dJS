export class Book {
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

export class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  getSummary() {
    return `${super.getSummary()}, формат ${this.format}`;
  }
}