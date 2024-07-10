// Favor image
toggleFavor = (event, hideParent = false) => {
    event.stopPropagation();
    if (event.target.src.includes("favor.svg")) {
       event.target.src = "/assets/images/heart.svg";
    } else {
        if(hideParent) $(event.target).parents('.hits-card').remove();
        else event.target.src = "/assets/images/favor.svg";
    }

    let token = $('meta[name="csrf-token"]').attr('content');
    const productId = event.target.dataset.id; // Получаем ID товара из data-атрибута
    if (!productId) {
        console.error('ID товара не найден');
        return;
    }
    const url = '/favorites/add'; // Замените на ваш URL для добавления товара в избранное
    try {
        // Отправляем POST-запрос на сервер
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({product_id: productId, _token: token})
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
}

// FAQ
function toogleAnswer(question) {
    let answer = question.nextElementSibling; // Получаем следующий элемент (ответ)
    let arrowIcon = question.querySelector('.arrow-icon'); // Получаем иконку вопроса
    if (answer.style.display === 'none') {
        answer.style.display = 'block'; // Показываем ответ
        arrowIcon.src = './assets/images/arrow-down.svg'; // Меняем иконку на стрелку вниз
    } else {
        answer.style.display = 'none'; // Скрываем ответ
        arrowIcon.src = './assets/images/arrowRight.svg'; // Меняем иконку на стрелку вправо
    }
}

// Orders
function toogleOrders(question) {
    let answer = question.nextElementSibling; // Получаем следующий элемент (ответ)
    let arrowIcon = question.querySelector('.order-arrow'); // Получаем иконку вопроса
    if (!$(answer).is(':visible')) {
        answer.style.display = 'flex'; // Показываем ответ
        arrowIcon.src = 'assets/images/arrow-down.svg'; // Меняем иконку на стрелку вниз
    } else {
        answer.style.display = 'none'; // Скрываем ответ
        arrowIcon.src = 'assets/images/arrowRight.svg'; // Меняем иконку на стрелку вправо
    }
}

// Registration
function redirectToPage(selectElement) {
    let selectedValue = selectElement.value;
    if (selectedValue === '2') {
        window.location.href = '?role_id=2'; // Перенаправление на страницу для физического лица
    } else if (selectedValue === '3') {
        window.location.href = '?role_id=3'; // Перенаправление на страницу для юридического лица
    } else if (selectedValue === '4') {
        window.location.href = '?role_id=4'; // Перенаправление на страницу для оптового пользователя
    }
}

const phoneRegElement = document.getElementById('phoneReg');
;
if (phoneRegElement) {
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    IMask(phoneRegElement, maskOptions);
}
const phoneElement = document.getElementById('phone');
;
if (phoneElement) {
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    IMask(phoneElement, maskOptions);
}
// Popup Basket
document?.addEventListener('DOMContentLoaded', function () {
    const openPopup = document.getElementById('show-popup');
    if (openPopup) {
        const popUp = document.getElementById('basket-popup');
        const basket = document.getElementById('basket-main');
        const footerColor = document.getElementById('footer');

        openPopup?.addEventListener('click', function (e) {
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
document.addEventListener('DOMContentLoaded', function () {
    const mobileCabinet = document.querySelector('.mobile-cabinet');
    const choiceBlocks = document.querySelectorAll('.cabinet-choice-block a');
    const headerProfile = document.querySelector('.header-burger-profile');

    // Показ/скрытие мобильного меню при клике на headerProfile
    headerProfile?.addEventListener('click', function (e) {
        e.preventDefault();
        if (mobileCabinet.style.display === 'none' || mobileCabinet.style.display === '') {
            mobileCabinet.style.display = 'flex';
        } else {
            mobileCabinet.style.display = 'none';
        }
    });

    // Скрытие мобильного меню при клике на любой пункт
    choiceBlocks.forEach(block => {
        block.addEventListener('click', function () {
            mobileCabinet.style.display = 'none';
        });
    });

});

// cardProduct
document?.addEventListener('DOMContentLoaded', function () {
    let descTab = document.getElementById('desc-tab');
    let deliveryTab = document.getElementById('delivery-tab');
    let descContent = document.getElementById('desc-content');
    let deliveryContent = document.getElementById('delivery-content');

    descTab?.addEventListener('click', function () {
        descContent.classList.remove('none');
        deliveryContent.classList.add('none');
        descTab.classList.add('active-card');
        deliveryTab.classList.remove('active-card');
    });

    deliveryTab?.addEventListener('click', function () {
        deliveryContent.classList.remove('none');
        descContent.classList.add('none');
        deliveryTab.classList.add('active-card');
        descTab.classList.remove('active-card');
    });
});

// PampersCategory
document?.addEventListener("DOMContentLoaded", function () {
    if (window.screen.width <= 481) {
        const titleContents = document.querySelectorAll('.pampers-second-title-content');

        titleContents.forEach(titleContent => {
            titleContent?.addEventListener('click', function () {
                const filtersBlock = titleContent.closest('.pampers-filters')?.querySelector('.pampers-filters-block');
                if (filtersBlock)
                    if (filtersBlock.style.display === 'flex') {
                        filtersBlock.style.display = 'none';
                    } else {
                        filtersBlock.style.display = 'flex';
                    }
            });
        });
    }
});

document?.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('category-btn-mob');

    button?.addEventListener('click', function () {
        const closeFilters = document.querySelector('.pampers-second-main')
        if (closeFilters) {
            closeFilters.style.display = 'none';
        }

    });
});

document?.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.filter-btn');

    button?.addEventListener('click', function () {
        const closeFilters = document.querySelector('.pampers-second-main')
        if (closeFilters) {
            closeFilters.style.display = 'flex';
            closeFilters.scrollIntoView({behavior: 'smooth'}); // Прокручиваем элемент в область видимости с плавной анимацией
        }
    });
});
document?.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.filter-btn');

    button?.addEventListener('click', function () {
        const closeFilters = document.querySelector('.pants-second-main')
        if (closeFilters) {
            closeFilters.style.display = 'flex';
            closeFilters.scrollIntoView({behavior: 'smooth'}); // Прокручиваем элемент в область видимости с плавной анимацией
        }
    });
});


// Запросы

// Delete button

// Обработчик для добавления в корзину
const basketButtons = document.querySelectorAll('.add-to-cart');

basketButtons.forEach(button => {
    button?.addEventListener('click', async (event) => {
        event.stopPropagation();

        const productId = button.dataset.id;
        let token = $('meta[name="csrf-token"]').attr('content');

        if(button.textContent === 'Добавлено') {
            window.location.href = "/favorites";
            return;
        } else if (!productId) {
            console.error('ID товара не найден');
            return;
        }

        const url = '/cart/add';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({product_id: productId, _token: token})
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

togglePopular = () => {
    const dropdownContent = document.getElementById('sort-select-items');
    // Для переключения видимости выпадающего списка
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

togglePopularMobile = () => {
    const dropdownContent = document.querySelector('.dropdown-mobile-content');
    // Для переключения видимости выпадающего списка
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

addNewAddress = () => {
    $('#address-container').show();
    $('#add-address-descktop').hide();
}

deleteAddress = (index) => {
    $(`.address-second-data#${index}`).remove();
}

saveAddresses = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const isAdding = $('#address-container').is(":visible");
    // output as an object
    const temp = [];
    const newAddress = {};
    for (var pair of formData.entries()) {
        const keys = pair[0].split('_');
        if(keys[0] === 'address') {
            if(!temp[keys[1]]) temp[keys[1]] = {};
            temp[keys[1]][keys[2]] = pair[1];
        } else if(keys[0] === 'newAddress' || keys[0] === 'newCity') {
            if(isAdding) newAddress[keys[0]] = pair[1];
        }
    }

    const toSend = {addresses: temp};
    if(isAdding) toSend.newAddress = newAddress;

    fetch('editAddresses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toSend)
    })
        .then(response => {
            if (!response.ok) {
                alert('Ошибка сети');
            }
            return response.json();
        })
        .then(data => {
            // Обработка успешного ответа от сервера
            console.log('Ответ от сервера:', data);
            $('#address-container').hide();
            $('#add-address-descktop').show();
            $('#new-address').val('');
            alert('Адреса успешно сохранены!');
        });
}

async function deleteBasket(event) {
    event.stopPropagation(); // Останавливаем всплытие события клика

    const productId = event.target.dataset.id; // Получаем ID товара из data-атрибута
    if (!productId) {
        console.error('ID товара не найден');
        return;
    }

    let token = $('meta[name="csrf-token"]').attr('content');
    const url = '/cart/delete/' + productId;

    try {
        $(`div[data-id=${productId}]`).each((i, obj) => {
            obj.outerHTML = '';
        });
        // Отправляем POST-запрос на сервер
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_token: token})
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
                console.log('Товар успешно удален!');
                let deliverySum = data.data.deliverySum ? data.data.deliverySum + ' ₸' : 'Бесплатно';

                $('.basket-delivery-free').text(deliverySum);
                $('.basket-right-total').text(data.data.total);
                $('#totalQuantity').text(data.data.totalQuantity);
                $('#totalOldSum').text(data.data.totalOldSum);
                $('#totalSum').text(data.data.totalSum);
                $('#totalDiscount').text(data.data.totalDiscount);

                if(data.data.totalQuantity === 0){
                    $('#basket-empty').show();
                    $('#basket-not-empty').hide();
                }
            })
            .catch(error => {
                // Обработка ошибок
                console.error('Ошибка при отправке запроса на удаление товара:', error.message);
            });
    } catch (error) {
        // Обработка ошибки сети или другой ошибки
        console.error('Ошибка при отправке запроса на удаление товара:', error);
    }
}

$('#delivery-type-id').change(function() {
    const selectedValue = $(this).val();

    if(selectedValue === "1"){
        $('.delivery-block').show();
    }else {
        $('.delivery-block').hide();
    }

    if (selectedValue) {
        $.ajax({
            url: '/cart/update-delivery', // Replace with your server endpoint
            type: 'POST',
            data: {
                _token: $('meta[name="csrf-token"]').attr('content'), // Include CSRF token if required
                delivery_type_id: selectedValue
            },
            success: function(response) {
                let deliverySum = response.data.deliverySum ? response.data.deliverySum + ' ₸' : 'Бесплатно';

                $('.basket-delivery-free').text(deliverySum);
                $('.basket-right-total').text(response.data.total);
                $('#totalQuantity').text(response.data.totalQuantity);
                $('#totalOldSum').text(response.data.totalOldSum);
                $('#totalSum').text(response.data.totalSum);
                $('#totalDiscount').text(response.data.totalDiscount);
            },
            error: function(xhr, status, error) {
                alert('Error: ' + error);
            }
        });
    }
});

function changeAmount(e, isAdd, id) {
    e.stopPropagation();
    let card = $(`[data-id="${id}"]`);
    let currentCount = parseInt(card.attr('data-count'));
    if (isAdd || currentCount > 0) {
        const newCount = isAdd ? currentCount + 1 : currentCount - 1;
        card.attr('data-count', newCount);
        card.attr('data-count', newCount);
        card.find('.basket-total-count').html(newCount);

        if (newCount === 0) {
            $(`div[data-id=${id}]`).each((i, obj) => {
                obj.outerHTML = '';
            });
        }

        sendRequestChangeAmount(id, newCount);
    }
}

function sendRequestChangeAmount(id, count) {
    const data = {
        cardId: id,
        count: count
    };
    let token = $('meta[name="csrf-token"]').attr('content');
    let deliveryTypeId = $('#delivery-type-id').val();
    if(deliveryTypeId === "1"){
        $('.delivery-block').show();
    }else {
        $('.delivery-block').hide();
    }

    fetch('cart/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            product_id: id,
            _token: token,
            quantity: count,
            from_cart: 1,
            delivery_type_id: deliveryTypeId
        })
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
            console.log('Данные успешно отправлены на сервер!');
            let deliverySum = data.data.deliverySum ? data.data.deliverySum + ' ₸' : 'Бесплатно';

            $('.basket-delivery-free').text(deliverySum);
            $('.basket-right-total').text(data.data.total);
            $('#totalQuantity').text(data.data.totalQuantity);
            $('#totalOldSum').text(data.data.totalOldSum);
            $('#totalSum').text(data.data.totalSum);
            $('#totalDiscount').text(data.data.totalDiscount);

            if(data.data.totalQuantity === 0){
                $('#basket-empty').show();
                $('#basket-not-empty').hide();
            }
        })
        .catch(error => {
            // Обработка ошибок
            console.error('Ошибка:', error.message);
            alert('Ошибка при отправке данных на сервер!');
        });
}

// Slick
$(function () {
    if ($('.mySlick').length)
        $('.mySlick').slick({
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            vertical: true,
            draggable: false,  // Включаем возможность листания мышью
            verticalSwiping: true,
            swipeToSlide: false,
            prevArrow: '.prev-arrow',
            nextArrow: '.next-arrow'
        });
});

$(function () {
    if ($('.mySlick-mobile').length)
        $('.mySlick-mobile')?.slick({
            infinite: false,
            slidesToShow: 5,
            swipeToSlide: true,
            swipe: true,      // Включаем листание на сенсорных экранах
            touchMove: true,
            arrows: false,
        });
});

$(function () {
    if ($('.mySlickMain').length)
        $('.mySlickMain').slick({
            infinite: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,  // Включаем возможность листания мышью
            prevArrow: '.swiper-button-prev',
            nextArrow: '.swiper-button-next'
        });
});

$(function () {
    if ($('.reviews-content').length)
        $('.reviews-content').slick({
            infinite: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,  // Включаем возможность листания мышью
            prevArrow: '.swiper-button-prev',
            nextArrow: '.swiper-button-next',
            mobileFirst: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 481,
                    settings: {
                        arrows: true,
                    }
                }],
        });
});


//   slickcardProduct Cards
$(function () {
    if ($('.mySlickCards').length)
        $('.mySlickCards').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 5,
            vertical: false,
            draggable: true,  // Включаем возможность листания мышью
            swipeToSlide: true,
            prevArrow: '#prev',
            nextArrow: '#next'

        });
});

//   slickcardProduct Cards
$(function () {
    if ($('.mySlickCardsMain').length)
        $('.mySlickCardsMain').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            draggable: true,  // Включаем возможность листания мышью
            swipeToSlide: true,
            dots: true,
            arrows: false,
        });
});

setSelectedImage = (url) => {
    $('.cardProduct-card-img img').attr('src', url);
}

//Cabinet
let temp = {};
editProfileCancel = () => {
    $('#fullname').val(temp.fullName);
    $('#email').val(temp.email);
    $('#phone').val(temp.phone);
    $('#company-name')?.val(temp.company);

    $('#fullname').attr('disabled', true);
    $('#email').attr('disabled', true);
    $('#phone').attr('disabled', true);
    $('#company-name')?.attr('disabled', true);
    $('.cabinet-buttons').hide();
    $('.edit-profile-btn').show();
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
    $('#company-name').attr('disabled', false);
    $('.edit-profile-btn').hide();
    $('.cabinet-buttons').css('display', 'flex');
    const fullName = $('#fullname').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    const company = $('#company-name')?.val();
    temp = {
        fullName,
        email,
        phone,
    };
    if (company) temp.company = company;
}

editProfileSubmit = async () => {
    const fullName = $('#fullname').val();
    const email = $('#email').val();
    const phone = $('#phone').val();
    const company = $('#company-name')?.val();
    const modal = document.getElementById('success-modal');
    if ((!company || company.length) && fullName?.length && email?.length && phone?.length)
        try {
            // Отправляем POST-запрос на сервер
            const response = await fetch('/editCabinet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: company ? JSON.stringify({fullName, email, phone, company}) : JSON.stringify({
                    fullName,
                    email,
                    phone
                }) // Отправляем ID товара на сервер в формате JSON
            });
            if (response.ok) {
                // Обработка успешного ответа от сервера
                $('#fullname').attr('disabled', true);
                $('#email').attr('disabled', true);
                $('#phone').attr('disabled', true);
                if (company) $('#company-name').attr('disabled', true);
                $('.cabinet-buttons').hide();
                $('.edit-profile-btn').show();
                modal.style.display = 'flex';
            } else {
                // Обработка ошибки от сервера
                console.error('Ошибка при сохранении данных:', response.status);
            }
        } catch (error) {
            // Обработка ошибки сети или другой ошибки
            console.error('Ошибка при сохранении данных:', error);
        }
}

//Cabinet requisites
let tempReq = {};
editRequisitesCancel = () => {
    $('#dataAddressCompany').val(tempReq.dataAddressCompany);
    $('#dataIin').val(tempReq.dataIin);
    $('#dataBank').val(tempReq.dataBank);
    $('#dataKbe').val(tempReq.dataKbe);
    $('#dataBik').val(tempReq.dataBik);
    $('#dataAccountNumber').val(tempReq.dataAccountNumber);

    $('#dataAddressCompany').attr('disabled', true);
    $('#dataIin').attr('disabled', true);
    $('#dataBank').attr('disabled', true);
    $('#dataKbe')?.attr('disabled', true);
    $('#dataBik')?.attr('disabled', true);
    $('#dataAccountNumber')?.attr('disabled', true);
    $('.requsites-buttons').hide();
    $('.requsites-edit-btn').show();
}
editRequisites = () => {
    $('#dataAddressCompany').attr('disabled', false);
    $('#dataIin').attr('disabled', false);
    $('#dataBank').attr('disabled', false);
    $('#dataKbe')?.attr('disabled', false);
    $('#dataBik')?.attr('disabled', false);
    $('#dataAccountNumber')?.attr('disabled', false);
    $('.requsites-edit-btn').hide();
    $('.requsites-buttons').css('display', 'flex');

    const dataAddressCompany = $('#dataAddressCompany').val();
    const dataIin = $('#dataIin').val();
    const dataBank = $('#dataBank').val();
    const dataKbe = $('#dataKbe')?.val();
    const dataBik = $('#dataBik')?.val();
    const dataAccountNumber = $('#dataAccountNumber')?.val();
    tempReq = {
        dataAddressCompany,
        dataIin,
        dataBank,
        dataKbe,
        dataBik,
        dataAccountNumber,
    };
}

editRequisitesSubmit = async () => {
    const dataAddressCompany = $('#dataAddressCompany').val();
    const dataIin = $('#dataIin').val();
    const dataBank = $('#dataBank').val();
    const dataKbe = $('#dataKbe')?.val();
    const dataBik = $('#dataBik')?.val();
    const dataAccountNumber = $('#dataAccountNumber')?.val();

    const modal = document.getElementById('success-modal');
    if (dataAddressCompany?.length && dataIin?.length && dataBank?.length && dataKbe?.length && dataBik?.length && dataAccountNumber?.length)
        try {
            // Отправляем POST-запрос на сервер
            const response = await fetch('/editRequisites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({dataAddressCompany, dataIin, dataBank, dataKbe, dataBik, dataAccountNumber}) // Отправляем ID товара на сервер в формате JSON
            });
            if (response.ok) {
                // Обработка успешного ответа от сервера
                $('#dataAddressCompany').attr('disabled', true);
                $('#dataIin').attr('disabled', true);
                $('#dataBank').attr('disabled', true);
                $('#dataKbe')?.attr('disabled', true);
                $('#dataBik')?.attr('disabled', true);
                $('#dataAccountNumber')?.attr('disabled', true);

                $('.requsites-buttons').hide();
                $('.requsites-edit-btn').show();
                modal.style.display = 'flex';
            } else {
                // Обработка ошибки от сервера
                console.error('Ошибка при сохранении:', response.status);
            }
        } catch (error) {
            // Обработка ошибки сети или другой ошибки
            console.error('Ошибка при сохранении:', error);
        }
}

closeModal = (e) => {
    const modal = document.getElementById('success-modal');
    if (e.target === modal) modal.style.display = 'none';
}

function changePasswordCabinet() {
    const passwordChangeBlock = document.querySelector('.profile-password-change');
    const cabinetPasswordButtons = document.querySelector('.cabinet-password-buttons');
    const changePassword = document.getElementById('change-password-btn')

    passwordChangeBlock.style.display = 'flex';
    cabinetPasswordButtons.style.display = 'flex';
    changePassword.style.display = 'none'
}

editPasswordCancel = () => {
    const passwordChangeBlock = document.querySelector('.profile-password-change');
    const cabinetPasswordButtons = document.querySelector('.cabinet-password-buttons');
    const changePassword = document.getElementById('change-password-btn')

    passwordChangeBlock.style.display = 'none';
    cabinetPasswordButtons.style.display = 'none';
    changePassword.style.display = 'block'

}

editPasswordSubmit = async () => {
    const passwordChangeBlock = document.querySelector('.profile-password-change');
    const cabinetPasswordButtons = document.querySelector('.cabinet-password-buttons');
    const passwordConfirmation = document.querySelector('.password-confirmation')
    const errorPassword = document.querySelector('.error-password')
    const passwordSame = document.querySelector('.password-same')
    const oldPassword = $('#oldPassword').val();
    const newPassword = $('#newPassword').val();
    const repeatPassword = $('#repeatPassword').val();
    const modal = document.getElementById('success-modal');
    if ((oldPassword?.length > 7 && newPassword?.length > 7 && repeatPassword?.length > 7) && newPassword == repeatPassword && oldPassword !== repeatPassword)
        try {
            // Отправляем POST-запрос на сервер
            const response = await fetch('/changePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({oldPassword, newPassword, repeatPassword}) // Отправляем ID товара на сервер в формате JSON
            });
            if (response.ok) {
                // Обработка успешного ответа от сервера
                console.log('Товар успешно добавлен в избранное');
                passwordChangeBlock.style.display = 'none';
                cabinetPasswordButtons.style.display = 'none';
                modal.style.display = 'flex';
            } else {
                // Обработка ошибки от сервера
                console.error('Ошибка при добавлении товара в избранное:', response.status);
            }
        } catch (error) {
            // Обработка ошибки сети или другой ошибки
            console.error('Ошибка при отправке запроса на добавление товара в избранное:', error);
        }
    else if (oldPassword?.length < 8 || newPassword?.length < 8 || repeatPassword?.length < 8) {
        errorPassword.style.display = 'block'
        passwordConfirmation.style.display = 'none'
        passwordSame.style.display = 'none'
    } else if (newPassword !== repeatPassword) {
        passwordConfirmation.style.display = 'block'
        errorPassword.style.display = 'none'
        passwordSame.style.display = 'none'

    } else if (oldPassword == repeatPassword) {
        passwordSame.style.display = 'block'
        errorPassword.style.display = 'none'
        passwordConfirmation.style.display = 'none'
    } else
        console.log("oshibka")
}

$(document).ready(function() {
    $('#orderForm').on('submit', function(event) {
        event.preventDefault();
        $('.error-message').html('')

        const deliveryTypeId = $('#delivery-type-id').val();
        const address = $('#address').val();
        $.ajax({
            url: '/order/create',
            type: 'POST',
            data: {
                _token: $('meta[name="csrf-token"]').attr('content'),
                delivery_type_id: deliveryTypeId,
                address: address,
            },
            success: function(response) {
                console.log(response);
                let data = response.data;
                if(data.is_pay){
                    pay(data.order_id, data.amount, data.email, data.phone);
                }else{
                    alert('Ваш заказ оформлен, в ближайшее время мы с вами свяжемся!');
                }
                $('#basket-empty').show();
                $('#basket-not-empty').hide();
            },
            error: function(xhr, status, error) {
                let response = xhr.responseJSON;
                $('.error-message').html(response.message);
            }
        });
    });
});
function pay(order_id, amount, email, phone) {
    var data = {
        token: "token",
        payment: {
            order: order_id,
            amount: amount,
            currency: "KZT",
            description: order_id,
            expires_at: "",
            param1: "string",
            param2: "string",
            param3: "string",
            test: 1,  // testing mode
            options: {
                callbacks: {
                    result_url: "https://sabiko.kz/payment/result",
                    check_url: "https://sabiko.kz/payment/check"
                },
                custom_params: {},
                user: {
                    email: email,
                    phone: phone,
                },
                receipt_positions: []
            }
        },
        successCallback: function (payment) {
            console.log(payment)
        },
        errorCallback: function (payment) {
            console.log(payment)
        }
    }

    var widget = new PayBox(data);
    widget.create();
}
