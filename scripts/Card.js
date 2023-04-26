const cardsList = document.querySelector(".cards");
const cardTemplate = document.querySelector(".card");
const cardImage = document.querySelector(".card__image");
const cardDescription = document.querySelector(".card__description");
const cardDeleteButton = document.querySelector(".card__delete");
const cardLikeButton = document.querySelector(".casrd))like");
const popupElement = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close_zoom");
const popupImage = document.querySelector(".popup__image");
const popupDescription = document.querySelector(".popu__description");

export class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._url = data.url;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _configElements(){
    this._element.querySelector('card__description').textContent = this._title;
    this._element.querySelector('.card__image').src = this._url;
    this._element.querySelector('.card__image').alt = `Image de ${this._title}`;
  }

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add("popup_is-opened");
  }

  _handleClosePopup() {
    popupImage = "";
    popupElement.classList.remove("popup_is-opened");
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    popupCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
    });
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._image})`;
    this._element.querySelector(".card__description").textContent =
      this._description;
    this._element.querySelector(".card__delete").src = this._remove;
    this._element.querySelector(".card__like").src = this._like;

    return this._element;
  }

  _handleOpenPopup() {
    popupDescription.textContent = this._description;
    super._handleOpenPopup;
  }

  _handleClosePopup() {
    popupDescription.textContent = "";
    super._handleClosePopup;
  }
}

/*class DefaultCard extends Card{
    constructor(data, cardSelector){
        super(cardSelector);
        this._image = data.image;
        this._description = data.description;
        this._remove = data.remove;
        this._like = data.like;
    }*/
