const openModalBtn = document.querySelector("#open-modal");
const closeModalBtn = document.querySelectorAll(".modal__close");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

function openModal(e) {
  backdrop.classList.remove("hidden");
}

closeModalBtn.forEach((e) => {
  e.addEventListener("click", closeModal);
});

function closeModal(e) {
  backdrop.classList.add("hidden");
}

openModalBtn.addEventListener("click", openModal);
backdrop.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => e.stopPropagation());
