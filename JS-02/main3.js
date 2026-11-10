// Исходные данные
const events = [
  { name: "Интерстеллар", price: 0, category: "Фантастика" },
  { name: "Побег из Шоушенка", price: 700, category: "Драма" },
  { name: "Сумерки", price: 0, category: "Драма" },
  { name: "Аэроплан", price: 400, category: "Комедия" },
];

// Задание 3
console.log("--- Поиск по категории ---");

const selectedCategory = "Драма";
const foundEvent = events.find((event) => event.category === selectedCategory);

if (foundEvent !== undefined) {
  console.log(`Найдено: ${foundEvent.name}`);
} else {
  console.log("В этой категории пока нет кинопоказов");
}

console.log("--- Проверка несуществующей категории ---");
const emptyCategory = "Хоррор";
const notFoundEvent = events.find((event) => event.category === emptyCategory);

if (notFoundEvent !== undefined) {
  console.log(`Найдено: ${notFoundEvent.name}`);
} else {
  console.log(`Категория "${emptyCategory}": В этой категории пока нет кинопоказов`);
}
