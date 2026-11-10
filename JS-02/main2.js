// Исходные данные
const events = [
  { name: "Интерстеллар", price: 0, category: "Фантастика" },
  { name: "Побег из Шоушенка", price: 700, category: "Драма" },
  { name: "Сумерки", price: 0, category: "Драма" },
  { name: "Аэроплан", price: 400, category: "Комедия" },
];

// Задание 2
console.log("--- Бесплатные кинопоказы ---");

const freeEvents = events.filter((event) => event.price === 0);

console.log(freeEvents);


