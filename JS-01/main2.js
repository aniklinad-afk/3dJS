// 2. Условия и функции

// Функция проверки возраста
function checkAge(age) {
    if (age < 18) {
        return "доступ запрещён";
    } else if (age >= 18 && age <= 59) {
        return "доступ разрешён";
    } else {
        return "доступ разрешён с особыми привилегиями";
    }
}

// Функция скидки
function getDiscount(totalAmount) {
    if (totalAmount < 1000) {
        return "скидки нет";
    } else if (totalAmount >= 1000 && totalAmount <= 5000) {
        return "скидка 5%";
    } else {
        return "скидка 10%";
    }
}

// Функция приветствия
function greetUser(name, age) {
    const status = checkAge(age);
    return `Привет, ${name}! Твой возраст: ${age}. Статус: ${status}.`;
}

// Проверка возраста
console.log("Возраст 17:", checkAge(17)); 
console.log("Возраст 18:", checkAge(18)); 
console.log("Возраст 59:", checkAge(59)); 
console.log("Возраст 60:", checkAge(60)); 

// Проверка суммы
console.log("Сумма 999:", getDiscount(999));   
console.log("Сумма 1000:", getDiscount(1000)); 
console.log("Сумма 5000:", getDiscount(5000)); 
console.log("Сумма 5001:", getDiscount(5001)); 

// Вызов greetUser
console.log(greetUser("Алексей", 25));
