/* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст 
щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
 */

const inputEl = document.querySelector("#validation-input");
const valueLengthEl = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("input", onInput);

function onInput(event) {
  // console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === valueLengthEl) {
    console.log("Symbols are 6.");
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    console.log(
      `Please enter 6 symbols. Right now are ${event.currentTarget.value.length} symbols.`
    );
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
