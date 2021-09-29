"useStrict";
window.addEventListener("DOMContentLoaded", () => {
	const catalog = document.querySelector(".catalog"),
		leftPanel = document.querySelector(".leftPanel"),
		catalogLink = document.querySelectorAll(".catalogLink"),
		catalogLinks = document.querySelector(".service"),
		tabContent = document.querySelectorAll(".tabContent"),
		rightPanel = document.querySelector(".rightPanel");

	function hideContent() {
		tabContent.forEach((item) => {
			item.classList.add("d-none");
		});
		catalogLink.forEach((item) => {
			item.classList.remove("catalogLink_active");
		});
	}
	function showContent(i = 0) {
		tabContent[i].classList.remove("d-none");
		catalogLink[i].classList.add("catalogLink_active");
	}
	hideContent();
	showContent();

	catalogLinks.addEventListener("click", (e) => {
		if (e.target && e.target.classList.contains("catalogLink")) {
			catalogLink.forEach((item, i) => {
				if (e.target == item) {
					hideContent();
					showContent(i);
				}
			});
		}
	});

	catalog.addEventListener("click", () => {
		leftPanel.classList.toggle("d-none");
		rightPanel.classList.toggle("d-none");
	});

	const likes = document.querySelectorAll(".like"),
		dislikes = document.querySelectorAll(".dislike"),
		korzinka = document.querySelectorAll(".korzinka"),
		favorit = document.querySelector(".number"),
		favorits = [];

	function addOrRemove(array, value) {
		var ind = array.indexOf(value);

		if (ind === -1) {
			array.push(value);
		} else {
			array.splice(ind, 1);
		}
	}

	function like(index = 0) {
		dislikes[index].classList.toggle("d-none");
	}
	like();
	dislikes[0].classList.add("d-none");
	korzinka.forEach((item, index) => {
		item.addEventListener("click", (e) => {
			console.log(index);
			favorits.push(index)
			console.log(favorits);
			if (e.target && e.target.classList.contains("like")) {
				likes.forEach((item) => {
					if (e.target == item) {
						like(index);
					}
				});
			}
			addOrRemove(favorits, index);
		});
	});

	// CLASS

	// class tabContents {
	// 	constructor(
	// 		caption,
	// 		parentSelector,
	// 		link1,
	// 		link2,
	// 		link3,
	// 		link4,
	// 		link5,
	// 		link6,
	// 		link7,
	// 		link8,
	// 		link9,
	// 		link10,
	// 		link11,
	// 		link12
	// 	) {
	// 		this.caption = caption;
	// 		this.parent = document.querySelector(parentSelector);
	// 		this.link1 = link1;
	// 		this.link2 = link2;
	// 		this.link3 = link3;
	// 		this.link4 = link4;
	// 		this.link5 = link5;
	// 		this.link6 = link6;
	// 		this.link7 = link7;
	// 		this.link8 = link8;
	// 		this.link9 = link9;
	// 		this.link10 = link10;
	// 		this.link11 = link11;
	// 		this.link12 = link12;
	// 	}
	// 	render() {
	// 		const element = document.createElement("div");
	// 		element.classList.add("tabContent d-none");

	// 		element.innerHTML = `
	// 		<h4>${this.caption}</h4>
	// 		<div class="row mt-5">
	// 			<div class="col-md-4">
	// 				<ul>
	// 					<li><a href="#">${this.link1}</a></li>
	// 					<li><a href="#">${this.link2}</a></li>
	// 					<li><a href="#">${this.link3}</a></li>
	// 					<li><a href="#">${this.link4}</a></li>
	// 				</ul>
	// 			</div>
	// 			<div class="col-md-4">
	// 				<ul>
	// 					<li><a href="#">${this.link5}</a></li>
	// 					<li><a href="#">${this.link6}</a></li>
	// 					<li><a href="#">${this.link7}</a></li>
	// 					<li><a href="#">${this.link8}</a></li>
	// 				</ul>
	// 			</div>
	// 			<div class="col-md-4">
	// 				<ul>
	// 					<li><a href="#">${this.link9}</a></li>
	// 					<li><a href="#">${this.link10}</a></li>
	// 					<li><a href="#">${this.link11}</a></li>
	// 					<li><a href="#">${this.link12}</a></li>
	// 				</ul>
	// 			</div>
	// 		</div>
	// 		`;
	// 		this.parent.append(element);
	// 	}
	// }

	// new tabContents(
	// 	"Электроника 1",
	// 	".rightPanel ",
	// 	"Telefonlar",
	// 	"Audiotexnika",
	// 	"Iqlim qurilmalari",
	// 	"Kompyuterlar",
	// 	"O’yin va o’yin mahsulotlari",
	// 	"Yakka tartibdagi parvarish",
	// 	"Foto/ video",
	// 	"Uy uchun texnika",
	// 	"Aksessuarlar va komplekt jihozlar",
	// 	"Tv/videotexnika",
	// 	"Oshxona uchun texxnika",
	// 	"Boshqa elektronika"
	// ).render();
});
