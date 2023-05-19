export class Loader {
  constructor() {
    this.loaderEl = document.querySelector('.lds-spinner');
  }
 
  // метод loader.show() показує лоадер
  show() {
    this.loaderEl = 'block';
  }

  // метод loader.hide() приховує лоадер
  hide() {
    this.loaderEl = 'none';
  }
}
