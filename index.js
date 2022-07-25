let age = prompt('Скільки Вам років?');
let message = (age < 12) ? 'Статус: дитина.' :
    (age < 18) ? 'Статус: піділток.' :
    (age < 60) ? 'Статус: дорослий.' :
    (age > 61) ? 'Статус: пенсіонер.' :
    'Статус: пенсіонер.';
alert(message);


let num = prompt('Введіть число від 0 до 9');
let message2 =
    (num == 0) ? '=' :
    (num == 1) ? '!' :
    (num == 2) ? '@' :
    (num == 3) ? '£' :
    (num == 4) ? '$' :
    (num == 5) ? '%' :
    (num == 6) ? '^' :
    (num == 7) ? '&' :
    (num == 8) ? '*' :
    (num == 9) ? '(' :
    'Not available'
alert(message2);


let range = 0;
while (true) {
    let value = +prompt('Введіть число:', '');
    if (!value) break;
    range += value;
}
alert('Сума: ' + range);


let num2 = prompt('Введіть будь-яке число');
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
function findDenominators(num2) {
    const denominators = []

    for (let i = 0; i < primeNumbers.length; i++) {
        while (num2 % primeNumbers[i] === 0) {
            denominators.push(primeNumbers[i])
            num2 /= primeNumbers[i]
        }

        if (num2 === 1) return denominators
    }
}
alert('Всі дільники цього числа: ' + findDenominators(num2));


let fiveDigitnumber = prompt('Введіть п\'ятирозрядне число');
const isPalindromeNumber = function (fiveDigitnumber) {
    if (fiveDigitnumber < 0) return false;
    if (fiveDigitnumber % 10 === 0) return false;
    if (fiveDigitnumber < 10) return true;

    let rev = 0;

    while (fiveDigitnumber > rev) {
        rev *= 10;
        rev += fiveDigitnumber % 10;
        fiveDigitnumber = Math.trunc(fiveDigitnumber / 10)
    }
    return fiveDigitnumber === rev || fiveDigitnumber === Math.trunc(rev / 10)
}
alert( 'Якщо \'true\' - паліандром, якщо \'false\' - не є паліандромом. Результат: ' + isPalindromeNumber(fiveDigitnumber) );


let sum = prompt( 'Введіть суму покупки (починаючи з двохсот)' );
function findCommonPercent(sum) {
    if (sum < 199) return (sum / 100 * 3);
    if (sum >= 300 && sum < 500) return (sum / 100 * 5);
    if (sum >= 500) return (sum / 100 * 7);         
}
const totallPrice = sum - findCommonPercent(sum);
alert( 'Ціна зі знижкою: ' + totallPrice );


let num3 = +prompt('Введіть число:', '');         // перевести в массив
function findEvenOrOdd(num3) {
    return num3 % 2 === 0 ? 'Парне' : 'Непарне';
}
alert( findEvenOrOdd(num3) );
function findPositiveOrNegative (num3) {
    if (num3 < 0) {
      alert('Ви ввели відмінне число');
    } else if (num3 == false) {
      alert('Ви ввели нуль');
    } else {
      alert("Ви ввели додатнє число");
    }
}
alert( findPositiveOrNegative (num3) );


function day() {
    let day = new Date();
    let week = new Array( 'Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'  );

    for ( i = 0; i < 14; i++ ) {
        alert(week[(day.getDay()+ i) % 7]);
    }
}
alert( day() );

























