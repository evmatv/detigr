function startMathGame() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;

    const userAnswer = prompt(`Сколько будет ${num1} + ${num2}?`);
    if (parseInt(userAnswer) === answer) {
        document.getElementById('mathResult').innerText = 'Правильно! Молодец!';
    } else {
        document.getElementById('mathResult').innerText = `Неправильно. Правильный ответ: ${answer}.`;
    }
}

function startLogicGame() {
    const question = "Какой из следующих предметов не является фруктом?\n1. Яблоко\n2. Банан\n3. Морковь";
    const userAnswer = prompt(question);
    if (userAnswer === '3') {
        document.getElementById('logicResult').innerText = 'Правильно! Молодец!';
    } else {
        document.getElementById('logicResult').innerText = 'Неправильно
