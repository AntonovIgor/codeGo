const pageHeader = document.querySelector(`.page-header`);
const mainNav = pageHeader.querySelector(`.main-nav`);

const modal = document.querySelector(`.modal`);
let modalVideo;
if (modal) {
  modalVideo = modal.querySelector(`.modal__video`);
}
const overlay = document.querySelector(`.overlay`);


const listenBtns = () => {
  const lessonBtns = document.querySelectorAll(`.lessons__btn`);
  if (lessonBtns.length) {
    Array.prototype.forEach.call(lessonBtns, ((btn) => {
      btn.addEventListener(`click`, lessonBtnsClickHandler);
    }));
  }

  const reviewsBtn = document.querySelector(`.reviews__btn`);
  if (reviewsBtn) {
    reviewsBtn.addEventListener(`click`, reviewsBtnClickHandler);
  }

  const videosBtns = document.querySelectorAll(`.videos__btn`);
  if (videosBtns.length) {
    Array.prototype.forEach.call(videosBtns, ((btn) => {
      btn.addEventListener(`click`, videosBtnsClickHandler);
    }));
  }

  if (modal) {
    const modalClose = modal.querySelector(`.modal__close`);
    modalClose.addEventListener(`click`, modalCloseClickHandler);
  }

  const toggle = pageHeader.querySelector(`.page-header__toggle`);
  toggle.addEventListener(`click`, toggleClickHandler);
};


const toggleClickHandler = (evt) => {
  evt.preventDefault();

  if (mainNav.classList.contains(`main-nav--show`)) {
    mainNav.classList.remove(`main-nav--show`);
    return;
  }
  mainNav.classList.add(`main-nav--show`);
};


const lessonBtnsClickHandler = (evt) => {
  evt.preventDefault();

  const target = evt.target;
  const description = target.parentElement.querySelector(`.lessons__description`);

  if (description.classList.contains(`lessons__description--show`)) {
    description.classList.remove(`lessons__description--show`);
    target.textContent = `Подробно`;
    target.style.marginTop = `15px`;
    return;
  }
  description.classList.add(`lessons__description--show`);
  target.textContent = `Скрыть`;
  target.style.marginTop = `50px`;
};


const reviewsBtnClickHandler = (evt) => {
  evt.preventDefault();

  const btn = evt.target;
  const reviews = btn.parentElement;

  if (reviews.classList.contains(`reviews--show`)) {
    reviews.classList.remove(`reviews--show`);
    btn.textContent = `Больше отзывов`;
    return;
  }
  reviews.classList.add(`reviews--show`);
  btn.textContent = `Меньше отзывов`;
};


const showModal = (element) => {
  modal.classList.add(`modal--show`);
  overlay.classList.add(`overlay--show`);
  modalVideo.src = element.href;
};


const closeModal = () => {
  modal.classList.remove(`modal--show`);
  overlay.classList.remove(`overlay--show`);
  modalVideo.src = ``;
};


const modalCloseClickHandler = (evt) => {
  evt.preventDefault();

  closeModal();
};


const videosBtnsClickHandler = (evt) => {
  evt.preventDefault();

  showModal(evt.target);
};


export default listenBtns();
