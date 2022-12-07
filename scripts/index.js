const openPupupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const clousePupupButton = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__heading');
const profileProf = document.querySelector('.profile__text');
const formPopup = document.querySelector('.popup__form');
const inputPopupName = document.querySelector('.popup__input_name');
const inputPopupProf = document.querySelector('.popup__input_profession');
const submitPopup = document.querySelector('.popup__submit');

function openPopup() {
    popup.classList.add('popup_opened');
    inputPopupName.value = profileName.textContent;
    inputPopupProf.value = profileProf.textContent;
}

openPupupButton.addEventListener('click', openPopup);

function clousePopup() {
    popup.classList.remove('popup_opened');
}

clousePupupButton.addEventListener('click', clousePopup);

function save(event) {
    event.preventDefault();
    profileName.textContent = inputPopupName.value;
    profileProf.textContent = inputPopupProf.value;
    clousePopup();
}

formPopup.addEventListener('submit', save);