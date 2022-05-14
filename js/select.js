const select = document.querySelector(".select");
const selectHeader = document.querySelector(".select__header");
const selectCurrent = document.querySelector(".select__current");
const selectBody = document.querySelector(".select__body");

selectHeader.addEventListener("click", () => {
  select.classList.toggle("is-active");
})

selectBody.addEventListener("click", event => {
  if (event.target.classList.contains("select__item")) {
    selectCurrent.innerHTML = event.target.innerHTML;
    selectCurrent.dataset.value = event.target.dataset.value;
    select.classList.toggle("is-active");
  }
})