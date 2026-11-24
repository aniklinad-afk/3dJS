// Данные афиши

type EventFormat = "online" | "offline";

type EventItem = {
  readonly id: number;
  name: string;
  price: number;
  seatsLeft: number;
  format: EventFormat;
  description?: string;  
};

const events: EventItem[] = [
  {
    id: 1,
    name: "Лекция о дизайне",
    price: 0,
    seatsLeft: 12,
    format: "offline",
    description: "Разбираем интерфейсы знакомых сервисов",
  },
  {
    id: 2,
    name: "Кинопоказ во дворе",
    price: 300,
    seatsLeft: 2,
    format: "offline",
  },
  {
    id: 3,
    name: "Онлайн-встреча с иллюстратором",
    price: 500,
    seatsLeft: 0,
    format: "online",
  },
];

// Примеры намеренных ошибок
//
// 1) строка вместо числа:
// const badPrice: EventItem = { id: 10, name: "X", price: "500", seatsLeft: 1, format: "offline" };
//
// 2) опечатка в формате:
// error TS2820: Type '"offlie"' is not assignable to type 'EventFormat'. Did you mean '"offline"'?
//
// 3) забыли обязательное поле seatsLeft:
// const noField: EventItem = { id: 12, name: "X", price: 500, format: "offline" };


// Подбор и подпись

function getAvailableEvents(
  items: readonly EventItem[],
  maxPrice: number,
): EventItem[] {
  return items.filter(
    (item) => item.price <= maxPrice && item.seatsLeft > 0,
  );
}

function formatEvent(item: EventItem): string {
  const priceLabel = item.price === 0 ? "бесплатно" : `${item.price} ₽`;
  const formatLabel = item.format === "online" ? "онлайн" : "очно";
  const description = item.description ?? "Описание появится позже";
  return `${item.name} — ${priceLabel}, ${formatLabel}. ${description}`;
}


// Бронирование

type BookingRequest = {
  eventId: number;
  ticketCount: number;
  customerName: string;
};

type BookingResult =
  | {
      ok: true;
      eventName: string;
      customerName: string;
      ticketCount: number;
      total: number;
    }
  | { ok: false; reason: string };

function bookEvent(
  items: readonly EventItem[],
  request: BookingRequest,
): BookingResult {
  // Количество положительное целое число
  if (!Number.isInteger(request.ticketCount) || request.ticketCount <= 0) {
    return {
      ok: false,
      reason: "Укажите положительное целое количество билетов",
    };
  }

  // Мероприятие существует
  const event = items.find((item) => item.id === request.eventId);
  if (event === undefined) {
    return { ok: false, reason: "Мероприятие не найдено" };
  }

  // Мест хватает
  if (event.seatsLeft < request.ticketCount) {
    return { ok: false, reason: "Недостаточно свободных мест" };
  }

  // Успех
  return {
    ok: true,
    eventName: event.name,
    customerName: request.customerName,
    ticketCount: request.ticketCount,
    total: event.price * request.ticketCount,
  };
}

function formatBooking(result: BookingResult): string {
  if (result.ok) {
    return `Успех: ${result.customerName}, «${result.eventName}», ` +
      `${result.ticketCount} бил., итого ${result.total} ₽`;
  }

  return `Отказ: ${result.reason}`;
}


// Карточка и изменение цены

type EventPreview = Pick<EventItem, "id" | "name" | "price">;

function makePreview(item: EventItem): EventPreview {
  return { id: item.id, name: item.name, price: item.price };
}

type EventChanges = Partial<Pick<EventItem, "name" | "price">>;

function updateEvent(item: EventItem, changes: EventChanges): EventItem {
  return {
    ...item,
    name: changes.name ?? item.name,
    price: changes.price ?? item.price,
  };
}


// Проверка неизвестного значения

function readTicketCount(value: unknown): number | undefined {

  if (typeof value !== "number") {
    return undefined;
  }
  if (!Number.isInteger(value) || value <= 0) {
    return undefined;
  }
  return value;
}

// Используем проверку в бронировании
function bookWithUnknownCount(
  items: readonly EventItem[],
  eventId: number,
  customerName: string,
  rawCount: unknown,
): string {
  const count = readTicketCount(rawCount);
  if (count === undefined) {
    return "Ошибка ввода: количество билетов должно быть положительным целым числом";
  }
  const request: BookingRequest = {
    eventId,
    ticketCount: count,
    customerName,
  };
  return formatBooking(bookEvent(items, request));
}


// Проверки

console.log("=== Шаг 2: подбор мероприятий ===");

function showList(title: string, list: EventItem[]): void {
  console.log(title);
  if (list.length === 0) {
    console.log("  (пусто)");
    return;
  }
  for (const item of list) {
    console.log("  " + formatEvent(item));
  }
}

showList("Бюджет 300:", getAvailableEvents(events, 300));
showList("Бюджет 0:", getAvailableEvents(events, 0));
showList("Бюджет 1000:", getAvailableEvents(events, 1000));
showList("Пустой массив:", getAvailableEvents([], 1000));


console.log("\n=== Шаг 3: бронирование ===");

const requests: BookingRequest[] = [
  { eventId: 2, ticketCount: 2, customerName: "Анна" },   // успех
  { eventId: 2, ticketCount: 3, customerName: "Борис" },  // мало мест
  { eventId: 1, ticketCount: 2, customerName: "Вера" },   // успех
  { eventId: 3, ticketCount: 1, customerName: "Глеб" },   // мало мест
  { eventId: 99, ticketCount: 1, customerName: "Дина" },  // не найдено
  { eventId: 2, ticketCount: 0, customerName: "Егор" },   // неверное кол-во
  { eventId: 2, ticketCount: -1, customerName: "Жанна" }, // неверное кол-во
  { eventId: 2, ticketCount: 1.5, customerName: "Зоя" },  // неверное кол-во
];

for (const request of requests) {
  console.log(
    `Запрос: eventId=${request.eventId}, ticketCount=${request.ticketCount}, ` +
    `customerName="${request.customerName}"`,
  );
  console.log("  → " + formatBooking(bookEvent(events, request)));
}


console.log("\n=== Шаг 4: карточка и изменение цены ===");

const found = events.find((item) => item.id === 2);

if (found === undefined) {
  console.log("Кинопоказ не найден");
} else {
  console.log("Карточка:", makePreview(found));

  const freeShow = updateEvent(found, { price: 0 });
  console.log("Новая цена у копии:", freeShow.price);       // 0
  console.log("Цена у оригинала:", found.price);            // 300
  console.log(
    "id:", freeShow.id,
    "| format:", freeShow.format,
    "| seatsLeft:", freeShow.seatsLeft,
  );

  const renamed = updateEvent(found, { name: "Вечер кино" });
  console.log("Новое название у копии:", renamed.name);
  console.log("Название у оригинала:", found.name);

  const unchanged = updateEvent(found, {});
  console.log("Пустое изменение: цена", unchanged.price, "| название", unchanged.name);
}


console.log("\n=== Шаг 5: readTicketCount ===");

const rawValues: unknown[] = [
  2, "2", 0, -1, 1.5, null, undefined, true, NaN, Infinity,
];

for (const value of rawValues) {
  const label =
    typeof value === "number" && Number.isNaN(value) ? "NaN" : String(value);
  console.log(`readTicketCount(${label}) →`, readTicketCount(value));
}

console.log("\nИспользование результата в бронировании:");
console.log("2   →", bookWithUnknownCount(events, 2, "Анна", 2));    // успех
console.log('"2" →', bookWithUnknownCount(events, 2, "Анна", "2"));  // ошибка ввода
console.log("1.5 →", bookWithUnknownCount(events, 2, "Анна", 1.5));  // ошибка ввода