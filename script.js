
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
document.addEventListener('DOMContentLoaded', function() {
    const openPopup = document.getElementById('show-popup');
    const closePopup = document.getElementById('basket');
    const popUp = document.getElementById('basket-popup');
    const basket = document.getElementById('basket-main');
    const footerColor = document.getElementById('footer');

    openPopup.addEventListener('click', function(e) {
        e.preventDefault();
        popUp.classList.add('open');
        basket.classList.add('active-basket');
        footerColor.classList.add('active-basket');
    });
});
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

function toggleBurger () {
    let burger = document.querySelector('.header-burger'); // Получаем первый элемент с классом 'header-burger'
    let category = document.querySelector('.category-content'); // Получаем элемент с классом 'category'
    let categoryCard = document.querySelectorAll('.category-card'); // Получаем элемент с классом 'category'
    let headerList = document.querySelector('.header-list-mobile');
    let footerPayMobile = document.querySelector('.footer-pay-mobile');
    burger.addEventListener('click',function(e){
        e.preventDefault();
        if(category.style.flexDirection == 'row'){
            category.style.flexDirection = 'column';
            category.style.gap = '17px';
            category.style.paddingTop = '12px';
            headerList.style.display = 'flex';
            footerPayMobile.style.display = 'flex'
            footerPayMobile.style.gap = '32px'
            categoryCard.forEach(function(card) {
                card.style.paddingTop = '0';
                card.style.paddingBottom = '0';
            });

        }
        else {
            category.style.flexDirection = 'row';
            category.style.gap = '32px';
            category.style.paddingTop= '0';
            headerList.style.display = 'none';
            footerPayMobile.style.display = 'none';
            category.style.paddingBottom = '16px'
            card.style.paddingTop = '16px';
                card.style.paddingBottom = '6px';
            categoryCard.forEach(function(card) {
            });


        }
    })
}

// Banner
let swiper = new Swiper(".mySwiper", {
    spaceBetween:30,
    navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
    },
    pagination: {
    el:".swiper-pagination",
    },
    mousewheel: true,
    keyboard:true,
    });


const form = document.querySelector('.form-main');
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const formData = new FormData(form); // Получаем данные формы
    const url = '/your-backend-login-endpoint'; // Замените на ваш URL для аутентификации

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            // Успешный ответ от сервера
            const data = await response.json();
            console.log(data); // Обработка успешного входа
            window.location.href = '/account.html'; // Перенаправление на страницу аккаунта
        } else {
            // Ошибка от сервера
            console.error('Ошибка при авторизации:', response.status);
        }
    } catch (error) {
        // Ошибка сети или другая ошибка
        console.error('Ошибка при отправке запроса:', error);
    }
});
