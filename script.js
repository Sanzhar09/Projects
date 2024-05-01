// FAQ
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
// Registration
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

// Popup Basket
const openPopup = document.getElementById('show-popup');
const closePopup = document.getElementById('basket');
const popUp = document.getElementById('basket-popup');
const basket = document.getElementById('basket-main')
const footerColor = document.getElementById('footer')
openPopup.addEventListener('click',function(e){
    e.preventDefault();
    popUp.classList.add('open');
    basket.classList.add('active-basket')
    footerColor.classList.add('active-basket')
})
// closePopup.addEventListener('click',()=> {
//     popUp.classList.remove('open')
// })

// Filters
function tooglePopular() {
    let arrowPopular = document.getElementById("arrow-popular");
    let secondMain = document.getElementById("pampers-second-main");

    // Проверяем, отображается ли в данный момент блок secondMain
    if (secondMain.style.display === "block") {
        secondMain.style.display = "none"; // Если отображается, скрываем его
        arrowPopular.src = "/images/arrowRight.svg"; // Меняем иконку на стрелку вправо
    } else {
        secondMain.style.display = "block"; // Если не отображается, показываем его
        arrowPopular.src = "/images/arrow-down.svg"; // Меняем иконку на стрелку вниз
    }
}