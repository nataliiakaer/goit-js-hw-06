/* Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
 */

const decrementButtonEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtonEl = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("#counter #value");

let countEl = 0;

decrementButtonEl.addEventListener("click", onDecrementButtonClick);
incrementButtonEl.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  countEl -= 1;
  valueEl.textContent = countEl;
  console.log(`Value - 1 = ${countEl}`);
}

function onIncrementButtonClick() {
  countEl += 1;
  valueEl.textContent = countEl;
  console.log(`Value + 1 = ${countEl}`);
}
