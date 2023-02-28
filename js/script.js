function startModal(classModal) {
  const modal = document.querySelector('.popup');
  modal.classList.add('display');
  modal.addEventListener("click", function (evt) {
    if (
      evt.target.id == classModal ||
      evt.target.id == 'save' ||
      evt.target.className == 'popup__close'
    ) {
      modal.classList.remove('display');
    }
  });
}
 
const liked = document.querySelector('.cards__like');
liked.addEventListener('click', function(){
  liked.style.backgroundColor = "#000";
});


const button = document.querySelector('.profile__edit');
button.addEventListener('click', function () {
  startModal('popup');
});

const formElement = document.querySelector('.popup__form');

function editProfile(evt) {
  evt.preventDefault();

  const title = document.querySelector('.profile__author');
  const subtitle = document.querySelector('.profile__subtitle');
  const nameInput = document.querySelector('.popup__input_name');
  const aboutInput = document.querySelector('.popup__input_about');



  const nameValue = nameInput.value;
  const aboutValue = aboutInput.value;

  title.textContent = nameValue;
  subtitle.textContent =  aboutValue;
}


formElement.addEventListener('submit', editProfile);
