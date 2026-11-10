// Исходные данные
const events = [
  { name: "Интерстеллар", price: 0, category: "Фантастика" },
  { name: "Побег из Шоушенка", price: 700, category: "Драма" },
  { name: "Сумерки", price: 0, category: "Драма" },
  { name: "Аэроплан", price: 400, category: "Комедия" },
];

// Задание 1
console.log("--- Киноафиша ---");

for (const event of events) {
  if (event.price === 0) {
    console.log(`${event.name} – бесплатно`);
  } else {
    console.log(`${event.name} – ${event.price} ₽`);
  }
}

// Вывод на страницу
const displayAfisha = []; // пустой массив для строк
for (const event of events) {
  if (event.price === 0) {
    displayAfisha.push(`${event.name} – бесплатно`);
  } else {
    displayAfisha.push(`${event.name} – ${event.price} ₽`);
  }
}

const resultElement = document.querySelector("#result");
if (resultElement) {
  resultElement.textContent = displayAfisha.join("\n");
}