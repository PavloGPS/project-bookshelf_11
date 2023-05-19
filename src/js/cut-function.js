function cropDescription(string) {
  const mobileBreakPoint = 320; // Порігове значення ширини viewport для мобільного пристрою
  const tabletBreakPoint = 768; // Порігове значення ширини viewport для планшета
  const desktopBreakPoint = 1200; // Порігове значення ширини viewport для настільного комп'ютера
  
  let n1; // Кількість символів, які потрібно повернути

  if (window.innerWidth <= mobileBreakPoint) {
    n1 = 25;// тут треба реальну кількість символів вказувати , порахувати по макету для мобілка
  } else if (window.innerWidth <= tabletBreakPoint) {
    n1 = 17;// тут треба реальну кількість символів вказувати , порахувати по макету для таблетка
  } else if (window.innerWidth <= desktopBreakPoint) {
    n1 = 18;// тут треба реальну кількість символів вказувати , порахувати по макету для десктоп
  }

  if (string.length > n1) {
    return string.slice(0, n1) + '...';
  } else {
    return string;
  }
}

const description = "Це є опис";
const croppedDescription = cropDescription(description);
console.log(croppedDescription); // Виведе "Це є опис"

// Приклад для мобільного пристрою з шириною viewport 320px
const longDescriptionMobile = "Це є довгий опис, який потрібно обрізати для мобільного пристрою";
const croppedLongDescriptionMobile = cropDescription(longDescriptionMobile);
console.log(croppedLongDescriptionMobile); // Виведе "Це є довгий..."

// Приклад для планшета з шириною viewport 768px
const longDescriptionTablet = "Це є довгий опис, який потрібно обрізати для планшета";
const croppedLongDescriptionTablet = cropDescription(longDescriptionTablet);
console.log(croppedLongDescription);

export { cropDescription };