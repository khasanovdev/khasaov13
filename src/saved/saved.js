window.addEventListener("DOMContentLoaded", () => {
	const btn = document.querySelector(".delete"),
		emptyContent = document.querySelector(".emptyContent"),
		savedContent = document.querySelector(".savedContent");

	btn.addEventListener("click", () => {
		console.log(1);
		emptyContent.classList.toggle("d-none");
		savedContent.classList.toggle("d-none");
	});
});
