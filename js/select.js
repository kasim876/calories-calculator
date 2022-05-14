const select = document.querySelector(".select");
const selectHeader = document.querySelector(".select__header");
const selectCurrent = document.querySelector(".select__current")

selectHeader.addEventListener("click", () => {
  select.classList.toggle("is-active");
})

window.addEventListener("click", event => {
  if (event.target.classList.contains("select__item")) {
    selectCurrent.innerHTML = event.target.innerHTML;
    selectCurrent.dataset.value = event.target.dataset.value;
    select.classList.toggle("is-active");
  }
})