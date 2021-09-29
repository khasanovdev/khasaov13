const person = document.querySelector(".person"),
	listlar = document.querySelector(".listlar");

person.addEventListener("click", () => {
	listlar.classList.toggle("d-none");
});
