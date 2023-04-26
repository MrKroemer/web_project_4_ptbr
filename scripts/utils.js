import { Card } from "./Card.js";

const checkEscape = (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
};

const checkOverlay = (evt) => {
  if (evt.target.classList.contains("popup__overlay")) {
    closePopup();
  }
};

const closePopup = () => {
  const openedPopup = document.querySelector(".popup__active");

  if (openedPopup) {
    document.removeEventListener("keydown", checkEscape);
    document.removeEventListener("click", checkOverlay);
    openedPopup.classList.remove("popup__active");
  }
};

const openPopup = (popup) => {
  popup.classList.add("popup__active");
  document.addEventListener("keydown", checkEscape);
  document.addEventListener("click", checkOverlay);
};

const profile = document.querySelector(".profile");
const profileDescription = document.querySelector(".profile__description");
const editButton = document.querySelector(".profile__edit-button");

const profileForm = document.querySelector("#profile-form");
const profileClose = profileForm.querySelector(".popup__close");

const getProfileDescription = () => {
  const description = {
    profileName: profileDescription.querySelector(".profile__name"),
    profileAbout: profileDescription.querySelector(".profile__about"),
    inputName: profileForm.querySelector("#name-input"),
    inputAbout: profileForm.querySelector("#about-input"),
  };

  return description;
};

const openProfileForm = (evt) => {
  const getProfile = getProfileDescription();

  getProfile.inputName.value = getProfile.profileName.textContent;
  getProfile.inputAbout.value = getProfile.inputAbout.textContent;
  openPopup(profileForm);
};

const handleFormSubmit = (evt) => {
  evt.preventDefault();
  const getProfile = getProfileDescription();

  getProfile.profileName.textContent = getProfile.inputName.value;
  getProfile.profileAbout.textContent = getProfile.inputAbout.value;
  closePopup();
};

editButton.addEventListener("click", openProfileForm);
profileClose.addEventListener("click", closePopup);
profileForm.addEventListener("submit", handleFormSubmit);

const cards = document.querySelector(".cards");
const addButton = document.querySelector(".profile__add-button");
const form = document.querySelector("#profile-form");
const formCloseButton = form.querySelector(".popup__close");

const zoom = document.querySelector("#image-zoom");
const zoomSpace = zoom.querySelector(".popup__zoom");
const zoomCloseButton = zoomSpace.querySelector(".popup__close");

const openForm = (evt) => {
  evt.preventDefault();
  openPopup(form);
};

const createCard = (imageName, imageUrl) => {
  const card = new Card(imageName, imageUrl, "#card");
  const cardElement = card.createCard();
  cards.prepend(cardElement);
};

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();

  const cardTitle = form.querySelector("#title-input").value;
  const cardUrl = form.querySelector("#image-link-input").value;

  createCard(cardTitle, cardUrl);

  form.querySelector("#title-input").value = "";
  form.querySelector("#image-link-input").value = "";

  closePopup();
};

addButton.addEventListener('click', openForm);
formCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', handleCardFormSubmit);
zoomCloseButton.addEventListener('click', closePopup);

export {createCard, openPopup}