
const checkEscape = (evt) => {
    if (evt.key == "Escape") {
      closePopup();
    }
  };
  
  const checkOverlay = (evt, popup) => {
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
  const profileInfo = profile.querySelector(".profile__description");
  const editButton = profileInfo.querySelector(".profile__edit-button");
  
  
  const profileForm = document.querySelector("#profile-form");
  const profileCloseButton = profileForm.querySelector(".popup__close");
  
  const getProfileInfo = () => {
    let description = {
      profileName: profileInfo.querySelector(".profile__name"),
      profileAbout: profileInfo.querySelector(".profile__about"),
      inputName: profileForm.querySelector("#name-input"),
      inputAbout: profileForm.querySelector("#about-input"),
    };
    return description;
  };
  
  const openProfileForm = (evt) => {
    description = getProfileInfo();
  
    description.inputName.value = description.profileName.textContent;
    description.inputAbout.value = description.profileAbout.textContent;
  
    openPopup(profileForm);
  };
  
  const handleProfileFormSubmit = (evt) => {
    evt.preventDefault();
    description = getProfileInfo();
  
    description.profileName.textContent = description.inputName.value;
    description.profileAbout.textContent = description.inputAbout.value;
  
    closePopup();
  };
  
  
  editButton.addEventListener("click", openProfileForm);
  profileCloseButton.addEventListener("click", closePopup);
  profileForm.addEventListener("submit", handleProfileFormSubmit);
  
  const initialCards = [
    {
      name: "Vale de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    },
    {
      name: "Montanhas Carecas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    },
    {
      name: "Parque Nacional da Vanoise ",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    },
  ];
  
  
  const cardsPlace = document.querySelector(".cards");
  const addButton = profile.querySelector(".profile__add-button");
  const cardForm = document.querySelector("#card-form");
  const cardCloseButton = cardForm.querySelector(".popup__close");
  
  const zoom = document.querySelector("#image-zoom");
  const zoomSpace = zoom.querySelector(".popup__zoom");
  const zoomImage = zoomSpace.querySelector(".popup__image");
  const zoomDescription = zoomSpace.querySelector(".popup__description");
  const zoomCloseButton = zoomSpace.querySelector(".popup__close");
  
  
  const createCard = (name, link) => {
    const cardTemplate = document.querySelector("#card").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  
    cardElement.querySelector(".card__description").textContent = name;
    cardElement.querySelector(".card__image").src = link;
    cardElement.querySelector(".card__image").alt = "Foto de " + name;
  
    cardElement
      .querySelector(".card__image")
      .addEventListener("click", function (evt) {
        zoomImage.src = evt.target.src;
        zoomImage.alt = evt.target.alt;
        zoomDescription.textContent = evt.target.nextElementSibling.textContent;
  
        openPopup(zoom);
      });
  
    cardElement.querySelector(".card__like")
    .addEventListener("click", (evt) => {
        evt.target.classList.toggle("card__like_clicked");
      });
  
    cardElement.querySelector(".card__delete")
    .addEventListener("click", (evt) => {
        evt.target.parentElement.parentElement.remove(); 
      });
  
    cardsPlace.prepend(cardElement);
  };
  
  const openCardForm = (evt) => {
    evt.preventDefault();
    openPopup(cardForm);
  };
  
  const handleCardFormSubmit = (evt) => {
    evt.preventDefault();
  
   
    const cardTitle = cardForm.querySelector("#title-input").value;
    const cardLink = cardForm.querySelector("#image-link-input").value;
  
    createCard(cardTitle, cardLink);
  
    cardForm.querySelector("#title-input").value = "";
    cardForm.querySelector("#image-link-input").value = "";
  
    closePopup();
  };
  
  initialCards.forEach(function (item) {
    createCard(item.name, item.link);
  });
  
  // clicking buttons
  addButton.addEventListener("click", openCardForm);
  cardCloseButton.addEventListener("click", closePopup);
  cardForm.addEventListener("submit", handleCardFormSubmit);
  zoomCloseButton.addEventListener("click", closePopup);
  