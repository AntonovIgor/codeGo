const clearNojs = () => {
  clearNojsLessons();
  clearNojsReviews();
};

const clearNojsLessons = () => {
  const lessonItem = document.body.querySelectorAll(`.lessons__item`);

  if (lessonItem.length) {
    Array.prototype.forEach.call(lessonItem, ((item) => {
      const description = item.querySelector(`.lessons__description`);
      description.classList.remove(`lessons__description--show`);

      const btn = item.querySelector(`.lessons__btn`);
      btn.classList.remove(`btn--nojs`);
    }));
  }
};

const clearNojsReviews = () => {
  const reviews = document.querySelector(`.reviews`);
  if (reviews) {
    reviews.classList.remove(`reviews--show`);

    const btn = reviews.querySelector(`.btn--nojs`);
    btn.classList.remove(`btn--nojs`);
  }
};


export default clearNojs();
