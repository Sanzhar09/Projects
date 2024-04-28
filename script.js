
function toogleAnswer(question) {
    let answer = question.nextElementSibling; // Получаем следующий элемент (ответ)
    let arrowIcon = question.querySelector('.arrow-icon'); // Получаем иконку вопроса

    if (answer.style.display === 'none') {
        answer.style.display = 'block'; // Показываем ответ
        arrowIcon.src = '/images/arrow-down.svg'; // Меняем иконку на стрелку вниз
    } else {
        answer.style.display = 'none'; // Скрываем ответ
        arrowIcon.src = '/images/arrowRight.svg'; // Меняем иконку на стрелку вправо
    }
}
function redirectToPage(selectElement) {
    var selectedValue = selectElement.value;
    if (selectedValue === 'individual') {
        window.location.href = 'regIndividual.html'; // Перенаправление на страницу для физического лица
    } else if (selectedValue === 'legal') {
        window.location.href = 'regLegal.html'; // Перенаправление на страницу для юридического лица
    } else if (selectedValue === 'wholesale') {
        window.location.href = 'wholesale.html'; // Перенаправление на страницу для оптового пользователя
    }
}
