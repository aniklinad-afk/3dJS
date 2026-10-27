// 5. Что копируется при присваивании

console.log("Первая итерация");
{
    const firstStudent = { score: 3 };
    const secondStudent = firstStudent;
    secondStudent.score++;

    let firstScore = 3;
    let secondScore = firstScore;
    secondScore++;

    console.log(firstStudent.score, firstScore); 
    // предсказание: 4 и 3. firstStudent и secondStudent указывают на один и тот же объект в памяти, поэтому изменение score для secondStudent меняет его и для firstStudent.
}

console.log("\nВторая итерация");
{
    const firstStudent = { score: 3 };
    const secondStudent = { ...firstStudent }; 
    secondStudent.score++;

    let firstScore = 3;
    let secondScore = firstScore;
    secondScore++;

    console.log(firstStudent.score, firstScore);
    // предсказание: 3 и 3. Оператор ... создал копию. Теперь firstStudent и secondStudent — это два разных объекта в памяти. Изменение score во втором не затрагивает первый. Первое число вывода изменилось с 4 на 3, потому что ссылки больше нет.
}