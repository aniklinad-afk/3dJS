// 4. Независимый прогресс чтения
console.log("--- Шаг 4: Счетчики чтения ---");

function createReadingTracker() {
  let pagesRead = 0; 

  return function () {
    pagesRead++;
    return pagesRead;
  };
}

// два независимых счетчика
const readFirstBook = createReadingTracker();
const readSecondBook = createReadingTracker();

console.log(readFirstBook());  // 1
console.log(readFirstBook());  // 2
console.log(readSecondBook()); // 1
console.log(readFirstBook());  // 3