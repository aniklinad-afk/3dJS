// Исходные данные
const events = [
  { name: "Интерстеллар", price: 0, category: "Фантастика" },
  { name: "Побег из Шоушенка", price: 700, category: "Драма" },
  { name: "Сумерки", price: 0, category: "Драма" },
  { name: "Аэроплан", price: 400, category: "Комедия" },
];

// Задание 4
console.log("--- Список названий ---");

const eventNames = events.map((event) => event.name);

console.log(eventNames);