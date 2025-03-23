// Математическая игра
function startMathGame() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() < 0.5 ? '+' : '-';
    let answer;

    if (operation === '+') {
        answer = num1 + num2;
    } else {
        answer = num1 - num2;
    }

    const userAnswer = prompt(`Сколько будет ${num1} ${operation} ${num2}?`);
    if (parseInt(userAnswer) === answer) {
        document.getElementById('mathResult').innerText = 'Правильно! Молодец!';
    } else {
        document.getElementById('mathResult').innerText = `Неправильно. Правильный ответ: ${answer}.`;
    }
}

// Логическая игра
function startLogicGame() {
    const questions = [
        {
            question: "Какой из следующих предметов не является фруктом?\n1. Яблоко\n2. Банан\n3. Морковь",
            answer: '3'
        },
        {
            question: "Что лишнее в этом ряду?\n1. Кошка\n2. Собака\n3. Стол\n4. Попугай",
            answer: '3'
        },
        {
            question: "Какой из этих предметов не может летать?\n1. Птица\n2
