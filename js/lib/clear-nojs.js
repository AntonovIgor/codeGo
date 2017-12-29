const clearNojs = () => {
  clearMojsPageHeader();
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


const clearMojsPageHeader = () => {
  const pageHeader = document.querySelector(`.page-header`);
  pageHeader.classList.remove(`page-header--nojs`);

  const wrap = pageHeader.querySelector(`.page-header__wrap`);
  wrap.classList.remove(`page-header__wrap--nojs`);

  const mainNav = wrap.querySelector(`.main-nav`);
  mainNav.classList.remove(`main-nav--show`);

  const toggle = pageHeader.querySelector(`.page-header__toggle`);
  toggle.classList.remove(`page-header__toggle--nojs`);
};


export default clearNojs();
