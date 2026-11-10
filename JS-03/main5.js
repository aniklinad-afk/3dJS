// 5. Загрузка каталога
console.log("--- Загрузка каталога ---");

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
class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }
  getSummary() {
    return `${super.getSummary()}, формат ${this.format}`;
  }
}

const books = [
  new Book("Война и мир", "Лев Толстой", 1869),
  new Book("Анна Каренина", "Лев Толстой", 1877),
  new EBook("Дубровский", "Александр Пушкин", 1841, "EPUB"),
];

// Функция загрузки
function loadBooks(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Не удалось загрузить каталог"));
      } else {
        resolve(books);
      }
    }, 500); // Задержка 500 мс
  });
}

// Асинхронная функция показа
async function showLibrary(shouldFail) {
  try {
    const loadedBooks = await loadBooks(shouldFail);
    
    for (const book of loadedBooks) {
      console.log(book.getSummary());
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Загрузка завершена");
  }
}

// Запуск
console.log("Открываем книжную полку");
showLibrary(false);
console.log("Можно продолжать другие действия");