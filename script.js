// Favor image

document?.addEventListener("DOMContentLoaded", function() {
    const favorIcons = document.querySelectorAll(".hits-card-favor");

    favorIcons.forEach(icon => {
        icon?.addEventListener("click", function(event) {
            event.stopPropagation();
            if (this.src.includes("favor.svg")) {
                this.src = "/images/heart.svg";
            } else {
                this.src = "/images/favor.svg";
            }
        });
    });
});
document?.addEventListener("DOMContentLoaded", function() {
    const favorIcons = document.querySelectorAll('.icon-favor');
    const cardProductFavor = document.querySelector('.cardProduct-favor')

    cardProductFavor?.addEventListener('click', function(event) {
        event.stopPropagation();  // Остановка всплытия события, если это необходимо
        if (cardProductFavor.src.includes('favor.svg')) {
            cardProductFavor.src = './images/heart.svg';
        } else {
            cardProductFavor.src = './images/favor.svg';
        }
    });



    favorIcons.forEach(icon => {
        icon?.addEventListener('click', function(event) {
            event.stopPropagation();  // Остановка всплытия события, если это необходимо
            if (icon.src.includes('favor.svg')) {
                icon.src = './images/heart.svg';
            } else {
                icon.src = './images/favor.svg';
            }
        });
    });
});


document?.addEventListener("DOMContentLoaded", function() {
    // Добавляем обработчик события для карточек
    const hitsCards = document.querySelectorAll('.hits-card');
    hitsCards.forEach(card => {
        card?.addEventListener('click', function() {
            window.location.href = './cardProduct.html';
        });

})
})
document?.addEventListener("DOMContentLoaded", function() {
    // Добавляем обработчик события для карточек
    const basketCards = document.querySelectorAll('.button-basket');
    basketCards.forEach(card => {
        card?.addEventListener('click', function(e) {
            e.stopPropagation();
        });

})
})

document?.addEventListener("DOMContentLoaded", function() {
    // Добавляем обработчик события для карточек
    const hitsCards = document.querySelectorAll('.basket-left-card');
    hitsCards.forEach(card => {
        card?.addEventListener('click', function() {
            window.location.href = './cardProduct.html';
        });

})
})


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
// Orders
function toogleOrders(question) {
    let answer = question.nextElementSibling; // Получаем следующий элемент (ответ)
    let arrowIcon = question.querySelector('.order-arrow'); // Получаем иконку вопроса
    if (answer.style.display === 'none') {
        answer.style.display = 'flex'; // Показываем ответ
        arrowIcon.src = '/images/arrow-down.svg'; // Меняем иконку на стрелку вниз
    } else {
        answer.style.display = 'none'; // Скрываем ответ
        arrowIcon.src = '/images/arrowRight.svg'; // Меняем иконку на стрелку вправо
    }
}
// Registration
function redirectToPage(selectElement) {
    let selectedValue = selectElement.value;
    if (selectedValue === 'individual') {
        window.location.href = 'regIndividual.html'; // Перенаправление на страницу для физического лица
    } else if (selectedValue === 'legal') {
        window.location.href = 'regLegal.html'; // Перенаправление на страницу для юридического лица
    } else if (selectedValue === 'wholesale') {
        window.location.href = 'wholesale.html'; // Перенаправление на страницу для оптового пользователя
    }
}

// Popup Basket
document?.addEventListener('DOMContentLoaded', function() {
    const openPopup = document.getElementById('show-popup');
    if (openPopup) {
        const popUp = document.getElementById('basket-popup');
        const basket = document.getElementById('basket-main');
        const footerColor = document.getElementById('footer');

        openPopup?.addEventListener('click', function(e) {
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
// Burger Mobile
function toggleBurger() {
    let categoryMobile = document.querySelector('.category-mobile-content');
    let displayStyle = window.getComputedStyle(categoryMobile).display;

    if (displayStyle === 'none') {
        categoryMobile.style.display = 'flex';
    } else {
        categoryMobile.style.display = 'none';
    }
}
// Profile Mobile
function toggleCabinet() {
    let mobileCabinet = document.querySelector('.mobile-cabinet')
    let choiceBlock = document.querySelector('.cabinet-choice-block')
 
    header-profile?.addEventListener('click',function(e){
        e.preventDefault();
        if(mobileCabinet.style.display==='none') {
            mobileCabinet.style.display = 'flex'
        }
        else
        {
            mobileCabinet.style.display = 'none'
            
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




// cardProduct
document?.addEventListener('DOMContentLoaded', function() {
    let descTab = document.getElementById('desc-tab');
    let deliveryTab = document.getElementById('delivery-tab');
    let descContent = document.getElementById('desc-content');
    let deliveryContent = document.getElementById('delivery-content');
    
    descTab?.addEventListener('click', function() {
        descContent.classList.remove('none');
        deliveryContent.classList.add('none');
        descTab.classList.add('active-card');
        deliveryTab.classList.remove('active-card');
    });

    deliveryTab?.addEventListener('click', function() {
        deliveryContent.classList.remove('none');
        descContent.classList.add('none');
        deliveryTab.classList.add('active-card');
        descTab.classList.remove('active-card');
    });
});

// PampersCategory
document?.addEventListener("DOMContentLoaded", function() {
    const titleContents = document.querySelectorAll('.pampers-second-title-content');

    titleContents.forEach(titleContent => {
        titleContent?.addEventListener('click', function() {
            const filtersBlock = titleContent.closest('.pampers-filters').querySelector('.pampers-filters-block');
            if (filtersBlock.style.display === 'flex') {
                filtersBlock.style.display = 'none';
            } else {
                filtersBlock.style.display = 'flex';
            }
        });
    });
});

document?.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('category-btn-mob');

    button?.addEventListener('click', function() {
        const closeFilters = document.querySelector('.pampers-second-main')
        if (closeFilters) {
            closeFilters.style.display = 'none';
        }

    });
});

document?.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.filter-btn');

    button?.addEventListener('click', function() {
        const closeFilters = document.querySelector('.pampers-second-main')
        if (closeFilters) {
            closeFilters.style.display = 'flex';
            closeFilters.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем элемент в область видимости с плавной анимацией

        }

    });
});
document?.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.filter-btn');

    button?.addEventListener('click', function() {
        const closeFilters = document.querySelector('.pants-second-main')
        if (closeFilters) {
            closeFilters.style.display = 'flex';
            closeFilters.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем элемент в область видимости с плавной анимацией

        }

    });
});


// Запросы 
document?.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form-main');
    const passwordInput = document.getElementById('password');
    const errorList = document.querySelector('.authorization-error');
    const lengthErrorItem = document.querySelector('.authorization-error-password');

    form?.addEventListener('submit', async (e) => {
        e.preventDefault(); // Предотвращаем отправку формы по умолчанию

        const password = passwordInput.value;

        // Скрываем все ошибки
        // errorList.classList.add('displayNone');
        // lengthErrorItem.classList.add('displayNone');

        
        const formData = new FormData(form); // Получаем данные формы
        const url = '/login';
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
            } // Проверяем длину пароля
            else if (password.length < 8) {
                // Отображаем соответствующую ошибку
                lengthErrorItem.style.display = 'block'
                return; // Останавливаем выполнение скрипта, если пароль недостаточно длинный
            }
    
        } catch (error) {
            // Ошибка сети или другая ошибка
            console.error('Ошибка при отправке запроса:', error);
        }
    });
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
document?.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form-reg');
    const passwordInput = document.getElementById('passwordReg');
    const passwordInputRepeat = document.getElementById('passwordRegRepeat');
    const errorList = document.querySelector('.registration-error');
    const lengthErrorItem = document.querySelector('.registration-error-password');
    const confirmationErrorItem = document.querySelector('.registration-password-confirmation');

    form?.addEventListener('submit', async (e) => {
        e.preventDefault(); // Предотвращаем отправку формы по умолчанию

        const password = passwordInput.value;
        const passwordRepeat = passwordInputRepeat.value;

        let hasError = false;

        // Скрываем все ошибки
        lengthErrorItem.style.display = 'none';
        confirmationErrorItem.style.display = 'none';
        errorList.classList.add('displayNone');

        // Проверяем длину пароля
        if (password.length < 8) {
            lengthErrorItem.style.display = 'block';
            errorList.classList.remove('displayNone');
            hasError = true;
        }

        // Проверяем совпадение паролей
        if (password !== passwordRepeat) {
            confirmationErrorItem.style.display = 'block';
            errorList.classList.remove('displayNone');
            hasError = true;
        }

        // Если есть ошибки, прекращаем выполнение скрипта
        if (hasError) {
            return;
        }

        const formData = new FormData(form); // Получаем данные формы
        const url = '/registr';
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Успешный ответ от сервера
                const data = await response.json();
                console.log(data); // Обработка успешного входа
                window.location.href = '/cabinet.html'; // Перенаправление на страницу аккаунта
            } else {
                // Обработка ошибки от сервера
                const errorData = await response.json();
                console.error('Ошибка при авторизации:', response.status, errorData);
                // Здесь можно добавить отображение других ошибок от сервера
            }
        } catch (error) {
            // Ошибка сети или другая ошибка
            console.error('Ошибка при отправке запроса:', error);
        }
    });
});


// Регистрация Дилер
document?.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form-reg-legal');
    const passwordInput = document.getElementById('passwordLegal');
    const passwordInputRepeat = document.getElementById('passwordLegalRepeat');
    const errorList = document.querySelector('.regLegal-error');
    const lengthErrorItem = document.querySelector('.regLegal-error-password');
    const confirmationErrorItem = document.querySelector('.regLegal-password-confirmation');

    form?.addEventListener('submit', async (e) => {
        e.preventDefault(); // Предотвращаем отправку формы по умолчанию

        const password = passwordInput.value;
        const passwordRepeat = passwordInputRepeat.value;

        let hasError = false;

        // Скрываем все ошибки
        lengthErrorItem.style.display = 'none';
        confirmationErrorItem.style.display = 'none';
        errorList.classList.add('displayNone');

        // Проверяем длину пароля
        if (password.length < 8) {
            lengthErrorItem.style.display = 'block';
            errorList.classList.remove('displayNone');
            hasError = true;
        }

        // Проверяем совпадение паролей
        if (password !== passwordRepeat) {
            confirmationErrorItem.style.display = 'block';
            errorList.classList.remove('displayNone');
            hasError = true;
        }

        // Если есть ошибки, прекращаем выполнение скрипта
        if (hasError) {
            return;
        }

        const formData = new FormData(form); // Получаем данные формы
        const url = '/registrLegal';
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                // Успешный ответ от сервера
                const data = await response.json();
                console.log(data); // Обработка успешного входа
                window.location.href = '/cabinetDiller.html'; // Перенаправление на страницу аккаунта
            } else {
                // Обработка ошибки от сервера
                const errorData = await response.json();
                console.error('Ошибка при авторизации:', response.status, errorData);
                // Здесь можно добавить отображение других ошибок от сервера
            }
        } catch (error) {
            // Ошибка сети или другая ошибка
            console.error('Ошибка при отправке запроса:', error);
        }
    });
});
// Favor button
// Находим иконку "избранное"
document.addEventListener('DOMContentLoaded', () => {
    const favorIcons = document.querySelectorAll('.hits-card-favor');

    favorIcons.forEach(favorIcon => {
        favorIcon?.addEventListener('click', async (event) => {
            event.stopPropagation(); // Останавливаем всплытие события клика

            const productId = favorIcon.dataset.id; // Получаем ID товара из data-атрибута

            if (!productId) {
                console.error('ID товара не найден');
                return;
            }

            const url = '/addFavor'; // Замените на ваш URL для добавления товара в избранное

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
    });

 // Обработчик для добавления в корзину
 const basketButtons = document.querySelectorAll('.button-basket');

 basketButtons.forEach(button => {
     button?.addEventListener('click', async (event) => {
         event.stopPropagation();

         const productId = button.dataset.id;

         if (!productId) {
             console.error('ID товара не найден');
             return;
         }

         const url = '/addBasket';

         try {
             const response = await fetch(url, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({ productId })
             });

             if (response.ok) {
                 console.log('Товар успешно добавлен в корзину');
                 button.textContent = 'Добавлено';
             } else {
                 console.error('Ошибка при добавлении товара в корзину:', response.status);
             }
         } catch (error) {
             console.error('Ошибка при отправке запроса на добавление товара в корзину:', error);
         }
     });
 });
});


document?.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector('.dropdown-mobile-button');
    const dropdownContent = document.querySelector('.dropdown-mobile-content');
    const dropdownItems = document.querySelectorAll('.dropdown-mobile-item');

    dropdownItems.forEach(item => {
        item?.addEventListener('click', function() {
            dropdownButton.textContent = this.textContent; // Меняем текст кнопки на выбранный пункт
            dropdownContent.style.display = 'none'; // Скрываем содержимое выпадающего списка
        });
    });

    dropdownButton?.addEventListener('click', function() {
        // Переключаем отображение содержимого выпадающего списка при клике на кнопку
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Добавляем обработчик клика вне выпадающего списка, чтобы скрыть его
    // document?.addEventListener('click', function(event) {
    //     if (!event.target.closest('.dropdown-mobile-container')) {
    //         dropdownContent.style.display = 'none';
    //     }
    // });
});
document?.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        item?.addEventListener('click', function() {
            dropdownButton.textContent = this.textContent; // Меняем текст кнопки на выбранный пункт
            dropdownContent.style.display = 'none'; // Скрываем содержимое выпадающего списка
        });
    });

    dropdownButton?.addEventListener('click', function() {
        // Переключаем отображение содержимого выпадающего списка при клике на кнопку
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });

    // Добавляем обработчик клика вне выпадающего списка, чтобы скрыть его
    // document?.addEventListener('click', function(event) {
    //     if (!event.target.closest('.dropdown-container')) {
    //         dropdownContent.style.display = 'none';
    //     }
    // });
});
