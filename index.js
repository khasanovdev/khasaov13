const searchBtn = document.querySelectorAll(".searchBtn"),
	searchInput = document.querySelector(".searchInput"),
	link = document.querySelectorAll(".link"),
	list = document.querySelectorAll(".list"),
	link2 = document.querySelectorAll(".link2"),
	list2 = document.querySelectorAll(".list2"),
	person = document.querySelector(".person"),
	listlar = document.querySelector(".listlar");

// searchBtn.addEventListener("click", () => {
//     searchInput.classList.toggle("d-none")
// });
searchBtn.forEach((item) => {
	item.addEventListener("click", () => {
		searchInput.classList.toggle("d-none");
	});
});
link.forEach((item) => {
	list.forEach((list) => {
		item.addEventListener("click", () => {
			list.classList.toggle("d-none");
		});
	});
});
link2.forEach((item) => {
	list2.forEach((list) => {
		item.addEventListener("click", () => {
			list.classList.toggle("d-none");
		});
	});
});
person.addEventListener("click", () => {
	listlar.classList.toggle("d-none");
});

