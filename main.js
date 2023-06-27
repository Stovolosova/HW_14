// Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28
function findSum() {
    let sum = 0;
    return function(number) {
        sum += number;
        return sum;
    } 
}
const sum = findSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

// Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.
function arithmeticMean(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
  }
  arr = [3, 5, 'a', 'r', 7, 'f', 1];
  console.log(arithmeticMean(arr));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.
function doMath(x, znak, y) {
    let result ;
    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            break;
    }
    return result;
}

console.log(doMath(10, '+', 2));
console.log(doMath(10, '-', 2));
console.log(doMath(10, '*', 2));
console.log(doMath(2, '%', 10));
console.log(doMath(10, '/', 2));
console.log(doMath(10, '^', 2));

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву та внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач.
function fillArray() {
    let rows = Number(prompt('Enter the number of rows:'));
    let cols = Number(prompt('Enter the number of columns:'));
    let array = [];
    for(let i = 0; i < rows; i++){
        array[i] = [];
        for(let c = 0; c < cols; c++){
            array[i][c] = prompt(`Enter element at position ${i}, ${c}:`);
        }
    }
    return array;
  }
  console.log(fillArray());

// Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач
function removeChars(str, chars) {
    for (let i = 0; i < chars.length; i++) {
        char = chars[i];
        str = str.split(char).join('');
    }
    return str;
}
console.log(removeChars('hello world', ['l', 'd']));