// 1. Описание одной книги
console.log("--- Одна книга ---");

const featuredBook = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869,
  getSummary() {
    return `«${this.title}» – ${this.author}, ${this.year} год`;
  }
};

console.log(featuredBook.getSummary());

// Изменяем год и вызываем метод ещё раз
featuredBook.year = 1873;
console.log("После изменения года:", featuredBook.getSummary());

// Возвращаем исходный год
featuredBook.year = 1869;

// Сохраняем обёртку и вызываем её
const describeBook = () => featuredBook.getSummary();
console.log("Через обертку:", describeBook());