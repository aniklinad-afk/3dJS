import { Book, EBook } from './books.js';


// 1. Описание одной книги

console.log("--- Задание 1: Одна книга ---");

const featuredBook = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869,
  getSummary() {
    return `«${this.title}» – ${this.author}, ${this.year} год`;
  }
};

console.log(featuredBook.getSummary());
featuredBook.year = 1873;
console.log("После изменения года:", featuredBook.getSummary());
featuredBook.year = 1869;

const describeBook = () => featuredBook.getSummary();
console.log("Через обертку:", describeBook());


// 2. Каталог и электронная книга

console.log("\n--- Задание 2: Каталог книг ---");

const books = [
  new Book("Война и мир", "Лев Толстой", 1869),
  new Book("Анна Каренина", "Лев Толстой", 1877),
  new EBook("Дубровский", "Александр Пушкин", 1841, "EPUB"),
];

for (const book of books) {
  console.log(book.getSummary());
}


// 3. Сравнение двух книг

console.log("\n--- Задание 3: Сравнение книг ---");

console.log(Book.compareAge(books[0], books[1]));
console.log(Book.compareAge(books[1], books[0]));
console.log(Book.compareAge(books[0], books[0]));
console.log(Book.compareAge(books[2], books[1]));

// 4. Независимый прогресс чтения

console.log("\n--- Задание 4: Счетчики чтения ---");

function createReadingTracker() {
  let pagesRead = 0;
  return function () {
    pagesRead++;
    return pagesRead;
  };
}

const readFirstBook = createReadingTracker();
const readSecondBook = createReadingTracker();

console.log(readFirstBook());  
console.log(readFirstBook());  
console.log(readSecondBook()); 
console.log(readFirstBook());  


// 5. Загрузка каталога

console.log("\n--- Задание 5: Асинхронная загрузка ---");

function loadBooks(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Не удалось загрузить каталог"));
      } else {
        resolve(books);
      }
    }, 500);
  });
}

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

console.log("Открываем книжную полку");
showLibrary(false);
console.log("Можно продолжать другие действия");