// 4. Вложенные данные студента

const student = {
    name: "Мария",
    age: 20,
    address: {
        city: "Москва",
        street: "Гоголя"
    },
    grades: {
        physics: 5,
        javascript: 4
    }
};

console.log("Имя:", student.name);
console.log("Возраст:", student.age);
console.log("Город:", student.address.city);
console.log("Улица:", student.address.street);
console.log("Оценка по физике:", student.grades.physics);
console.log("Оценка по JS:", student.grades.javascript);

student.address.city = "Санкт-Петербург";
console.log("Новый город:", student.address.city);