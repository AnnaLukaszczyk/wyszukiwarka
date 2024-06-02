const input = document.querySelector(".search");
const listItems = document.querySelectorAll(".list-item");

const searchEngine = (e) => {
	const text = e.target.value.toLowerCase();

	listItems.forEach(listItem => {
		if (listItem.textContent.indexOf(text) !== -1) {
			listItem.style.display = "block";
		} else {
			listItem.style.display = "none";
		}
	});
};

input.addEventListener("keyup", searchEngine);
