export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {//селектор кнопки и спрятана и не спрятана
    this.refs = this.getRefs(selector);

    hidden && this.hide();//если hidden true то вызываем hide() - , && - в этом месте как if
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.button.textContent = 'Show more';
  }

  disable() {
    this.refs.button.disabled = true;
    this.refs.button.textContent = 'loading...';

  }

  show() {
    this.refs.button.classList.remove('is-hidden');
  }

  hide() {
    this.refs.button.classList.add('is-hidden');
  }
}
