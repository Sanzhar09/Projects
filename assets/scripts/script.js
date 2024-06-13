// Favor image
document?.addEventListener("DOMContentLoaded", function () {
    const favorIcons = document.querySelectorAll(".hits-card-favor");

    favorIcons.forEach(icon => {
        icon?.addEventListener("click", function (event) {
            event.stopPropagation();
            if (this.src.includes("favor.svg")) {
                this.src = "./assets/images/heart.svg";
            } else {
                this.src = "./assets/images/favor.svg";
            }
        });
    });
});
document?.addEventListener("DOMContentLoaded", function () {
    const favorIcons = document.querySelectorAll('.icon-favor');
    const cardProductFavor = document.querySelector('.cardProduct-favor')

    cardProductFavor?.addEventListener('click', function (event) {
        event.stopPropagation();  // РћСЃС‚Р°РЅРѕРІРєР° РІСЃРїР»С‹С‚РёСЏ СЃРѕР±С‹С‚РёСЏ, РµСЃР»Рё СЌС‚Рѕ РЅРµРѕР±С…РѕРґРёРјРѕ
        if (cardProductFavor.src.includes('favor.svg')) {
            cardProductFavor.src = './assets/images/heart.svg';
        } else {
            cardProductFavor.src = './assets/images/favor.svg';
        }
    });
    favorIcons.forEach(icon => {
        icon?.addEventListener('click', function (event) {
            event.stopPropagation();  // РћСЃС‚Р°РЅРѕРІРєР° РІСЃРїР»С‹С‚РёСЏ СЃРѕР±С‹С‚РёСЏ, РµСЃР»Рё СЌС‚Рѕ РЅРµРѕР±С…РѕРґРёРјРѕ
            if (icon.src.includes('favor.svg')) {
                icon.src = './assets/images/heart.svg';
            } else {
                icon.src = './assets/images/favor.svg';
            }
        });
    });
});
// Favor button
// РќР°С…РѕРґРёРј РёРєРѕРЅРєСѓ "РёР·Р±СЂР°РЅРЅРѕРµ"
document.addEventListener('DOMContentLoaded', () => {
    const favorIcons = document.querySelectorAll('.hits-card-favor');
    favorIcons.forEach(favorIcon => {
        favorIcon?.addEventListener('click', async (event) => {
            event.stopPropagation(); // РћСЃС‚Р°РЅР°РІР»РёРІР°РµРј РІСЃРїР»С‹С‚РёРµ СЃРѕР±С‹С‚РёСЏ РєР»РёРєР°
            let token = $('meta[name="csrf-token"]').attr('content');
            const productId = favorIcon.dataset.id; // РџРѕР»СѓС‡Р°РµРј ID С‚РѕРІР°СЂР° РёР· data-Р°С‚СЂРёР±СѓС‚Р°
            if (!productId) {
                console.error('ID С‚РѕРІР°СЂР° РЅРµ РЅР°Р№РґРµРЅ');
                return;
            }
            const url = '/favorites/add'; // Р—Р°РјРµРЅРёС‚Рµ РЅР° РІР°С€ URL РґР»СЏ РґРѕР±Р°РІР»РµРЅРёСЏ С‚РѕРІР°СЂР° РІ РёР·Р±СЂР°РЅРЅРѕРµ
            try {
                // РћС‚РїСЂР°РІР»СЏРµРј POST-Р·Р°РїСЂРѕСЃ РЅР° СЃРµСЂРІРµСЂ
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({product_id: productId, _token: token}) // РћС‚РїСЂР°РІР»СЏРµРј ID С‚РѕРІР°СЂР° РЅР° СЃРµСЂРІРµСЂ РІ С„РѕСЂРјР°С‚Рµ JSON
                });

                if (response.ok) {
                    // РћР±СЂР°Р±РѕС‚РєР° СѓСЃРїРµС€РЅРѕРіРѕ РѕС‚РІРµС‚Р° РѕС‚ СЃРµСЂРІРµСЂР°
                    console.log('РўРѕРІР°СЂ СѓСЃРїРµС€РЅРѕ РґРѕР±Р°РІР»РµРЅ РІ РёР·Р±СЂР°РЅРЅРѕРµ');
                } else {
                    // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё РѕС‚ СЃРµСЂРІРµСЂР°
                    console.error('РћС€РёР±РєР° РїСЂРё РґРѕР±Р°РІР»РµРЅРёРё С‚РѕРІР°СЂР° РІ РёР·Р±СЂР°РЅРЅРѕРµ:', response.status);
                }
            } catch (error) {
                // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё СЃРµС‚Рё РёР»Рё РґСЂСѓРіРѕР№ РѕС€РёР±РєРё
                console.error('РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ Р·Р°РїСЂРѕСЃР° РЅР° РґРѕР±Р°РІР»РµРЅРёРµ С‚РѕРІР°СЂР° РІ РёР·Р±СЂР°РЅРЅРѕРµ:', error);
            }
        });
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const favorIcons = document.querySelectorAll('.icon-favor');

    favorIcons.forEach(favorIcon => {
        favorIcon?.addEventListener('click', async (event) => {
            event.stopPropagation(); // РћСЃС‚Р°РЅР°РІР»РёРІР°РµРј РІСЃРїР»С‹С‚РёРµ СЃРѕР±С‹С‚РёСЏ РєР»РёРєР°
            let token = $('meta[name="csrf-token"]').attr('content');
            const productId = favorIcon.dataset.id; // РџРѕР»СѓС‡Р°РµРј ID С‚РѕРІР°СЂР° РёР· data-Р°С‚СЂРёР±СѓС‚Р°
            if (!productId) {
                console.error('ID С‚РѕРІР°СЂР° РЅРµ РЅР°Р№РґРµРЅ');
                return;
            }
            const url = '/favorites/add'; // Р—Р°РјРµРЅРёС‚Рµ РЅР° РІР°С€ URL РґР»СЏ РґРѕР±Р°РІР»РµРЅРёСЏ С‚РѕРІР°СЂР° РІ РёР·Р±СЂР°РЅРЅРѕРµ
            try {
                // РћС‚РїСЂР°РІР»СЏРµРј POST-Р·Р°РїСЂРѕСЃ РЅР° СЃРµСЂРІРµСЂ
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({product_id: productId, _token: token})
                });
                if (response.ok) {
                    // РћР±СЂР°Р±РѕС‚РєР° СѓСЃРїРµС€РЅРѕРіРѕ РѕС‚РІРµС‚Р° РѕС‚ СЃРµСЂРІРµСЂР°
                    console.log('РўРѕРІР°СЂ СѓСЃРїРµС€РЅРѕ РґРѕР±Р°РІР»РµРЅ РІ РёР·Р±СЂР°РЅРЅРѕРµ');
                } else {
                    // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё РѕС‚ СЃРµСЂРІРµСЂР°
                    console.error('РћС€РёР±РєР° РїСЂРё РґРѕР±Р°РІР»РµРЅРёРё С‚РѕРІР°СЂР° РІ РёР·Р±СЂР°РЅРЅРѕРµ:', response.status);
                }
            } catch (error) {
                // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё СЃРµС‚Рё РёР»Рё РґСЂСѓРіРѕР№ РѕС€РёР±РєРё
                console.error('РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ Р·Р°РїСЂРѕСЃР° РЅР° РґРѕР±Р°РІР»РµРЅРёРµ С‚РѕРІР°СЂР° РІ РёР·Р±СЂР°РЅРЅРѕРµ:', error);
            }
        });
    })
})

document?.addEventListener("DOMContentLoaded", function () {
    // Р”РѕР±Р°РІР»СЏРµРј РѕР±СЂР°Р±РѕС‚С‡РёРє СЃРѕР±С‹С‚РёСЏ РґР»СЏ РєР°СЂС‚РѕС‡РµРє
    const basketCards = document.querySelectorAll('.add-to-cart');
    basketCards.forEach(card => {
        card?.addEventListener('click', function (e) {
            e.stopPropagation();
        });

    })
})

// FAQ
function toogleAnswer(question) {
    let answer = question.nextElementSibling; // РџРѕР»СѓС‡Р°РµРј СЃР»РµРґСѓСЋС‰РёР№ СЌР»РµРјРµРЅС‚ (РѕС‚РІРµС‚)
    let arrowIcon = question.querySelector('.arrow-icon'); // РџРѕР»СѓС‡Р°РµРј РёРєРѕРЅРєСѓ РІРѕРїСЂРѕСЃР°
    if (answer.style.display === 'none') {
        answer.style.display = 'block'; // РџРѕРєР°Р·С‹РІР°РµРј РѕС‚РІРµС‚
        arrowIcon.src = './assets/images/arrow-down.svg'; // РњРµРЅСЏРµРј РёРєРѕРЅРєСѓ РЅР° СЃС‚СЂРµР»РєСѓ РІРЅРёР·
    } else {
        answer.style.display = 'none'; // РЎРєСЂС‹РІР°РµРј РѕС‚РІРµС‚
        arrowIcon.src = './assets/images/arrowRight.svg'; // РњРµРЅСЏРµРј РёРєРѕРЅРєСѓ РЅР° СЃС‚СЂРµР»РєСѓ РІРїСЂР°РІРѕ
    }
}

// Orders
function toogleOrders(question) {
    let answer = question.nextElementSibling; // РџРѕР»СѓС‡Р°РµРј СЃР»РµРґСѓСЋС‰РёР№ СЌР»РµРјРµРЅС‚ (РѕС‚РІРµС‚)
    let arrowIcon = question.querySelector('.order-arrow'); // РџРѕР»СѓС‡Р°РµРј РёРєРѕРЅРєСѓ РІРѕРїСЂРѕСЃР°
    if (answer.style.display === 'none') {
        answer.style.display = 'flex'; // РџРѕРєР°Р·С‹РІР°РµРј РѕС‚РІРµС‚
        arrowIcon.src = '/images/arrow-down.svg'; // РњРµРЅСЏРµРј РёРєРѕРЅРєСѓ РЅР° СЃС‚СЂРµР»РєСѓ РІРЅРёР·
    } else {
        answer.style.display = 'none'; // РЎРєСЂС‹РІР°РµРј РѕС‚РІРµС‚
        arrowIcon.src = '/images/arrowRight.svg'; // РњРµРЅСЏРµРј РёРєРѕРЅРєСѓ РЅР° СЃС‚СЂРµР»РєСѓ РІРїСЂР°РІРѕ
    }
}

// Registration
function redirectToPage(selectElement) {
    let selectedValue = selectElement.value;
    if (selectedValue === '2') {
        window.location.href = '?role_id=2'; // РџРµСЂРµРЅР°РїСЂР°РІР»РµРЅРёРµ РЅР° СЃС‚СЂР°РЅРёС†Сѓ РґР»СЏ С„РёР·РёС‡РµСЃРєРѕРіРѕ Р»РёС†Р°
    } else if (selectedValue === '3') {
        window.location.href = '?role_id=3'; // РџРµСЂРµРЅР°РїСЂР°РІР»РµРЅРёРµ РЅР° СЃС‚СЂР°РЅРёС†Сѓ РґР»СЏ СЋСЂРёРґРёС‡РµСЃРєРѕРіРѕ Р»РёС†Р°
    } else if (selectedValue === '4') {
        window.location.href = '?role_id=4'; // РџРµСЂРµРЅР°РїСЂР°РІР»РµРЅРёРµ РЅР° СЃС‚СЂР°РЅРёС†Сѓ РґР»СЏ РѕРїС‚РѕРІРѕРіРѕ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
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

    // РџРѕРєР°Р·/СЃРєСЂС‹С‚РёРµ РјРѕР±РёР»СЊРЅРѕРіРѕ РјРµРЅСЋ РїСЂРё РєР»РёРєРµ РЅР° headerProfile
    headerProfile?.addEventListener('click', function (e) {
        e.preventDefault();
        if (mobileCabinet.style.display === 'none' || mobileCabinet.style.display === '') {
            mobileCabinet.style.display = 'flex';
        } else {
            mobileCabinet.style.display = 'none';
        }
    });

    // РЎРєСЂС‹С‚РёРµ РјРѕР±РёР»СЊРЅРѕРіРѕ РјРµРЅСЋ РїСЂРё РєР»РёРєРµ РЅР° Р»СЋР±РѕР№ РїСѓРЅРєС‚
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
            closeFilters.scrollIntoView({behavior: 'smooth'}); // РџСЂРѕРєСЂСѓС‡РёРІР°РµРј СЌР»РµРјРµРЅС‚ РІ РѕР±Р»Р°СЃС‚СЊ РІРёРґРёРјРѕСЃС‚Рё СЃ РїР»Р°РІРЅРѕР№ Р°РЅРёРјР°С†РёРµР№
        }
    });
});
document?.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.filter-btn');

    button?.addEventListener('click', function () {
        const closeFilters = document.querySelector('.pants-second-main')
        if (closeFilters) {
            closeFilters.style.display = 'flex';
            closeFilters.scrollIntoView({behavior: 'smooth'}); // РџСЂРѕРєСЂСѓС‡РёРІР°РµРј СЌР»РµРјРµРЅС‚ РІ РѕР±Р»Р°СЃС‚СЊ РІРёРґРёРјРѕСЃС‚Рё СЃ РїР»Р°РІРЅРѕР№ Р°РЅРёРјР°С†РёРµР№
        }
    });
});


// Р—Р°РїСЂРѕСЃС‹

// Delete button

// РћР±СЂР°Р±РѕС‚С‡РёРє РґР»СЏ РґРѕР±Р°РІР»РµРЅРёСЏ РІ РєРѕСЂР·РёРЅСѓ
const basketButtons = document.querySelectorAll('.add-to-cart');

basketButtons.forEach(button => {
    button?.addEventListener('click', async (event) => {
        event.stopPropagation();

        const productId = button.dataset.id;
        let token = $('meta[name="csrf-token"]').attr('content');

        if (!productId) {
            console.error('ID С‚РѕРІР°СЂР° РЅРµ РЅР°Р№РґРµРЅ');
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
                console.log('РўРѕРІР°СЂ СѓСЃРїРµС€РЅРѕ РґРѕР±Р°РІР»РµРЅ РІ РєРѕСЂР·РёРЅСѓ');
                button.textContent = 'Р”РѕР±Р°РІР»РµРЅРѕ';
            } else {
                console.error('РћС€РёР±РєР° РїСЂРё РґРѕР±Р°РІР»РµРЅРёРё С‚РѕРІР°СЂР° РІ РєРѕСЂР·РёРЅСѓ:', response.status);
            }
        } catch (error) {
            console.error('РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ Р·Р°РїСЂРѕСЃР° РЅР° РґРѕР±Р°РІР»РµРЅРёРµ С‚РѕРІР°СЂР° РІ РєРѕСЂР·РёРЅСѓ:', error);
        }
    });
});

togglePopular = () => {
    const dropdownContent = document.getElementById('sort-select-items');
    // Р”Р»СЏ РїРµСЂРµРєР»СЋС‡РµРЅРёСЏ РІРёРґРёРјРѕСЃС‚Рё РІС‹РїР°РґР°СЋС‰РµРіРѕ СЃРїРёСЃРєР°
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

togglePopularMobile = () => {
    const dropdownContent = document.querySelector('.dropdown-mobile-content');
    // Р”Р»СЏ РїРµСЂРµРєР»СЋС‡РµРЅРёСЏ РІРёРґРёРјРѕСЃС‚Рё РІС‹РїР°РґР°СЋС‰РµРіРѕ СЃРїРёСЃРєР°
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

// Add Adress
document?.addEventListener('DOMContentLoaded', function () {
    const addressInput = document.getElementById('input-address');
    const saveButtonContainer = document.getElementById('save-button-container');
    const saveButton = document.getElementById('save-button');

    function showAddressInput() {
        // РџРѕРєР°Р·С‹РІР°РµРј РїРѕР»Рµ РІРІРѕРґР° Р°РґСЂРµСЃР°
        // addressInput.classList.remove('displayNone');
        // addressInput.classList.add('displayBlock');
        if (addressInput.style.display = 'none')

            addressInput.style.display = 'block'
        // Р”РµР»Р°РµРј РєРЅРѕРїРєСѓ "РЎРѕС…СЂР°РЅРёС‚СЊ" РІРёРґРёРјРѕР№
        if (saveButtonContainer.style.display = 'none')

            saveButtonContainer.style.display = 'flex'
        saveButtonContainer.style.justifyContent = 'center'

    }

    // Р”РѕР±Р°РІР»СЏРµРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё СЃРѕР±С‹С‚РёР№ РґР»СЏ РѕР±РµРёС… РєРЅРѕРїРѕРє
    document.getElementById('add-address-descktop')?.addEventListener('click', showAddressInput);
    document.getElementById('add-address')?.addEventListener('click', showAddressInput);

    // РџСЂРёРјРµСЂ РѕР±СЂР°Р±РѕС‚С‡РёРєР° СЃРѕР±С‹С‚РёСЏ РґР»СЏ РєРЅРѕРїРєРё "РЎРѕС…СЂР°РЅРёС‚СЊ"
    saveButton?.addEventListener('click', function () {
        // РџРѕР»СѓС‡Р°РµРј Р·РЅР°С‡РµРЅРёРµ РёР· РїРѕР»СЏ РІРІРѕРґР°
        const address = addressInput.value;

        // Р•СЃР»Рё Р°РґСЂРµСЃ РЅРµ РїСѓСЃС‚РѕР№
        if (address.trim() !== '') {
            // Р¤РѕСЂРјРёСЂСѓРµРј РѕР±СЉРµРєС‚ СЃ РґР°РЅРЅС‹РјРё РґР»СЏ РѕС‚РїСЂР°РІРєРё РЅР° СЃРµСЂРІРµСЂ
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
                        addressInput.style.display = 'none'
                        saveButtonContainer.style.display = 'none'
                        throw new Error('РћС€РёР±РєР° СЃРµС‚Рё');

                    }
                    return response.json();
                })
                .then(data => {
                    // РћР±СЂР°Р±РѕС‚РєР° СѓСЃРїРµС€РЅРѕРіРѕ РѕС‚РІРµС‚Р° РѕС‚ СЃРµСЂРІРµСЂР°
                    console.log('РћС‚РІРµС‚ РѕС‚ СЃРµСЂРІРµСЂР°:', data);
                    alert('РђРґСЂРµСЃ СѓСЃРїРµС€РЅРѕ СЃРѕС…СЂР°РЅС‘РЅ!');
                })
        } else {
            alert('РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІРІРµРґРёС‚Рµ Р°РґСЂРµСЃ.');
        }
    });
});

async function deleteBasket(event) {
    event.stopPropagation(); // РћСЃС‚Р°РЅР°РІР»РёРІР°РµРј РІСЃРїР»С‹С‚РёРµ СЃРѕР±С‹С‚РёСЏ РєР»РёРєР°

    const productId = event.target.dataset.id; // РџРѕР»СѓС‡Р°РµРј ID С‚РѕРІР°СЂР° РёР· data-Р°С‚СЂРёР±СѓС‚Р°
    if (!productId) {
        console.error('ID С‚РѕРІР°СЂР° РЅРµ РЅР°Р№РґРµРЅ');
        return;
    }

    let token = $('meta[name="csrf-token"]').attr('content');
    const url = '/cart/delete/' + productId;

    try {
        $(`div[data-id=${productId}]`).each((i, obj) => {
            obj.outerHTML = '';
        });
        // РћС‚РїСЂР°РІР»СЏРµРј POST-Р·Р°РїСЂРѕСЃ РЅР° СЃРµСЂРІРµСЂ
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_token: token})
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('РћС€РёР±РєР° СЃРµС‚Рё');
                }
                return response.json();
            })
            .then(data => {
                // РћР±СЂР°Р±РѕС‚РєР° СѓСЃРїРµС€РЅРѕРіРѕ РѕС‚РІРµС‚Р° РѕС‚ СЃРµСЂРІРµСЂР°
                console.log('РћС‚РІРµС‚ РѕС‚ СЃРµСЂРІРµСЂР°:', data);
                console.log('РўРѕРІР°СЂ СѓСЃРїРµС€РЅРѕ СѓРґР°Р»РµРЅ!');
                let deliverySum = data.data.deliverySum ? data.data.deliverySum + ' в‚ё' : 'Р‘РµСЃРїР»Р°С‚РЅРѕ';

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
                // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє
                console.error('РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ Р·Р°РїСЂРѕСЃР° РЅР° СѓРґР°Р»РµРЅРёРµ С‚РѕРІР°СЂР°:', error.message);
            });
    } catch (error) {
        // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё СЃРµС‚Рё РёР»Рё РґСЂСѓРіРѕР№ РѕС€РёР±РєРё
        console.error('РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ Р·Р°РїСЂРѕСЃР° РЅР° СѓРґР°Р»РµРЅРёРµ С‚РѕРІР°СЂР°:', error);
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
                let deliverySum = response.data.deliverySum ? response.data.deliverySum + ' в‚ё' : 'Р‘РµСЃРїР»Р°С‚РЅРѕ';

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
                throw new Error('РћС€РёР±РєР° СЃРµС‚Рё');
            }
            return response.json();
        })
        .then(data => {
            // РћР±СЂР°Р±РѕС‚РєР° СѓСЃРїРµС€РЅРѕРіРѕ РѕС‚РІРµС‚Р° РѕС‚ СЃРµСЂРІРµСЂР°
            console.log('РћС‚РІРµС‚ РѕС‚ СЃРµСЂРІРµСЂР°:', data);
            console.log('Р”Р°РЅРЅС‹Рµ СѓСЃРїРµС€РЅРѕ РѕС‚РїСЂР°РІР»РµРЅС‹ РЅР° СЃРµСЂРІРµСЂ!');
            let deliverySum = data.data.deliverySum ? data.data.deliverySum + ' в‚ё' : 'Р‘РµСЃРїР»Р°С‚РЅРѕ';

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
            // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє
            console.error('РћС€РёР±РєР°:', error.message);
            alert('РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ РґР°РЅРЅС‹С… РЅР° СЃРµСЂРІРµСЂ!');
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
            draggable: false,  // Р’РєР»СЋС‡Р°РµРј РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ Р»РёСЃС‚Р°РЅРёСЏ РјС‹С€СЊСЋ
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
            swipe: true,      // Р’РєР»СЋС‡Р°РµРј Р»РёСЃС‚Р°РЅРёРµ РЅР° СЃРµРЅСЃРѕСЂРЅС‹С… СЌРєСЂР°РЅР°С…
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
            draggable: true,  // Р’РєР»СЋС‡Р°РµРј РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ Р»РёСЃС‚Р°РЅРёСЏ РјС‹С€СЊСЋ
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
            draggable: true,  // Р’РєР»СЋС‡Р°РµРј РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ Р»РёСЃС‚Р°РЅРёСЏ РјС‹С€СЊСЋ
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
            draggable: true,  // Р’РєР»СЋС‡Р°РµРј РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ Р»РёСЃС‚Р°РЅРёСЏ РјС‹С€СЊСЋ
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
            draggable: true,  // Р’РєР»СЋС‡Р°РµРј РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ Р»РёСЃС‚Р°РЅРёСЏ РјС‹С€СЊСЋ
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
            // РћС‚РїСЂР°РІР»СЏРµРј POST-Р·Р°РїСЂРѕСЃ РЅР° СЃРµСЂРІРµСЂ
            const response = await fetch('/editCabinet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: company ? JSON.stringify({fullName, email, phone, company}) : JSON.stringify({
                    fullName,
                    email,
                    phone
                }) // РћС‚РїСЂР°РІР»СЏРµРј ID С‚РѕРІР°СЂР° РЅР° СЃРµСЂРІРµСЂ РІ С„РѕСЂРјР°С‚Рµ JSON
            });
            if (response.ok) {
                // РћР±СЂР°Р±РѕС‚РєР° СѓСЃРїРµС€РЅРѕРіРѕ РѕС‚РІРµС‚Р° РѕС‚ СЃРµСЂРІРµСЂР°
                $('#fullname').attr('disabled', true);
                $('#email').attr('disabled', true);
                $('#phone').attr('disabled', true);
                if (company) $('#company-name').attr('disabled', true);
                $('.cabinet-buttons').hide();
                $('.edit-profile-btn').show();
                modal.style.display = 'flex';
            } else {
                // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё РѕС‚ СЃРµСЂРІРµСЂР°
                console.error('РћС€РёР±РєР° РїСЂРё СЃРѕС…СЂР°РЅРµРЅРёРё РґР°РЅРЅС‹С…:', response.status);
            }
        } catch (error) {
            // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё СЃРµС‚Рё РёР»Рё РґСЂСѓРіРѕР№ РѕС€РёР±РєРё
            console.error('РћС€РёР±РєР° РїСЂРё СЃРѕС…СЂР°РЅРµРЅРёРё РґР°РЅРЅС‹С…:', error);
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
            // РћС‚РїСЂР°РІР»СЏРµРј POST-Р·Р°РїСЂРѕСЃ РЅР° СЃРµСЂРІРµСЂ
            const response = await fetch('/editRequisites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({dataAddressCompany, dataIin, dataBank, dataKbe, dataBik, dataAccountNumber}) // РћС‚РїСЂР°РІР»СЏРµРј ID С‚РѕРІР°СЂР° РЅР° СЃРµСЂРІРµСЂ РІ С„РѕСЂРјР°С‚Рµ JSON
            });
            if (response.ok) {
                // РћР±СЂР°Р±РѕС‚РєР° СѓСЃРїРµС€РЅРѕРіРѕ РѕС‚РІРµС‚Р° РѕС‚ СЃРµСЂРІРµСЂР°
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
                // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё РѕС‚ СЃРµСЂРІРµСЂР°
                console.error('РћС€РёР±РєР° РїСЂРё СЃРѕС…СЂР°РЅРµРЅРёРё:', response.status);
            }
        } catch (error) {
            // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё СЃРµС‚Рё РёР»Рё РґСЂСѓРіРѕР№ РѕС€РёР±РєРё
            console.error('РћС€РёР±РєР° РїСЂРё СЃРѕС…СЂР°РЅРµРЅРёРё:', error);
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
            // РћС‚РїСЂР°РІР»СЏРµРј POST-Р·Р°РїСЂРѕСЃ РЅР° СЃРµСЂРІРµСЂ
            const response = await fetch('/changePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({oldPassword, newPassword, repeatPassword}) // РћС‚РїСЂР°РІР»СЏРµРј ID С‚РѕРІР°СЂР° РЅР° СЃРµСЂРІРµСЂ РІ С„РѕСЂРјР°С‚Рµ JSON
            });
            if (response.ok) {
                // РћР±СЂР°Р±РѕС‚РєР° СѓСЃРїРµС€РЅРѕРіРѕ РѕС‚РІРµС‚Р° РѕС‚ СЃРµСЂРІРµСЂР°
                console.log('РўРѕРІР°СЂ СѓСЃРїРµС€РЅРѕ РґРѕР±Р°РІР»РµРЅ РІ РёР·Р±СЂР°РЅРЅРѕРµ');
                passwordChangeBlock.style.display = 'none';
                cabinetPasswordButtons.style.display = 'none';
                modal.style.display = 'flex';
            } else {
                // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё РѕС‚ СЃРµСЂРІРµСЂР°
                console.error('РћС€РёР±РєР° РїСЂРё РґРѕР±Р°РІР»РµРЅРёРё С‚РѕРІР°СЂР° РІ РёР·Р±СЂР°РЅРЅРѕРµ:', response.status);
            }
        } catch (error) {
            // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РєРё СЃРµС‚Рё РёР»Рё РґСЂСѓРіРѕР№ РѕС€РёР±РєРё
            console.error('РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ Р·Р°РїСЂРѕСЃР° РЅР° РґРѕР±Р°РІР»РµРЅРёРµ С‚РѕРІР°СЂР° РІ РёР·Р±СЂР°РЅРЅРѕРµ:', error);
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
                    alert('Р’Р°С€ Р·Р°РєР°Р· РѕС„РѕСЂРјР»РµРЅ, РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ РјС‹ СЃ РІР°РјРё СЃРІСЏР¶РµРјСЃСЏ!');
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
