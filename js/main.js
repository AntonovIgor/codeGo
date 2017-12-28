(function () {
'use strict';

var clearNojs = function clearNojs() {
  clearNojsLessons();
  clearNojsReviews();
};

var clearNojsLessons = function clearNojsLessons() {
  var lessonItem = document.body.querySelectorAll(".lessons__item");

  if (lessonItem.length) {
    Array.prototype.forEach.call(lessonItem, function (item) {
      var description = item.querySelector(".lessons__description");
      description.classList.remove("lessons__description--show");

      var btn = item.querySelector(".lessons__btn");
      btn.classList.remove("btn--nojs");
    });
  }
};

var clearNojsReviews = function clearNojsReviews() {
  var reviews = document.querySelector(".reviews");
  if (reviews) {
    reviews.classList.remove("reviews--show");

    var btn = reviews.querySelector(".btn--nojs");
    btn.classList.remove("btn--nojs");
  }
};

clearNojs();

var modal = document.querySelector(".modal");
var modalVideo = void 0;
if (modal) {
  modalVideo = modal.querySelector(".modal__video");
}
var overlay = document.querySelector(".overlay");

var lessonBtnsClickHandler = function lessonBtnsClickHandler(evt) {
  evt.preventDefault();

  var target = evt.target;
  var description = target.parentElement.querySelector(".lessons__description");

  if (description.classList.contains("lessons__description--show")) {
    description.classList.remove("lessons__description--show");
    target.textContent = "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E";
    target.style.marginTop = "15px";
    return;
  }
  description.classList.add("lessons__description--show");
  target.textContent = "\u0421\u043A\u0440\u044B\u0442\u044C";
  target.style.marginTop = "50px";
};

var reviewsBtnClickHandler = function reviewsBtnClickHandler(evt) {
  evt.preventDefault();

  var btn = evt.target;
  var reviews = btn.parentElement;

  if (reviews.classList.contains("reviews--show")) {
    reviews.classList.remove("reviews--show");
    btn.textContent = "\u0411\u043E\u043B\u044C\u0448\u0435 \u043E\u0442\u0437\u044B\u0432\u043E\u0432";
    return;
  }
  reviews.classList.add("reviews--show");
  btn.textContent = "\u041C\u0435\u043D\u044C\u0448\u0435 \u043E\u0442\u0437\u044B\u0432\u043E\u0432";
};

var showModal = function showModal(element) {
  modal.classList.add("modal--show");
  overlay.classList.add("overlay--show");
  modalVideo.src = element.href;
};

var closeModal = function closeModal() {
  modal.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
  modalVideo.src = "";
};

var modalCloseClickHandler = function modalCloseClickHandler(evt) {
  evt.preventDefault();

  closeModal();
};

var videosBtnsClickHandler = function videosBtnsClickHandler(evt) {
  evt.preventDefault();

  showModal(evt.target);
};

var listenBtns = function listenBtns() {
  var lessonBtns = document.querySelectorAll(".lessons__btn");

  if (lessonBtns.length) {
    Array.prototype.forEach.call(lessonBtns, function (btn) {
      btn.addEventListener("click", lessonBtnsClickHandler);
    });
  }

  var reviewsBtn = document.querySelector(".reviews__btn");
  if (reviewsBtn) {
    reviewsBtn.addEventListener("click", reviewsBtnClickHandler);
  }

  var videosBtns = document.querySelectorAll(".videos__btn");
  if (videosBtns.length) {
    Array.prototype.forEach.call(videosBtns, function (btn) {
      btn.addEventListener("click", videosBtnsClickHandler);
    });
  }

  if (modal) {
    var modalClose = modal.querySelector(".modal__close");
    modalClose.addEventListener("click", modalCloseClickHandler);
  }
};

listenBtns();

}());

//# sourceMappingURL=main.js.map
