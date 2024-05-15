
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
    if (openPopup) {
        const popUp = document.getElementById('basket-popup');
        const basket = document.getElementById('basket-main');
        const footerColor = document.getElementById('footer');

        openPopup.addEventListener('click', function(e) {
            e.preventDefault();
            popUp.classList.add('open');
            basket.classList.add('active-basket');
            footerColor.classList.add('active-basket');
        });
    }
});

// closePopup.addEventListener('click',()=> {
//     popUp.classList.remove('open')
// })

// Filters
// function tooglePopular() {
//     let arrowPopular = document.getElementById("arrow-popular");
//     let secondMain = document.getElementById("pampers-second-main");

//     // Проверяем, отображается ли в данный момент блок secondMain
//     if (secondMain.style.display === "block") {
//         secondMain.style.display = "none"; // Если отображается, скрываем его
//         arrowPopular.src = "/images/arrowRight.svg"; // Меняем иконку на стрелку вправо
//     } else {
//         secondMain.style.display = "block"; // Если не отображается, показываем его
//         arrowPopular.src = "/images/arrow-down.svg"; // Меняем иконку на стрелку вниз
//     }
// }

function toggleBurger () {
     let categoryMobile = document.querySelector('.category-mobile-content')

    let burger = document.querySelector('.header-burger'); // Получаем первый элемент с классом 'header-burger'
    burger?.addEventListener('click',function(e){
        e.preventDefault();
        if(categoryMobile.style.display === 'none'){
            categoryMobile.style.display ='flex'
        }
        else
            {
                categoryMobile.style.display = 'none'
            }
    })
}


// Banner
if (typeof Swiper !== 'undefined') {
    let swiper = new Swiper(".mySwiper", {
    spaceBetween:30,
    navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
    },
    pagination: {
    el:".swiper-pagination",
    },
    keyboard:true,
    });
}


const form = document.querySelector('.form-main');
form?.addEventListener('submit', async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const formData = new FormData(form); // Получаем данные формы
    const url = '/login'; // Замените на ваш URL для аутентификации

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

// Забыл пароль
const forgotPassword = document.getElementById('form-forgot-password');
forgotPassword?.addEventListener('submit', async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы по умолчанию
    const forgotPasswordData = new FormData(forgotPassword); // Получаем данные формы
    const url = '/OTP'; // Замените на ваш URL для аутентификации
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: forgotPasswordData
        });

        if (response.ok) {
            // Успешный ответ от сервера
            const data = await response.json();
            console.log(data); // Обработка успешного входа
            window.location.href = '/authorization.html'; // Перенаправление на страницу авторизации
        } else {
            // Ошибка от сервера
            console.error('Ошибка при авторизации:', response.status);
        }
    } catch (error) {
        // Ошибка сети или другая ошибка
        console.error('Ошибка при отправке запроса:', error);
    }
});


// Регистрация
const formRegistration = document.getElementById('form-registration');
formRegistration?.addEventListener('submit', async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const formData = new FormData(formRegistration); // Получаем данные формы
    const url = '/registr'; // Замените на ваш URL для аутентификации

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

// Регистрация Дилер
const formRegistrationLegal = document.getElementById('form-registration-legal');
formRegistrationLegal?.addEventListener('submit', async (e) => {
    e.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const formData = new FormData(formRegistration); // Получаем данные формы
    const url = '/registrLegal'; // Замените на ваш URL для аутентификации

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

// Favor button
// Находим иконку "избранное"
const favorIcon = document.querySelector('.hits-card-favor');

// Добавляем обработчик события клика на иконку "избранное"
favorIcon?.addEventListener('click', async () => {
    // Получаем ID товара или другие необходимые данные для отправки на сервер
    const productId = ''; // Замените на реальный ID товара
    // Определяем URL для отправки запроса на добавление товара в избранное
    const url = '/login'; // Замените на ваш URL для добавления товара в избранное

    try {
        // Отправляем POST-запрос на сервер
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId }) // Отправляем ID товара на сервер в формате JSON
        });

        if (response.ok) {
            // Обработка успешного ответа от сервера
            console.log('Товар успешно добавлен в избранное');
        } else {
            // Обработка ошибки от сервера
            console.error('Ошибка при добавлении товара в избранное:', response.status);
        }
    } catch (error) {
        // Обработка ошибки сети или другой ошибки
        console.error('Ошибка при отправке запроса на добавление товара в избранное:', error);
    }
});


// Cabinet
// Находим кнопку "Изменить данные"
const editButton = document.getElementById('change-data');

// Добавляем обработчик события клика на кнопку "Изменить данные"
editButton?.addEventListener('click', () => {
    // Находим все инпуты в профильной части
    const inputs = document.getElementById('data');
    // Удаляем атрибут disabled у каждого инпута
    inputs.forEach(input => {
        input.removeAttribute('disabled');
    });
});



// Получаем все ссылки в меню
const links = document.querySelectorAll('.cabinet-choice-block a');

// Перебираем каждую ссылку
links.forEach(link => {
    // Проверяем, содержит ли текущий URL значение атрибута href ссылки
    if (window.location.href.includes(link.getAttribute('href'))) {
        // Если да, добавляем класс "active" к ссылке
        link.classList.add('highlight');
    }
});
