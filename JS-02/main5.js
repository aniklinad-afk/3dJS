// Исходные данные
const events = [
  { name: "Интерстеллар", price: 0, category: "Фантастика" },
  { name: "Побег из Шоушенка", price: 700, category: "Драма" },
  { name: "Сумерки", price: 0, category: "Драма" },
  { name: "Аэроплан", price: 400, category: "Комедия" },
];

// Задание 5
console.log("--- Обновление киноафиши ---");

const freeEvents = events.filter((event) => event.price === 0);
console.log("Изначальный массив freeEvents (2 шт):", freeEvents);

const newEvent = { name: "Молчание ягнят", price: 0, category: "Ужасы" };
events.push(newEvent);

console.log("Новая длина списка events:", events.length);

const newFreeEvents = events.filter((event) => event.price === 0);
console.log("Новый массив бесплатных кинопоказов (3 шт):", newFreeEvents);

/*
Когда мы добавили новый объект в events, 
массив freeEvents об этом "не узнал". Чтобы получить актуальные данные, 
нам пришлось вызвать filter ещё раз (newFreeEvents).
*/