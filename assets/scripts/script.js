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
document.addEventListener('DOMContentLoaded', () => {
    const favorIcons = document.querySelectorAll('.icon-favor');

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
    })
})

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
const phoneRegElement = document.getElementById('phoneReg');;
if(phoneRegElement) {
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    IMask(phoneRegElement, maskOptions);
}
const phoneElement = document.getElementById('phone');;
if(phoneElement) {
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    IMask(phoneElement, maskOptions);
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
document.addEventListener('DOMContentLoaded', function() {
        const mobileCabinet = document.querySelector('.mobile-cabinet');
        const choiceBlocks = document.querySelectorAll('.cabinet-choice-block a');
        const headerProfile = document.querySelector('.header-burger-profile');

        // Показ/скрытие мобильного меню при клике на headerProfile
        headerProfile?.addEventListener('click', function(e) {
            e.preventDefault();
            if (mobileCabinet.style.display === 'none' || mobileCabinet.style.display === '') {
                mobileCabinet.style.display = 'flex';
            } else {
                mobileCabinet.style.display = 'none';
            }
        });

        // Скрытие мобильного меню при клике на любой пункт
        choiceBlocks.forEach(block => {
            block.addEventListener('click', function() {
                mobileCabinet.style.display = 'none';
            });
        });
    
})


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
    })
})

    // Delete button
    document.addEventListener('DOMContentLoaded', () => {
        const favorIcons = document.querySelectorAll('.hits-card-delete');

        favorIcons.forEach(favorIcon => {
            favorIcon?.addEventListener('click', async (event) => {
                event.stopPropagation(); // Останавливаем всплытие события клика

                const productId = favorIcon.dataset.id; // Получаем ID товара из data-атрибута
                if (!productId) {
                    console.error('ID товара не найден');
                    return;
                }

                const url = '/deleteCard'; // Замените на ваш URL для добавления товара в избранное

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
        })
    })

    document.addEventListener('DOMContentLoaded', () => {
        const favorIcons = document.querySelectorAll('.hits-card-delete');

        favorIcons.forEach(favorIcon => {
            favorIcon?.addEventListener('click', async (event) => {
                event.stopPropagation(); // Останавливаем всплытие события клика

                const productId = favorIcon.dataset.id; // Получаем ID товара из data-атрибута
                if (!productId) {
                    console.error('ID товара не найден');
                    return;
                }

                const url = '/deleteCard'; // Замените на ваш URL для добавления товара в избранное

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
        })
    })

















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
});
// document.addEventListener('DOMContentLoaded', function() {
//     // Находим элемент по ID
//     const element = document.getElementById('phoneReg');
//     // Опции маски
//     const maskOptions = {
//       mask: '+{7}(000)000-00-00'
//     };
//     // Применяем маску к элементу
//     const mask = IMask(element, maskOptions);
//   });


// Add Adress
document?.addEventListener('DOMContentLoaded', function() {
    const addressInput = document.getElementById('input-address');
    const saveButtonContainer = document.getElementById('save-button-container');
    const saveButton = document.getElementById('save-button');

    function showAddressInput() {
        // Показываем поле ввода адреса
        // addressInput.classList.remove('displayNone');
        // addressInput.classList.add('displayBlock');
        if(addressInput.style.display='none')

            addressInput.style.display='block'
        // Делаем кнопку "Сохранить" видимой
        if(saveButtonContainer.style.display='none')

            saveButtonContainer.style.display='flex'
            saveButtonContainer.style.justifyContent='center'

    }

    // Добавляем обработчики событий для обеих кнопок
    document.getElementById('add-address-descktop')?.addEventListener('click', showAddressInput);
    document.getElementById('add-address')?.addEventListener('click', showAddressInput);

    // Пример обработчика события для кнопки "Сохранить"
    saveButton?.addEventListener('click', function() {
        // Получаем значение из поля ввода
        const address = addressInput.value;

        // Если адрес не пустой
        if (address.trim() !== '') {
            // Формируем объект с данными для отправки на сервер
            const data = {
                address: address
            };

            fetch('addAddress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    addressInput.style.display='none'
                    saveButtonContainer.style.display='none'
                    throw new Error('Ошибка сети');

                }
                return response.json();
            })
            .then(data => {
                // Обработка успешного ответа от сервера
                console.log('Ответ от сервера:', data);
                alert('Адрес успешно сохранён!');
            })
        } else {
            alert('Пожалуйста, введите адрес.');
        }
    });
});

// Change Profile
document?.addEventListener('DOMContentLoaded', function() {
    const dataInput = document.getElementById('data-input');
    const numberInput = document.getElementById('number-input');
    const emailInput = document.getElementById('email-input');
    const roleInput = document.getElementById('role-input');
    const nameCompanyInput = document.getElementById('nameCompany-input');


    const saveButtonContainer = document.getElementById('save-profile-containter');
    const saveButton = document.getElementById('save-button-profile');

    function showProfileInput() {

        if(saveButtonContainer.style.display='none')

            saveButtonContainer.style.display='flex'
            saveButtonContainer.style.justifyContent='center'
            dataInput.disabled = false;
            numberInput.disabled = true;
            emailInput.disabled = false;
            roleInput.disabled = false;
            nameCompanyInput.disabled = false;

    }

    document.getElementById('change-data-profile')?.addEventListener('click', showProfileInput);
    // Пример обработчика события для кнопки "Сохранить"
    saveButton?.addEventListener('click', function() {
        // Получаем значение из поля ввода
        const name = dataInput.value;
        const number = numberInput.value;
        const email = emailInput.value;
        const role = roleInput.value;
        const nameCompany = nameCompanyInput.value;
        const modal = document.getElementById('success-modal');

        // Если все поля не пустые
        if (name.trim() !== '' && number.trim() !== '' && email.trim() !== '' && role.trim() !== '' && nameCompany.trim() !== '') {
            // Формируем объект с данными для отправки на сервер
            const data = {
                name: name,
                number: number,
                email: email,
                role: role,
                nameCompany:nameCompany,
            };
            fetch('addAddress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    saveButtonContainer.style.display='none'
                    throw new Error('Ошибка сети');

                }
                return response.json();
            })
            .then(data => {
                // Обработка успешного ответа от сервера
                console.log('Ответ от сервера:', data);
                modal.style.display = 'flex';
            })
        } else {
            alert('Пожалуйста, введите адрес.');
        }
    });
});


function changeAmount(e, isAdd, id, count) {
    e.stopPropagation();
    card = $(`[data-id="${id}"]`);
    const newCount = isAdd ? count + 1 : count - 1;
    card.attr('data-count', newCount);
    console.log(newCount);
    card.find('.basket-total-count').attr('asd', count);
    card.find('.basket-total-count').html(newCount);

    sendRequestChangeAmount(id, newCount);
}

function sendRequestChangeAmount(id, count) {
    const data = {
        cardId: id,
        count: count
    };

    fetch('count', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сети');
        }
        return response.json();
    })
    .then(data => {
        // Обработка успешного ответа от сервера
        console.log('Ответ от сервера:', data);
        alert('Данные успешно отправлены на сервер!');
    })
    .catch(error => {
        // Обработка ошибок
        console.error('Ошибка:', error.message);
        alert('Ошибка при отправке данных на сервер!');
    });
}


// Change profile Diller
document?.addEventListener('DOMContentLoaded', function() {
    const addressCompany = document.getElementById('dataAddressCompany');
    const bankName = document.getElementById('dataBank');
    const IiName = document.getElementById('dataIin');
    const bankInput = document.getElementById('dataKbe');
    const bikName = document.getElementById('dataBik');
    const accountNumber = document.getElementById('dataAccountNumber');

    const saveButtonContainer = document.getElementById('save-company-containter');
    const saveButton = document.getElementById('save-button-company');

    function showCompanyInput() {

        if(saveButtonContainer.style.display='none')

            saveButtonContainer.style.display='flex'
            saveButtonContainer.style.justifyContent='center'
            addressCompany.disabled = false;
            bankName.disabled = false;
            IiName.disabled = false;
            bankInput.disabled = false;
            bikName.disabled = false;
            accountNumber.disabled = false;
    }

    document.getElementById('change-data-company')?.addEventListener('click', showCompanyInput);
    // Пример обработчика события для кнопки "Сохранить"
    saveButton?.addEventListener('click', function() {
        // Получаем значение из поля ввода
        const addressComp = addressCompany.value;
        const nameBank = bankName.value;
        const iin = IiName.value;
        const dataBank = bankInput.value;
        const bik = bikName.value;
        const numberAcc = accountNumber.value;
        const modal = document.getElementById('success-modal');

        // Если все поля не пустые
        if (addressComp.trim() !== '' && nameBank.trim() !== '' && iin.trim() !== '' && dataBank.trim() !== '' && numberAcc.trim() !== '' && bik.trim() !== '') {
            // Формируем объект с данными для отправки на сервер
            const data = {
                name: addressComp,
                number: nameBank,
                email: iin,
                role: dataBank,
                accountNumber:numberAcc,
                bikName:bik,
            };
            fetch('addAddress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    saveButtonContainer.style.display='none'
                    addressCompany.disabled = true;
                    bankName.disabled = true;
                    IiName.disabled = true;
                    bankInput.disabled = true;
                    bikName.disabled = true;
                    accountNumber.disabled = true;
                    throw new Error('Ошибка сети');

                }
                return response.json();
            })
            .then(data => {
                modal.style.display = 'flex';
                // Обработка успешного ответа от сервера
                console.log('Ответ от сервера:', data);
                alert('Адрес успешно сохранён!');
            })
        } else {
            alert('Пожалуйста, введите адрес.');
        }
    });
});




// Slick
  $(function(){
      if($('.mySlick').length)
    $('.mySlick').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        vertical: true,
        draggable: true,  // Включаем возможность листания мышью
        verticalSwiping: true,
        swipeToSlide: true,
        prevArrow: '#prevCardDesk',
        nextArrow: '#nextCardDesk'

    });
  });
  $(function(){
      if($('.mySlick-mobile').length)
    $('.mySlick-mobile')?.slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        swipe: true,      // Включаем листание на сенсорных экранах
        touchMove: true,
        prevArrow: '#prevCardDesk',
        nextArrow: '#nextCardDesk'

    });
  });
  $(function(){
      if($('.mySlick-main').length)
    $('.mySlick-main')?.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        vertical:false,
        prevArrow: '#left-slick',
        nextArrow: '#right-slick'

    });
  });

//Cabinet
let temp = {};
editProfileCancel = () => {
    $('#fullname').val(temp.fullName);
    $('#email').val(temp.email);
    $('#phone').val(temp.phone);

    $('#fullname').attr('disabled', true);
    $('#email').attr('disabled', true);
    $('#phone').attr('disabled', true);
    $('.cabinet-buttons').hide();
    $('.cabinet-profile-fourth').show();
}
editProfile = () => {
    const phoneElement = document.getElementById('phone');
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    IMask(phoneElement, maskOptions);

    $('#fullname').attr('disabled', false);
    $('#email').attr('disabled', false);
    $('#phone').attr('disabled', false);
    $('.cabinet-profile-fourth').hide();
    $('.cabinet-buttons').css('display', 'flex');
    const fullName = $('#fullname').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    temp = {
        fullName,
        email,
        phone,
    };
}

editProfileSubmit = async () => {
    const fullName = $('#fullname').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    const modal = document.getElementById('success-modal');
    if(fullName?.length && email?.length && phone?.length)
    try {
        // Отправляем POST-запрос на сервер
        const response = await fetch('/editCabinet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fullName, email, phone}) // Отправляем ID товара на сервер в формате JSON
        });
        if (response.ok) {
            // Обработка успешного ответа от сервера
            console.log('Товар успешно добавлен в избранное');
            $('#fullname').attr('disabled', true);
            $('#email').attr('disabled', true);
            $('#phone').attr('disabled', true);
            $('.cabinet-buttons').hide();
            $('.cabinet-profile-fourth').show();
            modal.style.display = 'flex';
        } else {
            // Обработка ошибки от сервера
            console.error('Ошибка при добавлении товара в избранное:', response.status);
        }
    } catch (error) {
        // Обработка ошибки сети или другой ошибки
        console.error('Ошибка при отправке запроса на добавление товара в избранное:', error);
    }
}
function closeModal(event) {
    const modal = document.getElementById('success-modal');
    // Закрываем модальное окно при клике вне его
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

