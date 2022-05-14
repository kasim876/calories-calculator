const ageInput = document.querySelector(".input-age"),
      weightInput = document.querySelector(".input-weight"),
      heightInput = document.querySelector(".input-height");

const btn = document.querySelector(".calculator-form__btn");

const resultValueNormal = document.querySelector(".results__value_normal"),
      resultValueThin = document.querySelector(".results__value_thin"),
      resultValueFat = document.querySelector(".results__value_fat");

let gender;

let calories;

window.addEventListener("click", event => {
  if (event.target.classList.contains("input-gender")) {
    gender = event.target.value;
  }
})

btn.addEventListener("click", () => {
  if(gender == "man") {
    calories = (10 * weightInput.value + 6.25 * heightInput.value - 5 * ageInput.value + 5) * selectCurrent.dataset.value;
  } else if (gender == "woman") {
    calories = (10 * weightInput.value + 6.25 * heightInput.value - 5 * ageInput.value - 161) * selectCurrent.dataset.value;
  } else {
    alert("Ошибка, укажите пол!")
    return
  }

  resultValueNormal.innerHTML = `<span>${Math.round(calories)}</span> ккал`
  resultValueThin.innerHTML = `<span>${Math.round(calories - calories / 100 * 20)}</span> ккал`
  resultValueFat.innerHTML = `<span>${Math.round(calories + calories / 100 * 20)}</span> ккал`
})